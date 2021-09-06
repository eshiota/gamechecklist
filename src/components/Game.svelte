<script lang="ts">
  import { libraryItems } from "../stores/library-items";

  export let game: GiantBomb.Game;

  function handleClickAddToLibrary() {
    libraryItems.updateItem(game.guid);
  }

  function handleClickRemoveFromLibrary() {
    libraryItems.removeItem(game.guid);
  }
</script>

<main>
  <article class="game">
    {#if game.image}
      <picture>
        <img
          src={game.image.thumb_url}
          alt={`Thumbnail for the game ${game.name}`}
        />
      </picture>
    {:else}
      <div>No thumbnail</div>
    {/if}
    <div class="game-metadata">
      {game.name}<br />
      {game.id}<br />
      {game.guid}
    </div>
    <div class="game-actions">
      {#if $libraryItems[game.guid]}
        <button on:click={handleClickRemoveFromLibrary}
          >Remove from library</button
        >
      {:else}
        <button on:click={handleClickAddToLibrary}>Add to library</button>
      {/if}
    </div>
  </article>
</main>

<style>
  .game {
    display: flex;
  }
</style>
