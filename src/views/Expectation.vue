<template>
    <section>
        <div id="page-content" class="w-full overflow-scroll h-full">
            <BackButton />
            <p v-if="locale === 'en'" class="text-5xl is_c text-gold italic text-center mb-2">A Indian Wedding</p>
            <p v-if="locale === 'ja'" class="text-4xl cg_s text-gold text-center mb-2">インドの結婚式</p>
            <img src="/src/assets/deco/deco11.png" class="object-contain my-4 w-30 m-auto">
            <img src="/src/assets/wedding/in-weding-2.png" class="w-full object-contain mb-4">
            <div class="px-4 mb-16">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">{{ $t('more_merrier') }}</p>
                <p class="mt-4 text-center cg_s text-lg opacity-90">{{ $t('more_merrier_desc') }}</p>
                <img src="/src/assets/wedding/in-wedding-1.jpeg" class="w-full object-contain my-4 rounded-2xl">
            </div>
            <div class="px-4 mb-8">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">{{ $t('dress_code') }}</p>
                <p class="mt-4 text-center cg_s text-lg opacity-90">{{ $t('dress_code_desc') }}</p><img
                    src="/src\assets\wedding\in-wedding-3.png" class="w-full object-contain my-4 rounded-2xl"><img
                    src="/src/assets/wedding/in-wedding-4.png" class="w-full object-contain my-4 rounded-2xl">
            </div>
            <div class="px-4 mb-20">
                <p class="text-3xl text-gold mb-2 mt-8 text-center cg_s">{{ $t('gift') }}</p>
                <p class="mt-4 text-center cg_s text-lg opacity-90">{{ $t('gift_desc') }}</p><img src="/src/assets/deco/deco13.png" class="m-auto mb-4 mt-8 w-20"> 
                <p class="text-start cg_s text-gold text-lg">{{ $t('more_info') }}
                    <br> ▹ 
                    <a href="http://www.kvccdocs.com/KVCC/2013-Fall/SOC101-HYA/content/L-06/Indian%20Wedding%20Traditions.pdf"
                        target="_blank" rel="noopener noreferrer"
                        class="text-stroke underline! text-white opacity-90 text-md italic">{{ $t('more_info_1') }}
                    </a>
                    <br>▹ 
                    <a href="https://www.theknot.com/content/hindu-wedding-guest-qa" target="_blank"
                        rel="noopener noreferrer" class="text-stroke underline! text-md italic text-white opacity-90">
                        {{ $t('more_info_2') }}
                    </a>
                </p>
            </div>
        </div>
        <div class="relative">
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
                <LanguageChanger />
            </div>
            <DownFrame />
        </div>
    </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import DownFrame from '../components/DownFrame.vue';
import LanguageChanger from '../components/LanguageChanger.vue';
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>