<template>
  <div class="w-full max-w-2xl bg-gray-400 text-white">
    <div
      @click="changeState()"
      class="flex justify-between py-2 px-6 items-center text-lg md:text-2xl cursor-pointer"
    >
      <h1 class="">{{ question }}</h1>
      <h2 class="text-3xl" v-if="isOpen === false">+</h2>
      <h2 class="text-3xl" v-else>-</h2>
    </div>
    <div
      :class="[isOpen ? 'block' : 'hidden']"
      class="px-6 py-2 border-t-2 border-white text-left"
    >
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    changeState() {
      this.isOpen = !this.isOpen
    },
  },
  props: {
    question: String,
    description: String,
  },
}
</script>

<style></style>
