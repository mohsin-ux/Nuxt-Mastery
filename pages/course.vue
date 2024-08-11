<template>
  <div
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md w-[40ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div class="flex flex-col" v-for="chapter in course.chapters" :key="chapter.slug">
          <h3>{{ chapter.title }}</h3>
          <NuxtLink
            class="no-underline"
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
          >
            <span class="text-gray-500">{{ index + 1 }}. </span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-pink-200 rounded-md w-[70ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourse } from "~/composable/Course";
const course = useCourse();
</script>
