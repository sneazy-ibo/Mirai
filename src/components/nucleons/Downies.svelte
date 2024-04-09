<script>
  import Button from '../quarks/Downy.svelte';
</script>

<div class="button-container">
  <Button label="Stable"/>
  <Button label="Beta"/>
  <Button label="Alpha"/>
</div>
  
<style>
  .button-container {
    margin: 2em;
    display: flex;
    gap: 4em;
  }
</style>