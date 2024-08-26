// import { StorageSerializers } from "@vueuse/core";
import type { LessonWithPath } from "~/types/course";
import { useFetchWithCache } from "~/composable/FetchWithCache";

export const useLesson = async (
  chapterSlug: string | string[],
  lessonSlug: string | string[]
) => {
  useFetchWithCache<LessonWithPath>(`/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`)
};
