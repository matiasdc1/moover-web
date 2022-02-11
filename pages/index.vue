<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow">
      <Greeting />
      <WhyUs />
      <FAQ />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'
import Greeting from '../components/home/Greeting.vue'
import WhyUs from '../components/home/WhyUs.vue'
import FAQ from '../components/general/FAQ.vue'

export default {
  name: 'IndexPage',
  components: { NavigationBar, Footer, Greeting, WhyUs, FAQ },
  head() {
    return {
      title: 'Moover - Servicio de Traslados',
    }
  },
}
</script>
