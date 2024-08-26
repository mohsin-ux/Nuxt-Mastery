<script setup lang="ts">
import useFirstLesson from "~/composable/FirstLesson";
const firstLesson = useFirstLesson();
</script>

<template>
  <div class="text-center py-10">
    <NuxtLink
      class="underline font-medium prose text-3xl"
      :href="firstLesson.path"
    >
      Go to the first Lesson
    </NuxtLink>
  </div>
</template>
