<script>
  import Social from '../quarks/Social.svelte';

  import { GitHubIcon } from '@indaco/svelte-iconoir/github';
	import { DiscordIcon } from '@indaco/svelte-iconoir/discord';
	import { TelegramIcon } from '@indaco/svelte-iconoir/telegram';
	import { CoffeeCupIcon } from '@indaco/svelte-iconoir/coffee-cup';
</script>

<div class="socials-container">
  <Social link="https://github.com/rebelonion/Dantotsu">
      <div class="social-item">
          <GitHubIcon style="width: 50%; height: 50%"/>
      </div>
  </Social>

  <Social link="https://discord.com/">
      <div class="social-item">
          <DiscordIcon style="width: 50%; height: 50%"/>
      </div>
  </Social>

  <Social link="https://t.me/">
      <div class="social-item">
          <TelegramIcon style="width: 50%; height: 50%"/>
      </div>
  </Social>

  <Social link="https://www.buymeacoffee.com/rebelonion">
      <div class="social-item">
          <CoffeeCupIcon style="width: 50%; height: 50%"/>
      </div>
  </Social>
</div>

<style>
  .socials-container {
    margin-top: 3em;
    margin-left: 8em;
    display: flex;
    flex-direction: column;
    gap: 4em;
    overflow: visible;
  }
</style>