<script lang="ts">
  
</script>

<div class="profiles">
  <img class="profile rebel" src="https://i.imgur.com/wlK9AUy.png" alt="">
  <img class="profile aayush" src="https://i.imgur.com/52pdlsK.png" alt="">
  <div class="profile adolar">
    <div class="card">
      <img class="card-front-image card-image" src="https://i.imgur.com/46rqMOq.png" alt=""/>
      <div class="card-faders">
        <img class="card-fader card-image" src="https://i.imgur.com/52pdlsK.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/9UUnmnZ.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/wlK9AUy.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/7LiiBSh.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/52pdlsK.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/9UUnmnZ.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/wlK9AUy.png" alt=""/>
        <img class="card-fader card-image" src="https://i.imgur.com/7LiiBSh.png" alt=""/>
      </div>
    </div>
  </div>
  <img class="profile zaxxy" src="https://i.imgur.com/9UUnmnZ.png" alt="">
  <img class="profile ibo" src="https://i.imgur.com/7LiiBSh.png" alt="">
</div>

<style lang="scss">
  
  .profiles {
    margin-top: -17%;
    display: flex;
    justify-content: center;
    position: relative;
    
    .profile {
      width: 200px;
      height: auto;
      position: absolute;
      transition: transform 0.3s ease;
      z-index: 0;
      
      &.adolar { z-index: 3; }
      &.aayush, &.zaxxy { z-index: 2; }
      &.rebel, &.ibo { z-index: 1; }
    }
    
    &:hover {
      .aayush { transform: translateX(-60%) translateY(4%) rotate(-5deg); }
      .zaxxy { transform: translateX(60%) translateY(4%) rotate(5deg); }
      .rebel { transform: translateX(-120%) translateY(8%) rotate(-10deg); }
      .ibo { transform: translateX(120%) translateY(8%) rotate(10deg); }
      .card-faders {
      opacity: 0;
    }
  }}

  .card {
    position: relative;
    transition: transform 100ms;
    
    .card-front-image {
      position: relative;
      z-index: 2;
      width: 100%;
    }
  }

  .card-faders {
    height: 97%;
    width: 97%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 1;
    transition: opacity 1500ms;

    .profiles:not(:hover) & {
      opacity: 1;
    }

    .card-fader {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
        pointer-events: none;

        &:nth-child(odd) { animation: fade-left 3s linear infinite; }
        &:nth-child(even) { animation: fade-right 3s linear infinite; }
        &:nth-child(3), &:nth-child(4) { animation-delay: 750ms; }
        &:nth-child(5), &:nth-child(6) { animation-delay: 1500ms; }
        &:nth-child(7), &:nth-child(8) { animation-delay: 2250ms; }
      }
    }

  @keyframes fade-left {
    from { transform: translateX(0) scale(1); opacity: 1; }
    to { transform: translateX(-80%) scale(0.8); opacity: 0; }
  }

  @keyframes fade-right {
    from { transform: translateX(0) scale(1); opacity: 1; }
    to { transform: translateX(80%) scale(0.8); opacity: 0; }
  }

</style>
