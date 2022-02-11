<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow"></div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'

export default {
  name: 'FindPage',
  components: { NavigationBar, Footer },
  data() {
    return {
      order: {},
      isLoading: false,
    }
  },
  methods: {
    async updateValue(search: any) {
      this.order = search
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
  head() {
    return {
      title: 'Moover - Buscar',
    }
  },
}
</script>
