<template>
  <div>
    <HeroBanner />
    <ProductCategories />
    <HomeSections />
    <NewsGrid />
  </div>
</template>

<script setup>
import HeroBanner from '~/components/home/HeroBanner.vue'
import ProductCategories from '~/components/home/ProductCategories.vue'
import HomeSections from '~/components/home/HomeSections.vue'
import NewsGrid from '~/components/home/NewsGrid.vue'

definePageMeta({ layout: 'default' })
</script>
