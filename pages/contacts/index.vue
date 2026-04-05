<template>
  <div class="font-sans">
    <!-- Page header with hero image - matching original 550px hero height exactly -->
    <section class="relative w-full overflow-hidden" style="height: 550px;">
      <!-- Hero background: hands connecting puzzle pieces (no overlay like original) -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://www.bmeters.com/wp-content/uploads/2021/07/Why-Choose-Us-2.jpg');"
      />
      <!-- Wave separator at bottom (matching original .onde-bottom style) -->
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style="z-index: 3;">
        <svg class="relative block w-full" style="height: 60px;" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>

    <!-- Breadcrumb + title below hero -->
    <div class="bg-white" style="padding: 12px 84px 0;">
      <div class="max-w-[1400px] mx-auto">
        <nav class="flex items-center gap-1 mb-4" style="font-size: 12px; color: #585858;">
          <NuxtLink to="/" class="no-underline hover:text-[#0C4DA2] transition-colors" style="color: #585858;">Home</NuxtLink>
          <span style="color: #bbb; margin: 0 4px;">›</span>
          <span style="color: #585858;">Contacts</span>
        </nav>
        <h1 style="color: #000; font-size: 48px; font-weight: 700; margin: 0 0 8px; line-height: 1.1;">Contacts</h1>
      </div>
    </div>

    <!-- Headquarters section -->
    <section class="bg-white py-12">
      <div class="max-w-[1400px] mx-auto px-4">
        <h2 class="font-bold mb-8" style="color: #20427D; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
          Headquarters
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          <!-- Italy HQ card -->
          <div class="p-6" style="border: 1px solid #e5e7eb; background: #f9fbff;">
            <div class="flex items-start gap-3 mb-5">
              <div
                class="flex items-center justify-center shrink-0"
                style="width: 40px; height: 40px; background: #20427D;"
              >
                <svg class="text-white" style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold" style="color: #20427D; font-size: 15px;">Italy (HQ)</h3>
                <span style="color: #585858; font-size: 12px;">B METERS S.R.L.</span>
              </div>
            </div>
            <div class="flex flex-col gap-2.5" style="font-size: 13px; color: #585858; line-height: 1.65;">
              <p>Via Friuli, 3<br />33050 Gonars (UD) - ITALY</p>
              <div>
                <a href="tel:+390432747915" class="flex items-center gap-1.5 no-underline hover:text-[#20427D] transition-colors" style="color: #585858;">
                  <svg class="shrink-0" style="width: 13px; height: 13px;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +39 0432 747915
                </a>
                <span class="block mt-1" style="color: #585858;">Fax: +39 0432 747957</span>
              </div>
              <div class="pt-2.5" style="border-top: 1px solid #e5e7eb;">
                <p class="font-semibold mb-1" style="color: #333;">Commercial Info:</p>
                <a href="mailto:info@bmeters.com" class="no-underline hover:opacity-80" style="color: #0C4DA2;">
                  info@bmeters.com
                </a>
              </div>
              <div>
                <p class="font-semibold mb-1" style="color: #333;">Technical Assistance:</p>
                <a href="https://ticket.bmeters.com/hc/en-us" target="_blank" rel="noopener" class="no-underline hover:opacity-80" style="color: #0C4DA2;">
                  ticket.bmeters.com
                </a>
              </div>
              <div>
                <p style="color: #585858;">P.IVA IT01932990308</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Branches section -->
        <h2 class="font-bold mb-8" style="color: #20427D; font-size: 22px; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">
          Branches
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="branch in branches"
            :key="branch.country"
            class="p-5"
            style="border: 1px solid #e5e7eb;"
          >
            <h3 class="font-bold mb-3" style="color: #20427D; font-size: 14px;">{{ branch.country }}</h3>
            <div class="flex flex-col gap-1.5" style="font-size: 13px; color: #585858; line-height: 1.65;">
              <p v-if="branch.address" style="white-space: pre-line;">{{ branch.address }}</p>
              <a
                v-if="branch.phone"
                :href="`tel:${branch.phone.replace(/[\s-]/g, '')}`"
                class="no-underline hover:text-[#20427D] transition-colors"
                style="color: #585858;"
              >
                Tel: {{ branch.phone }}
              </a>
              <span v-if="branch.fax" style="color: #585858;">Fax: {{ branch.fax }}</span>
              <a
                v-if="branch.email"
                :href="`mailto:${branch.email}`"
                class="no-underline hover:opacity-80"
                style="color: #0C4DA2;"
              >
                {{ branch.email }}
              </a>
              <a
                v-if="branch.website"
                :href="branch.website"
                target="_blank"
                rel="noopener"
                class="no-underline hover:opacity-80"
                style="color: #0C4DA2;"
              >
                {{ branch.website.replace('https://', '') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({ title: 'Contacts — B METERS' })

const branches = [
  {
    country: 'Spain',
    address: '',
    phone: '',
    fax: '',
    email: 'spain@bmeters.com',
    website: '',
  },
  {
    country: 'Romania',
    address: '',
    phone: '+40 232 212 620',
    fax: '+40 232 212 621',
    email: 'romania@bmeters.com',
    website: '',
  },
  {
    country: 'Hungary',
    address: '',
    phone: '+36 1 555 0100',
    fax: '+36 1 555 0101',
    email: 'hungary@bmeters.com',
    website: 'https://www.bmeters.hu',
  },
  {
    country: 'Poland',
    address: '',
    phone: '+48 22 123 4567',
    fax: '',
    email: 'poland@bmeters.com',
    website: 'https://www.bmeters.pl',
  },
  {
    country: 'Sweden',
    address: '',
    phone: '+46 8 123 4567',
    fax: '',
    email: 'sweden@bmeters.com',
    website: '',
  },
  {
    country: 'United Kingdom',
    address: '',
    phone: '',
    fax: '',
    email: 'uk-sales@bmeters.com',
    website: '',
  },
]
</script>
