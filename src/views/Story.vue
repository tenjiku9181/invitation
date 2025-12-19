<template>
  <section>
    <div id="page-content" class="w-full overflow-scroll h-full">
      <BackButton />
      <p class="text-5xl is_c text-gold italic text-center mb-2">Us</p>
      <div class="w-4/5 mx-auto aspect-square overflow-hidden my-6 relative">
        <img src="/src\assets\frame.png" alt="Our Story Decoration"
          class="w-full h-full object-cover absolute top-0 left-0 z-10">
        <img src="/src\assets\us2.png" alt="Our Story" class="h-auto mb-6 pt-5 w-[90%] mx-auto">
      </div>
      <div class="px-4 pt-6">
        <p class="text-gold text-3xl text-center mb-4 cg_s">A Date Talking About Stars</p>
        <p class="text-center text-lg cg_s mb-4">
          Their first date of Shiva and Parvati was at a small Italian restaurant in Tokyo, where
          they talked rockets and satellites. They also wondered about the planets and galaxies out there and when time
          began. It took them so much time to finish a small pizza because they were so busy talking about the universe.
        </p>
        <div class="flex justify-items-start flex-col opacity-90">
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">What a tall guy and
              he can develop a wesite!?</span><br>
          </div>
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg">What a petite girl
              but she can design a website!?</span>
          </div>
        </div>
      </div>
      <div class="w-full relative h-140">
        <img src="/src\assets\deco15.png" alt="Our Story"
          class="absolute h-auto mb-6 w-[85%] mx-auto left-1/2 -translate-x-1/2 z-10 top-2.5">
        <img src="/src\assets\masaru2.png" alt="Our Story"
          class="absolute h-auto mb-6 w-[60%] mx-auto top-32.5 left-0 z-0">
        <div
          class="absolute w-[50%] mx-auto top-60 -right-2.5 z-0 border-2 border-gold rounded-lg rounded-t-full overflow-hidden">
          <img src="/src\assets\trang2.png" alt="Our Story" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="mt-6">
        <p class="text-gold text-3xl text-center mb-4 cg_s">The Differences</p>
        <p class="px-4 mb-14 text-center cg_s text-lg">They are similar yet different. He is disciplined, and she is
          spontaneous. He
          is more like a scientist, and she is more like an artist. He knows facts and figures, and she knows feelings
          and emotions. After all, they came from different countries, are brought up in different cultures, and have
          different personalities. Conflicts are inevitable, they do argue like any other couple, but they always make
          an effort to communicate, listen, understand and respect each other.</p>
        <div class="w-full flex my-6 relative">
          <img src="/src\assets\us3.png" alt="Our Story 3" class="w-[50%] h-auto">
          <img src="/src\assets\us4.png" alt="Our Story 4" class="w-[50%] h-auto">
          <img src="/src\assets\deco6.png" alt="Our Story Decoration"
            class="absolute h-auto mb-6 w-[35%] -top-7.5 left-1/2 -translate-x-1/2 z-10">
        </div>
        <div class="px-4">
          <div class="flex justify-items-start flex-col opacity-90">
            <div class="text-start">
              <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">He is simple and
                logical at the same
                time. And I hate it when he is right.</span><br>
            </div>
            <div class="text-start">
              <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg">Somehow she's
                really good at getting
                help from people. (chuckles) </span>
            </div>
          </div>

        </div>
      </div>
      <p class="text-gold text-3xl text-center mb-4 mt-10 cg_s">What Comes Next</p>
      <div class="px-4 text-center cg_s mb-4">
        <p class="text-lg">They don't know what the future holds for them, but they are excited to find out. They
          decided to get married
          so that they continue enjoying what they love doing together.</p>
        <div class="flex justify-items-start flex-col  opacity-90">
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Parvati: </span><span class="italic cg_s text-lg">I still don't know
              how to call him
              "honey". (chuckles)</span>
            <br>
          </div>
          <div class="text-start">
            <span class="text-gold font-bold sm_s">Shiva: </span><span class="italic cg_s text-lg ">The only change
              after the marriage is
              that I have a piece of metal on my finger. </span>
          </div>
        </div>
      </div>
      <div class="w-full relative my-6"><img src="/src\assets/us5.png" alt="Our Story Decoration"
          class="w-full h-auto my-6"></div>
      <img src="/src\assets/deco21.png" alt="Our Story Decoration" class="m-auto w-2/5">
      <div class="text-center mt-10 mb-4 text-base cg_s opacity-90">
        <p>Design &amp; Implementation by Taksh Gadhiya</p>
        <p>© Copyright 2025. All Rights Reserved.</p>
      </div>
    </div>
    <LanguageFooter from="story" />
  </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import LanguageFooter from '../layouts/LanguageFooter.vue';
</script>