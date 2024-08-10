<script setup lang="ts">
import { useCourse } from "~/composable/Course";

const route = useRoute();
const course = useCourse();

console.log(course);
console.log(route.params);

const chapter =  computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});
console.log(chapter)
console.log(chapter.value)

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
// console.log(lesson.value)
</script>

<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>
  <p>chapter-slug:{{ chapter?.title }}</p>
  <!-- <p>lesson-slug:{{ lesson?.title }}</p> -->
</template>
