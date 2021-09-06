<script lang="ts">
  import { libraryItems } from "../stores/library-items";

  export let game: GiantBomb.Game;

  $: libraryItem = $libraryItems[game.guid];

  function handleClickAddToLibrary() {
    libraryItems.updateItem(game.guid);
  }

  function handleClickRemoveFromLibrary() {
    libraryItems.removeItem(game.guid);
  }

  function bindHandleChange(field: string) {
    return (e) =>
      libraryItems.updateItem(game.guid, { [field]: !!e.target.checked });
  }

  function handleChange(field: string, checked: boolean) {
    libraryItems.updateItem(game.guid, { [field]: checked });
  }

  libraryItems.subscribe((value) => console.log(value));
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
      {#if libraryItem}
        <label>
          <input
            type="checkbox"
            bind:checked={libraryItem.owned}
            on:change={bindHandleChange("owned")}
          /> Owned
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={libraryItem.played}
            on:change={bindHandleChange("played")}
          /> Played
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={libraryItem.finished}
            on:change={bindHandleChange("finished")}
          /> Finished
        </label>
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
