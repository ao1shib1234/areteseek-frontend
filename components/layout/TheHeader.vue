<template>
  <header class="w-full font-sans sticky top-0 z-50 bg-white border-b border-[#e8e8e8]">
    <!-- Single 60px nav bar matching bmeters.com original layout -->
    <nav>
      <div class="max-w-[1440px] mx-auto px-4 flex items-center justify-between" style="height: 60px;">
        <!-- Logo -->
        <a href="/" class="flex items-center no-underline shrink-0 mr-6">
          <img
            src="https://www.bmeters.com/wp-content/uploads/2021/05/logo.svg"
            alt="B METERS metering solutions"
            width="130"
            height="38"
            class="w-auto"
            style="height: 38px;"
          />
        </a>

        <!-- Left nav links (Products dropdown + main links) -->
        <ul class="hidden md:flex items-center list-none m-0 p-0 gap-0 flex-1">
          <!-- Products with dropdown -->
          <li class="relative" ref="productsRef">
            <button
              class="flex items-center gap-1 px-3 py-2 font-semibold text-[#333] hover:text-[#20427D] transition-colors duration-150"
              style="font-size: 14px;"
              aria-haspopup="true"
              :aria-expanded="productsOpen"
              @click.stop="productsOpen = !productsOpen"
              @keydown.escape="productsOpen = false"
            >
              {{ $t('nav.products') }}
              <svg class="w-3 h-3 transition-transform duration-200" :class="{ 'rotate-180': productsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Products dropdown -->
            <div
              v-show="productsOpen"
              class="absolute left-0 top-full bg-white border border-[#e0e0e0] shadow-lg z-50"
              style="min-width: 220px; margin-top: 0;"
              @click.stop
            >
              <a
                v-for="cat in productCategories"
                :key="cat.key"
                :href="cat.href"
                class="flex items-center gap-2 px-4 py-3 text-[#333] hover:bg-[#f0f5ff] hover:text-[#20427D] transition-colors no-underline border-b border-[#f0f0f0] last:border-0"
                style="font-size: 14px;"
                @click="productsOpen = false"
              >
                <svg class="w-3.5 h-3.5 text-[#0C4DA2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                {{ $t(cat.key) }}
              </a>
            </div>
          </li>

          <!-- Main nav links -->
          <li v-for="link in mainNavLinks" :key="link.key">
            <a
              :href="link.href"
              class="block px-3 py-2 font-semibold text-[#333] hover:text-[#20427D] transition-colors no-underline whitespace-nowrap"
              style="font-size: 14px;"
            >
              {{ $t(link.key) }}
            </a>
          </li>
        </ul>

        <!-- Right: auxiliary links + language + search (all in same row) -->
        <div class="hidden md:flex items-center gap-4 ml-4">
          <a
            v-for="link in auxiliaryLinks"
            :key="link.key"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="text-[#585858] hover:text-[#20427D] transition-colors no-underline whitespace-nowrap"
            style="font-size: 12px;"
          >
            {{ $t(link.key) }}
          </a>

          <!-- Language switcher -->
          <div class="flex items-center gap-1 border-l border-[#d0d0d0] pl-3">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              :class="[
                'text-xs font-semibold px-1 py-0.5 transition-colors duration-150',
                currentLocale === locale.code
                  ? 'text-[#20427D] font-bold'
                  : 'text-[#585858] hover:text-[#20427D]',
              ]"
              @click="switchLocale(locale.code)"
            >
              {{ locale.label }}
            </button>
          </div>

          <!-- Search icon -->
          <button
            class="flex items-center justify-center text-[#585858] hover:text-[#20427D] transition-colors"
            aria-label="Search"
          >
            <svg style="width: 17px; height: 17px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <span
            v-for="i in 3"
            :key="i"
            class="block w-5 h-0.5 bg-[#333] transition-all duration-200"
          />
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="mobileOpen"
        class="md:hidden border-t border-[#e8e8e8] bg-white"
      >
        <div class="max-w-[1400px] mx-auto px-4 py-3 flex flex-col gap-1">
          <button
            class="flex items-center justify-between w-full px-2 py-2.5 text-sm font-semibold text-[#333] hover:text-[#20427D] transition-colors border-b border-[#f0f0f0]"
            @click="productsOpen = !productsOpen"
          >
            {{ $t('nav.products') }}
            <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': productsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="productsOpen" class="pl-4 flex flex-col gap-0.5 py-1">
            <a
              v-for="cat in productCategories"
              :key="cat.key"
              :href="cat.href"
              class="block px-2 py-2 text-sm text-[#585858] hover:text-[#20427D] no-underline border-b border-[#f5f5f5] last:border-0"
              @click="mobileOpen = false; productsOpen = false"
            >
              {{ $t(cat.key) }}
            </a>
          </div>

          <a
            v-for="link in mainNavLinks"
            :key="link.key"
            :href="link.href"
            class="block px-2 py-2.5 text-sm font-semibold text-[#333] hover:text-[#20427D] no-underline border-b border-[#f0f0f0] last:border-0"
            @click="mobileOpen = false"
          >
            {{ $t(link.key) }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const currentLocale = computed(() => locale.value)
const productsOpen = ref(false)
const mobileOpen = ref(false)
const productsRef = ref<HTMLElement | null>(null)

const availableLocales = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
]

const auxiliaryLinks = [
  { key: 'nav.commercialInfo', href: '/contacts' },
  { key: 'nav.technicalSupport', href: 'https://ticket.bmeters.com/hc/en-us', external: true },
  { key: 'nav.downloads', href: '/download' },
  { key: 'nav.softwareActivation', href: 'http://keygenerator.bmetering.com/', external: true },
]

const productCategories = [
  { key: 'products.categories.waterMetering', href: '/product-category/water-metering' },
  { key: 'products.categories.thermalEnergyMetering', href: '/product-category/thermal-energy-metering' },
  { key: 'products.categories.remoteReadingSystems', href: '/product-category/remote-reading-systems' },
]

const mainNavLinks = [
  { key: 'nav.meterReadingService', href: '/b-metering-cloud' },
  { key: 'nav.company', href: '/company' },
  { key: 'nav.news', href: '/news' },
  { key: 'nav.contacts', href: '/contacts' },
]

function switchLocale(code: string) {
  setLocale(code)
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

function handleOutsideClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (productsRef.value && !productsRef.value.contains(target)) {
    productsOpen.value = false
  }
  if (!target.closest('header')) {
    mobileOpen.value = false
  }
}
</script>
