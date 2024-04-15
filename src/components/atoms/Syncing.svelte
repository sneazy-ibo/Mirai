<script>
	import Carousel from '../nucleons/Carousel.svelte';
</script>

<section class="wrapper">
  <div>
    <h2>Syncing made easy</h2>
    <p>Say goodbye to manual tracking! With Dantotsu, your progress is automatically synced across AniList and MyAnimeList, ensuring a smooth transition between devices.</p>
  </div>
  <div class="container">
    <Carousel imageSize={['50%', '50%', '60%']} />
  </div>
</section>

<style lang="scss">

.container {
  margin-left: 2em;
}

</style>