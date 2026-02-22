import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../ui/Button'
import { showToast } from '../ui/toastStore'
import { buildPayload, submitWaitlist } from '../../services/waitlist'

const waitlistSchema = z.object({
  email: z.string().trim().email('Enter a valid email address.'),
  business_name: z.string().optional(),
  channel_interest: z.enum(['telegram', 'whatsapp', 'both'], {
    required_error: 'Select a channel interest.',
  }),
  hp: z.string().optional(),
})

function delay(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

const fieldClassName =
  'w-full rounded-lg border border-border bg-card-bg px-3 py-2.5 text-sm text-text outline-none transition duration-150 ease-out placeholder:text-text-muted/70 focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg'

export default function WaitlistForm({ intent }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: '',
      business_name: '',
      channel_interest: 'both',
      hp: '',
    },
  })

  const onSubmit = async (values) => {
    const payload = buildPayload({
      intent,
      email: values.email,
      business_name: values.business_name,
      channel_interest: values.channel_interest,
    })

    const [result] = await Promise.all([submitWaitlist(payload, values.hp), delay(600)])

    if (result.mode === 'spam_ignored') {
      reset()
      return
    }

    if (intent === 'demo') {
      showToast({ type: 'success', message: "Demo request received. We'll contact you soon." })
    } else {
      showToast({ type: 'success', message: "You're on the list. We'll reach out soon." })
    }

    if (result.mode === 'local-fallback') {
      showToast({ type: 'warning', message: 'Saved locally. Network issue sending to waitlist.' })
    }

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-border bg-card-bg p-6 shadow-sm">
      <div className="space-y-2">
        <label htmlFor={`${intent}-email`} className="text-sm font-medium text-text">
          Work email
        </label>
        <input id={`${intent}-email`} type="email" placeholder="you@company.com" className={fieldClassName} {...register('email')} />
        {errors.email ? <p className="text-sm text-red-500">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-2">
        <label htmlFor={`${intent}-business-name`} className="text-sm font-medium text-text">
          Business name (optional)
        </label>
        <input id={`${intent}-business-name`} type="text" placeholder="Acme Retail" className={fieldClassName} {...register('business_name')} />
      </div>

      <div className="space-y-2">
        <label htmlFor={`${intent}-channel-interest`} className="text-sm font-medium text-text">
          Primary channel
        </label>
        <select id={`${intent}-channel-interest`} className={fieldClassName} {...register('channel_interest')}>
          <option value="telegram">Telegram</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="both">Both</option>
        </select>
        {errors.channel_interest ? <p className="text-sm text-red-500">{errors.channel_interest.message}</p> : null}
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('hp')} />

      <Button type="submit" className="w-full">
        {isSubmitting ? 'Submitting...' : intent === 'demo' ? 'Request demo' : 'Join waitlist'}
      </Button>
    </form>
  )
}
