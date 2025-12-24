<template>
  <section>
    <div id="page-content" class="w-full overflow-scroll h-full">
      <BackButton />
      <p class="text-5xl is_c text-gold italic text-center mb-2">Reply Form</p>
      <img src="/src\assets\deco\deco3.png" alt="Decoration3" class="absolute top-200 -left-7.5 w-37.5 opacity-40">
      <img src="/src\assets\deco\deco7.png" alt="Decoration7"
        class="absolute top-100 -right-5 w-37.5  opacity-40 -scale-x-100">
      <form @submit.prevent="handleSubmit" class="space-y-4 absolute z-40 -translate-x-1/2 left-1/2 px-6 w-full">
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="name">
            {{ $t('name') }}<span class="text-red-500">*</span>
          </label>
          <input id="name" name="name" v-model="form.name" type="text"
            class="w-full border rounded px-3 py-2 border-gold " required="true">
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="name">
            {{ $t('furigana') }}
          </label>
          <input id="furigana" name="furigana" v-model="form.furigana" type="text"
            class="w-full border rounded px-3 py-2 border-gold ">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="text-start">
            <label class=" cg_s text-md mb-1" for="email">
              {{ $t('email') }}<span class="text-red-500">*</span>
            </label>
            <input id="email" name="email" v-model="form.email" type="email"
              class="w-full border rounded px-3 py-2 border-gold " required="true">
          </div>
          <div class="text-start">
            <label class=" cg_s text-md mb-1" for="phone">
              {{ $t('phone_number') }}<span class="text-red-500">*</span>
            </label>
            <input id="phone" name="phone" type="tel" v-model="form.phone"
              class="w-full border rounded px-3 py-2 border-gold " required="true">
          </div>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="guestSide">
            {{ $t('wh_side') }}<span class="text-red-500">*</span>
          </label>
          <select id="guestSide" name="guestSide" v-model="form.guestSide"
            class="w-full border rounded px-3 py-2 border-gold " required="true">
            <option value="groom">{{ $t('groom_side') }}</option>
            <option selected="true" value="bride">{{ $t('bride_side') }}</option>
          </select>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="willAttend">
            {{ $t('will_attend') }}<span class="text-red-500">*</span>
          </label>
          <select id="willAttend" name="willAttend" v-model="form.willAttend"
            class="w-full border rounded px-3 py-2 border-gold " required="true">
            <option selected="true" value="yes">{{ $t('yes') }}</option>
            <option value="no">{{ $t('no') }}</option>
          </select>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="foodAllergy">
            {{ $t('food_allergy') }}
          </label>
          <textarea id="foodAllergy" name="foodAllergy" v-model="form.foodAllergy"
            class="w-full border rounded px-3 py-2 border-gold "></textarea>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="otherQuestions">
            {{ $t('other_qa') }}
          </label>
          <textarea id="otherQuestions" name="otherQuestions" v-model="form.otherQuestions"
            class=" w-full border rounded px-3 py-2 border-gold " rows="2"></textarea>
        </div>
        <div class="mb-12 text-start">
          <label class=" cg_s text-md mb-1" for="message">
            {{ $t('wishes') }}
          </label>
          <textarea id="message" name="message" v-model="form.message"
            class=" w-full border rounded px-3 py-2 border-gold" rows="3"></textarea>
        </div>
        <button type="submit" :disabled="!isFormValid" class="z-50 text-xl cg_s tracking-wider guide-button w-50 h-11.25 rounded-full
         flex items-center justify-center m-auto border cursor-pointer
         disabled:opacity-40 disabled:cursor-not-allowed">
          {{ $t('confirm') }}
        </button>
        <img src="/src\assets\deco\deco4.png" alt="Decoration4" class="mt-10 mb-10 w-20 m-auto">
        <div class="relative mt-13">
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
            <language-changer />
          </div>
          <down-frame />
        </div>
      </form>
    </div>
    <Loader :isLoading="isLoading" :message="'sending'" />
  </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import DownFrame from '../components/DownFrame.vue';
import LanguageChanger from '../components/LanguageChanger.vue';
import { reactive, computed, ref } from 'vue'
import apiClient from "../middleware/axios";
import Swal from 'sweetalert2'
import Loader from '../components/Loader.vue';

const form = reactive({
  name: '',
  furigana: '',
  email: '',
  phone: '',
  guestSide: 'bride',
  willAttend: 'yes',
  foodAllergy: '',
  otherQuestions: '',
  message: ''
})
const resetForm = () => {
  form.name = ''
  form.furigana = ''
  form.email = ''
  form.phone = ''
  form.guestSide = 'bride'
  form.willAttend = 'yes'
  form.foodAllergy = ''
  form.otherQuestions = ''
  form.message = ''
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isFormValid = computed(() => {
  return (
    form.name.trim() !== '' &&
    emailRegex.test(form.email) &&
    form.phone.trim() !== '' &&
    form.guestSide.trim() !== '' &&
    form.willAttend.trim() !== ''
  )
})
const isLoading = ref(false)
const handleSubmit = async () => {
  isLoading.value = true
  if (!isFormValid.value) return
  const payload = { ...form }

  try {
    const response = await apiClient.post("/reply", payload) as {
      success: boolean;
      message: string;
    }
    Swal.fire({
      icon: 'success',
      title: response.message,
      showConfirmButton: false,
      timer: 1500
    })
    if (response.success) {
      resetForm()
    }
  } catch (error: any) {
    console.error("Submission failed:", error)
    Swal.fire({
      icon: 'error',
      title: error.message || 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  } finally {
    isLoading.value = false
  }
}

</script>
