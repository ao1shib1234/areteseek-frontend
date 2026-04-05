<template>
  <!-- 1. B METERING Cloud teaser -->
  <section style="background: #f5f0eb; padding: 40px 16px;">
    <div class="mx-auto text-center" style="max-width: 700px;">
      <p style="font-size: 16px; color: #444; line-height: 1.7; margin-bottom: 24px;">
        {{ cloudTeaserText }}
      </p>
      <a
        :href="cloudTeaserButtonLink"
        style="display: inline-block; background: #20427D; color: #fff; font-weight: 700; font-size: 15px; padding: 12px 32px; text-decoration: none;"
        class="hover:opacity-90 transition-opacity"
      >
        {{ cloudTeaserButtonText }}
      </a>
    </div>
  </section>

  <!-- 2. Solutions — text left, image right -->
  <section style="background: #f2f2f2; padding: 80px 16px;">
    <div class="mx-auto" style="max-width: 1400px;">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 min-w-0">
          <div style="width: 40px; height: 4px; background: #1C96C6; margin-bottom: 20px;"></div>
          <h2 style="font-size: 36px; font-weight: 700; color: #20427D; line-height: 1.2; margin-bottom: 20px;">
            {{ solutionsTitle }}
          </h2>
          <p style="font-size: 15px; color: #555; line-height: 1.7; margin-bottom: 16px;">
            {{ solutionsParagraph1 }}
          </p>
          <p v-if="solutionsParagraph2" style="font-size: 15px; color: #555; line-height: 1.7; margin-bottom: 28px;">
            {{ solutionsParagraph2 }}
          </p>
          <a
            href="/company"
            style="display: inline-block; background: #20427D; color: #fff; font-weight: 700; font-size: 15px; padding: 12px 28px; text-decoration: none;"
            class="hover:opacity-90 transition-opacity"
          >
            {{ solutionsButtonText }}
          </a>
        </div>
        <div class="flex-1 min-w-0" style="max-width: 480px;">
          <img :src="solutionsImageUrl" alt="B METERS production facility" style="width: 100%; height: auto; display: block;" />
        </div>
      </div>
    </div>
  </section>

  <!-- 3. Products range — image left, text right -->
  <section style="background: #f2f2f2; padding: 80px 16px;">
    <div class="mx-auto" style="max-width: 1400px;">
      <div class="flex flex-col md:flex-row-reverse items-center gap-12">
        <div class="flex-1 min-w-0">
          <div style="width: 40px; height: 4px; background: #1C96C6; margin-bottom: 20px;"></div>
          <h2 style="font-size: 36px; font-weight: 700; color: #20427D; line-height: 1.2; margin-bottom: 20px;">
            {{ productsTitle }}
          </h2>
          <p style="font-size: 15px; color: #555; line-height: 1.7; margin-bottom: 28px;">
            {{ productsParagraph }}
          </p>
          <a
            href="/products"
            style="display: inline-block; background: #20427D; color: #fff; font-weight: 700; font-size: 15px; padding: 12px 28px; text-decoration: none;"
            class="hover:opacity-90 transition-opacity"
          >
            {{ productsButtonText }}
          </a>
        </div>
        <div class="flex-1 min-w-0" style="max-width: 480px;">
          <img :src="productsImageUrl" alt="B METERS electronics assembly" style="width: 100%; height: auto; display: block;" />
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Why choose us — text left, image right -->
  <section style="background: #f2f2f2; padding: 80px 16px;">
    <div class="mx-auto" style="max-width: 1400px;">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 min-w-0">
          <div style="width: 40px; height: 4px; background: #1C96C6; margin-bottom: 20px;"></div>
          <h2 style="font-size: 36px; font-weight: 700; color: #20427D; line-height: 1.2; margin-bottom: 20px;">
            {{ whyTitle }}
          </h2>
          <p style="font-size: 15px; color: #555; line-height: 1.7; margin-bottom: 28px;">
            {{ whyParagraph }}
          </p>
          <a
            href="/company"
            style="display: inline-block; background: #20427D; color: #fff; font-weight: 700; font-size: 15px; padding: 12px 28px; text-decoration: none;"
            class="hover:opacity-90 transition-opacity"
          >
            {{ whyButtonText }}
          </a>
        </div>
        <div class="flex-1 min-w-0" style="max-width: 480px;">
          <img :src="whyImageUrl" alt="B METERS facility" style="width: 100%; height: auto; display: block; filter: grayscale(20%);" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ── Fallback 内容（Strapi 无数据时显示）──────────────────────────────────────
const FB = {
  cloudTeaserText: 'It brings the water and heat metering system to an upper level, thanks to the innovative web platform that automatically stores all reading data on the cloud.',
  cloudTeaserButtonText: 'Start now',
  cloudTeaserButtonLink: '/b-metering-cloud',

  solutionsTitle: 'Solutions for water and heat metering',
  solutionsParagraph1: 'B METERS is an Italian company that has been designing, producing and distributing instruments and solutions for measuring the consumption of water and energy used for heating and cooling, for over 30 years.',
  solutionsParagraph2: 'The yearly production currently exceeds 2,200,000 units putting B METERS in a leading position both at national and European level.',
  solutionsButtonText: 'Find out more',
  solutionsImage: 'https://www.bmeters.com/wp-content/uploads/2021/05/B-METERS_LS_8617-scaled-aspect-ratio-860-530.jpg',

  productsTitle: 'A range of products for every need',
  productsParagraph: 'The product range includes digital and ultrasonic SMART water meters, turbine (velocity) type single and multi-jet water meters with mechanical or magnetic transmission, Woltmann meters, irrigation meters, flow meters, thermal energy meters and heat cost allocators with direct reading or complete with integrated modules for the remote transmission of the consumption data.',
  productsButtonText: 'View our products',
  productsImage: 'https://www.bmeters.com/wp-content/uploads/2021/05/assemblaggio-elettronica-aspect-ratio-860-530.jpg',

  whyTitle: 'Why choose us',
  whyParagraph: 'B METERS specialises in the residential sector and is the only Italian company with 100% real and visible integration: a single entity takes care of every phase of the production process, from design to manufacturing, including research and development, electronics and mechanics.',
  whyButtonText: 'Continue to read',
  whyImage: 'https://www.bmeters.com/wp-content/uploads/2021/05/B-METERS_LS_8617-scaled-aspect-ratio-860-530.jpg',
}

// ── 从 HeroBanner 共享的 homepage 数据（同一 useAsyncData key 会复用缓存）──
const { fetchHomepage } = useApi()
const { data: homepageData } = await useAsyncData('homepage', fetchHomepage)

const entry = computed(() => {
  const raw = homepageData.value?.data ?? {}
  return (raw.attributes ?? raw) as Record<string, unknown>
})

function mediaUrl(field: string): string {
  const rel = entry.value?.[field] as Record<string, unknown> | undefined
  const media = (rel?.data as Record<string, unknown>)?.attributes ?? rel
  return getStrapiImageUrl(media as Record<string, unknown>) ?? ''
}

const cloudTeaserText       = computed(() => (entry.value?.cloudTeaserText as string)       || FB.cloudTeaserText)
const cloudTeaserButtonText = computed(() => (entry.value?.cloudTeaserButtonText as string)  || FB.cloudTeaserButtonText)
const cloudTeaserButtonLink = computed(() => (entry.value?.cloudTeaserButtonLink as string)  || FB.cloudTeaserButtonLink)

const solutionsTitle        = computed(() => (entry.value?.solutionsTitle as string)         || FB.solutionsTitle)
const solutionsParagraph1   = computed(() => (entry.value?.solutionsParagraph1 as string)    || FB.solutionsParagraph1)
const solutionsParagraph2   = computed(() => (entry.value?.solutionsParagraph2 as string)    || FB.solutionsParagraph2)
const solutionsButtonText   = computed(() => (entry.value?.solutionsButtonText as string)    || FB.solutionsButtonText)
const solutionsImageUrl     = computed(() => mediaUrl('solutionsImage')                       || FB.solutionsImage)

const productsTitle         = computed(() => (entry.value?.productsTitle as string)          || FB.productsTitle)
const productsParagraph     = computed(() => (entry.value?.productsParagraph as string)      || FB.productsParagraph)
const productsButtonText    = computed(() => (entry.value?.productsButtonText as string)     || FB.productsButtonText)
const productsImageUrl      = computed(() => mediaUrl('productsImage')                        || FB.productsImage)

const whyTitle              = computed(() => (entry.value?.whyTitle as string)               || FB.whyTitle)
const whyParagraph          = computed(() => (entry.value?.whyParagraph as string)           || FB.whyParagraph)
const whyButtonText         = computed(() => (entry.value?.whyButtonText as string)          || FB.whyButtonText)
const whyImageUrl           = computed(() => mediaUrl('whyImage')                             || FB.whyImage)
</script>
