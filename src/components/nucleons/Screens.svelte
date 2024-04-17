<script lang="ts">
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let isDragging = false;
  let initialPhoneX = 0;
  let initialPhoneY = 0;
  let phone: HTMLElement | null = null;

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    phone = document.querySelector('.phone');
  });

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (isDragging && phone) {
      const offsetX = mouseX - initialPhoneX;
      const offsetY = mouseY - initialPhoneY;
      phone.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
    }
    updatePositions();
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    if (phone) {
      initialPhoneX = event.clientX - phone.offsetLeft;
      initialPhoneY = event.clientY - phone.offsetTop;
      phone.style.transition = 'transform 0.3s ease-out';
    }
  }

  function handleMouseUp() {
    isDragging = false;
    if (phone) {
      phone.style.transition = 'transform 0.3s ease-out';
      phone.style.transform = 'translate(0, 0) scale(1)';
      setTimeout(() => {
        if (phone) {
          phone.style.transition = '';
        }
      }, 300);
    }
  }

  function updatePositions() {
    const tv = document.querySelector('.tv') as HTMLElement;
    const phone = document.querySelector('.phone') as HTMLElement;

    if (tv && phone && !isDragging) {
      const tvX = mouseX * 0.01;
      const tvY = mouseY * 0.01;
      const phoneX = mouseX * 0.05;
      const phoneY = mouseY * 0.05;

      tv.style.transform = `translate(${tvX}px, ${tvY}px)`;
      phone.style.transform = `translate(${phoneX}px, ${phoneY}px)`;
    }
  }
</script>


<section class="wrapper" role="presentation">
  <div id="screens">
    <div class="tv">
      <img src="https://i.imgur.com/UAUQzaN.png" alt="tv" draggable="false" class="display-tv"/>
      <div class="leg-left"></div>
      <div class="leg-right"></div>
    </div>
    <div class="phone" on:mousedown={handleMouseDown} role="button" tabindex="0">
      <img src="https://i.imgur.com/NDxbeVP.png" alt="phone" draggable="false" class="display-phone"/>
      <div class="icon-overlay"></div>
      <div class="glow"></div>
    </div>
  </div>
</section>


<style lang="scss">
  @import '../../styles/mixins.scss';

  #screens {
    position: relative;
    width: 10px;
  }

  img {
    position: static;
    user-select: none;
  }

  img:hover {
    outline: none;
  }

  .phone, .tv {
    width: 100%;
    position: absolute;
    border-radius: 5px;
    transition: transform 0.5s ease-out;
    &:active {
      transform: scale(1.2);
    }
  }

  .display-tv {
    width: 80%;
    border-radius: 5px;
  }

  .display-phone {
    width: 60%;
    margin-left: -40%;
    margin-top: 22%;
    border-radius: 5px;
  }

  .icon-overlay {
    position: absolute;
    width: 15px;
    height: 15px;
    left: 8.6%;
    margin-top: -4.5%;
    background-color: rgba(255, 0, 212, 0.5);
    mix-blend-mode: darken;
  }

  .glow {
    position: absolute;
    width: 15px;
    height: 15px;
    left: 8.6%;
    margin-top: -4.7%;
    background-color: rgba(255, 0, 212, 0.1);
    border-radius: 50%;
    @include object-glow(var(--dantotsu-1), 15px);
    z-index: -1;
  }


  $rotation: 40deg;
  $Xachse-left: 30%;
  $Xachse-right: 50%;

  %tv-legs {
    position: absolute;
    bottom: 0;
    margin-bottom: -7%;
    width: 10px;
    height: 50px;
    background-color: var(--dantotsu-6);
    border-radius: 1rem;
    z-index: -1;
  }


  .leg-left {
    @extend %tv-legs;

    left: $Xachse-left;
    transform: translateX(-$Xachse-left) rotate($rotation);
  }

  .leg-right {
    @extend %tv-legs;

    left: $Xachse-right;
    transform: translateX(-$Xachse-right) rotate(-$rotation);
  }

</style>