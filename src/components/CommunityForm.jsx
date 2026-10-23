import React, { useState } from 'react'

export default function CommunityForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    interest: 'edibles',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.fullName && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="community" className="py-24 bg-kraft relative border-t border-forest/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-kraft-light/90 rounded-3xl p-8 sm:p-12 border border-forest/15 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
              Selective Membership Gatekeeper
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal mt-2">
              Request Addition to Community
            </h2>
            <div className="w-12 h-0.5 bg-terracotta mx-auto my-4"></div>
            <p className="font-sans text-xs sm:text-sm text-forest/80 leading-relaxed font-light">
              To preserve our community calm, access is provided on an invite-only basis. Submitting an application signs you up for our bi-weekly newsletter and priority invitations.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-6 bg-kraft rounded-2xl border border-forest/10 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-forest text-kraft mx-auto flex items-center justify-center mb-4 text-xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-widest text-forest font-medium">
                Application Received
              </h3>
              <p className="font-sans text-xs text-forest/80 max-w-md mx-auto mt-2 leading-relaxed font-light">
                Thank you, <span className="font-semibold text-forest">{formData.fullName}</span>. Our membership team will review your application and send your private invite link via email shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', city: '', interest: 'edibles', message: '' }) }}
                className="mt-6 text-[11px] uppercase tracking-widest text-terracotta hover:underline font-medium"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anirudh Yadav"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-xs text-forest focus:outline-none focus:border-terracotta transition-colors placeholder:text-forest/40"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. anirudh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-xs text-forest focus:outline-none focus:border-terracotta transition-colors placeholder:text-forest/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest font-medium mb-2">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. New Delhi / Jaipur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-xs text-forest focus:outline-none focus:border-terracotta transition-colors placeholder:text-forest/40"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest font-medium mb-2">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-xs text-forest focus:outline-none focus:border-terracotta transition-colors"
                  >
                    <option value="edibles">Organic Edibles (Ghee & Pulses)</option>
                    <option value="experiences">Digital Detox & Weekend Trips</option>
                    <option value="stays">Country Retreat Stays</option>
                    <option value="all">All Sthir Life Verticals</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-forest font-medium mb-2">
                  What draws you to slow living? (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a short note about your lifestyle goals or curiosity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-kraft border border-forest/20 text-xs text-forest focus:outline-none focus:border-terracotta transition-colors placeholder:text-forest/40"
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-forest text-kraft text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-sm hover:shadow"
                >
                  Apply for Membership
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
