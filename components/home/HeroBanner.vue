<template>
  <!-- Hero: video/image bg matching bmeters.com slider height exactly (600px with 60px header) -->
  <section class="relative w-full overflow-hidden" style="height: 600px;">
    <!-- Video background (Vimeo) with dark overlay -->
    <div class="absolute inset-0 overflow-hidden" style="background: #111;">
      <iframe
        src="https://player.vimeo.com/video/673640809?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&autopause=0"
        style="position: absolute; top: 50%; left: 50%; width: 177.78vh; height: 100vh; min-width: 100%; min-height: 100%; transform: translate(-50%, -50%);"
        frameborder="0"
        allow="autoplay; fullscreen"
        title="B METERS Hero Video"
      ></iframe>
      <div class="absolute inset-0" style="background: rgba(0,0,0,0.35);" />
    </div>

    <!-- Center content — button positioned matching original (85px from bottom of hero) -->
    <div class="relative z-10 flex flex-col items-center justify-end h-full px-4 text-center" style="padding-bottom: 85px;">
      <a
        href="/company"
        class="inline-flex items-center gap-2 text-white font-semibold hover:opacity-90 transition-opacity"
        style="background: #20427D; padding: 14px 36px; font-size: 14px; letter-spacing: 0.04em; text-decoration: none;"
      >
        {{ heroButtonText }}
      </a>

      <!-- Scroll indicator — thin down arrow matching original -->
      <div class="mt-4" style="color: rgba(255,255,255,0.75);">
        <svg width="16" height="20" fill="none" stroke="currentColor" viewBox="0 0 16 20" style="display: block;">
          <line x1="8" y1="1" x2="8" y2="15" stroke-width="1.2"/>
          <polyline points="3,11 8,16 13,11" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- Wave separator at bottom matching original onde-bottom (subtle concave white arch ~50px) -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style="z-index: 3;">
      <svg class="relative block w-full" style="height: 50px;" viewBox="0 0 1440 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C480,0 960,0 1440,50 L1440,50 L0,50 Z" fill="white" />
      </svg>
    </div>
  </section>

  <!-- Company description tagline — matching original: 20px gray, full-width with 80px margins, 176px total height -->
  <section class="bg-white" style="padding-top: 50px; padding-bottom: 50px; padding-left: 80px; padding-right: 80px;">
    <p style="font-size: 20px; color: rgb(85, 85, 85); line-height: 1.75; margin: 0; text-align: center;">
      {{ companyDescription }}
    </p>
  </section>
</template>

<script setup lang="ts">
const FALLBACK_HERO_IMAGE = 'https://www.bmeters.com/wp-content/uploads/2021/05/B-METERS_LS_8617-scaled-aspect-ratio-860-530.jpg'
const FALLBACK_BUTTON_TEXT = 'Find out more'
const FALLBACK_DESCRIPTION = 'B METERS srl operates as an independent, specialised company on a national and international level in the water and heat metering sector, bringing a broad offer to the market with complete and integrated solutions.'

const { fetchHomepage } = useApi()
const { data: homepageData } = await useAsyncData('homepage', fetchHomepage)

const entry = computed(() => {
  const raw = homepageData.value?.data ?? {}
  return (raw.attributes ?? raw) as Record<string, unknown>
})

const heroImageUrl = computed(() => {
  const imgField = entry.value?.heroImage as Record<string, unknown> | undefined
  const media = (imgField?.data as Record<string, unknown>)?.attributes ?? imgField
  return getStrapiImageUrl(media as Record<string, unknown>) ?? FALLBACK_HERO_IMAGE
})

const heroButtonText = computed(() =>
  (entry.value?.heroButtonText as string) || FALLBACK_BUTTON_TEXT
)

const companyDescription = computed(() =>
  (entry.value?.companyDescription as string) || FALLBACK_DESCRIPTION
)
</script>
