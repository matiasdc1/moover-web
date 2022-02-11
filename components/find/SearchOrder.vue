<template>
  <div class="flex flex-col max-w-7xl mx-auto mt-5 py-10 px-6 items-center border-b-2">
    <h1 class="text-3xl sm:text-4xl md:text-5xl text-center">
      Revisa el estado actual de tu <span class="font-medium">Moover</span>
    </h1>
    <h2 class="sm:text-xl mt-5">Ingresa tu código de seguimiento:</h2>
    <form
      class="flex mt-10 items-center justify-center w-full"
      @submit.prevent="onSubmit()"
    >
      <input
        class="border-2 rounded-md p-2 w-4/6 h-10 border-r-0 rounded-r-none"
        placeholder="Código de seguimiento"
        id="value"
        v-model="value"
      />
      <button class="h-10 w-10 p-2 border-2 rounded-md rounded-l-none hover:bg-gray-200">
        <img src="/search.png" alt="search" />
      </button>
    </form>
    <p class="text-red-500 mt-5" v-if="isError">
      No se encontró la orden. ¿Escribió correctamente el código?
    </p>
    <p class="text-red-500 mt-5" v-if="!isValid">Ingrese un código válido.</p>
  </div>
</template>

<script>
import getOrder from '../../db/getOrder'

export default {
  name: 'SearchOrder',
  data() {
    return {
      value: '',
      isError: false,
      isValid: true,
    }
  },
  methods: {
    async onSubmit() {
      if (this.value.length < 1) {
        this.isValid = false
        return
      }
      try {
        this.isValid = true
        this.isError = false
        const order = await getOrder(this.value)
        this.$emit('update-value', order)
      } catch (e) {
        setTimeout(() => {
          this.isError = true
        }, 2000)
        this.$emit('update-value', {})
      }
    },
  },
}
</script>

<style></style>
