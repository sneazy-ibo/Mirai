<script lang="ts">
  import { DownloadIcon } from '@indaco/svelte-iconoir/download';
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { fade } from 'svelte/transition';

  let currentImageIndex = 0;
  const images = [
    "https://i.imgur.com/Oy5RbzN.png",
    "https://i.imgur.com/BjfHSxE.png"
  ];

  const arrowOpacity = tweened(1);

  function switchImage() {
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 5000);
  }

  onMount(() => {
    switchImage();
  });

  let hovering = false;
</script>

<section class="wrapper" aria-label="Image section" on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false}>
  <div class="arrow" style="opacity: {arrowOpacity}">
    <DownloadIcon stroke-width="3" size="7em" color="#000"/>
  </div>
  {#key currentImageIndex}
    <img class="display" src={images[currentImageIndex]} alt="" transition:fade />
  {/key}
</section>

<style lang="scss">
  .wrapper {
    margin-bottom: -6em;

    .arrow {
      margin-top: -20em;
      margin-left: 15em;
      z-index: 1;
      filter: drop-shadow(0 0 20px #FFBFFF);
      animation: levitate 4s ease-in-out infinite;
      transition: opacity 0.15s ease-in-out;

      &::before {
        content: '';
        width: 120px;
        height: 100px;
        background-color: #ffbfff70;
        border-radius: 100%;
        filter: blur(70px);
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-120%, -50%);
      }
    }

    .display {
      width: 250px;
      height: auto;
      margin-left: 14em;
      margin-top: -25em;
      transform: perspective(100em) rotateX(60deg) rotateZ(30deg);
      opacity: 1;

      &:hover {
        transform: rotate(0deg);
      }
    }

    &:hover .arrow {
      opacity: 0;
    }
  }

  @keyframes levitate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
