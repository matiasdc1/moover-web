<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow">
      <SearchOrder @update-value="updateValue" />
      <ShowOrder :order="order" :isLoading="isLoading" />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'
import SearchOrder from '../components/find/SearchOrder.vue'
import ShowOrder from '../components/find/ShowOrder.vue'

export default {
  name: 'FindPage',
  components: { NavigationBar, Footer, SearchOrder, ShowOrder },
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
