<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{ (e: "update:modelValue"): void }>();
</script>

<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="props.modelValue ? 'bg-green-500' : 'bg-gray-500'"
  >
    <input
      type="checkbox"
      :value="props.modelValue"
      @input="() => $emit('update:modelValue')"
      class="hidden"
    />
    {{ props.modelValue ? "Completed!" : "Mark as complete" }}
  </label>
</template>
