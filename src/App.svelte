<script lang="ts">
  import { getGames } from "./api";

  import GamesList from "./components/GamesList.svelte";
  import { games } from "./stores/games";

  let page = 0;
  let limit = 100;

  async function loadGamesPage(page) {
    const data = await getGames({ page, limit });

    games.update((previousState) => [...previousState, ...data.results]);
  }

  function incrementPage() {
    page = page + 1;
  }

  $: getGamesPromise = loadGamesPage(page);
</script>

<main>
  <h1>Games</h1>

  <GamesList games={$games} />

  {#await getGamesPromise}
    Fetching...
  {:then}
    <button on:click={incrementPage}>Load more</button>
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
