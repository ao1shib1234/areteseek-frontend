<template>
  <div class="font-sans">
    <!-- Breadcrumb -->
    <section style="background: #f9fbff; padding: 24px 16px;">
      <div class="max-w-[1400px] mx-auto">
        <nav class="flex items-center gap-2" style="font-size: 12px; color: #585858;">
          <NuxtLink to="/" class="hover:text-[#0C4DA2] transition-colors no-underline" style="color: #585858;">
            Home
          </NuxtLink>
          <span style="color: #bbb;">/</span>
          <NuxtLink to="/products" class="hover:text-[#0C4DA2] transition-colors no-underline" style="color: #585858;">
            Products
          </NuxtLink>
          <span v-if="categorySlug" style="color: #bbb;">/</span>
          <NuxtLink
            v-if="categorySlug"
            :to="`/product-category/${categorySlug}`"
            class="hover:text-[#0C4DA2] transition-colors no-underline"
            style="color: #585858;"
          >
            {{ categoryTitle }}
          </NuxtLink>
          <span style="color: #bbb;">/</span>
          <span style="color: #0C4DA2; font-weight: 600;">{{ product.name || 'Product' }}</span>
        </nav>
      </div>
    </section>

    <!-- Main content: 2-column layout (product info + contact sidebar) -->
    <section class="bg-white py-10">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="grid gap-8" style="grid-template-columns: minmax(0, 1fr) 280px;">
          <!-- Left: product info + image -->
          <div>
            <!-- Top bar with navigation -->
            <div class="flex items-center justify-between pb-4 mb-6" style="border-bottom: 1px solid #e5e7eb;">
              <div class="font-semibold" style="color: #20427D; font-size: 14px;">
                {{ categoryTitle }}
                <span v-if="product.type" style="color: #585858; font-weight: normal;">
                  >> {{ product.type }}
                </span>
              </div>
              <NuxtLink
                v-if="categorySlug"
                :to="`/product-category/${categorySlug}`"
                class="font-semibold no-underline hover:opacity-80"
                style="color: #20427D; font-size: 13px;"
              >
                ← BACK
              </NuxtLink>
            </div>

            <!-- Product detail: title + image + features -->
            <div class="grid gap-8" style="grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);">
              <!-- Left: title + features -->
              <div>
                <h1 class="font-bold mb-5" style="color: #20427D; font-size: 24px; line-height: 1.3;">
                  {{ product.name }}
                </h1>

                <p v-if="product.description" class="mb-5" style="color: #585858; font-size: 14px; line-height: 1.7;">
                  {{ product.description }}
                </p>

                <!-- Specs as a list -->
                <ul v-if="product.specs.length" class="flex flex-col gap-2 mb-6 list-none p-0">
                  <li
                    v-for="(spec, i) in product.specs"
                    :key="i"
                    class="flex items-start gap-2"
                    style="font-size: 13px; color: #444;"
                  >
                    <span class="font-bold shrink-0" style="color: #0C4DA2;">{{ i + 1 }}.</span>
                    <span>{{ spec }}</span>
                  </li>
                </ul>

                <!-- Compliance / type badge -->
                <div v-if="product.badge" class="inline-block px-3 py-1 mb-3" style="background: #f0f4fa; border-left: 3px solid #0C4DA2;">
                  <span style="font-size: 12px; color: #20427D; font-weight: 600;">{{ product.badge }}</span>
                </div>
              </div>

              <!-- Right: product image -->
              <div class="flex flex-col items-center justify-start">
                <div
                  class="flex items-center justify-center w-full"
                  style="height: 360px; padding: 24px; background: #fff;"
                >
                  <img
                    v-if="product.imageUrl"
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="w-full h-full"
                    style="object-fit: contain;"
                  />
                  <div
                    v-else
                    class="flex items-center justify-center w-full h-full"
                    style="background: #f5f8ff;"
                  >
                    <svg style="width: 80px; height: 80px; color: rgba(12,77,162,0.15);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right sidebar: contact -->
          <ProductContactSidebar :default-product="product.name" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const route = useRoute()
const productId = route.params.slug as string
const categorySlug = (route.query.category as string) ?? ''

interface Product {
  id: number | string
  name: string
  type: string
  description: string
  specs: string[]
  imageUrl?: string
  badge?: string
}

const FALLBACK_PRODUCT: Product = {
  id: productId,
  name: 'Product',
  type: '',
  description: '',
  specs: [],
}

const { fetchProductsByCategory, fetchProductCategories } = useApi()

// Fetch products in the same category to find this one
const { data: productsData } = await useAsyncData(
  `product-detail-${productId}-${categorySlug}`,
  () => categorySlug ? fetchProductsByCategory(categorySlug) : Promise.resolve({ data: [] })
)

const { data: categoriesData } = await useAsyncData(
  'product-categories',
  () => fetchProductCategories()
)

const product = computed<Product>(() => {
  const items = productsData.value?.data ?? []
  const match = items.find((item: Record<string, unknown>) => String(item.id) === String(productId))
  if (!match) return FALLBACK_PRODUCT
  const attrs = ((match as Record<string, unknown>).attributes ?? match) as Record<string, unknown>
  const imgRelation = attrs.image as Record<string, unknown> | undefined
  const imgData = (imgRelation?.data as Record<string, unknown>)?.attributes ?? imgRelation
  const imageUrl = getStrapiImageUrl(imgData as Record<string, unknown>) ?? undefined
  return {
    id: (match as Record<string, unknown>).id as number,
    name: (attrs.name as string) ?? '',
    type: (attrs.subcategory as string) ?? '',
    description: (attrs.description as string) ?? (attrs.shortDescription as string) ?? '',
    specs: (attrs.specs as string[]) ?? [],
    imageUrl,
    badge: (attrs.badge as string) ?? undefined,
  }
})

const categoryTitle = computed(() => {
  const items = categoriesData.value?.data ?? []
  const match = items.find((c: Record<string, unknown>) => {
    const attrs = ((c as Record<string, unknown>).attributes ?? c) as Record<string, unknown>
    return attrs.slug === categorySlug
  })
  if (!match) return 'Products'
  const attrs = ((match as Record<string, unknown>).attributes ?? match) as Record<string, unknown>
  return (attrs.title as string) ?? 'Products'
})

useHead({
  title: computed(() => `${product.value.name} — B METERS`),
})
</script>
