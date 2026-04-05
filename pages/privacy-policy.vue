<template>
  <div class="font-sans">
    <!-- Page header -->
    <section class="bg-gradient-to-br from-[#E8F0FB] to-white py-14">
      <div class="max-w-[1400px] mx-auto px-4 text-center">
        <h1 class="text-4xl font-extrabold text-[#20427D] mb-4">Privacy Policy</h1>
        <p class="text-[#585858]">Last updated: March 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-white py-16">
      <div class="max-w-3xl mx-auto px-4">
        <div class="prose prose-sm max-w-none">
          <div v-for="section in sections" :key="section.title" class="mb-10">
            <h2 class="text-xl font-bold text-[#20427D] mb-4">{{ section.title }}</h2>
            <div class="text-[#585858] leading-relaxed text-sm space-y-3">
              <p v-for="(para, i) in section.paragraphs" :key="i">{{ para }}</p>
            </div>
          </div>
        </div>

        <!-- Contact for privacy -->
        <div class="mt-12 bg-[#F8FAFC] rounded-xl p-6 border border-gray-200">
          <h3 class="text-base font-bold text-[#20427D] mb-2">Privacy Contact</h3>
          <p class="text-sm text-[#585858]">
            For any questions regarding this Privacy Policy or the processing of your personal data, please contact our Data Protection Officer:
          </p>
          <p class="text-sm font-semibold text-[#0C4DA2] mt-2">B METERS S.r.l. — Via Brigata Re, 33050 Gonars (UD), Italy</p>
          <a href="mailto:privacy@bmeters.com" class="text-sm text-[#0C4DA2] hover:underline">privacy@bmeters.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const sections = [
  {
    title: '1. Data Controller',
    paragraphs: [
      'B METERS S.r.l., with registered office at Via Brigata Re, 33050 Gonars (UD), Italy, is the Data Controller for personal data collected through this website.',
      'B METERS processes personal data in compliance with Regulation (EU) 2016/679 (GDPR) and applicable Italian national data protection legislation.',
    ],
  },
  {
    title: '2. Types of Data Collected',
    paragraphs: [
      'Navigation data: IP addresses, browser type, pages visited, and other technical information automatically collected when you browse this website.',
      'Contact data: name, email address, telephone number, and message content provided when you submit the contact form or request support.',
      'Cookie data: functional and analytical cookies as described in our Cookie Policy.',
    ],
  },
  {
    title: '3. Purpose and Legal Basis for Processing',
    paragraphs: [
      'To respond to your enquiries and provide customer support (legal basis: legitimate interest / contract performance).',
      'To improve website functionality and user experience through anonymised analytics (legal basis: legitimate interest).',
      'To send product news and updates where you have given explicit consent (legal basis: consent).',
    ],
  },
  {
    title: '4. Data Retention',
    paragraphs: [
      'Contact form data is retained for up to 24 months from the date of submission, unless a longer retention period is required by law or ongoing business relationship.',
      'Navigation logs are retained for up to 12 months.',
    ],
  },
  {
    title: '5. Data Sharing',
    paragraphs: [
      'B METERS does not sell personal data to third parties. Data may be shared with service providers acting as data processors (e.g., hosting providers, CRM platforms) under appropriate data processing agreements.',
      'Data may be transferred outside the EU only where adequate safeguards are in place as required by Chapter V of the GDPR.',
    ],
  },
  {
    title: '6. Your Rights',
    paragraphs: [
      'Under the GDPR, you have the right to: access your personal data; request correction of inaccurate data; request erasure of your data; object to or restrict processing; and request data portability.',
      'To exercise any of these rights, please contact our Data Protection Officer at the address provided below.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    paragraphs: [
      'B METERS reserves the right to update this Privacy Policy at any time. Material changes will be communicated via this page with an updated revision date.',
    ],
  },
]
</script>
