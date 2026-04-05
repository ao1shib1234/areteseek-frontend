<template>
  <div class="font-sans">
    <!-- Page header -->
    <section class="bg-gradient-to-br from-[#E8F0FB] to-white py-14">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-[#20427D] mb-4">Whistleblowing</h1>
        <p class="text-lg text-[#585858] max-w-2xl mx-auto leading-relaxed">
          Confidential reporting channel for suspected violations of laws, regulations, or internal company policies.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4">
        <!-- Info box -->
        <div class="bg-[#E8F0FB] border-l-4 border-[#0C4DA2] rounded-r-xl p-6 mb-10">
          <h2 class="text-base font-bold text-[#20427D] mb-2">Confidential &amp; Anonymous Reporting</h2>
          <p class="text-sm text-[#585858] leading-relaxed">
            B METERS is committed to maintaining a culture of integrity and transparency. This channel allows you to report suspected violations confidentially. Your identity will be protected in accordance with Italian Legislative Decree 24/2023 (implementation of EU Directive 2019/1937).
          </p>
        </div>

        <!-- What can be reported -->
        <h2 class="text-xl font-bold text-[#20427D] mb-5">What Can Be Reported?</h2>
        <ul class="flex flex-col gap-3 mb-10">
          <li v-for="item in reportableItems" :key="item" class="flex items-start gap-3">
            <svg class="w-5 h-5 text-[#0C4DA2] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-sm text-[#585858]">{{ item }}</span>
          </li>
        </ul>

        <!-- Reporting form -->
        <div class="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-200">
          <h2 class="text-xl font-bold text-[#20427D] mb-6">Submit a Report</h2>

          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <!-- Optional name -->
            <div class="flex flex-col gap-1.5">
              <label for="reporter-name" class="text-sm font-semibold text-[#313131]">
                Your Name <span class="text-[#585858] font-normal">(optional — you may report anonymously)</span>
              </label>
              <input
                id="reporter-name"
                v-model="form.name"
                type="text"
                placeholder="Anonymous"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0C4DA2] focus:ring-2 focus:ring-[#0C4DA2]/20 transition-all"
              >
            </div>

            <!-- Category -->
            <div class="flex flex-col gap-1.5">
              <label for="category" class="text-sm font-semibold text-[#313131]">
                Category <span class="text-red-500">*</span>
              </label>
              <select
                id="category"
                v-model="form.category"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0C4DA2] focus:ring-2 focus:ring-[#0C4DA2]/20 transition-all"
                :class="{ 'border-red-400': errors.category }"
              >
                <option value="">Select a category…</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
              <p v-if="errors.category" class="text-xs text-red-500">{{ errors.category }}</p>
            </div>

            <!-- Report text -->
            <div class="flex flex-col gap-1.5">
              <label for="report" class="text-sm font-semibold text-[#313131]">
                Report Details <span class="text-red-500">*</span>
              </label>
              <textarea
                id="report"
                v-model="form.report"
                rows="6"
                placeholder="Please describe the suspected violation in as much detail as possible…"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#0C4DA2] focus:ring-2 focus:ring-[#0C4DA2]/20 transition-all resize-none"
                :class="{ 'border-red-400': errors.report }"
              />
              <p v-if="errors.report" class="text-xs text-red-500">{{ errors.report }}</p>
            </div>

            <!-- Success -->
            <div v-if="submitted" class="flex items-start gap-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <svg class="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Your report has been submitted. It will be reviewed confidentially by the designated responsible person.
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="py-3 px-6 bg-[#0C4DA2] text-white font-semibold text-sm rounded-xl hover:bg-[#083780] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Submitting…' : 'Submit Report' }}
            </button>
          </form>
        </div>

        <!-- Protection note -->
        <div class="mt-8 text-xs text-[#585858] leading-relaxed">
          <strong class="text-[#313131]">Protection against retaliation:</strong>
          Whistleblowers who report in good faith are protected from any form of retaliation in accordance with D.Lgs. 24/2023. Reports are treated with strict confidentiality.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const form = reactive({ name: '', category: '', report: '' })
const errors = reactive<{ category?: string; report?: string }>({})
const isSubmitting = ref(false)
const submitted = ref(false)

const categories = [
  'Financial irregularities or fraud',
  'Corruption or bribery',
  'Safety or environmental violations',
  'Data protection violations',
  'Workplace harassment or discrimination',
  'Other legal or regulatory violations',
]

const reportableItems = [
  'Violations of laws and regulations',
  'Financial fraud, corruption, or misappropriation',
  'Workplace safety or environmental violations',
  'Data protection and privacy breaches',
  'Conflicts of interest or abuse of power',
  'Any conduct contrary to B METERS code of ethics',
]

function validate() {
  errors.category = undefined
  errors.report = undefined
  let valid = true
  if (!form.category) { errors.category = 'Please select a category.'; valid = false }
  if (!form.report.trim() || form.report.trim().length < 20) {
    errors.report = 'Please provide at least 20 characters of detail.'; valid = false
  }
  return valid
}

async function handleSubmit() {
  if (!validate()) return
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  submitted.value = true
  isSubmitting.value = false
  Object.assign(form, { name: '', category: '', report: '' })
}
</script>
