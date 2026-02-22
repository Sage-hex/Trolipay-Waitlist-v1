const WAITLIST_STORAGE_KEY = 'waitlist_submissions_v1'

export function buildPayload({ intent, email, business_name, channel_interest, monthly_order_volume, primary_market, payment_failure_rate }) {
  return {
    intent,
    email: email.trim().toLowerCase(),
    business_name: business_name?.trim() || '',
    channel_interest,
    monthly_order_volume,
    primary_market: primary_market.trim(),
    payment_failure_rate,
    created_at_iso: new Date().toISOString(),
    user_agent: navigator.userAgent,
    referrer: document.referrer || '',
    page_url: window.location.href,
  }
}

function saveSubmissionLocally(payload) {
  const existing = localStorage.getItem(WAITLIST_STORAGE_KEY)
  const parsed = existing ? JSON.parse(existing) : []
  parsed.push(payload)
  localStorage.setItem(WAITLIST_STORAGE_KEY, JSON.stringify(parsed))
}

export async function submitWaitlist(payload, hpValue) {
  if ((hpValue || '').trim() !== '') {
    return { ok: true, mode: 'spam_ignored' }
  }

  const webAppUrl = import.meta.env.VITE_WAITLIST_WEBAPP_URL

  if (!webAppUrl) {
    saveSubmissionLocally(payload)
    return { ok: true, mode: 'local' }
  }

  const formData = new FormData()
  formData.append('created_at_iso', payload.created_at_iso)
  formData.append('intent', payload.intent)
  formData.append('email', payload.email)
  formData.append('business_name', payload.business_name)
  formData.append('channel_interest', payload.channel_interest)
  formData.append('monthly_order_volume', payload.monthly_order_volume)
  formData.append('primary_market', payload.primary_market)
  formData.append('payment_failure_rate', payload.payment_failure_rate)
  formData.append('user_agent', payload.user_agent)
  formData.append('referrer', payload.referrer)
  formData.append('page_url', payload.page_url)

  try {
    const response = await fetch(webAppUrl, {
      method: 'POST',
      body: formData,
    })

    let responseData = { ok: response.ok }
    try {
      responseData = await response.json()
    } catch {
      // Accept non-JSON responses from Apps Script while still honoring HTTP status.
    }

    if (!response.ok || responseData.ok === false) {
      saveSubmissionLocally(payload)
      return { ok: false, mode: 'local-fallback' }
    }

    return { ok: true, mode: 'sheets' }
  } catch {
    saveSubmissionLocally(payload)
    return { ok: false, mode: 'local-fallback' }
  }
}
