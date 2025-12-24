<template>
  <section>
    <div id="page-content" class="w-full overflow-scroll h-full overflow-x-hidden">
      <BackButton />
      <p v-if="locale === 'en'" class="text-5xl is_c text-gold italic text-center mb-2">Us</p>
      <p v-if="locale === 'ja'" class="text-3xl cg_s text-gold text-center mb-2">結婚までの物語</p>
      <div class="w-4/5 mx-auto aspect-square overflow-hidden my-6 relative">
        <img src="/src\assets\deco\frame.png" alt="Our Story Decoration"
          class="w-full h-full object-cover absolute top-0 left-0 z-10">
        <img src="/src\assets\img\us2.png" alt="Our Story" class="h-auto mb-6 pt-5 w-[90%] mx-auto">
      </div>
      <div class="px-4 pt-6">
        <p class="text-gold text-3xl text-center mb-4 cg_s">{{ $t('story_1_title') }}</p>
        <p class="text-center text-lg cg_s mb-4 opacity-90">{{ $t('story_1_desc') }}</p>
        <div class="flex justify-items-start flex-col opacity-90">
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">{{ $t('story_1_b') }}</span><br>
          </div>
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg">{{ $t('story_1_g') }}</span>
          </div>
        </div>
      </div>
      <div class="w-full relative h-140">
        <img src="/src\assets\deco\deco15.png" alt="Our Story"
          class="absolute h-auto mb-6 w-[85%] mx-auto left-1/2 -translate-x-1/2 z-10 top-2.5">
        <img src="/src\assets\img\groom2.png" alt="Our Story"
          class="absolute h-auto mb-6 w-[60%] mx-auto top-32.5 left-0 z-0">
        <div
          class="absolute w-[50%] mx-auto top-60 -right-2.5 z-0 border-2 border-gold rounded-lg rounded-t-full overflow-hidden">
          <img src="/src\assets\img\bride2.png" alt="Our Story" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="mt-6">
        <p class="text-gold text-3xl text-center mb-4 cg_s">{{$t('story_2_title')}}</p>
        <p class="px-4 mb-14 text-center cg_s text-lg opacity-90">{{ $t('story_2_desc') }}</p>
        <div class="w-full flex my-6 relative">
          <img src="/src\assets\img\us3.png" alt="Our Story 3" class="w-[50%] h-auto">
          <img src="/src\assets\img\us4.png" alt="Our Story 4" class="w-[50%] h-auto">
          <img src="/src\assets\deco\deco6.png" alt="Our Story Decoration"
            class="absolute h-auto mb-6 w-[35%] -top-7.5 left-1/2 -translate-x-1/2 z-10">
        </div>
        <div class="px-4">
          <div class="flex justify-items-start flex-col opacity-90">
            <div class="text-start">
              <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">{{ $t('story_2_b') }}</span><br>
            </div>
            <div class="text-start">
              <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg">{{ $t('story_2_g') }}</span>
            </div>
          </div>

        </div>
      </div>
      <p class="text-gold text-3xl text-center mb-4 mt-10 cg_s">{{ $t('story_3_title') }}</p>
      <div class="px-4 text-center cg_s mb-4">
        <p class="text-lg">{{ $t('story_3_desc') }}</p>
        <div class="flex justify-items-start flex-col  opacity-90">
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">{{ $t('story_3_b') }}</span>
            <br>
          </div>
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg ">{{ $t('story_3_g') }}</span>
          </div>
        </div>
      </div>
      <div class="w-full relative my-6"><img src="/src\assets/img/us5.png" alt="Our Story Decoration"
          class="w-full h-auto my-6"></div>
      <img src="/src\assets/deco/deco21.png" alt="Our Story Decoration" class="m-auto w-2/5">
      <div class="text-center mt-10 mb-10 text-base cg_s opacity-90">
        <p>{{ $t('ownership') }}</p>
        <p>© Copyright 2025. All Rights Reserved.</p>
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