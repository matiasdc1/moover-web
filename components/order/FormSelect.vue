<template>
  <div class="flex flex-col">
    <h3 class="font-medium md:text-lg">{{ title }}:</h3>
    <select
      class="border-2 rounded-md p-2"
      id="value"
      v-model="value"
      :placeholder="title"
      @change="updateValue()"
    >
      <option v-for="driver in drivers" :key="driver.id">
        {{ driver.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    title: String,
    drivers: Array,
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    updateValue() {
      this.$emit('update-value', this.value)
    },
  },
}
</script>

<style></style>
