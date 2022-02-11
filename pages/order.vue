<template>
  <main class="flex flex-col h-screen">
    <NavigationBar />
    <div class="flex-grow">
      <OrderForm />
    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
import NavigationBar from '../components/layout/NavigationBar.vue'
import Footer from '../components/layout/Footer.vue'
import OrderForm from '../components/order/OrderForm.vue'
export default {
  name: 'OrderPage',
  components: { NavigationBar, Footer, OrderForm },
  head() {
    return {
      title: 'Moover - Ordenar',
    }
  },
}
</script>
