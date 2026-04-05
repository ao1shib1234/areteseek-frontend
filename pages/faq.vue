<template>
  <div class="font-sans">
    <!-- Page header -->
    <section class="bg-gradient-to-br from-[#E8F0FB] to-white py-14">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-[#20427D] mb-4">FAQ</h1>
        <p class="text-lg text-[#585858] max-w-2xl mx-auto leading-relaxed">
          Frequently asked questions about B METERS products, services, and technical support.
        </p>
      </div>
    </section>

    <!-- FAQ list -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4">
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
              @click="toggleFaq(index)"
            >
              <span class="text-sm font-semibold text-[#20427D]">{{ item.question }}</span>
              <svg
                class="w-5 h-5 text-[#0C4DA2] shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === index }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openIndex === index" class="px-6 pb-5 text-sm text-[#585858] leading-relaxed border-t border-gray-100 pt-4">
              {{ item.answer }}
            </div>
          </div>
        </div>

        <!-- Still have questions -->
        <div class="mt-16 bg-[#E8F0FB] rounded-2xl p-8 text-center">
          <h2 class="text-xl font-bold text-[#20427D] mb-3">Still have questions?</h2>
          <p class="text-sm text-[#585858] mb-6">
            Our technical support team is ready to help you.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NuxtLink
              to="/contacts"
              class="px-6 py-3 bg-[#0C4DA2] text-white font-semibold text-sm rounded-xl hover:bg-[#083780] transition-colors"
            >
              Contact Us
            </NuxtLink>
            <a
              href="https://ticket.bmeters.com/hc/en-us"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 border border-[#0C4DA2] text-[#0C4DA2] font-semibold text-sm rounded-xl hover:bg-[#E8F0FB] transition-colors"
            >
              Open a Support Ticket
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const openIndex = ref<number | null>(null)

function toggleFaq(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'What types of meters does B METERS produce?',
    answer: 'B METERS produces ultrasonic water meters, mechanical water meters, thermal energy meters (heat meters), and remote reading systems. Our product range covers residential, commercial, and industrial applications.',
  },
  {
    question: 'Are B METERS products MID certified?',
    answer: 'Yes. All applicable B METERS meters comply with the Measuring Instruments Directive (MID) 2014/32/EU, which is mandatory for fiscal metering in the European Union. Relevant certifications are available in our Downloads section.',
  },
  {
    question: 'Which wireless protocols do your remote reading systems support?',
    answer: 'Our remote reading systems support wM-Bus (EN 13757), LoRaWAN (Class A/C), NB-IoT, and wired M-Bus. The specific protocol depends on the product model and configuration.',
  },
  {
    question: 'How do I activate the BMetering KeyGenerator software?',
    answer: 'BMetering KeyGenerator can be downloaded from our Downloads page or directly from keygenerator.bmetering.com. After installation, you will need a license key provided with your product purchase. Contact our technical support if you need assistance with activation.',
  },
  {
    question: 'What is the warranty period for B METERS products?',
    answer: 'Standard warranty for B METERS metering products is 2 years from the date of purchase, covering manufacturing defects. Extended warranty options may be available — please contact your sales representative for details.',
  },
  {
    question: 'Where can I find installation manuals and data sheets?',
    answer: 'All product documentation, including installation manuals, data sheets, and technical specifications, is available in our Downloads section. You can filter by document type to find what you need.',
  },
  {
    question: 'How do I submit a technical support request?',
    answer: 'You can open a technical support ticket at ticket.bmeters.com. Alternatively, contact our support team via the Contact Us page on this website.',
  },
  {
    question: 'Does B METERS offer products for heat metering in district heating networks?',
    answer: 'Yes. Our HYDROSPLIT range of thermal energy meters is designed for both residential heating installations and large district heating networks, with accuracy class 2 compliance.',
  },
]
</script>
