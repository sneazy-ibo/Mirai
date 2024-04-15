<script lang="ts">
  export let animeSize: string = '200px';
  export let mangaSize: string = '100px';
  export let novelSize: string = '100px';

  export let animeUrl: string = 'https://i.imgur.com/ekEvedK.png';
  export let mangaUrl: string = 'https://i.imgur.com/pk2DrEF.png';
  export let novelUrl: string = 'https://i.imgur.com/Zs9oaKv.png';
</script>

<section class="image-gallery">
  <figure class="image-container anime">
    <img src={animeUrl} alt="Anime" class="image" style="width: {animeSize}; height: auto;" />
  </figure>
  <figure class="image-container manga">
    <img src={mangaUrl} alt="Manga" class="image" style="width: {mangaSize}; height: auto;" />
  </figure>
  <figure class="image-container novel">
    <img src={novelUrl} alt="Novel" class="image" style="width: {novelSize}; height: auto;" />
  </figure>
</section>

<style lang="scss">
</style>
