<script>
  import Extensions from '../nucleons/Extensions.svelte'
</script>

<section class="wrapper">
  <div>
    <h2>No English? No problem!</h2>
    <p>Reading in different languages has never been simpler. Thanks to our integration with Tachiyomi and Aniyomi extensions, you can effortlessly switch between languages and enjoy your favorite media in your preferred tongue.
    </p>
  </div>
</section>
<Extensions/>

<style lang="scss">
@import '../../styles/mixins.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
  > div {
    flex: 1;
    width: 100%;
    margin-bottom: 20px;
  }
}

h2 {
  @include text-gradient(to right, (
    var(--dantotsu-5) 35%,
    var(--dantotsu-1) 45%,
    var(--dantotsu-0) 65%
  ));
  text-align: center;
} 

p {
    width: 100%;
}
</style>