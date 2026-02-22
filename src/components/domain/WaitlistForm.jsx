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
  monthly_order_volume: z.enum(['<100', '100-500', '500-2000', '2000+'], {
    required_error: 'Select your monthly order volume.',
  }),
  primary_market: z.string().trim().min(2, 'Enter your primary market.'),
  payment_failure_rate: z.enum(['<1%', '1-3%', '3-7%', '>7%'], {
    required_error: 'Select your current payment failure/dispute rate.',
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
      monthly_order_volume: '100-500',
      primary_market: 'Nigeria',
      payment_failure_rate: '1-3%',
      hp: '',
    },
  })

  const onSubmit = async (values) => {
    const payload = buildPayload({
      intent,
      email: values.email,
      business_name: values.business_name,
      channel_interest: values.channel_interest,
      monthly_order_volume: values.monthly_order_volume,
      primary_market: values.primary_market,
      payment_failure_rate: values.payment_failure_rate,
    })

    const [result] = await Promise.all([submitWaitlist(payload, values.hp), delay(600)])

    if (result.mode === 'spam_ignored') {
      reset()
      return
    }

    showToast({
      type: 'success',
      message: intent === 'demo' ? 'Qualified demo request received. We will respond within 72 hours.' : 'Application received. We will review and respond within 72 hours.',
    })

    if (result.mode === 'local-fallback') {
      showToast({ type: 'warning', message: 'Saved locally. Network issue sending to waitlist.' })
    }

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-border bg-card-bg p-6 shadow-sm">
      <p className="text-xs text-text-muted">Pilot slots are limited. We prioritize teams with active weekly order volume.</p>

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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${intent}-channel-interest`} className="text-sm font-medium text-text">
            Primary channel
          </label>
          <select id={`${intent}-channel-interest`} className={fieldClassName} {...register('channel_interest')}>
            <option value="telegram">Telegram</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor={`${intent}-monthly-volume`} className="text-sm font-medium text-text">
            Monthly order volume
          </label>
          <select id={`${intent}-monthly-volume`} className={fieldClassName} {...register('monthly_order_volume')}>
            <option value="<100">&lt; 100</option>
            <option value="100-500">100 - 500</option>
            <option value="500-2000">500 - 2,000</option>
            <option value="2000+">2,000+</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={`${intent}-primary-market`} className="text-sm font-medium text-text">
            Primary market
          </label>
          <input id={`${intent}-primary-market`} type="text" className={fieldClassName} {...register('primary_market')} />
          {errors.primary_market ? <p className="text-sm text-red-500">{errors.primary_market.message}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor={`${intent}-payment-failure`} className="text-sm font-medium text-text">
            Payment failure/dispute rate
          </label>
          <select id={`${intent}-payment-failure`} className={fieldClassName} {...register('payment_failure_rate')}>
            <option value="<1%">&lt; 1%</option>
            <option value="1-3%">1% - 3%</option>
            <option value="3-7%">3% - 7%</option>
            <option value=">7%">&gt; 7%</option>
          </select>
        </div>
      </div>

      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('hp')} />

      <Button type="submit" className="w-full">
        {isSubmitting ? 'Submitting...' : intent === 'demo' ? 'Request qualified demo' : 'Apply for waitlist'}
      </Button>
    </form>
  )
}
