<template>
  <div class="font-sans">
    <!-- Hero: full-viewport city image with text overlaid at top (no overlay, black text) matching 820px -->
    <section class="relative w-full overflow-hidden" style="height: 820px;">
      <!-- City/cloud background image (no dark overlay) -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://www.bmeters.com/wp-content/uploads/2021/06/hero-bmetering.jpg');"
      />

      <!-- Text overlaid at top of image (transparent bg, black text matching original) -->
      <div class="relative z-10 flex flex-col items-center px-4 text-center" style="padding-top: 30px; height: 136px; justify-content: center;">
        <h1 style="font-size: 38px; font-weight: 700; color: #000; line-height: 1.25; margin: 0 0 16px; max-width: 700px; text-shadow: none;">
          The smart platform which stores all data on the cloud
        </h1>
        <!-- Scroll indicator -->
        <div>
          <svg style="width: 22px; height: 22px; color: #333;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Breadcrumb below hero -->
    <div style="padding: 8px 16px; border-bottom: 1px solid #e5e7eb; background: #fff;">
      <div class="max-w-[1400px] mx-auto">
        <nav class="flex items-center gap-2" style="font-size: 12px; color: #585858;">
          <NuxtLink to="/" class="no-underline hover:text-[#0C4DA2] transition-colors" style="color: #585858;">Home</NuxtLink>
          <span style="color: #bbb;">/</span>
          <span style="color: #585858;">B Metering Cloud</span>
        </nav>
      </div>
    </div>

    <!-- Features -->
    <section class="bg-white py-16">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-[#20427D] mb-6">Smart Meter Data Management</h2>
            <p class="text-[#585858] leading-relaxed mb-6">
              B METERING Cloud is a powerful SaaS platform that collects, stores, and analyzes data from your metering infrastructure. Whether you use M-Bus, wM-Bus, LoRaWAN, or NB-IoT, our platform provides a unified dashboard.
            </p>
            <ul class="flex flex-col gap-3">
              <li v-for="feat in features" :key="feat" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#008B2C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-[#585858]">{{ feat }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-[#0C4DA2] rounded-2xl p-10 text-white">
            <h3 class="text-2xl font-bold mb-6">Platform Highlights</h3>
            <div class="grid grid-cols-2 gap-6">
              <div v-for="stat in platformStats" :key="stat.label" class="flex flex-col gap-1">
                <span class="text-3xl font-extrabold text-[#1C96C6]">{{ stat.value }}</span>
                <span class="text-sm text-white/80">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Protocols -->
        <h2 class="text-3xl font-bold text-[#20427D] mb-8 text-center">Supported Protocols</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="proto in protocols"
            :key="proto.name"
            class="border border-gray-200 rounded-xl p-6 text-center hover:border-[#0C4DA2] hover:shadow-md transition-all"
          >
            <p class="text-xl font-bold text-[#0C4DA2] mb-2">{{ proto.name }}</p>
            <p class="text-xs text-[#585858]">{{ proto.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-[#0C4DA2] py-16">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
        <p class="text-white/80 mb-8 max-w-xl mx-auto">
          Contact our team for a demo or access to the B METERING Cloud platform.
        </p>
        <NuxtLink
          to="/contacts"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0C4DA2] font-bold rounded-xl hover:bg-[#E8F0FB] transition-colors"
        >
          Request a Demo
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const features = [
  'Real-time data collection from all connected meters',
  'Automated billing export in multiple formats',
  'Leak detection and anomaly alerts',
  'Historical consumption charts and reporting',
  'Multi-tenant architecture for utilities and districts',
  'REST API for integration with third-party systems',
  'GDPR compliant data storage with EU hosting',
]

const platformStats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '1M+', label: 'Meters managed' },
  { value: '15min', label: 'Data refresh cycle' },
  { value: '10yr', label: 'Data retention' },
]

const protocols = [
  { name: 'M-Bus', desc: 'Wired meter bus standard' },
  { name: 'wM-Bus', desc: 'Wireless meter bus' },
  { name: 'LoRaWAN', desc: 'Long-range IoT network' },
  { name: 'NB-IoT', desc: 'Narrowband cellular IoT' },
]
</script>
