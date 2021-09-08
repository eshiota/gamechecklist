<script lang="ts">
  import { personalListItems } from "../stores/personal-list";

  export let game: GiantBomb.Game;

  $: personalListItem = $personalListItems[game.guid];

  function handleClickAddToPersonalList() {
    personalListItems.updateItem(game.guid);
  }

  function handleClickRemoveFromPersonalList() {
    personalListItems.removeItem(game.guid);
  }

  function bindHandleChange(field: string) {
    return (e) =>
      personalListItems.updateItem(game.guid, { [field]: !!e.target.checked });
  }

  personalListItems.subscribe((value) => console.log(value));
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
      {#if personalListItem}
        <label>
          <input
            type="checkbox"
            bind:checked={personalListItem.owned}
            on:change={bindHandleChange("owned")}
          /> Owned
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={personalListItem.played}
            on:change={bindHandleChange("played")}
          /> Played
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={personalListItem.finished}
            on:change={bindHandleChange("finished")}
          /> Finished
        </label>
        <button on:click={handleClickRemoveFromPersonalList}
          >Remove from personal list</button
        >
      {:else}
        <button on:click={handleClickAddToPersonalList}
          >Add to personal list</button
        >
      {/if}
    </div>
  </article>
</main>

<style>
  .game {
    display: flex;
  }
</style>
