import { StorageSerializers } from "@vueuse/core";
import type { LessonWithPath } from "~/types/course";

export const useFetchWithCache = async <T> (
  url: string
) => {
  // const url = `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`;
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, 
    //   {
    //   key: 'kdsjfklsdjfklsdj',
    //   pick: ["title", "number"],
    //   lazy: true,
    // }
  );

    // console.log(`data to be fetched ${data.value}`);
    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `hello Could not fetch data from ${url}`,
      });
    }
    cached.value = data.value as T;
  } else {
    console.log(
      `Getting lesson from cache for ${url}`
    );
  }
  return cached;
};
