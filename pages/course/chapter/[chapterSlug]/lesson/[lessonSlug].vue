<script setup lang="ts">
import { useCourse } from "~/composable/Course";

const route = useRoute();
const course = useCourse();
console.log(course)

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
/////////// using useHead composable for setting the title of the page
const title = computed(() => {
  return `${lesson.value?.title}-${course.title}`;
});
useHead({
  title: title,
});
//////////// using useState() composable for saving the values uniquely

const progress: Ref<boolean[][]> = useLocalStorage("progress", []);

const chapterNo = computed(() => chapter.value?.number);
const lessonNo = computed(() => lesson.value?.number);
console.log(`${chapterNo.value}- ${lessonNo.value}`);

const isLessonComplete = computed(() => {
  if (chapterNo.value === undefined || lessonNo.value === undefined) {
    return false;
  }
  console.log(progress.value[chapterNo.value - 1]);

  if (!progress.value[chapterNo.value - 1]) {
    return false;
  }

  if (!progress.value[chapterNo.value - 1][lessonNo.value - 1]) {
    return false;
  }

  console.log(progress.value[chapterNo.value - 1][lessonNo.value - 1]);
  console.log(progress.value);
  return progress.value[chapterNo.value - 1][lessonNo.value - 1];
});

const toggleComplete = () => {
  if (chapterNo.value === undefined || lessonNo.value === undefined) {
    return;
  }
  if (!progress.value[chapterNo.value - 1]) {
    progress.value[chapterNo.value - 1] = [];
  }
  console.log(isLessonComplete.value);
  progress.value[chapterNo.value - 1][lessonNo.value - 1] =
    !isLessonComplete.value;
  console.log(isLessonComplete.value);
};
</script>

<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter?.number }} - {{ lesson?.number }}
    </p>
    <h2 class="my-0">{{ lesson?.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson?.sourceUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson?.downloadUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson?.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson?.text }}</p>
    <!-- <ClientOnly> -->
      <LessonCompleteButton
        :model-value="isLessonComplete"
        @update:model-value="toggleComplete"
      />
    <!-- </ClientOnly> -->
  </div>
</template>
