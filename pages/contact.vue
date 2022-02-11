<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow">
      <Contact />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'
import Contact from '../components/general/Contact.vue'
export default {
  name: 'ContactPage',
  components: { NavigationBar, Footer, Contact },
  head() {
    return {
      title: 'Moover - Contacto',
    }
  },
}
</script>
