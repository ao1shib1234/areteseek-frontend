<template>
  <div class="font-sans">
    <!-- Page header: horizontal gradient banner with breadcrumb (71px) -->
    <section style="background: linear-gradient(to right, rgb(199,230,247) 0%, rgb(243,211,198) 100%); height: 71px; display: flex; align-items: center;">
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 84px; width: 100%;">
        <nav class="flex items-center gap-0.5" style="font-size: 12px; color: #585858;">
          <NuxtLink to="/" class="no-underline hover:text-[#0C4DA2]" style="color: #585858;">Home</NuxtLink>
          <span>›</span>
          <span style="color: #0C4DA2;">News</span>
        </nav>
      </div>
    </section>
    <!-- White space (67px) -->
    <div style="background: #fff; height: 67px;"></div>
    <!-- Dark blue separator bar (6px) -->
    <div style="background: #20427D; height: 6px;"></div>

    <!-- Main content: sidebar + articles -->
    <section class="bg-white" style="padding-top: 36px; padding-bottom: 40px; padding-left: 84px; padding-right: 84px;">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex gap-10 items-start">

          <!-- Left sidebar: year filter -->
          <aside style="width: 200px; flex-shrink: 0;">
            <div style="border: 1px solid #e0e0e0; padding: 16px;">
              <p class="font-semibold mb-3" style="color: #20427D; font-size: 13px;">Filter news by year</p>
              <select
                v-model="selectedYear"
                class="w-full"
                style="border: 1px solid #ccc; padding: 6px 8px; font-size: 13px; color: #333; background: #fff;"
              >
                <option value="">Select year</option>
                <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
              </select>
            </div>
          </aside>

          <!-- Right: articles list -->
          <div class="flex-1 min-w-0">
            <article
              v-for="item in filteredNews"
              :key="item.id"
              class="flex items-start"
              style="border-bottom: 1px solid #e5e7eb; padding-bottom: 48px; margin-bottom: 48px; justify-content: space-between;"
            >
              <!-- Text content -->
              <div class="flex-1 min-w-0">
                <h2 class="font-bold mb-2" style="font-size: 17px; line-height: 1.35; margin: 0 0 6px;">
                  <a :href="item.href" class="no-underline hover:opacity-80" style="color: #20427D;">
                    {{ item.title }}
                    <span style="color: #1C96C6; font-size: 14px; font-weight: 700; margin-left: 8px;">{{ item.displayDate }}</span>
                  </a>
                </h2>
                <p style="color: #585858; font-size: 14px; line-height: 1.75; margin: 8px 0 12px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">
                  {{ item.summary }}
                </p>
                <a
                  :href="item.href"
                  class="inline-flex items-center gap-1 font-semibold no-underline hover:opacity-70"
                  style="color: #0C4DA2; font-size: 13px;"
                >
                  Read
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <!-- Thumbnail image (right side) -->
              <div v-if="item.imageUrl" style="width: 160px; height: 160px; flex-shrink: 0; overflow: hidden;">
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  style="width: 160px; height: 160px; object-fit: cover; display: block;"
                />
              </div>
              <div
                v-else
                style="width: 160px; height: 160px; flex-shrink: 0; background: #f0f4fa; display: flex; align-items: center; justify-content: center;"
              >
                <svg style="width: 40px; height: 40px; color: rgba(12,77,162,0.15);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </article>

            <!-- Empty state -->
            <div v-if="filteredNews.length === 0" class="py-12 text-center">
              <p style="color: #888; font-size: 14px;">No news found for the selected year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'News — B METERS' })

const years = ['2026', '2025', '2024', '2023', '2022', '2021']
const selectedYear = ref('')

interface NewsItem {
  id: number
  isoDate: string
  displayDate: string
  year: string
  title: string
  summary: string
  imageUrl?: string
  href: string
}

const allNews: NewsItem[] = [
  {
    id: 1,
    isoDate: '2026-03-17',
    displayDate: '17.03.26',
    year: '2026',
    title: '2026 GENERAL CATALOGUE',
    summary: '📢 The new B METERS 2026 Catalogue is now online! We are pleased to announce the release of the B METERS 2026 Catalogue, a comprehensive reference to explore all our solutions dedicated to water and thermal energy metering. 💡 The 2026 Catalogue reflects our ongoing commitment to innovation, quality, and digitalization, in order to meet [...]',
    imageUrl: 'https://www.bmeters.com/wp-content/uploads/2026/03/CAT-BM-26-7-aspect-ratio-400-400-1.png',
    href: '/news/2026-general-catalogue',
  },
  {
    id: 2,
    isoDate: '2026-03-10',
    displayDate: '10.03.26',
    year: '2026',
    title: 'BMETERS at MCE 2026 fair, from March 24th to 27th 2026',
    summary: 'We are pleased to announce that Mostra Convegno Expocomfort 2026 will take place in Milan from March 24 to 27, 2026, and BMETERS will be among the exhibitors. During the event, we will present our solutions for smart water and thermal energy metering and management, featuring innovative technologies designed to improve efficiency and sustainability. We [...]',
    imageUrl: 'https://www.bmeters.com/wp-content/uploads/2026/03/MCE2026_post_IG_espo-3-aspect-ratio-400-400-1.jpg',
    href: '/news/mce-2026',
  },
  {
    id: 3,
    isoDate: '2025-12-18',
    displayDate: '18.12.25',
    year: '2025',
    title: 'EPD certification (Environmental Product Declaration)',
    summary: 'B METERS obtains the EPD – Environmental Product Declaration, confirming our commitment to environmental sustainability and transparent reporting of environmental impacts throughout the product lifecycle.',
    imageUrl: undefined,
    href: '/news/epd-certification',
  },
  {
    id: 4,
    isoDate: '2025-09-22',
    displayDate: '22.09.25',
    year: '2025',
    title: 'H2O Fair in Bologna, from 7th to 9th October 2025',
    summary: 'We are pleased to announce that also this year we will be attending Accadueo 2025! The international exhibition dedicated to the entire water sector supply chain. You will find us at Hall 25, Stand A7.',
    imageUrl: undefined,
    href: '/news/h2o-fair-2025',
  },
  {
    id: 5,
    isoDate: '2025-07-22',
    displayDate: '22.07.25',
    year: '2025',
    title: 'BMETERING KEYGENERATOR: New functionality for Wireless M-Bus encryption keys',
    summary: 'From August 1st, 2025, it will be possible to view the individual encryption keys of the purchased wM-Bus devices. The "View wM-Bus Keys" function will be available, allowing users to view the keys associated with the devices.',
    imageUrl: undefined,
    href: '/news/keygenerator-wmbus-keys',
  },
  {
    id: 6,
    isoDate: '2024-10-29',
    displayDate: '29.10.24',
    year: '2024',
    title: 'REBUILD UKRAINE 2024',
    summary: 'BMETERS is excited to announce its participation in the REBUILD UKRAINE 2024 fair, which will be held from November 13rd to 14th, 2024, in Warsaw.',
    imageUrl: undefined,
    href: '/news/rebuild-ukraine-2024',
  },
  {
    id: 7,
    isoDate: '2024-09-26',
    displayDate: '26.09.24',
    year: '2024',
    title: 'HYDRODIGIT-M1, MID HOMOLOGATED',
    summary: 'We are proud to inform you that we have obtained MID approval for our HYDRODIGIT-M1, from size DN15 to size DN50 and soon we will launch it on the market.',
    imageUrl: undefined,
    href: '/news/hydrodigit-m1-mid',
  },
]

const filteredNews = computed(() =>
  selectedYear.value
    ? allNews.filter(item => item.year === selectedYear.value)
    : allNews
)
</script>
