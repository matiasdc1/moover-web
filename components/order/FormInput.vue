<template>
  <div class="flex flex-col">
    <h3 class="font-medium md:text-lg">{{ title }}:</h3>
    <input
      class="border-2 rounded-md p-2"
      :type="type"
      id="value"
      v-model="value"
      :placeholder="title"
      @change="updateValue()"
    />
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    title: String,
    type: String,
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
