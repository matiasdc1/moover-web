<template>
  <div class="absolute top-0 right-0 p-3 mt-5 mr-4 bg-gray-300 rounded-md">
    <div class="flex flex-row justify-between pb-2 border-b-2 border-gray-500">
      <span class="border-gray-600 text-lg font-semibold font-mono">Menu</span>
      <span class="cursor-pointer" @click="close()">X</span>
    </div>
    <ul class="flex flex-col p-3 rounded-md items-center space-y-3 font-mono">
      <NuxtLink to="/order"> Pedir </NuxtLink>
      <NuxtLink to="/find"> Estado </NuxtLink>
      <NuxtLink to="/contact"> Contacto </NuxtLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavModal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
