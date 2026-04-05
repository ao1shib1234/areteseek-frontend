<template>
  <div class="font-sans">
    <!-- Page header -->
    <section class="bg-gradient-to-br from-[#E8F0FB] to-white py-14">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-[#20427D] mb-4">Cookie Settings</h1>
        <p class="text-lg text-[#585858] max-w-2xl mx-auto leading-relaxed">
          Manage your cookie preferences. You can enable or disable different types of cookies below.
        </p>
      </div>
    </section>

    <!-- Cookie categories -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4">
        <div class="flex flex-col gap-6 mb-10">
          <div
            v-for="cat in cookieCategories"
            :key="cat.id"
            class="border border-gray-200 rounded-xl p-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-base font-bold text-[#20427D] mb-1">{{ cat.title }}</h3>
                <p class="text-sm text-[#585858] leading-relaxed">{{ cat.description }}</p>
              </div>
              <!-- Toggle -->
              <button
                class="shrink-0 relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0C4DA2]/30"
                :class="cat.required || preferences[cat.id] ? 'bg-[#0C4DA2]' : 'bg-gray-300'"
                :disabled="cat.required"
                :aria-label="`Toggle ${cat.title}`"
                @click="!cat.required && toggleCategory(cat.id)"
              >
                <span
                  class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                  :class="cat.required || preferences[cat.id] ? 'translate-x-6' : 'translate-x-0'"
                />
              </button>
            </div>
            <div v-if="cat.required" class="mt-2">
              <span class="text-[11px] font-semibold text-[#585858] bg-gray-100 px-2 py-0.5 rounded-full">Always active</span>
            </div>
          </div>
        </div>

        <!-- Save button -->
        <div class="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <button
            class="px-6 py-3 border border-gray-300 text-[#585858] font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors"
            @click="rejectAll"
          >
            Reject all optional
          </button>
          <div class="flex items-center gap-3">
            <button
              class="px-6 py-3 border border-[#0C4DA2] text-[#0C4DA2] font-semibold text-sm rounded-xl hover:bg-[#E8F0FB] transition-colors"
              @click="acceptAll"
            >
              Accept all
            </button>
            <button
              class="px-6 py-3 bg-[#0C4DA2] text-white font-semibold text-sm rounded-xl hover:bg-[#083780] transition-colors"
              @click="savePreferences"
            >
              Save preferences
            </button>
          </div>
        </div>

        <p v-if="saved" class="text-center text-sm text-[#008B2C] font-semibold mt-5">
          Your cookie preferences have been saved.
        </p>

        <!-- Cookie policy link -->
        <p class="text-xs text-[#585858] mt-8 text-center">
          For more information, please read our
          <NuxtLink to="/privacy-policy" class="text-[#0C4DA2] hover:underline">Privacy Policy</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const cookieCategories = [
  {
    id: 'essential',
    title: 'Essential Cookies',
    description: 'These cookies are necessary for the website to function properly and cannot be disabled. They include session management, security, and basic functionality.',
    required: true,
  },
  {
    id: 'analytics',
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    required: false,
  },
  {
    id: 'marketing',
    title: 'Marketing Cookies',
    description: 'These cookies are used to track visitors across websites to display ads that are relevant and engaging for the individual user.',
    required: false,
  },
]

const preferences = reactive<Record<string, boolean>>({
  essential: true,
  analytics: false,
  marketing: false,
})

const saved = ref(false)

function toggleCategory(id: string) {
  preferences[id] = !preferences[id]
  saved.value = false
}

function acceptAll() {
  cookieCategories.forEach(c => { preferences[c.id] = true })
}

function rejectAll() {
  cookieCategories.filter(c => !c.required).forEach(c => { preferences[c.id] = false })
}

function savePreferences() {
  // In a real implementation, persist to localStorage or cookie
  saved.value = true
}
</script>
