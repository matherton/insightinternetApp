<template>
  <label :for="id">{{ labelText }}</label>
  <input
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :id="id"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    id: String,
    labelText: String,
    modelValue: String,
  },
};
</script>
