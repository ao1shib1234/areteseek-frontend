<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
})

const baseClasses = [
  'inline-flex',
  'items-center',
  'justify-center',
  'font-semibold',
  'rounded-pill',
  'transition-colors',
  'duration-200',
  'cursor-pointer',
  'no-underline',
  'focus:outline-none',
  'focus:ring-2',
  'focus:ring-offset-2',
  'focus:ring-primary',
  'disabled:opacity-50',
  'disabled:cursor-not-allowed',
]

const variantClasses: Record<string, string[]> = {
  primary: [
    'bg-primary',
    'text-white',
    'border',
    'border-primary',
    'hover:bg-primary-700',
    'hover:border-primary-700',
  ],
  secondary: [
    'bg-secondary',
    'text-white',
    'border',
    'border-secondary',
    'hover:bg-secondary-700',
    'hover:border-secondary-700',
  ],
  outline: [
    'bg-transparent',
    'text-primary',
    'border',
    'border-primary',
    'hover:bg-primary',
    'hover:text-white',
  ],
}

const sizeClasses: Record<string, string[]> = {
  sm: ['px-4', 'py-1.5', 'text-sm'],
  md: ['px-6', 'py-2.5', 'text-base'],
  lg: ['px-9', 'py-3', 'text-xl'],
}

const buttonClasses = computed(() => [
  ...baseClasses,
  ...(variantClasses[props.variant] ?? variantClasses.primary),
  ...(sizeClasses[props.size] ?? sizeClasses.md),
])
</script>
