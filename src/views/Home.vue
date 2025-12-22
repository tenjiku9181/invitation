<template>
    <section>
        <div class="relative rounded-full w-[90%] aspect-square m-auto">
            <TransitionRoot appear :show="isShowing" as="template" enter="transform transition duration-[1000ms]"
                enter-from="opacity-0 scale-50" enter-to="opacity-100 scale-100">
                <div class="w-full h-full object-cover rounded-full">
                    <img src="/src\assets\home.png" alt="Wedding Photo" class="w-full h-full object-cover rounded-full">
                    <img src="/src\assets\deco1.png" alt="deco1"
                        class="absolute -bottom-8.75 left-1/2 w-62.5 -translate-x-1/2 ">
                </div>
            </TransitionRoot>
        </div>
        <img src="/src\assets\deco3.png" alt="Decoration3" class="absolute top-125 -left-15 w-37.5 z-10 opacity-60">
        <img src="/src\assets\deco7.png" alt="Decoration7"
            class="absolute top-237.5 -right-12.5 w-37.5 z-10 opacity-60 -scale-x-100">
        <div class="z-20 absolute w-full left-1/2 -translate-x-1/2 px-4">
            <p class="text-5xl text-gold mt-12 is_c">Launch to Forever</p>
            <p class="text-2xl bm_s  font-bold opacity-80 tracking-wide">an orbit of love is complete</p>
            <p class="my-4  cs_s opacity-95">Celebrate the wedding of</p>
            <p class="text-4xl bm_s font-bold tracking-wider text-gold ms-2">Shiva<span
                    class="is_c font-semibold  my-4 text-3xl text-stroke mx-3">&amp;</span>Parvati</p>
            <p class="my-8 font-bold ">~~~</p>
            <p class="text-5xl is_c text-gold italic my-6">Greetings</p>
            <div class="w-full px-2  cs_s leading-relaxed	opacity-95">
                <p v-if="locale === 'en'" class="">We are delighted to share that we will be holding a wedding ceremony.
                    <br>On this special
                    occasion, we would like to express our heartfelt gratitude and warmly invite you to join us for an
                    intimate gathering. <br>It would be our great honor to celebrate this joyful moment with you.</p>

                <p v-if="locale === 'ja'">
                    謹啓　処暑の候<br><br>このたび　私たちは<br>結婚式を挙げることとなりました<br><br>つきましては　ハノイにて挙式<br>その後　披露の宴を催したいと思います<br><br>ご多用中　遠方からのお越しで<br>誠に恐縮ではございますが<br>ぜひご出席いただきたく<br>ご案内申し上げます<br><br>謹白<br>令和７年９月吉日
                </p>
            </div>
            <p class="my-8 font-bold ">~~~</p>
            <p class="text-2xl! bm_s  opacity-90 tracking-wide">{{ $t('day') }}</p>
            <p class="italic text-gold my-2 text-3xl! bm_s font-bold tracking-wider">{{ $t('date') }}</p>
            <p class="text-2xl bm_s  opacity-90">10:00 - 14:00</p>
            <p class="my-8 font-bold ">~~~</p>
            <p class="bm_s font-bold tracking-wider text-3xl italic text-gold mb-2">Ramayan Palace</p>
            <p class="text-xl bm_s  opacity-90 tracking-wide">Valthan-Punagam Rd</p>
            <p class="mb-2 text-xl bm_s  opacity-90 tracking-wide">Surat, Gujarat - 395013</p>
            <a href="/guide"
                class="w-45 h-10 flex items-center justify-center m-auto text-gold mt-4 border guide-button cursor-pointer">
                <p class="cg_s tracking-wide text-xl!">{{ $t('access_guide') }}</p>
            </a>
            <img src="/src\assets\deco2.png" alt="Rocket" class="-bottom-10.75 w-47.5  mx-auto mt-12 mb-8">
            <div class="w-full h-100 object-cover mt-10 relative px-6"><img src="/src\assets\masaru.png"
                    alt="Groom portrait" class="absolute w-75 h-100 object-cover -right-12.5">
                <div class="absolute left-4 top-5  tracking-wider">
                    <p class="right-0 font-title text-gold text-4xl bm_s font-bold tracking-wider">{{ $t('lord') }}</p>
                    <p class="right-0 font-title text-gold text-5xl mb-6 bm_s font-bold tracking-wider">{{ $t('shiva') }}
                    </p>
                    <p class="cs_s leading-relaxed opacity-85">{{ $t('from_india') }}</p>
                    <p class="cs_s leading-relaxed opacity-85">{{ $t('web_engineer') }}</p>
                    <p class="cs_s leading-relaxed opacity-85">{{ $t('g_tag_1') }}</p>
                    <p class="cs_s leading-relaxed opacity-85">{{ $t('g_tag_2') }}</p>
                </div>
                <img src="/src\assets\deco8.png" alt="Decoration8" class="absolute top-80 -left-5 w-46.5 z-10">
            </div>
            <div class="w-full h-100 object-cover mt-16 relative "><img src="/src\assets\trang.png" alt="Bride portrait"
                    class="absolute w-75 h-100 object-cover -left-5">
                <div class="absolute right-0 top-10  tracking-wider">
                    <p class="right-0 font-title text-gold text-4xl bm_s font-bold tracking-wider">{{ $t('parvati') }}</p>
                    <p class="right-0 font-title text-gold text-5xl mb-6 bm_s font-bold tracking-wider">{{ $t('devi') }}</p>
                    <div class="px-4 ">
                        <p class="cs_s leading-relaxed opacity-85">{{ $t('from_japan') }}</p>
                        <p class="cs_s leading-relaxed opacity-85">{{ $t('socialmedia_manager') }}</p>
                        <p class="cs_s leading-relaxed opacity-85">{{ $t('b_tag_1') }}</p>
                        <p class="cs_s leading-relaxed opacity-85">{{ $t('b_tag_2') }}</p>
                        <p class="cs_s leading-relaxed opacity-85">{{ $t('b_tag_3') }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full mt-10 relative h-55"><img src="/src\assets\deco16.png" alt="Decoration16"
                    class="absolute -top-17.5 -right-5 w-20 opacity-60 -scale-x-100"><img src="/src\assets\deco17.png"
                    alt="Decoration17" class="absolute -bottom-17.5 -left-2.5 w-25 opacity-60 -scale-x-100">
                <div class="w-full absolute top-0 h-fit z-10">
                    <p class="text-5xl text-gold is_c text-gold italic mb-4">Will you be there?</p>
                    <p class="cs_s leading-relaxed opacity-85 ">{{ $t('confirm_attendee') }}</p>
                    <a href="/rsvp"
                        class="w-50 h-15  text-fill text-xl bg-gold rounded-full flex items-center justify-center m-auto mt-8 mb-12 border reply-button cursor-pointer">
                        <p class="cg_s text-2xl!">{{ $t('reply_form') }}</p>
                    </a>
                </div>
            </div>
            <p v-if="locale === 'en'" class="text-5xl text-gold mb-4 mt-10 is_c text-gold italic">Know more</p>
            <p v-if="locale === 'ja'" class="text-4xl text-gold mb-4 mt-10 cg_s text-gold ">もっと見る</p>

            <a href="/indian-wedding" class="block w-full mt-8 cursor-pointer">
                <div class="w-full flex border border-gold p-4 items-center rounded-xl"><img
                        src="/src\assets\deco12.png" class="w-1/2 p-2">
                    <div>
                        <p class="text-lg mb-6 text-left cs_s opacity-85 ">
                            <span v-if="locale === 'en'" class="font-heading text-gold text-5xl is_c text-gold italic my-0">Indian Wedding</span>
                            <span v-if="locale === 'ja'" class="font-heading text-gold text-3xl is_c text-gold italic my-0">インドの<br>結婚式</span>
                            <br>
                            {{ $t('wh_to_expect') }}
                        </p>
                        <div class="p-2 rounded-full text-gray-600 bg-gold cursor-pointer">
                            <p class="cg_s text-lg">{{ $t('learn_more') }}</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="/story" class="block w-full h-fit mt-8 cursor-pointer mb-18">
                <div class="w-full flex bg-gold items-center rounded-xl overflow-hidden h-50">
                    <div class="w-full p-4">
                        <p class="text-5xl mb-6 font-heading text-left text-fill pl-2 is_c text-gray-600 italic">Us</p>
                        <p v-if="locale === 'en'" class="text-body text-fill text-gray-600 opacity-85 cs_s">More of what made <br> this happen</p>
                        <p v-if="locale === 'ja'" class="text-body text-fill text-gray-600 opacity-85 cs_s">結婚までの物語</p>
                    </div><img src="/src\assets\us1.png" class="w-1/2">
                </div>
            </a>
            <div class="relative">
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <LanguageChanger />
                </div>
                <DownFrame />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import LanguageChanger from '../components/LanguageChanger.vue';
import DownFrame from '../components/DownFrame.vue';
import { useI18n } from 'vue-i18n'
const isShowing = ref(true)

const { locale } = useI18n()
</script>