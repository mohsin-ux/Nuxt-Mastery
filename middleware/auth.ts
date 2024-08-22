export default  defineNuxtRouteMiddleware((to, from) => {
  const { $supabase } = useNuxtApp();
  const { data }: any = $supabase.auth.getUser()

  if ( to.params.chapterSlug === "1-chapter-1") {
    return;
  }
  return navigateTo(`/login?redirectTo=${to.path}`);
});
 