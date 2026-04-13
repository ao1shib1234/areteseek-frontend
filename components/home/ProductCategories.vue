<template>
  <!-- Product categories — wide centered table matching bmeters.com -->
  <section class="bg-white pb-10 font-sans">
    <div class="mx-auto" style="max-width: 1000px; padding: 0 1rem;">
      <div class="grid grid-cols-3" style="border: 1px solid #c1c1c1; border-radius: 8px; overflow: hidden;">
        <div
          v-for="(cat, i) in displayCategories"
          :key="cat.slug"
          class="flex flex-col min-w-0"
          :style="i < displayCategories.length - 1 ? 'border-right: 1px solid #e5e7eb;' : ''"
        >
          <!-- Column header — dark blue bg -->
          <NuxtLink
            :to="`/product-category/${cat.slug}`"
            class="block text-white text-center font-semibold no-underline hover:opacity-90 transition-opacity"
            style="background: #20427D; padding: 16px 12px; font-size: 15px; line-height: 1.3;"
          >
            {{ cat.title }}
          </NuxtLink>

          <!-- Product image area -->
          <NuxtLink :to="`/product-category/${cat.slug}`" class="block bg-white">
            <div class="flex items-center justify-center" style="height: 300px; padding: 24px 20px;">
              <img
                :src="cat.imageUrl"
                :alt="cat.title"
                class="w-full h-full hover:scale-105 transition-transform duration-300"
                style="object-fit: contain;"
                @error="(e) => { const el = e.target as HTMLImageElement; const fb = FALLBACK_IMAGE[cat.slug]; if (fb && el.src !== window.location.origin + fb) el.src = fb }"
              />
            </div>
          </NuxtLink>

          <!-- Accent separator line -->
          <div style="height: 3px; margin: 0 12px;" :style="{ backgroundColor: cat.accentColor }" />

          <!-- Subcategory links -->
          <ul class="flex flex-col list-none m-0 p-0" style="padding: 4px 0;">
            <li v-for="sub in cat.subcategories" :key="sub.label">
              <NuxtLink
                :to="`/product-category/${cat.slug}`"
                class="flex items-center justify-between no-underline hover:bg-[#f0f5ff] transition-colors"
                style="padding: 10px 14px; color: #0C4DA2; font-size: 14px;"
              >
                <span style="line-height: 1.3;">{{ sub.label }}</span>
                <svg
                  class="shrink-0"
                  style="width: 16px; height: 16px; margin-left: 6px;"
                  :style="{ color: cat.accentColor }"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NuxtLink>
            </li>
          </ul>

          <!-- All products link at bottom -->
          <div style="border-top: 1px solid #e5e7eb; margin-top: auto;">
            <NuxtLink
              :to="`/product-category/${cat.slug}`"
              class="flex items-center justify-between no-underline hover:bg-[#f0f5ff] transition-colors"
              style="padding: 12px 14px; color: #0C4DA2; font-size: 14px; font-weight: 600;"
            >
              <span>All products</span>
              <svg
                class="shrink-0"
                style="width: 16px; height: 16px;"
                :style="{ color: cat.accentColor }"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Category {
  slug: string
  title: string
  imageUrl: string
  accentColor: string
  subcategories: { label: string }[]
}

const FALLBACK_CATEGORIES: Category[] = [
  {
    slug: 'water-metering',
    title: 'Water Metering',
    imageUrl: '/images/categories/water-metering.png',
    accentColor: '#0C4DA2',
    subcategories: [
      { label: 'SMART Meters' },
      { label: 'Residential Meters' },
      { label: 'Bulk Meters' },
      { label: 'Water Meters Accessories' },
    ],
  },
  {
    slug: 'thermal-energy-metering',
    title: 'Thermal Energy Metering',
    imageUrl: '/images/categories/thermal-energy-metering.png',
    accentColor: '#E87722',
    subcategories: [
      { label: 'Mechanical Meters' },
      { label: 'Ultrasonic Meters' },
      { label: 'Heat cost allocators/Sensors' },
      { label: 'Thermal Energy Meters Accessories' },
    ],
  },
  {
    slug: 'remote-reading-systems',
    title: 'Remote Reading Systems',
    imageUrl: '/images/categories/remote-reading-systems.jpg',
    accentColor: '#585858',
    subcategories: [
      { label: 'LoRaWan' },
      { label: 'M-BUS Wireless' },
      { label: 'M-BUS' },
      { label: 'Pulse Output' },
    ],
  },
]

const { fetchProductCategories } = useApi()
const { data: categoriesData } = await useAsyncData('product-categories', fetchProductCategories)

const FALLBACK_IMAGE: Record<string, string> = {
  'water-metering': '/images/categories/water-metering.png',
  'thermal-energy-metering': '/images/categories/thermal-energy-metering.png',
  'remote-reading-systems': '/images/categories/remote-reading-systems.jpg',
}

const displayCategories = computed<Category[]>(() => {
  const items = categoriesData.value?.data ?? []
  if (!items.length) return FALLBACK_CATEGORIES
  return items.map((item) => {
    const attrs = ((item as Record<string, unknown>).attributes ?? item) as Record<string, unknown>
    const imgRelation = attrs.image as Record<string, unknown> | undefined
    const imgData = (imgRelation?.data as Record<string, unknown>)?.attributes ?? imgRelation
    const slug = (attrs.slug as string) ?? ''
    const imageUrl = getStrapiImageUrl(imgData as Record<string, unknown>) || FALLBACK_IMAGE[slug] || ''
    return {
      slug,
      title: (attrs.title as string) ?? '',
      imageUrl,
      accentColor: (attrs.accentColor as string) ?? '#0C4DA2',
      subcategories: (attrs.subcategories as { label: string }[]) ?? [],
    }
  })
})
</script>
