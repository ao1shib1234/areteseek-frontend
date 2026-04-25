<template>
  <div class="font-sans">
    <!-- Hero / page header with category title and breadcrumb -->
    <section style="background: linear-gradient(135deg, #E8F0FB 0%, #f5f8ff 100%); padding: 48px 16px 40px;">
      <div class="max-w-[1400px] mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 mb-4" style="font-size: 12px; color: #585858;">
          <NuxtLink to="/" class="hover:text-[#0C4DA2] transition-colors no-underline" style="color: #585858;">Home</NuxtLink>
          <span style="color: #bbb;">/</span>
          <span style="color: #585858;">Products</span>
          <span style="color: #bbb;">/</span>
          <span style="color: #0C4DA2; font-weight: 600;">{{ category.title }}</span>
        </nav>

        <h1 class="font-bold" style="color: #20427D; font-size: 32px; margin-bottom: 12px;">
          {{ category.title }}
        </h1>
        <p style="color: #585858; font-size: 15px; max-width: 600px; line-height: 1.65;">
          {{ category.description }}
        </p>
      </div>
    </section>

    <!-- Products grid + sidebar -->
    <section class="bg-white py-12">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="grid gap-8" style="grid-template-columns: minmax(0, 1fr) 280px;">
          <!-- Main content: filter tabs + products grid -->
          <div>
            <!-- Category subcategory filter tabs (visual only) -->
            <div class="flex flex-wrap gap-2 mb-8">
              <button
                v-for="sub in category.subcategories"
                :key="sub"
                class="px-4 py-2 rounded font-semibold transition-colors text-sm border"
                :class="selectedSub === sub
                  ? 'text-white border-transparent'
                  : 'text-[#0C4DA2] border-[#0C4DA2] bg-white hover:bg-[#f0f5ff]'"
                :style="selectedSub === sub ? `background: #0C4DA2;` : ''"
                @click="selectedSub = selectedSub === sub ? '' : sub"
              >
                {{ sub }}
              </button>
            </div>

            <!-- Product cards grid - 2 columns (narrower main area) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0" style="border: 1px solid #e5e7eb;">
              <article
                v-for="(product, idx) in filteredProducts"
                :key="product.id"
                class="flex flex-col hover:shadow-md transition-shadow duration-200 bg-white"
                :style="getBorderStyle(idx)"
              >
                <!-- Product image -->
                <div class="flex items-center justify-center bg-white" style="height: 200px; padding: 20px; border-bottom: 1px solid #f0f0f0;">
                  <img
                    v-if="product.imageUrl"
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="w-full h-full hover:scale-105 transition-transform duration-300"
                    style="object-fit: contain; max-height: 160px;"
                  />
                  <div
                    v-else
                    class="flex items-center justify-center w-full h-full"
                    style="background: #f5f8ff;"
                  >
                    <svg style="width: 56px; height: 56px; color: rgba(12,77,162,0.15);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                </div>

                <!-- Product info -->
                <div class="flex flex-col flex-1 p-5">
                  <!-- Subcategory + badge -->
                  <div class="flex items-center gap-2 mb-2">
                    <span style="font-size: 10px; font-weight: 700; color: #1C96C6; text-transform: uppercase; letter-spacing: 0.08em;">
                      {{ product.type }}
                    </span>
                    <span
                      v-if="product.badge"
                      class="px-1.5 py-0.5 rounded"
                      style="font-size: 10px; font-weight: 700; color: #fff; background: #0C4DA2; letter-spacing: 0.06em;"
                    >
                      {{ product.badge }}
                    </span>
                  </div>

                  <h2 class="font-bold mb-2" style="color: #20427D; font-size: 14px; line-height: 1.35;">
                    {{ product.name }}
                  </h2>

                  <p class="flex-1 mb-4" style="color: #585858; font-size: 13px; line-height: 1.6;">
                    {{ product.description }}
                  </p>

                  <!-- Key specs as tags -->
                  <div class="flex flex-wrap gap-1.5 mb-4">
                    <span
                      v-for="spec in product.specs"
                      :key="spec"
                      class="px-2 py-0.5 rounded"
                      style="font-size: 11px; color: #585858; background: #f0f4fa; border: 1px solid #e2e8f0;"
                    >
                      {{ spec }}
                    </span>
                  </div>

                  <!-- View product link -->
                  <NuxtLink
                    :to="`/products/${product.id}?category=${slug}`"
                    class="inline-flex items-center gap-1.5 font-semibold no-underline hover:opacity-80 transition-opacity"
                    style="color: #0C4DA2; font-size: 13px;"
                  >
                    View product
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </article>
            </div>

            <!-- Empty state -->
            <div v-if="filteredProducts.length === 0" class="text-center py-20">
              <p style="color: #585858; font-size: 16px;" class="mb-4">No products found in this category.</p>
              <NuxtLink to="/products" style="color: #0C4DA2;" class="font-semibold hover:underline">View all products</NuxtLink>
            </div>
          </div>

          <!-- Right sidebar: contact info -->
          <ProductContactSidebar />
        </div>
      </div>
    </section>

    <!-- CTA banner -->
    <section style="background: #f5f8ff; padding: 56px 16px; border-top: 1px solid #e5e7eb;">
      <div class="max-w-[1400px] mx-auto text-center">
        <h2 class="font-bold mb-3" style="color: #20427D; font-size: 22px;">Need a custom solution?</h2>
        <p class="mb-8 mx-auto" style="color: #585858; font-size: 14px; max-width: 480px; line-height: 1.65;">
          Our technical team can help you find the right product for your specific application.
        </p>
        <NuxtLink
          to="/contacts"
          class="inline-flex items-center gap-2 text-white font-bold no-underline hover:opacity-90 transition-opacity"
          style="background: #0C4DA2; padding: 14px 36px; font-size: 14px;"
        >
          Contact Sales
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = route.params.slug as string

const selectedSub = ref('')

interface Product {
  id: number
  name: string
  type: string
  description: string
  specs: string[]
  imageUrl?: string
  badge?: string
}

interface CategoryData {
  title: string
  description: string
  subcategories: string[]
  products: Product[]
}

// ── Fetch from Strapi ────────────────────────────────────────────────────────
const { fetchProductsByCategory, fetchProductCategories } = useApi()

const { data: productsData } = await useAsyncData(
  `products-${slug}`,
  () => fetchProductsByCategory(slug)
)

const { data: categoriesData } = await useAsyncData(
  'product-categories',
  () => fetchProductCategories()
)

// Parse Strapi products
const strapiProducts = computed<Product[]>(() => {
  const items = productsData.value?.data ?? []
  return items.map((item: Record<string, unknown>) => {
    const attrs = ((item as Record<string, unknown>).attributes ?? item) as Record<string, unknown>
    const imgRelation = attrs.image as Record<string, unknown> | undefined
    const imgData = (imgRelation?.data as Record<string, unknown>)?.attributes ?? imgRelation
    const imageUrl = getStrapiImageUrl(imgData as Record<string, unknown>) ?? undefined
    return {
      id: (item as Record<string, unknown>).id as number,
      name: (attrs.name as string) ?? '',
      type: (attrs.subcategory as string) ?? '',
      description: (attrs.shortDescription as string) ?? (attrs.description as string) ?? '',
      specs: (attrs.specs as string[]) ?? [],
      imageUrl,
      badge: (attrs.badge as string) ?? undefined,
    }
  })
})

// Parse Strapi category info (title, accentColor, subcategories)
const strapiCategory = computed(() => {
  const items = categoriesData.value?.data ?? []
  const match = items.find((c: Record<string, unknown>) => {
    const attrs = ((c as Record<string, unknown>).attributes ?? c) as Record<string, unknown>
    return attrs.slug === slug
  })
  if (!match) return null
  const attrs = ((match as Record<string, unknown>).attributes ?? match) as Record<string, unknown>
  const subs = (attrs.subcategories as { label: string }[] | null) ?? []
  return {
    title: (attrs.title as string) ?? '',
    subcategories: subs.map(s => s.label),
  }
})

const categoryMap: Record<string, CategoryData> = {
  'water-metering': {
    title: 'Water Metering',
    description: 'Precision water meters for residential, commercial, and industrial applications. Ultrasonic and mechanical technologies compliant with MID Directive.',
    subcategories: ['SMART Meters', 'Residential Meters', 'Bulk Meters', 'Water Meters Accessories'],
    products: [
      {
        id: 1,
        name: 'HYDRODIGIT-M1',
        type: 'SMART Meters',
        description: 'Digital multi-jet SMART meter with WBUS and LORA integrated data transmission.',
        specs: ['DN15–DN40', 'MID Class C', 'LoRaWAN / wM-Bus', 'IP68'],
        imageUrl: 'https://www.bmeters.com/wp-content/uploads/2023/07/HYDRODIGIT-M1-sopra2.png',
      },
      {
        id: 2,
        name: 'GSD8 Ultrasonic Cold Water Meter',
        type: 'SMART Meters',
        description: 'Single-jet ultrasonic cold water meter for residential and commercial use. Highly accurate with no moving parts.',
        specs: ['DN15–DN40', 'MID Class C', 'Wired M-Bus / wM-Bus', 'IP68'],
        imageUrl: undefined,
      },
      {
        id: 3,
        name: 'GSD8-H Ultrasonic Hot Water Meter',
        type: 'Residential Meters',
        description: 'Ultrasonic hot water meter suitable for temperatures up to 90°C. Ideal for domestic hot water systems.',
        specs: ['DN15–DN40', 'Up to 90°C', 'MID Class C', 'Optional M-Bus'],
        imageUrl: undefined,
      },
      {
        id: 4,
        name: 'GMDM-I Mechanical Water Meter',
        type: 'Residential Meters',
        description: 'Single-jet dry dial cold water meter for residential metering. Robust construction with long calibration life.',
        specs: ['DN15–DN20', 'MID Class B', 'Pulse output', 'IP68'],
        imageUrl: undefined,
      },
      {
        id: 5,
        name: 'GMSD Volumetric Water Meter',
        type: 'Bulk Meters',
        description: 'High-accuracy volumetric piston water meter for demanding measurement applications where Class C accuracy is required.',
        specs: ['DN15–DN25', 'MID Class C', 'Low start flow', 'Pulse output'],
        imageUrl: undefined,
      },
      {
        id: 6,
        name: 'HYDRUS Multijet Water Meter',
        type: 'Bulk Meters',
        description: 'Dry dial multijet water meter for larger residential and commercial installations.',
        specs: ['DN20–DN50', 'MID Class B', 'Horizontal/vertical', 'Pulse output'],
        imageUrl: undefined,
      },
    ],
  },

  'thermal-energy-metering': {
    title: 'Thermal Energy Metering',
    description: 'Heat meters and thermal energy metering solutions for district heating, cooling, and building management systems.',
    subcategories: ['Mechanical Meters', 'Ultrasonic Meters', 'Heat cost allocators/Sensors', 'Thermal Energy Meters Accessories'],
    products: [
      {
        id: 1,
        name: 'HYDROSPLIT Ultrasonic Heat Meter',
        type: 'Ultrasonic Meters',
        description: 'Split-body ultrasonic thermal energy meter for heating and cooling measurement.',
        specs: ['DN15–DN50', 'EN 1434 Class 2', 'M-Bus / wM-Bus', 'Heating & cooling'],
        imageUrl: 'https://www.bmeters.com/wp-content/uploads/2022/07/hcW4-aspect-ratio-450-450-1.png',
      },
      {
        id: 2,
        name: 'HYDROSPLIT-A Compact Heat Meter',
        type: 'Ultrasonic Meters',
        description: 'Compact ultrasonic heat meter with integrated flow sensor for apartment metering.',
        specs: ['DN15–DN25', 'EN 1434 Class 2', 'Integrated calculator', 'MID approved'],
        imageUrl: undefined,
      },
      {
        id: 3,
        name: 'HYDROFLUX Electromagnetic Heat Meter',
        type: 'Mechanical Meters',
        description: 'Electromagnetic thermal energy meter for high-flow district heating applications.',
        specs: ['DN50–DN200', 'Class 2', 'M-Bus output', 'Industrial grade'],
        imageUrl: undefined,
      },
      {
        id: 4,
        name: 'HYDROSET Calculator Unit',
        type: 'Thermal Energy Meters Accessories',
        description: 'Standalone calculator unit for integration with compatible flow and temperature sensors.',
        specs: ['Universal input', 'M-Bus / pulse', 'Data logging', 'EN 1434'],
        imageUrl: undefined,
      },
    ],
  },

  'remote-reading-systems': {
    title: 'Remote Reading Systems',
    description: 'Advanced AMR/AMI solutions for automatic meter reading via wired M-Bus, wireless wM-Bus, LoRaWAN, and NB-IoT networks.',
    subcategories: ['LoRaWan', 'M-BUS Wireless', 'M-BUS', 'Pulse Output'],
    products: [
      {
        id: 1,
        name: 'RADIO-3 wM-Bus Concentrator',
        type: 'M-BUS Wireless',
        description: 'Wireless M-Bus data concentrator supporting up to 250 meters.',
        specs: ['wM-Bus OMS', 'Up to 250 devices', 'GPRS / Ethernet', 'DIN rail mount'],
        imageUrl: 'https://www.bmeters.com/wp-content/uploads/2021/07/rrs-03-1-aspect-ratio-450-450.jpg',
      },
      {
        id: 2,
        name: 'LORA-GATE LoRaWAN Gateway',
        type: 'LoRaWan',
        description: 'Industrial LoRaWAN gateway for outdoor deployment in AMI networks.',
        specs: ['8-channel RX', 'IP67', '4G/Ethernet backhaul', 'LoRa Alliance certified'],
        imageUrl: undefined,
      },
      {
        id: 3,
        name: 'M-BUS MASTER Wired Concentrator',
        type: 'M-BUS',
        description: 'Wired M-Bus master for reading up to 250 meters over a single M-Bus segment.',
        specs: ['EN 13757-2', 'Up to 250 units', 'Ethernet / RS-232', 'Modbus RTU'],
        imageUrl: undefined,
      },
      {
        id: 4,
        name: 'DATALOGGER-3G Mobile Reader',
        type: 'Pulse Output',
        description: 'Handheld data logger for walk-by wM-Bus meter reading.',
        specs: ['wM-Bus 868/169 MHz', 'IP54', '8h battery', 'Cloud sync'],
        imageUrl: undefined,
      },
      {
        id: 5,
        name: 'NB-IoT Adapter Module',
        type: 'Pulse Output',
        description: 'Retrofit NB-IoT adapter module compatible with pulse output meters.',
        specs: ['NB-IoT Cat-M1', 'Universal pulse input', '10-year battery', 'MQTT / CoAP'],
        imageUrl: undefined,
      },
    ],
  },
}

const category = computed<CategoryData>(() => {
  const fallback = categoryMap[slug] ?? { title: 'Products', description: '', subcategories: [], products: [] }
  // Use Strapi products if available; otherwise fall back to hardcoded
  const products = strapiProducts.value.length > 0 ? strapiProducts.value : fallback.products
  const title = strapiCategory.value?.title || fallback.title
  const subcategories = strapiCategory.value?.subcategories?.length
    ? strapiCategory.value.subcategories
    : fallback.subcategories
  return { title, description: fallback.description, subcategories, products }
})

const filteredProducts = computed(() => {
  if (!selectedSub.value) return category.value.products
  return category.value.products.filter(p => p.type === selectedSub.value)
})

// Border style for grid items (right border every other column, bottom border for rows)
function getBorderStyle(idx: number): string {
  const total = filteredProducts.value.length
  const cols = 2
  const col = idx % cols
  const row = Math.floor(idx / cols)
  const totalRows = Math.ceil(total / cols)
  const borders = []
  if (col < cols - 1) borders.push('border-right: 1px solid #e5e7eb;')
  if (row < totalRows - 1) borders.push('border-bottom: 1px solid #e5e7eb;')
  return borders.join(' ')
}

useHead({
  title: `${category.value.title} — B METERS`,
})
</script>
