<script setup lang="ts">
import { useCourse } from "~/composable/Course";
const course = useCourse();


async function resetButton(error: any) {
  throw createError({
    fatal: true,
    message: "Fatal Error is showing to you by mohsin raaziii",
  });
}
</script>

<template>
  <main
    class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  > 
    <div
      class="mb-4 flex justify-between items-center w-full mx-auto"
    >
      <h1 class="prose text-center w-1/2 font-bold text-2xl">{{ course.title }}</h1>

      <!--================== component -->
      <div class="w-1/2 flex justify-center">
        <UserCard />
      </div>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <aside class="prose mr-4 p-8 bg-white rounded-md w-[35ch] flex flex-col">
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
      </aside>

      <section class="prose p-12 bg-pink-200 rounded-md w-[70ch]">
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
      </section>
    </div>
  </main>
</template>
