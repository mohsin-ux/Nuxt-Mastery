<script setup lang="ts">
import { useCourse } from "~/composable/Course";
const { title } = useCourse();
</script>

<template>
  <div class="prose w-full max-w-2xl h-9 py-10 px-10">
    <h1>log in to {{ title }}</h1>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      log in with Github
    </button>
  </div>
</template>
