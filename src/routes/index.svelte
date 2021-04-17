<script lang="ts">
  import Github from "../lib/Github.svelte"
  import Email from "../lib/Email.svelte"
  import YouTube from "../lib/YouTube.svelte"
  import Spinner from "../lib/Spinner.svelte"
  import Cursor from "../lib/Cursor.svelte"
  import LaptopIcon from "../lib/LaptopIcon.svelte"
  import MusicIcon from "../lib/MusicIcon.svelte"
  import Pipe from "../lib/Pipe.svelte"
</script>

<svelte:head>
  <title>seb pearce</title>
</svelte:head>

<main
  class="h-screen flex items-center justify-center overflow-x-hidden bg-hex-111 text-white"
>
  <div
    class="relative inline-flex flex-col items-center p-3 transform sm:scale-125
    transition-transform duration-500"
  >
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
    <div
      class="flex flex-col sm:flex-row gap-4 sm:gap-1 items-center text-white tracking-widest mb-10 font-semibold"
    >
      <span class="flex gap-2 items-center">
        <span class="flex sm:mb-0 mr-0.5"><LaptopIcon /></span>
        <span class="flex">front-end developer</span>
      </span>
      <span class="flex hidden sm:block text-gray-500 sm:mx-1.5"><Pipe /></span>
      <span class="flex gap-1 items-center">
        <span class="flex inline mr-1 sm:hidden"><MusicIcon /></span>
        <span class="flex">composer</span>
        <span class="flex hidden sm:inline"><MusicIcon /></span>
      </span>
    </div>
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
