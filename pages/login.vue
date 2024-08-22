<script setup lang="ts">
import { useCourse } from "~/composable/Course";
import constants from "~/constants";

const { title } = useCourse();
const {$supabase} = useNuxtApp()

async function login() {
  const { error } = await $supabase.auth.signInWithOAuth({
    provider: "github",
    // options: {
    //   redirectTo: "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
    // },
  });
  if (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="prose w-full max-w-2xl h-9 py-10 px-10">
    <h1>log in to {{ title }}</h1>
    <button
      @click="login"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      log in with Github
    </button>
  </div>
</template>
  