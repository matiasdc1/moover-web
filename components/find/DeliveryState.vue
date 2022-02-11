<template>
  <div
    class="mt-5 w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 items-center justify-around"
  >
    <div class="text-center">
      <div
        :class="state >= 1 ? 'bg-green-200' : 'bg-red-200'"
        class="rounded-full p-2 text-center w-20"
      >
        <span v-if="state >= 1">✓</span><span v-else>X</span>
      </div>
      <h2>Programado...</h2>
    </div>

    <div class="text-center">
      <div
        :class="state >= 2 ? 'bg-green-200' : 'bg-red-200'"
        class="rounded-full p-2 text-center w-20"
      >
        <span v-if="state >= 2">✓</span><span v-else>X</span>
      </div>
      <h2>Recogido...</h2>
    </div>

    <div class="text-center">
      <div
        :class="state >= 3 ? 'bg-green-200' : 'bg-red-200'"
        class="rounded-full p-2 text-center w-20"
      >
        <span v-if="state >= 3">✓</span><span v-else>X</span>
      </div>
      <h2>En camino...</h2>
    </div>

    <div class="text-center">
      <div
        :class="state >= 4 ? 'bg-green-200' : 'bg-red-200'"
        class="rounded-full p-2 text-center w-20"
      >
        <span v-if="state >= 4">✓</span><span v-else>X</span>
      </div>
      <h2>Entregado...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryState',
  props: {
    state: Number,
  },
}
</script>

<style></style>
