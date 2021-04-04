<script lang="ts">
  let count = 0

  const increment = (): void => {
    count += 1
  }
</script>

<button on:click={increment} class="bg-red-800 p-2 rounded-lg my-3">
  Clicks: {count}
</button>
