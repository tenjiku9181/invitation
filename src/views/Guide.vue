<template>
  <section>
    <div id="page-content" class="w-full overflow-scroll h-full overflow-x-hidden">
      <BackButton />
      <p class="text-5xl is_c text-gold italic text-center">Venue</p>
      <div class="w-full relative h-72.5 mt-6">
        <img src="/src\assets\room1.jpeg" alt="room1" class="absolute top-0 w-full object-contain">
        <img src="/src\assets\deco1.png" alt="Decoration1"
          class="absolute -bottom-11.25 w-62.5 left-1/2 -translate-x-1/2">
      </div>
      <div class="mt-16 px-8 text-center">
        <p class="text-gold text-4xl mb-4 is_c">Address</p>
        <p class="text-xl bm_s opacity-85">Ramayan Palace</p>
        <p class="text-xl bm_s opacity-85">Valthan-Punagam Rd, Surat</p>
        <p class="text-xl bm_s opacity-85">Gujarat - 395013, India</p>
        <p class="is_c text-gold text-4xl mt-8 mb-4">Banquet</p>
        <p class="text-xl font-display bm_s opacity-85">Forever Dream Banquet, 4th Floor</p>
        <p class="mt-4 text-gold cg_s opacity-90 text-lg">Once you arrive, please go straight to 4th floor. The
          reception will be at 4th
          floor.<br>There is no locker so please keep any valuable items with you all the time.</p>
        <p class="font-heading text-gold text-4xl mt-8 mb-4 is_c">Map</p>
      </div>
      <div class="w-full h-fit">
        <iframe width="100%" height="300" style="border:0;" loading="lazy" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=21.21390116367466,72.92566495118555&z=15&output=embed">
        </iframe>

      </div>
      <div class="mt-8 px-8 text-center">
        <p class="font-heading text-gold text-4xl mb-4 is_c">How to get there</p>
        <p class="cg_s opacity-95 text-lg">Taking a taxi is the easiet option. We recommend using an app called Grab.
          You can install the app
          from the URL below.</p>
        <div class="flex justify-evenly mb-10">
          <div class="flex justify-evenly border-gold">
            <a class="flex w-fit p-2 h-fit justify-center items-center mt-4 cursor-pointer border border-gold text-gold cg_s text-lg"
              href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368" target="_blank"
              rel="noopener noreferrer">
              App Store
            </a>
            <a class="flex w-fit p-2 h-fit justify-center items-center mt-4 cursor-pointer border border-gold text-gold cg_s text-lg"
              href="https://play.google.com/store/apps/details?id=com.ubercab.driver" target="_blank"
              rel="noopener noreferrer">
              Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
    <LanguageFooter from='guide' />
  </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import LanguageFooter from '../layouts/LanguageFooter.vue'
</script>