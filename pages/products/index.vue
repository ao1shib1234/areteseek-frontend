<template>
  <div class="font-sans">
    <!-- Breadcrumb -->
    <div class="bg-neutral-50 border-b border-neutral-100">
      <div class="max-w-container mx-auto px-4 py-3">
        <nav class="flex items-center gap-2 text-sm text-neutral-500">
          <a href="/" class="hover:text-primary transition-colors no-underline">Home</a>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-neutral-800 font-semibold">Products</span>
        </nav>
      </div>
    </div>

    <!-- Page header -->
    <section class="bg-white py-14">
      <div class="max-w-container mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-neutral-800 mb-4">Our Products</h1>
        <p class="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Comprehensive metering solutions designed for accuracy, reliability, and seamless integration
          across residential, commercial, and industrial applications.
        </p>
      </div>
    </section>

    <!-- Product categories -->
    <section class="bg-neutral-50 py-16">
      <div class="max-w-container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="category in productCategories"
            :key="category.slug"
            class="bg-white rounded-2xl overflow-hidden shadow-natural hover:shadow-deep hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <!-- Category icon area -->
            <div class="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <component :is="category.icon" class="w-20 h-20 text-primary opacity-40" />
            </div>

            <!-- Card content -->
            <div class="flex flex-col flex-1 p-6 gap-4">
              <h2 class="text-xl font-bold text-neutral-800">{{ category.name }}</h2>
              <p class="text-sm text-neutral-600 leading-relaxed">{{ category.description }}</p>

              <!-- Sub-products list -->
              <ul class="flex flex-col gap-2 mt-1">
                <li
                  v-for="product in category.products"
                  :key="product.name"
                  class="flex items-center gap-2 text-sm text-neutral-700"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {{ product.name }}
                </li>
              </ul>

              <a
                :href="`/products/${category.slug}`"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-700 transition-colors no-underline mt-auto group"
              >
                Learn more
                <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const WaterIcon = defineComponent({
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1',
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.65-3.15L12 17l7.35-8.15C19.77 9.82 20 10.88 20 12c0 4.41-3.59 8-8 8z',
      }),
    ])
  },
})

const ThermalIcon = defineComponent({
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1',
        d: 'M13 10V3L4 14h7v7l9-11h-7z',
      }),
    ])
  },
})

const RemoteIcon = defineComponent({
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1',
        d: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
      }),
    ])
  },
})

const productCategories = [
  {
    slug: 'water-metering',
    name: 'Water Metering',
    description: 'High-precision water meters for residential and commercial use, from SMART meters to bulk flow solutions.',
    icon: WaterIcon,
    products: [
      { name: 'SMART Meters' },
      { name: 'Residential Meters' },
      { name: 'Bulk Flow Meters' },
    ],
  },
  {
    slug: 'thermal-energy-metering',
    name: 'Thermal Energy Metering',
    description: 'Reliable thermal energy meters — mechanical and ultrasonic — for heating and cooling applications.',
    icon: ThermalIcon,
    products: [
      { name: 'Mechanical Meters' },
      { name: 'Ultrasonic Meters' },
      { name: 'Heat Allocators' },
    ],
  },
  {
    slug: 'remote-reading-systems',
    name: 'Remote Reading Systems',
    description: 'LoRaWAN, M-Bus, and wireless remote reading systems for efficient, real-time data collection.',
    icon: RemoteIcon,
    products: [
      { name: 'LoRaWAN Systems' },
      { name: 'M-BUS Wireless' },
      { name: 'Pulse Output Modules' },
    ],
  },
]
</script>
