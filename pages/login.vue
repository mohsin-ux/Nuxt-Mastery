<script setup lang="ts">
import { useCourse } from "~/composable/Course";
import constants from "~/constants";

const { title } = useCourse();
const { $supabase } = useNuxtApp();
const {data}: any = $supabase.auth.getUser()
// const user = ref(data.user)
  const {query} = useRoute()
  console.log(`hello query parameters  ${query.redirectTo}`)
  // console.log(`${window.location.origin}`)



watchEffect(async () => {
  if(data?.user){
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})
 
async function login() {
  const redirectTo = `${query.redirectTo}`
  console.log(redirectTo)
  const { error } = await $supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo
    },
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
