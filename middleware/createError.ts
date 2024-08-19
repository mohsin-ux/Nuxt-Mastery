import { useCourse } from "~/composable/Course";
export default defineNuxtRouteMiddleware((to, from) => {
  const course = useCourse();
//   const route = useRoute()

  const chapter = course.chapters.find(
    (chapter) => chapter.slug === to.params.chapterSlug
  );

  if (!chapter) {
    return abortNavigation(
      createError({
        statusCode: 404,
        message: "Chapter not found... kindly fix the error",
      })
    );
  }

  const lesson = chapter.lessons.find(
    (lesson) => lesson.slug === to.params.lessonSlug
  );

  if (!lesson) {
    return abortNavigation(
      createError({
        statusCode: 404,
        message: "Lesson not found... kindly fix the error",
      })
    );
  }
});
