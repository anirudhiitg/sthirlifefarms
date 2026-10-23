# Sthir Life Farms - Landing Page & Web Application

*Stay Still. Live Whole.*

Sthir Life Farms is a conscious slow-living and farm-to-table brand anchored in wabi-sabi philosophy, Rajasthan soil farming, traditional Bilona ghee crafting, and mindful living experiences.

---

## 🌿 Brand Overview & Features

- **Wabi-Sabi Aesthetics:** Minimalist design inspired by natural earth tones (`#E8E0D5` Sand, `#2C4637` Forest Green, `#B45F44` Terracotta) and elegant serif typography (*Cormorant Garamond* and *Montserrat*).
- **Core Business Verticals:**
  1. **Sthir Food:** Pure A2 Bilona Ghee, heirloom pulses, organic stone-ground flours & superfoods.
  2. **Sthir Experiences:** Farm visits, digital detox retreats, artisan workshops, and farm-to-table dining.
  3. **Sthir Stays:** Mud-and-lime sustainable cottages designed for slow living.
- **Product Catalog with WhatsApp Integration:** Filterable showcase for handcrafted farm products with direct WhatsApp order inquiry links (`wa.me`).
- **Interactive Image Gallery:** Lightbox modal to inspect farm life, livestock, and traditional crafting methods.
- **Community Gatekeeper Form:** Interactive membership request form for early access and retreat invitations.

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React

---

## 🚀 Getting Started & Local Development

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

### 3. Run Development Server
To launch the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL displayed in the terminal).

---

## 👁️ How to Check the Preview of the Website

### Option 1: Live Preview Server (Port 3000)
To test the production build locally on port 3000:

```bash
# Build the production bundle
npm run build

# Run the preview server on host 0.0.0.0 port 3000
npm run preview -- --host 0.0.0.0 --port 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 🧪 How to Test the Website

### 1. Build Verification Test
Ensure that the production bundle builds without errors:
```bash
npm run build
```

### 2. Interactive Feature Tests
Perform manual testing across key interactive components:

- **Navigation:** Test clicking on links in the top navigation bar (`Philosophy`, `Verticals`, `Craftsmanship`, `Offerings`, `Gallery`, `Community`). Verify smooth scrolling to sections.
- **Product Category Filtering:** Navigate to the **Our Pure Offerings** section and click through filters (`All`, `Ghee & Oils`, `Heirloom Pulses`, `Superfoods`, `Apparel`). Confirm that products filter accurately.
- **WhatsApp Ordering Link:** Click the **Order via WhatsApp** button on any product card. Verify that it opens a `https://wa.me/...` link with a pre-filled order inquiry message.
- **Gallery Lightbox:** Scroll to the **Life on the Farm** gallery and click any image card. Confirm that the full-screen modal opens and can be closed via the `X` button or overlay click.
- **Community Form:** Navigate to the **Join the Sthir Life Circle** section, fill in name, email, city, and interest area, then submit. Verify the green confirmation message appears.
- **Responsive Layout:** Test on mobile (viewport width ≤ 375px) to verify hamburger menu toggle, stacked card layouts, and mobile-friendly touch targets.
