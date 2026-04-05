<template>
  <!-- News section: 3-column grid with thumbnails, matching bmeters.com homepage -->
  <section class="bg-white py-12 font-sans">
    <div class="mx-auto px-4" style="max-width: 1400px;">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-bold" style="color: #20427D; font-size: 22px;">News</h2>
        <NuxtLink
          to="/news"
          class="flex items-center gap-1 font-semibold no-underline hover:opacity-80 transition-opacity"
          style="color: #0C4DA2; font-size: 13px;"
        >
          All News
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <!-- 3-column news grid with borders -->
      <div class="grid grid-cols-1 md:grid-cols-3" style="border: 1px solid #e5e7eb;">
        <article
          v-for="(item, index) in displayNews"
          :key="item.id"
          class="flex flex-col"
          :style="index < displayNews.length - 1 ? 'border-right: 1px solid #e5e7eb;' : ''"
        >
          <!-- Thumbnail image -->
          <div class="overflow-hidden bg-[#f5f7fa]" style="height: 190px;">
            <img
              v-if="item.imageUrl"
              :src="item.imageUrl"
              :alt="item.title"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center"
              style="background: #eef2f8;"
            >
              <svg style="width: 48px; height: 48px; color: rgba(12,77,162,0.2);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <!-- Card content -->
          <div class="flex flex-col flex-1 p-5">
            <time
              class="block font-semibold mb-2"
              :datetime="item.isoDate"
              style="color: #1C96C6; font-size: 13px;"
            >
              {{ item.displayDate }}
            </time>
            <h3
              class="font-bold mb-2 leading-snug"
              style="color: #20427D; font-size: 15px; line-height: 1.4;"
            >
              {{ item.title }}
            </h3>
            <p
              class="flex-1 mb-3"
              style="color: #585858; font-size: 14px; line-height: 1.6;"
            >
              {{ item.excerpt }}
            </p>
            <NuxtLink
              :to="item.href"
              class="inline-flex items-center gap-1 font-semibold no-underline hover:opacity-80 transition-opacity"
              style="color: #0C4DA2; font-size: 13px;"
            >
              Read more
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface NewsItem {
  id: number
  isoDate: string
  displayDate: string
  title: string
  excerpt: string
  imageUrl?: string
  href: string
}

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: 1,
    isoDate: '2026-03-17',
    displayDate: '17.03.26',
    title: '2026 General Catalogue',
    excerpt: 'Download the new 2026 General Catalogue with all the products of B METERS, solutions for water metering and thermal energy metering.',
    imageUrl: undefined,
    href: '/news',
  },
  {
    id: 2,
    isoDate: '2026-03-10',
    displayDate: '10.03.26',
    title: 'BMETERS at MCE 2026 fair, from March 24th to 27th 2026',
    excerpt: 'B METERS will be at MCE 2026, the international exhibition dedicated to HVAC and plumbing, from 24 to 27 March 2026 in Milan.',
    imageUrl: 'https://www.bmeters.com/wp-content/uploads/2026/03/MCE2026_post_IG_espo-3-1024x1024.jpg',
    href: '/news',
  },
  {
    id: 3,
    isoDate: '2025-12-18',
    displayDate: '18.12.25',
    title: 'EPD certification – Environmental Product Declaration',
    excerpt: 'B METERS obtains the EPD – Environmental Product Declaration, confirming our commitment to environmental sustainability.',
    imageUrl: undefined,
    href: '/news',
  },
]

const { fetchNews } = useApi()
const { data: newsData } = await useAsyncData('home-news', fetchNews)

const displayNews = computed<NewsItem[]>(() => {
  const items = newsData.value?.data ?? []
  if (!items.length) return FALLBACK_NEWS

  return items.slice(0, 3).map((item, index) => {
    const attrs = ((item as Record<string, unknown>).attributes ?? item) as Record<string, unknown>
    const rawDate = (attrs.publishedAt ?? attrs.date ?? '') as string
    const date = rawDate ? new Date(rawDate) : new Date()

    const imgRelation = attrs.image as Record<string, unknown> | undefined
    const imgData = (imgRelation?.data as Record<string, unknown>)?.attributes ?? imgRelation
    const imageUrl = getStrapiImageUrl(imgData as Record<string, unknown>) ?? undefined

    // Format date as DD.MM.YY (matching bmeters.com style)
    const d = String(date.getDate()).padStart(2, '0')
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const y = String(date.getFullYear()).slice(2)

    return {
      id: ((item as Record<string, unknown>).id as number) ?? index + 1,
      isoDate: date.toISOString().split('T')[0],
      displayDate: `${d}.${m}.${y}`,
      title: (attrs.title as string) ?? '',
      excerpt: ((attrs.summary ?? attrs.excerpt) as string) ?? '',
      imageUrl,
      href: (attrs.slug as string) ? `/news/${attrs.slug}` : '/news',
    }
  })
})
</script>
