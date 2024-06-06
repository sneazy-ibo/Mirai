<script lang="ts">
  import { onMount } from 'svelte';

  export let imageSize: string[] = [
    "20%",
    "20%",
    "30%"
  ];

  let currentIndex = 0;
  let images = [
    "https://i.imgur.com/w55CjvB.png",
    "https://i.imgur.com/8GF2QHP.png",
    "https://i.imgur.com/sRIaLzI.png",
  ];

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  onMount(() => {
    const interval = setInterval(nextImage, 2000);
    
    return () => clearInterval(interval);
  });
</script>

<section class="carousel">
  {#each images as image, index}
    <img src={image} alt={`Image ${index}`} class={`position-${(index + images.length - currentIndex) % images.length}`} style={`width: ${imageSize[index]};`} />
  {/each}
  <p class="glowing-text">断<br>ト<br>ツ</p>
</section>

<style lang="scss">
@import '../../styles/mixins.scss';
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    position: relative;
    img {
      position: absolute;
    }
  }

  .position-0 {
    transform: translateX(-100px) scale(0.8);
    z-index: 1;
    opacity: 0.8;
  }

  .position-1 {
    transform: translateX(0) scale(1);
    z-index: 2;
  }

  .position-2 {
    transform: translateX(100px) scale(0.8);
    z-index: 1;
    opacity: 0.8;
  }

  .glowing-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 110px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    pointer-events: none;
    @include text-gradient(0deg, (
      #FFBFFF 0%,
      #FFBFFF 100%
    ));
    @include text-glow(#FFBFFF, 2, 90px, 170px);
  }
</style>
