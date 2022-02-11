<template>
  <div class="w-full mt-8 md:mt-14 space-y-10">
    <div class="p-4 items-center max-w-7xl mx-auto w-4/6 md:w-3/6 space-y-4">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-medium text-center">
        Contáctanos
      </h1>
      <p class="text-center text-xs sm:text-lg md:text-xl">
        Clorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div class="w-4/6 md:w-3/6 mx-auto text-center space-y-4">
      <h2 class="sm:text-lg md:text-3xl font-medium">Preguntas Generales</h2>
      <p class="text-xs sm:text-lg md:text-xl">
        Para más preguntas o requerimientos, incluyendo oportunidades de
        partnership, email a
        <span class="text-blue-700">info@moover.com</span>
      </p>
    </div>
    <FAQ />
  </div>
</template>

<script>
import FAQ from './FAQ.vue'
export default {
  name: 'Contact',
  components: {
    FAQ,
  },
}
</script>

<style></style>
