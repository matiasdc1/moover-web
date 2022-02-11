<template>
  <div class="w-full border-b-2 relative">
    <nav class="flex justify-between p-4 items-center max-w-7xl mx-auto">
      <div class="w-52">
        <NuxtLink to="/"> <img src="/logo.png" /> </NuxtLink>
      </div>
      <div>
        <ul class="hidden md:flex md:text-lg lg:text-xl md:space-x-20 font-mono">
          <NuxtLink to="/order"> Pedir </NuxtLink>
          <NuxtLink to="/find"> Estado </NuxtLink>
          <NuxtLink to="/contact"> Contacto </NuxtLink>
        </ul>
      </div>
      <img @click="showModal()" src="/ham.png" class="md:hidden w-6 cursor-pointer" />
    </nav>
    <NavModal v-if="modal" @close="hideModal()" />
  </div>
</template>

<script>
import NavModal from './NavModal.vue'
export default {
  name: 'NavigationBar',
  data() {
    return {
      modal: false,
    }
  },
  components: {
    NavModal,
  },
  methods: {
    showModal() {
      this.modal = true
    },
    hideModal() {
      this.modal = false
    },
  },
}
</script>

<style></style>
