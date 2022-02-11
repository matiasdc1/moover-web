<template>
  <div class="bg-gray-100 rounded-md space-y-2 p-2 md:w-2/6">
    <img class="h-16 w-16" :src="imgPath" />
    <h1 class="font-medium text-xl sm:text-2xl md:text-3xl">{{ title }}</h1>
    <h2>{{ description }}</h2>
  </div>
</template>

<script>
export default {
  name: 'WhyCard',
  props: {
    title: String,
    description: String,
    imgPath: String,
  },
}
</script>

<style></style>
