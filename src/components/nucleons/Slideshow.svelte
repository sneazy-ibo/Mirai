<script lang="ts">
  import { NavArrowLeftIcon } from '@indaco/svelte-iconoir/nav-arrow-left';
  import { NavArrowRightIcon } from '@indaco/svelte-iconoir/nav-arrow-right';

  const images = {
    "manga": "https://i.imgur.com/pk2DrEF.png",
    "anime": "https://i.imgur.com/ekEvedK.png",
    "novel": "https://i.imgur.com/Zs9oaKv.png",
  } as { [key: string]: string };

  export let imageSize: string[] = [
    "50%",
    "80%",
    "50%"
  ];

  let currentIndex = 0;
  const imageUrls = Object.values(images) as string[];

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateMediaType();
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateMediaType();
  };

  const getMediaType = () => {
    const middleIndex = (1 + currentIndex) % imageUrls.length;
    const imageInPositionOne = imageUrls[middleIndex];
    return Object.keys(images).find(key => images[key] === imageInPositionOne) || '';
  };

  const updateMediaType = () => {
    MediaType = getMediaType();
    setTimeout(() => {
      Transition = true;
      setTimeout(() => {
        Transition = false;
      }, 500);
    });
  };

  let MediaType = getMediaType();
  let Transition = false;
</script>

<section class="slideshow">
  {#each imageUrls as imageUrl, index}
    <img src={imageUrl} alt={`Image ${index}`} class={`position-${(index + imageUrls.length - currentIndex) % imageUrls.length}`} style={`width: ${imageSize[index]};`} />
  {/each}
  <button class="arrow prev-button" on:click={prevImage} aria-label="Previous Image">
    <NavArrowLeftIcon stroke-width="3" size="xl"/>
  </button>
  <button class="arrow next-button" on:click={nextImage} aria-label="Next Image">
    <NavArrowRightIcon stroke-width="3" size="xl"/>
  </button> 
  <div class="switching">
    <p class="media-text" class:text-transition={Transition}>{MediaType}</p>
  </div>
</section>

<style lang="scss">
@import '../../styles/mixins.scss';

  .slideshow {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    position: relative;
  }

  .position-0 {
    transform: translateX(-175px) scale(0.75);
    z-index: 1;
    opacity: 0.8;
  }

  .position-1 {
    transform: translateX(0) scale(1);
    z-index: 2;
  }

  .position-2 {
    transform: translateX(175px) scale(0.75);
    z-index: 1;
    opacity: 0.8;
  }

  .arrow {
    filter: drop-shadow(0 0 10px #FFBFFF);
  }

  .arrow::before {
    content: '';
    width: 120px;
    height: 100px;
    background-color: #ffbfff70;
    border-radius: 100%;
    filter: blur(70px);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 4rem;
    color: #fff;
    position: absolute;
    bottom: -150px;
    z-index: 3;
  }

  .prev-button {
    @extend .button;
    left: 1.5em;
  }

  .next-button {
    @extend .button;
    right: 1.5em;
  }

  .media-text::before {
    content: '';
    width: 120px;
    height: 100px;
    background-color: #ffbfff;
    border-radius: 100%;
    filter: blur(70px);
    position: absolute;
  }

  .media-text {
    top: -35%;
    left: -7.5em;
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    z-index: 2;
    pointer-events: none;
    @include text-glow(#FFBFFF, 2, 20px, 50px);
    @include text-gradient(0deg, (
      #FFF 0%,
      #FFF 100%
      ));
      
      &.text-transition {
        animation: bounce 0.5s ease both;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(0.7em);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
</style>