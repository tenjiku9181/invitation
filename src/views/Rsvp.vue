<template>
  <section>
    <div id="page-content" class="w-full overflow-scroll h-full">
      <BackButton />
      <p class="text-5xl is_c text-gold italic text-center mb-2">Reply Form</p>
      <img src="/src\assets\deco3.png" alt="Decoration3" class="absolute top-200 -left-7.5 w-37.5 opacity-40">
      <img src="/src\assets\deco7.png" alt="Decoration7"
        class="absolute top-100 -right-5 w-37.5  opacity-40 -scale-x-100">
      <form class="space-y-4 absolute z-40 -translate-x-1/2 left-1/2 px-6 w-full">
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="name">
            Name<span class="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" class="w-full border rounded px-3 py-2 border-gold " value=""
            required="true">
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="name">
            Furigana (Optional)
          </label>
          <input id="furigana" name="furigana" type="text" class="w-full border rounded px-3 py-2 border-gold " value=""
            required="true">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="text-start">
            <label class=" cg_s text-md mb-1" for="email">
              Email<span class="text-red-500">*</span>
            </label>
            <input id="email" name="email" type="email" class="w-full border rounded px-3 py-2 border-gold " value=""
              required="true">
          </div>
          <div class="text-start">
            <label class=" cg_s text-md mb-1" for="phone">
              Phone number<span class="text-red-500">*</span>
            </label>
            <input id="phone" name="phone" type="tel" class="w-full border rounded px-3 py-2 border-gold " value=""
              required="true">
          </div>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="guestSide">
            Which side are you from<span class="text-red-500">*</span>
          </label>
          <select id="guestSide" name="guestSide" class="w-full border rounded px-3 py-2 border-gold " required="true">
            <option value="groom">Groom side</option>
            <option selected="true" value="bride">Bride side</option>
          </select>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="willAttend">
            Will you attend?<span class="text-red-500">*</span>
          </label>
          <select id="willAttend" name="willAttend" class="w-full border rounded px-3 py-2 border-gold "
            required="true">
            <option selected="true" value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="foodAllergy">
            Do you have any food allergy? (Optional)
          </label>
          <textarea id="foodAllergy" name="foodAllergy" class="w-full border rounded px-3 py-2 border-gold "></textarea>
        </div>
        <div class="mb-6 text-start">
          <label class=" cg_s text-md mb-1" for="otherQuestions">
            Do you have any other questions? (Optional)
          </label>
          <textarea id="otherQuestions" name="otherQuestions" class=" w-full border rounded px-3 py-2 border-gold "
            rows="2"></textarea>
        </div>
        <div class="mb-12 text-start ">
          <label class=" cg_s text-md mb-1" for="message">
            Your wishes to the couple (Optional)
          </label>
          <textarea id="message" name="message" class=" w-full border rounded px-3 py-2 border-gold "
            rows="3"></textarea>
        </div>
        <button type="submit"
          class="z-50 text-xl cg_s tracking-wider guide-button w-50 h-11.25 rounded-full flex items-center justify-center m-auto ms-25 border cursor-pointer">
          Confirm
        </button>
        <img src="/src\assets\deco4.png" alt="Decoration4" class="mt-10 mb-10 w-20 m-auto ms-42">
        <LanguageFooter from='rsvp' />
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import BackButton from '../components/BackButton.vue';
import LanguageFooter from '../layouts/LanguageFooter.vue'
</script>