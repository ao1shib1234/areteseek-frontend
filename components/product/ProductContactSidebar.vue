<template>
  <aside class="font-sans" style="width: 100%;">
    <!-- Contact card -->
    <div style="border: 1px solid #e5e7eb; background: #fff; padding: 20px; margin-bottom: 16px;">
      <h3
        class="font-bold pb-2 mb-4"
        style="color: #20427D; font-size: 16px; border-bottom: 2px solid #20427D;"
      >
        Contact
      </h3>

      <div class="flex flex-col gap-3" style="font-size: 13px; color: #585858; line-height: 1.65;">
        <!-- Email -->
        <div class="flex items-start gap-2">
          <svg
            class="shrink-0 mt-0.5"
            style="width: 14px; height: 14px; color: #20427D;"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div>
            <span class="font-semibold" style="color: #333;">Email: </span>
            <a
              :href="`mailto:${email}`"
              class="no-underline hover:opacity-80"
              style="color: #0C4DA2;"
            >{{ email }}</a>
          </div>
        </div>

        <!-- Phone -->
        <div v-if="phone" class="flex items-start gap-2">
          <svg
            class="shrink-0 mt-0.5"
            style="width: 14px; height: 14px; color: #20427D;"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
            />
          </svg>
          <div>
            <span class="font-semibold" style="color: #333;">Tel: </span>
            <a
              :href="`tel:${phone.replace(/[\s-]/g, '')}`"
              class="no-underline hover:opacity-80"
              style="color: #0C4DA2;"
            >{{ phone }}</a>
          </div>
        </div>

        <!-- Address -->
        <div v-if="address" class="flex items-start gap-2">
          <svg
            class="shrink-0 mt-0.5"
            style="width: 14px; height: 14px; color: #20427D;"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div>
            <span class="font-semibold" style="color: #333;">Address: </span>
            <span v-html="address.replace(/\n/g, '<br />')" />
          </div>
        </div>
      </div>
    </div>

    <!-- Contact us CTA -->
    <NuxtLink
      to="/contacts"
      class="block text-center text-white font-bold no-underline hover:opacity-90 transition-opacity"
      style="background: #0C4DA2; padding: 12px 16px; font-size: 13px;"
    >
      Get in Touch →
    </NuxtLink>
  </aside>
</template>

<script setup lang="ts">
const FB = {
  email: 'info@bmeters.com',
  phone: '+39 0432 747915',
  address: 'Via Friuli, 3\n33050 Gonars (UD) - Italy',
}

const { fetchSiteSettings } = useApi()
const { data: siteData } = await useAsyncData('site-settings', fetchSiteSettings)

const s = computed(() => {
  const raw = siteData.value?.data ?? {}
  return (raw.attributes ?? raw) as Record<string, unknown>
})

const email = computed(() => (s.value?.hqCommercialEmail as string) || FB.email)
const phone = computed(() => (s.value?.hqPhone as string) || FB.phone)
const address = computed(() => (s.value?.hqAddress as string) || FB.address)
</script>
