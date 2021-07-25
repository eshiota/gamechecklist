<script lang="ts">
  export let games: Game[] = [];
</script>

<main>
  {#each games as game}
    <article>
      {#if game.image}
        <picture>
          <img
            src={game.image.thumb_url}
            alt={`Thumbnail for the game ${game.name}`}
          />
        </picture>
      {/if}
      {game.name}
    </article>
  {/each}
</main>
