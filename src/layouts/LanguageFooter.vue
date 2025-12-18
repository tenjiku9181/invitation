<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLang = (lang: 'en' | 'ja') => {
    locale.value = lang
    localStorage.setItem('invite-lang', locale.value);
}
</script>

<template>
    <!-- Decorative Frame -->
    <img src="/src/assets/down_frame2.png" alt="down frame"
        class="absolute bottom-5 scale-130 z-10 pointer-events-none" />

    <!-- Language Switcher -->
    <div class="flex gap-4 mb-30 w-fit m-auto cg_s text-lg relative z-20">
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
</template>