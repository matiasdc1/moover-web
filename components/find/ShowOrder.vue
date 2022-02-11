<template>
  <div class="max-w-7xl mx-auto px-4 space-y-6 md:space-y-10">
    <div class="flex justify-center items-center mt-10" v-if="isLoading">
      <PulseLoader class="h-20 w-20 flex items-center" />
    </div>
    <div v-else-if="order.id">
      <div class="flex flex-col max-w-7xl mx-auto mt-5 py-10 px-6 space-y-3">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-medium mb-3">Tu orden</h1>
        <div class="flex flex-col md:flex-row p-2 bg-gray-200 rounded-md items-center">
          <h2 class="font-medium mr-1 md:text-lg">Encargado:</h2>
          <h3 class="text-sm md:text-base">{{ order.driver.name }}</h3>
        </div>
        <div
          class="flex flex-col md:flex-row p-2 rounded-md items-center"
          :class="order.status >= 4 ? 'bg-green-200' : 'bg-yellow-200'"
        >
          <h2 class="font-medium mr-1 md:text-lg">Estado:</h2>
          <DeliveryState :state="order.status" />
        </div>
        <div
          class="flex flex-col md:flex-row p-2 rounded-md items-center bg-green-200"
          v-if="order.dateFinished"
        >
          <h2 class="font-medium mr-1 md:text-lg">Entregado el:</h2>
          <h3 class="text-sm md:text-base">
            {{ normalizedDateFinished }}
          </h3>
        </div>
        <div
          v-else
          class="flex flex-col md:flex-row p-2 bg-yellow-200 rounded-md items-center"
        >
          <h2 class="font-medium mr-1 md:text-lg">Fecha Aprox. de Entrega:</h2>
          <h3 class="text-sm md:text-base">{{ normalizedDateExpected }}</h3>
        </div>
        <div class="flex flex-col md:flex-row p-2 bg-gray-200 rounded-md items-center">
          <h2 class="font-medium mr-1 md:text-lg">Dirección de Pick Up:</h2>
          <h3 class="text-sm md:text-base text-center">{{ order.dirPick }}</h3>
        </div>
        <div class="flex flex-col md:flex-row p-2 bg-gray-200 rounded-md items-center">
          <h2 class="font-medium mr-1 md:text-lg">Dirección de Entrega:</h2>
          <h3 class="text-sm md:text-base text-center">{{ order.dirDel }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import DeliveryState from './DeliveryState.vue'
import dayjs from 'dayjs'
export default {
  name: 'ShowOrder',
  components: {
    PulseLoader,
    DeliveryState,
  },
  props: {
    order: Object,
    isLoading: Boolean,
  },
  computed: {
    normalizedDateFinished: function () {
      if (!this.order) return ''
      return dayjs(this.order.dateFinished).format('YYYY-MM-DD')
    },
    normalizedDateExpected: function () {
      if (!this.order) return ''
      return dayjs(this.order.dateExpected).format('YYYY-MM-DD')
    },
  },
}
</script>

<style></style>
