<script setup lang="ts">
const { $supabase } = useNuxtApp();
const user = ref();

onMounted(async () => {
  const { data, error } = await $supabase.auth.getUser();
  console.log(data);
  if (error) {
    console.error("Error fetching user:", error);
  } else {
    user.value = data.user;
  }
});

// integrate the UI with supabase without refresh the app
try {
  await $fetch("/api/_supabase/session", {
    method: "POST",
    body: { event: "SIGNED_OUT", session: null },
  });
  user.value = null;
} catch (error) {
  console.log(error);
}

async function logout() {
  const { error } = await $supabase.auth.signOut();
  if (error) {
    console.log(error);
    return;
  }
  await navigateTo("/login");
}

const name = computed(() => user.value?.user_metadata.full_name);
console.log(name.value);
const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>

<template>
  <div class="rounded p-3 flex items-center space-x-3 bg-white w-[300px]">
    <img
      class="rounded-full w-12 h-12 border-2 border-blue-400"
      src="https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
    <div class="text-right">
      <div class="font-medium">mohsin{{ name }}</div>
      <button @click="logout" class="text-sm underline text-slate-500">
        Log out
      </button>
    </div>
  </div>
</template>
