<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
  from: 'home' | 'guide' | 'rsvp'
}>()
const footerLeftClass = computed(() => {
  switch (props.from) {
    case 'home':
      return 'left-33'
    case 'guide':
      return 'left-36'
    case 'rsvp':
      return ''
    case 'story':
      return 'left-36'
    default:
      return 'opacity-0'
  }
})

const { locale } = useI18n()

const changeLang = (lang: 'en' | 'ja') => {
  locale.value = lang
  localStorage.setItem('invite-lang', locale.value);
}
</script>

<template>
  <div class="relative">
    <img src="/src/assets/down_frame2.png" alt="down frame" class="scale-130 z-10 pointer-events-none" />
    <div class="flex gap-4 mb-30 w-fit m-auto cg_s text-lg absolute -bottom-5 left-33 z-20" :class="footerLeftClass">
      <button @click="changeLang('en')" :disabled="locale === 'en'" :class="[
        'w-15 h-10 flex items-center justify-center cursor-pointer',
        locale === 'en'
          ? 'bg-gold text-gray-600'
          : 'text-gold border border-gold'
      ]">
        EN
      </button>

      <button @click="changeLang('ja')" :disabled="locale === 'ja'" :class="[
        'w-15 h-10 flex items-center justify-center cursor-pointer',
        locale === 'ja'
          ? 'bg-gold text-gray-600'
          : 'text-gold border border-gold'
      ]">
        JP
      </button>
    </div>
  </div>
</template>