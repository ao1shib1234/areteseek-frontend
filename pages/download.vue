<template>
  <div class="font-sans">
    <!-- Page header -->
    <section class="bg-gradient-to-br from-[#E8F0FB] to-white py-14">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-[#20427D] mb-4">Downloads</h1>
        <p class="text-lg text-[#585858] max-w-2xl mx-auto leading-relaxed">
          Access product documentation, software tools, certificates, and technical guides.
        </p>
      </div>
    </section>

    <!-- Filter tabs -->
    <section class="bg-white py-10 border-b border-gray-100">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            :class="activeCategory === cat
              ? 'bg-[#0C4DA2] text-white'
              : 'bg-gray-100 text-[#585858] hover:bg-[#E8F0FB] hover:text-[#0C4DA2]'"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Downloads list -->
    <section class="bg-white py-10">
      <div class="max-w-[1400px] mx-auto px-4">
        <div class="flex flex-col gap-3">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="flex items-center justify-between gap-4 p-5 border border-gray-200 rounded-xl hover:border-[#0C4DA2] hover:shadow-sm transition-all group"
          >
            <div class="flex items-center gap-4 flex-1 min-w-0">
              <!-- File icon -->
              <div class="shrink-0 w-10 h-10 rounded-lg bg-[#E8F0FB] flex items-center justify-center">
                <svg class="w-5 h-5 text-[#0C4DA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="text-sm font-semibold text-[#313131] group-hover:text-[#0C4DA2] transition-colors truncate">
                  {{ item.name }}
                </p>
                <p class="text-xs text-[#585858] mt-0.5">{{ item.category }} · {{ item.size }} · {{ item.date }}</p>
              </div>
            </div>
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 flex items-center gap-2 px-4 py-2 bg-[#0C4DA2] text-white text-sm font-semibold rounded-lg hover:bg-[#083780] transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>
        </div>

        <p v-if="filteredItems.length === 0" class="text-center text-[#585858] py-16">
          No downloads available in this category.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

interface DownloadItem {
  id: number
  name: string
  category: string
  size: string
  date: string
  url: string
}

const categories = ['All', 'Catalogues', 'Data Sheets', 'Software', 'Certificates', 'Manuals']
const activeCategory = ref('All')

const downloads: DownloadItem[] = [
  { id: 1, name: '2026 General Catalogue', category: 'Catalogues', size: '12.4 MB', date: 'Mar 2026', url: '#' },
  { id: 2, name: '2025 General Catalogue', category: 'Catalogues', size: '11.8 MB', date: 'Mar 2025', url: '#' },
  { id: 3, name: 'GSD8 Ultrasonic Water Meter — Data Sheet', category: 'Data Sheets', size: '1.2 MB', date: 'Jan 2026', url: '#' },
  { id: 4, name: 'HYDROSPLIT Thermal Energy Meter — Data Sheet', category: 'Data Sheets', size: '980 KB', date: 'Nov 2025', url: '#' },
  { id: 5, name: 'RADIO-3 Remote Reading System — Data Sheet', category: 'Data Sheets', size: '850 KB', date: 'Sep 2025', url: '#' },
  { id: 6, name: 'BMetering KeyGenerator v4.2', category: 'Software', size: '34.6 MB', date: 'Feb 2026', url: 'http://keygenerator.bmetering.com/' },
  { id: 7, name: 'BMetering DataLogger v3.1', category: 'Software', size: '22.1 MB', date: 'Dec 2025', url: '#' },
  { id: 8, name: 'ISO 9001:2015 Certificate', category: 'Certificates', size: '420 KB', date: 'Jun 2025', url: '#' },
  { id: 9, name: 'MID Approval Certificate', category: 'Certificates', size: '680 KB', date: 'May 2025', url: '#' },
  { id: 10, name: 'EPD Environmental Product Declaration', category: 'Certificates', size: '1.1 MB', date: 'Dec 2025', url: '#' },
  { id: 11, name: 'GSD8 Installation Manual', category: 'Manuals', size: '3.4 MB', date: 'Jan 2026', url: '#' },
  { id: 12, name: 'HYDROSPLIT Installation Manual', category: 'Manuals', size: '2.8 MB', date: 'Oct 2025', url: '#' },
]

const filteredItems = computed(() =>
  activeCategory.value === 'All'
    ? downloads
    : downloads.filter(d => d.category === activeCategory.value)
)
</script>
