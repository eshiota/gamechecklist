<script lang="ts">
  export let games: Game[] = [];
</script>

<main>
  {#each games as game}
    <article>
      {game.name}
    </article>
  {/each}
</main>
