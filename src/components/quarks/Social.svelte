<script>

	export let link = '';
</script>

<div>
  <a href={link} target="_blank" rel="noreferrer">
    <slot/>
  </a>
</div>

<style lang="scss">
  :global(.socials-container .social-item) {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--dantotsu-1);
    box-shadow: 0 0 40px var(--dantotsu-1);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  :global(.socials-container .social-item:hover) {
    box-shadow: 0 0 30px var(--dantotsu-1), 0 0 50px var(--dantotsu-1), 0 0 70px var(--dantotsu-1);
    opacity: 1;
  }
</style>
