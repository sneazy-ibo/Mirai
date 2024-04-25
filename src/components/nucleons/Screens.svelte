<script lang="ts">
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let isDragging = false;
  let initialdyPhoneX = 0;
  let initialdyPhoneY = 0;
  let dyPhone: HTMLElement | null = null;

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dyPhone = document.querySelector('.dyPhone');
  });

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (isDragging && dyPhone) {
      const offsetX = mouseX - initialdyPhoneX;
      const offsetY = mouseY - initialdyPhoneY;
      dyPhone.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;
    }
    updatePositions();
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    if (dyPhone) {
      initialdyPhoneX = event.clientX - dyPhone.offsetLeft;
      initialdyPhoneY = event.clientY - dyPhone.offsetTop;
      dyPhone.style.transition = 'transform 0.3s ease-out';
    }
  }

  function handleMouseUp() {
      if (isDragging) {
          isDragging = false;
          if (dyPhone) {
              dyPhone.style.transition = 'transform 0.3s ease-out';
              dyPhone.style.transform = 'translate(0, 0) scale(1)';
              setTimeout(() => {
                  if (dyPhone) {
                      dyPhone.style.transition = '';
                  }
              }, 300);
          }
      }
  }

  function updatePositions() {
    const dyTv = document.querySelector('.dyTv') as HTMLElement;
    const dyPhone = document.querySelector('.dyPhone') as HTMLElement;

    if (dyTv && dyPhone && !isDragging) {
      const dyTvX = mouseX * 0.01;
      const dyTvY = mouseY * 0.01;
      const dyPhoneX = mouseX * 0.05;
      const dyPhoneY = mouseY * 0.05;

      dyTv.style.transform = `translate(${dyTvX}px, ${dyTvY}px)`;
      dyPhone.style.transform = `translate(${dyPhoneX}px, ${dyPhoneY}px)`;
    }
  }
</script>


<section class="wrapper" role="presentation">
  <div id="screens">
    <div class="dyTv">
      <img src="https://i.imgur.com/UAUQzaN.png" alt="dyTv" draggable="false" class="display-dyTv"/>
      <div class="leg-left"></div>
      <div class="leg-right"></div>
    </div>
    <div class="dyPhone" on:mousedown={handleMouseDown} role="button" tabindex="0">
      <img src="https://i.imgur.com/NDxbeVP.png" alt="dyPhone" draggable="false" class="display-dyPhone"/>
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

  .dyPhone, .dyTv {
    width: 100%;
    position: absolute;
    border-radius: 5px;
    transition: transform 0.5s ease-out;
    &:active {
      transform: scale(1.2);
    }
  }

  .display-dyTv {
    width: 80%;
    border-radius: 5px;
  }

  .display-dyPhone {
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
    @include object-glow(var(--dantotsu-3), 15px);
    z-index: 1;
  }


  $rotation: 40deg;
  $Xachse-left: 30%;
  $Xachse-right: 50%;

  %dyTv-legs {
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
    @extend %dyTv-legs;

    left: $Xachse-left;
    transform: translateX(-$Xachse-left) rotate($rotation);
  }

  .leg-right {
    @extend %dyTv-legs;

    left: $Xachse-right;
    transform: translateX(-$Xachse-right) rotate(-$rotation);
  }

</style>