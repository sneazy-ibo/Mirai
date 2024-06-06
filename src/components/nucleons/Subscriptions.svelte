<script lang="ts">
  const initialPositions = [
    { src: 'https://i.imgur.com/9rMlREr.png', x: -200, y: 0 },
    { src: 'https://i.imgur.com/Z8AagrC.png', x: 200, y: 0 },
    { src: 'https://i.imgur.com/CTTOipl.png', x: -200, y: 0 }
  ];

  const defaultPositions = initialPositions.map((pos, index) => ({
    ...pos,
    x: 0,
    y: index * 0
  }));

  let positions = [...initialPositions];
  let currentIndex = 0;
  let isDefaultPosition = false;

  const handleClick = () => {
    if (isDefaultPosition) {
      // Reset to initial positions
      positions = [...initialPositions];
      currentIndex = 0;
      isDefaultPosition = false;
    } else {
      if (currentIndex < positions.length) {
        positions[currentIndex] = { ...defaultPositions[currentIndex] };
        currentIndex++;
        if (currentIndex === positions.length) {
          isDefaultPosition = true;
        }
      }
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };
</script>

<div
  class="phone"
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeydown}
  aria-label="Interactive phone area"
>
  <img class="panel" src="https://i.imgur.com/V551KHn.png" alt="">
  <div class="notifications">
    {#each positions as pos, i}
      <img
        src={pos.src}
        alt=""
        class={pos.x === 0 && pos.y === 0 ? 'default' : ''}
        style="transform: translate({pos.x}px, {pos.y}px); transition: transform 0.5s;"
      >
    {/each}
  </div>  
</div>

<style lang="scss">
  img {
      position: absolute;
    }
    
  .panel {
    width: 14em;
    margin-left: 8em;
    margin-top: -10em;    
  }

  .notifications {
    position: relative;
    top: -1.45em;
    left: -0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 210px;
      margin-bottom: -1px;
      position: relative;
      display: block;
      outline: none;
      border-radius: 10px;
      box-shadow: none;
      &:not(.default) {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .phone[role="button"] {
    cursor: pointer;
  }
</style>

