<template>
  <footer class="font-sans" style="background: #20427D; color: #fff;">
    <!-- Main footer grid -->
    <div class="max-w-[1400px] mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Col 1: Logo + headquarters contact info -->
        <div class="flex flex-col gap-5">
          <a href="/" class="no-underline inline-block">
            <img
              src="https://www.bmeters.com/wp-content/themes/bmeters/img/logo-white.svg"
              alt="B METERS metering solutions"
              width="130"
              height="36"
              class="w-auto"
              style="height: 36px;"
            />
          </a>
          <div class="flex flex-col gap-2" style="font-size: 13px;">
            <p style="color: rgba(255,255,255,0.85); line-height: 1.6;">
              B METERS S.R.L.<br />
              Via Friuli, 3<br />
              33050 Gonars (UD) - Italy
            </p>
            <a href="tel:+390432747915" class="no-underline hover:text-white transition-colors" style="color: rgba(255,255,255,0.85);">
              Tel: +39 0432 747915
            </a>
            <a href="mailto:info@bmeters.com" class="no-underline hover:text-white transition-colors" style="color: rgba(255,255,255,0.85);">
              info@bmeters.com
            </a>
          </div>
          <!-- Social icons -->
          <div class="flex items-center gap-3 mt-1">
            <a
              v-for="social in socials"
              :key="social.key"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center rounded-full no-underline transition-opacity hover:opacity-80"
              style="width: 32px; height: 32px; background: rgba(255,255,255,0.15);"
            >
              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" class="fill-current text-white" style="width:16px;height:16px;" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
              </svg>
              <!-- YouTube -->
              <svg v-else-if="social.icon === 'youtube'" class="fill-current text-white" style="width:16px;height:16px;" viewBox="0 0 24 24">
                <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.55 31.55 0 000 12a31.55 31.55 0 00.5 5.81 3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.55 31.55 0 0024 12a31.55 31.55 0 00-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
              </svg>
              <!-- Facebook -->
              <svg v-else-if="social.icon === 'facebook'" class="fill-current text-white" style="width:16px;height:16px;" viewBox="0 0 24 24">
                <path d="M22.68 0h-21.36c-.73 0-1.32.59-1.32 1.32v21.36c0 .73.59 1.32 1.32 1.32h11.5v-9.29h-3.13v-3.62h3.13v-2.67c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24l-1.92.001c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.62h-3.13v9.29h6.12c.73 0 1.32-.59 1.32-1.32v-21.36c0-.73-.59-1.32-1.32-1.32z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Products -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white font-bold uppercase tracking-wider" style="font-size: 13px; letter-spacing: 0.08em;">
            {{ $t('footer.links.products') }}
          </h3>
          <ul class="flex flex-col gap-2 list-none m-0 p-0">
            <li v-for="link in productLinks" :key="link.label">
              <a
                :href="link.href"
                class="no-underline hover:text-white transition-colors"
                style="font-size: 13px; color: rgba(255,255,255,0.8);"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Company links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white font-bold uppercase tracking-wider" style="font-size: 13px; letter-spacing: 0.08em;">
            {{ $t('footer.links.company') }}
          </h3>
          <ul class="flex flex-col gap-2 list-none m-0 p-0">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="no-underline hover:text-white transition-colors"
                style="font-size: 13px; color: rgba(255,255,255,0.8);"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Downloads + Contacts -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white font-bold uppercase tracking-wider" style="font-size: 13px; letter-spacing: 0.08em;">
            Downloads
          </h3>
          <ul class="flex flex-col gap-2 list-none m-0 p-0 mb-4">
            <li v-for="link in downloadLinks" :key="link.label">
              <a
                :href="link.href"
                class="no-underline hover:text-white transition-colors"
                style="font-size: 13px; color: rgba(255,255,255,0.8);"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>

          <h3 class="text-white font-bold uppercase tracking-wider" style="font-size: 13px; letter-spacing: 0.08em;">
            {{ $t('footer.headquarters') }}
          </h3>
          <div class="flex flex-col gap-1.5" style="font-size: 13px; color: rgba(255,255,255,0.8);">
            <span>Commercial Info: <a href="mailto:info@bmeters.com" class="no-underline hover:text-white" style="color: rgba(255,255,255,0.8);">info@bmeters.com</a></span>
            <span>Technical Support: <a href="https://ticket.bmeters.com/hc/en-us" target="_blank" rel="noopener" class="no-underline hover:text-white" style="color: rgba(255,255,255,0.8);">ticket.bmeters.com</a></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top: 1px solid rgba(255,255,255,0.15);">
      <div class="max-w-[1400px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3" style="font-size: 12px; color: rgba(255,255,255,0.65);">
        <span>© {{ currentYear }} B METERS Srl – All rights reserved</span>
        <div class="flex items-center gap-4">
          <a
            v-for="link in legalLinks"
            :key="link.label"
            :href="link.href"
            class="no-underline hover:text-white transition-colors"
            style="color: rgba(255,255,255,0.65);"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/b-meters' },
  { key: 'youtube', label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/bmeters' },
  { key: 'facebook', label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/bmeters' },
]

const productLinks = [
  { label: 'Water Metering', href: '/product-category/water-metering' },
  { label: 'Thermal Energy Metering', href: '/product-category/thermal-energy-metering' },
  { label: 'Remote Reading Systems', href: '/product-category/remote-reading-systems' },
  { label: 'All Products', href: '/products' },
]

const companyLinks = [
  { label: 'Company', href: '/company' },
  { label: 'Manufacturing Process', href: '/company' },
  { label: 'Certifications', href: '/company' },
  { label: 'Why Choose Us', href: '/company' },
  { label: 'News', href: '/news' },
  { label: 'Contacts', href: '/contacts' },
]

const downloadLinks = [
  { label: 'Catalogues', href: '/download' },
  { label: 'Data Sheets', href: '/download' },
  { label: 'Certificates', href: '/download' },
  { label: 'Software', href: '/download' },
  { label: 'FAQ', href: '/faq' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Settings', href: '/cookie-settings' },
  { label: 'Whistleblowing', href: '/whistleblowing' },
]
</script>
