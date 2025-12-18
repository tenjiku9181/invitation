<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'


// scroll container reference
const scrollArea = ref<HTMLElement | null>(null)

// investigation logic: follow the real scroll
const handleScroll = () => {
  if (!scrollArea.value) return

  const frame = document.getElementById('topFrame')
  if (!frame) return

  const scrollTop = scrollArea.value.scrollTop
  frame.style.transform = `translateY(${-scrollTop * 0.5}px)`
}

onMounted(() => {
  scrollArea.value?.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  scrollArea.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="bg-fill h-screen flex justify-center items-center
                 bg-[url(/src/assets/mainbg.png)]
                 bg-no-repeat bg-[length:100%_auto] bg-[position:center_10%]">

    <div class="h-full sm:h-[95vh] w-full sm:w-[430px]
                   bg-fill relative shadow-xl sm:rounded-4xl overflow-hidden">

      <img id="topFrame" src="/src/assets/up_frame.png"
        class="absolute top-0 w-full z-50 pointer-events-none scale-110">

      <!-- Scroll jurisdiction -->
      <div ref="scrollArea" class="w-full h-full overflow-x-hidden overflow-auto
                     pt-20 px-4 text-center relative
                     animate-fade-in">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  background-color: rgba(55, 91, 116);
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>