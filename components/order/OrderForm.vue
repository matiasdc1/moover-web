<template>
  <div class="max-w-7xl mx-auto px-4 space-y-6 md:space-y-10">
    <div class="mt-6 md:mt-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl">Ordena tu moover</h1>
      <h2 class="mt-3 sm:text-xl">Completa la siguiente información:</h2>
    </div>
    <form class="space-y-4 md:space-y-6 flex flex-col" @submit.prevent="onSubmit">
      <FormSelect @update-value="updateDriverId" title="Encargado" :drivers="drivers" />
      <FormInput @update-value="updateDate" title="Fecha de Recojo" type="date" />
      <FormInput @update-value="updateDirPick" title="Dirección de Recojo" type="text" />
      <FormInput @update-value="updateDirDel" title="Dirección de Entrega" type="text" />
      <p class="text-red-500" v-if="!isDataComplete">
        Rellena correctamente la información.
      </p>
      <p class="text-red-500" v-if="error">
        Su orden no pudo ser reservada. Intente nuevamente.
      </p>
      <p class="text-green-500" v-if="isOrdered">
        Su orden fue recibida. Muchas gracias por usar Moover.
      </p>
      <p class="" v-if="orderCode">El código de su orden es: {{ orderCode }}</p>
      <button
        v-if="!isOrdered"
        class="text-xl md:text-2xl bg-green-200 font-medium p-2 rounded-md w-40 self-center"
      >
        <span v-if="!isLoading">Ordenar</span>
        <PulseLoader v-else />
      </button>
    </form>
  </div>
</template>

<script>
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import addOrder from '../../db/addOrder'
import getDrivers from '../../db/getDrivers'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'OrderForm',
  components: { FormInput, FormSelect, PulseLoader },
  data() {
    return {
      drivers: [],
      driverId: '',
      date: '',
      dirPick: '',
      dirDel: '',
      isDataComplete: true,
      isOrdered: false,
      orderCode: '',
      error: false,
      isLoading: false,
    }
  },
  methods: {
    async onSubmit() {
      const isDriver = this.driverId
      const isDate = this.date.length > 4
      const isDirPick = this.dirPick.length > 10
      const isDirDel = this.dirDel.length > 10

      if (!isDriver || !isDate || !isDirPick || !isDirDel) {
        this.isDataComplete = false
      } else {
        try {
          this.isLoading = true
          const orderCode = await addOrder(
            this.driverId,
            this.dirPick,
            this.dirDel,
            this.date
          )
          setTimeout(() => {
            this.orderCode = orderCode
            this.isOrdered = true
            this.isLoading = false
          }, 500)
        } catch (e) {
          this.error = true
          this.isOrdered = false
          this.isLoading = false
        }
      }
    },
    updateDriverId(name) {
      const selectedDriver = this.drivers.find(driver => driver.name === name)
      this.driverId = selectedDriver.id
      this.isDataComplete = true
      this.error = false
    },
    updateDate(date) {
      this.date = date
      this.isDataComplete = true
      this.error = false
    },
    updateDirPick(dir) {
      this.dirPick = dir
      this.isDataComplete = true
      this.error = false
    },
    updateDirDel(dir) {
      this.dirDel = dir
      this.isDataComplete = true
      this.error = false
    },
  },
  async created() {
    const drivers = await getDrivers()
    this.drivers = drivers
  },
}
</script>

<style></style>
