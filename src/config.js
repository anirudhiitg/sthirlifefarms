/*
 * Site-wide settings. Replace the placeholders below before going live.
 */

// WhatsApp business number: country code + number, digits only (e.g. '919876543210').
export const WHATSAPP_NUMBER = '910000000000' // PLACEHOLDER

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/*
 * Google Form that receives invite requests.
 *
 * To connect it:
 *   1. Create a Google Form with these questions: Full name, Email, City,
 *      What interests you most (multiple choice), A note about you, Newsletter (checkbox).
 *      For the multiple-choice question, use exactly the option labels in INTEREST_OPTIONS below.
 *   2. Open the form's preview, copy its URL and change the ending from
 *      /viewform to /formResponse. That is `actionUrl`.
 *   3. Find each question's entry ID: in the form menu choose "Get pre-filled link",
 *      fill every answer, click "Get link", and read the `entry.123456789` keys in the URL.
 */
export const GOOGLE_FORM = {
  actionUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', // PLACEHOLDER
  fields: {
    fullName: 'entry.1000000001', // PLACEHOLDER
    email: 'entry.1000000002', // PLACEHOLDER
    city: 'entry.1000000003', // PLACEHOLDER
    interest: 'entry.1000000004', // PLACEHOLDER
    message: 'entry.1000000005', // PLACEHOLDER
    newsletter: 'entry.1000000006', // PLACEHOLDER
  },
}

export const isGoogleFormConfigured = !GOOGLE_FORM.actionUrl.includes('YOUR_FORM_ID')

export const INTEREST_OPTIONS = [
  'Priority Harvest Access',
  'Member-Only Gatherings',
  'Stays & Retreats',
  'All of it',
]
