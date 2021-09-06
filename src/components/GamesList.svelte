<script lang="ts">
  import Game from "./Game.svelte";
  export let games: GiantBomb.Game[] = [];
</script>

<main>
  {#each games as game}
    <Game {game} />
  {/each}
</main>
