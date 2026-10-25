import React, { useState } from 'react'
import { GOOGLE_FORM, INTEREST_OPTIONS, isGoogleFormConfigured, whatsappLink } from '../config'

const emptyForm = {
  fullName: '',
  email: '',
  city: '',
  interest: INTEREST_OPTIONS[INTEREST_OPTIONS.length - 1],
  message: '',
  newsletter: false,
}

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-sm text-forest focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-colors placeholder:text-forest/50'
const labelClass = 'block text-xs uppercase tracking-widest text-forest-dark font-semibold mb-2'

export default function CommunityForm() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isGoogleFormConfigured) {
      console.warn('Invite form is not connected yet: set GOOGLE_FORM in src/config.js.')
      setStatus('error')
      return
    }

    const { fields } = GOOGLE_FORM
    const body = new URLSearchParams({
      [fields.fullName]: formData.fullName,
      [fields.email]: formData.email,
      [fields.city]: formData.city,
      [fields.interest]: formData.interest,
      [fields.message]: formData.message,
    })
    if (formData.newsletter) body.append(fields.newsletter, 'Yes')

    setStatus('sending')
    try {
      // Google Forms does not allow cross-origin reads, so the response is opaque;
      // a resolved request means the submission was delivered.
      await fetch(GOOGLE_FORM.actionUrl, { method: 'POST', mode: 'no-cors', body })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="community" className="py-24 bg-kraft relative border-t border-forest/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-kraft-light rounded-3xl p-8 sm:p-12 border border-forest/15 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
              Invite Only
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
              Request <span className="italic text-terracotta-dark">an Invite</span>
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
            <p className="font-sans text-base text-forest leading-relaxed">
              We welcome new members slowly, to keep the community calm and personal. Share a little about yourself and we will be in touch.
            </p>
          </div>

          {status === 'sent' ? (
            <div className="text-center py-12 px-6 bg-kraft rounded-2xl border border-forest/10" role="status">
              <div className="w-12 h-12 rounded-full bg-forest text-kraft mx-auto flex items-center justify-center mb-4 text-xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-widest text-forest-dark font-medium">
                Request Received
              </h3>
              <p className="font-sans text-sm text-forest/90 max-w-md mx-auto mt-3 leading-relaxed">
                Thank you, <span className="font-semibold text-forest-dark">{formData.fullName}</span>. We read every request personally and will reach out to you at {formData.email}.
              </p>
              <button
                onClick={() => { setStatus('idle'); setFormData(emptyForm) }}
                className="mt-6 text-xs uppercase tracking-widest text-terracotta-dark hover:underline font-semibold"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                  <input id="fullName" type="text" required placeholder="Your name" value={formData.fullName} onChange={update('fullName')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input id="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={update('email')} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className={labelClass}>City</label>
                  <input id="city" type="text" placeholder="e.g. New Delhi / Jaipur" value={formData.city} onChange={update('city')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="interest" className={labelClass}>What interests you most?</label>
                  <select id="interest" value={formData.interest} onChange={update('interest')} className={inputClass}>
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>What draws you to slow living? (Optional)</label>
                <textarea id="message" rows={3} placeholder="A few lines about you and what you are looking for..." value={formData.message} onChange={update('message')} className={inputClass}></textarea>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.newsletter} onChange={update('newsletter')} className="mt-1 w-4 h-4 accent-forest" />
                <span className="font-sans text-sm text-forest/90">
                  Also send me the occasional letter from the farm (harvest notes and gatherings).
                </span>
              </label>

              {status === 'error' && (
                <p className="text-center font-sans text-sm text-terracotta-dark bg-terracotta/10 rounded-xl px-4 py-3" role="alert">
                  Sorry, we couldn’t send your request just now. Please try again, or{' '}
                  <a
                    href={whatsappLink('Hello Sthir Life Farms, I would like to request an invite.')}
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-semibold"
                  >
                    message us on WhatsApp
                  </a>
                  .
                </p>
              )}

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-10 py-4 bg-forest text-kraft text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Request an Invite'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
