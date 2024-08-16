<script setup lang="ts">
import { useCourse } from "~/composable/Course";
const course = useCourse();
const route = useRoute();

// console.log(route.fullPath);
async function resetButton(error: any) {
  throw createError({
    fatal: true,
    message: "Fatal Error is showing to you by mohsin raaziii",
  });
}
</script>

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
      <div class="prose mr-4 p-8 bg-white rounded-md w-[35ch] flex flex-col">
        <h3>Chapters</h3>
        <div
          class="flex flex-col"
          v-for="chapter in course.chapters"
          :key="chapter.slug"
        >
          <h3>{{ chapter.title }}</h3>
          <NuxtLink
            class="flex flex-row space-x-2 no-underline prose-sm font-normal py-1 px-4 -mx-4"
            :class="{ 'text-blue-500': lesson.path === $route.fullPath }"
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="lesson.path"
          >
            <span class="text-gray-500">{{ index + 1 }}. </span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-pink-200 rounded-md w-[70ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no! something broke!
              <code>{{ error }}</code>
            </p>
            <p>
              <button
                @click="resetButton(error)"
                class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded-md"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>
