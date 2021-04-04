<script lang="ts">
  import Github from "../lib/Github.svelte"
  import Email from "../lib/Email.svelte"
  import YouTube from "../lib/YouTube.svelte"
  import Spinner from "../lib/Spinner.svelte"
  import Cursor from "../lib/Cursor.svelte"
</script>

<main class="h-screen flex items-center justify-center overflow-x-hidden">
  <div class="relative inline-flex flex-col items-center p-3">
    <div
      class="-z-1 absolute -top-1/3 left-1/8 text-gray-50 transform scale-150 animate-fadein"
    >
      <Spinner />
    </div>
    <h1
      class="relative text-7xl text-center mb-10 font-bold lowercase text-gray-100"
    >
      Seb Pearce<span
        class="hidden sm:block opacity-70 absolute -right-4 top-1/6 animate-fadein"
        ><Cursor /></span
      >
    </h1>
    <p
      class="flex flex-col sm:flex-row items-center text-white tracking-widest mb-10 font-semibold"
    >
      <span class="mb-4 sm:mb-0">💻&nbsp;front-end developer</span><span
        class="hidden sm:block text-gray-500 sm:mx-1">|</span
      ><span
        ><span class="inline sm:hidden">🎵&nbsp;</span>composer<span
          class="hidden sm:inline">&nbsp;🎵</span
        ></span
      >
    </p>
    <ul class="flex items-center justify-evenly w-full max-w-100 text-gray-500">
      <li class="hover:text-red-500">
        <Email />
      </li>
      <li class="hover:text-red-500">
        <Github />
      </li>
      <li class="hover:text-red-500">
        <YouTube />
      </li>
    </ul>
  </div>
</main>
