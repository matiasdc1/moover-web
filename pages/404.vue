<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow">
      <Component404 />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'
import Component404 from '../components/general/404.vue'

export default {
  name: 'IndexPage',
  components: { NavigationBar, Footer, Component404 },
  head() {
    return {
      title: 'Moover - Servicio de Traslados',
    }
  },
}
</script>
