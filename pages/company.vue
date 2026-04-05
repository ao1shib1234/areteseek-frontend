<template>
  <div class="font-sans">
    <!-- Hero: two-part layout matching bmeters.com exactly -->
    <!-- Part 1: light blue-gray text section (216px, matching original) -->
    <div style="background: rgb(231, 238, 244); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; height: 216px; padding: 0;">
      <!-- Inner container: full width with 20px side padding matching original -->
      <div style="width: 100%; padding: 0 20px; box-sizing: border-box;">
        <h1 style="font-size: 41px; font-weight: 300; color: #1a1a1a; margin: 0 0 8px; line-height: 1.1;">Company</h1>
        <h2 style="font-size: 28px; font-weight: 300; color: rgb(28, 150, 198); line-height: 32px; margin: 0 0 8px;">
          B METERS is an Italian company that has been designing, producing and distributing instruments and solutions for measuring the consumption of water and energy used for heating and cooling, for 30 years.
        </h2>
        <!-- Scroll indicator: circle with down arrow matching original -->
        <div style="display: flex; align-items: center; justify-content: center;">
          <svg width="22" height="22" fill="none" stroke="#666" stroke-width="1.2" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="10"/>
            <line x1="11" y1="7" x2="11" y2="15"/>
            <polyline points="7.5,12 11,15.5 14.5,12"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Part 2: Aerial factory photo (604px height) -->
    <div
      class="w-full relative"
      style="height: 604px; overflow: hidden;"
    >
      <img
        src="https://www.bmeters.com/wp-content/uploads/2021/05/BMeters21.01DJI_0908-HDR-Pano_mod-ver3.jpg"
        alt="B METERS factory aerial view"
        style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 100%; display: block;"
      />
      <!-- Gradient overlay at top: fades from text section bg into transparent -->
      <div class="absolute top-0 left-0 right-0" style="height: 40px; background: linear-gradient(to bottom, rgb(231, 238, 244) 0%, transparent 100%); pointer-events: none;"></div>
      <!-- Wave separator at bottom (onde-bottom with scaleY(-1) = arch shape) -->
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg class="relative block w-full" style="height: 50px;" viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C480,50 960,50 1440,0 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </div>
    </div>

    <!-- Main content area with sidebar -->
    <section class="bg-white py-12">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="flex gap-10">
          <!-- Sidebar navigation -->
          <aside class="hidden lg:block shrink-0" style="width: 220px;">
            <ul class="list-none m-0 p-0" style="border: 1px solid #e5e7eb;">
              <li v-for="(item, idx) in sidebarLinks" :key="item.label">
                <a
                  :href="item.href"
                  class="flex items-center no-underline transition-colors px-4 py-3"
                  :style="[
                    'font-size: 13px;',
                    idx === 0
                      ? 'background: #20427D; color: #fff; font-weight: 600;'
                      : 'color: #333; border-top: 1px solid #e5e7eb;',
                  ]"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </aside>

          <!-- Main content -->
          <div class="flex-1 min-w-0">
            <!-- Main intro text -->
            <div class="mb-10">
              <p class="leading-relaxed mb-4" style="color: #333; font-size: 15px; line-height: 1.75;">
                B METERS is an Italian company that has been designing, producing and distributing instruments and solutions for measuring the consumption of water and energy used for heating and cooling, for over 30 years.
              </p>
              <p class="leading-relaxed mb-4" style="color: #585858; font-size: 14px; line-height: 1.75;">
                Founded in 1991 by the Budai family, B METERS has built a reputation for precision engineering and innovation in the water and heat metering sector. The company operates from its headquarters in Gonars (UD), in the Friuli Venezia Giulia region of north-east Italy.
              </p>
              <p class="leading-relaxed" style="color: #585858; font-size: 14px; line-height: 1.75;">
                Production takes place in three company-owned plants covering a total area of 12,000 m², with a manufacturing capacity of 2.2 million meters per year. Our products are distributed in over 90 countries worldwide.
              </p>
            </div>

            <!-- Key stats strip -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-0 mb-10" style="border: 1px solid #e5e7eb;">
              <div
                v-for="(stat, idx) in stats"
                :key="stat.label"
                class="flex flex-col items-center justify-center py-6 px-4 text-center"
                :style="idx < stats.length - 1 ? 'border-right: 1px solid #e5e7eb;' : ''"
              >
                <span class="font-extrabold mb-1" style="color: #0C4DA2; font-size: 28px;">{{ stat.value }}</span>
                <span style="color: #585858; font-size: 12px; line-height: 1.4;">{{ stat.label }}</span>
              </div>
            </div>

            <!-- Product range section -->
            <div class="mb-10">
              <h2 class="font-bold mb-4" style="color: #20427D; font-size: 20px;">Product Range</h2>
              <p class="leading-relaxed mb-4" style="color: #585858; font-size: 14px; line-height: 1.75;">
                B METERS produces a complete range of metering instruments including residential and industrial water meters, SMART meters with integrated wireless communication (LoRaWAN, wM-Bus, NB-IoT), thermal energy meters for heating and cooling applications, and remote reading systems for automated meter reading (AMR/AMI).
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div
                  v-for="cat in productCategories"
                  :key="cat.title"
                  class="p-5 rounded"
                  style="border: 1px solid #e5e7eb; background: #f9fbff;"
                >
                  <h3 class="font-bold mb-2" style="color: #20427D; font-size: 14px;">{{ cat.title }}</h3>
                  <p style="color: #585858; font-size: 13px; line-height: 1.6;">{{ cat.description }}</p>
                  <NuxtLink
                    :to="cat.href"
                    class="inline-flex items-center gap-1 mt-3 no-underline font-semibold hover:opacity-80"
                    style="color: #0C4DA2; font-size: 13px;"
                  >
                    View products
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Certifications -->
            <div>
              <h2 class="font-bold mb-4" style="color: #20427D; font-size: 20px;">Certifications &amp; Standards</h2>
              <p class="leading-relaxed mb-5" style="color: #585858; font-size: 14px; line-height: 1.75;">
                All B METERS products are developed and manufactured in compliance with international quality and environmental standards.
              </p>
              <div class="flex flex-wrap gap-3">
                <div
                  v-for="cert in certifications"
                  :key="cert"
                  class="px-4 py-2 font-semibold"
                  style="border: 2px solid #0C4DA2; color: #0C4DA2; font-size: 13px; border-radius: 4px;"
                >
                  {{ cert }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

useHead({ title: 'Company — B METERS' })

const sidebarLinks = [
  { label: 'Company', href: '/company' },
  { label: 'Manufacturing process', href: '/company' },
  { label: 'Certifications', href: '/company' },
  { label: 'Accredited Calibration Laboratory', href: '/company' },
  { label: 'Why choose us', href: '/company' },
]

const stats = [
  { value: '30+', label: 'Years of experience' },
  { value: '2.2M', label: 'Meters per year' },
  { value: '90+', label: 'Countries served' },
  { value: '12,000 m²', label: 'Production area' },
]

const productCategories = [
  {
    title: 'Water Metering',
    description: 'Residential and industrial water meters, including ultrasonic SMART meters and mechanical meters.',
    href: '/product-category/water-metering',
  },
  {
    title: 'Thermal Energy Metering',
    description: 'Heat meters for district heating, cooling, and building management — mechanical and ultrasonic.',
    href: '/product-category/thermal-energy-metering',
  },
  {
    title: 'Remote Reading Systems',
    description: 'AMR/AMI solutions via LoRaWAN, wM-Bus, M-Bus, and NB-IoT for automated meter data collection.',
    href: '/product-category/remote-reading-systems',
  },
]

const certifications = ['ISO 9001:2015', 'ISO 14001:2015', 'MID 2014/32/EU (Module D)', 'EN 1434', 'OIML R49']
</script>
