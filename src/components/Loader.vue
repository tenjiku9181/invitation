<template>
    <section>
        <TransitionRoot as="template" :show="isLoading">
            <Dialog as="div" class="relative z-50" @close="() => { }">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </TransitionChild>

                <div class="fixed inset-0 flex items-center justify-center">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="flex flex-col items-center gap-4">
                            <svg class="w-14 h-14 animate-spin text-gold" viewBox="0 0 24 24" fill="none">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4" />
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>

                            <p class="cg_s tracking-widest text-gold text-lg">
                                {{ $t(`${message}`) }}...
                            </p>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>
    </section>
</template>
<script setup lang="ts">

import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
const props = defineProps<{
    isLoading: boolean
    message?: string
}>()
const message = props.message
</script>