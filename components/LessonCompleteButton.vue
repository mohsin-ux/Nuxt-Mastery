
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{ (e: "update:modelValue", message: boolean): void }>();
</script>

<style scoped>
::selection {
  display: none;
}
</style>

<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="{
      'bg-green-500': props.modelValue,
      'bg-gray-500': !props.modelValue,
    }"
  >
    <input
      type="checkbox"
      :value="props.modelValue"
      @input="() => $emit('update:modelValue', !props.modelValue)"
      class="hidden"
    />
    {{ props.modelValue ? "Completed!" : "Mark as complete" }}
  </label>
</template>


