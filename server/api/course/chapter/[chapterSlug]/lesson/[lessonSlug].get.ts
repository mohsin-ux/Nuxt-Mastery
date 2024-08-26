  import course from "~/server/courseData";
  import type { Course, LessonWithPath } from "~/types/course";

  course as Course;
  export default defineEventHandler((event): LessonWithPath => {
    const { chapterSlug, lessonSlug }: any = event.context.params;


    //\\\\\\\\\\\\\\\\\\\\  Error handling
    const chapter = course.chapters.find(
      (chapter: any) => chapter.slug === chapterSlug
    );

    if (!chapter) {
      throw createError({
        statusCode: 404,
        message: "Chapter not found... kindly fix the error",
      });
    }

    const lesson = chapter.lessons.find(
      (lesson: any) => lesson.slug === lessonSlug
    );

    if (!lesson) {
      throw createError({
        statusCode: 404,
        message: "Lesson not found... kindly fix the error",
      });
    } 


    return {
      ...lesson,
      path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
    };
  });
