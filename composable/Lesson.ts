import { StorageSerializers } from "@vueuse/core";
import type { LessonWithPath } from "~/types/course";

export const useLesson = async (
  chapterSlug: string | string[],
  lessonSlug: string | string[]
) => {
  const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`;
  const lesson = useSessionStorage<LessonWithPath>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!lesson.value) {
    const { data, error } = await useFetch<LessonWithPath>(
      url,
      {
        key: 'kdsjfklsdjfklsdj',
        pick: ['title', 'slug'],
        lazy: true,
      }
    );

    // console.log(`data to be fetched ${data.value}`);
    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `hello Could not fetch lesson ${lessonSlug} in chpater ${chapterSlug}`,
      });
    }
    lesson.value = data.value
  } else {
    console.log(`Getting lesson ${lessonSlug} in chapter ${chapterSlug} from cache`)
  }
  return lesson;
};