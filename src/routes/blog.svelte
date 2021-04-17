<script>
  import "../app.css"
  //  import "../markdown.css"
  import "virtual:windi.css"
  // bg-white dark:bg-hex-111 text-black dark:text-white
  export let date
  export let title
</script>

<svelte:head>
  <title>{title}</title>
  <script>
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  </script>
</svelte:head>

<div class="bg-white dark:bg-hex-111 flex justify-center">
  <article
    class="min-w-0 mx-1/10 mx-5 sm:mx-10 md:mx-20 py-20 prose prose-xl dark:prose-light"
  >
    <h4>{date}</h4>
    <slot />
  </article>
</div>
