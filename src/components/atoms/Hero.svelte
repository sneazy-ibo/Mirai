<script>
	import HeroImage from '../quarks/HeroImage.svelte';
	import { reveal } from 'svelte-reveal';
	import Downies from '../nucleons/Downies.svelte';
	import Socials from '../nucleons/Socials.svelte';
</script>

<section id="home" class="hero-wrapper">
	<HeroImage/>
	<div class="description">
		<h1>Dantotsu</h1>
		<h3>The best of the best</h3>
		<h4>Read and watch animes and mangas anytime and everywhere</h4>
		<Downies/>
	</div>
	<Socials/>
</section>
	
<style lang="scss">
@import '../../styles/mixins';

section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	margin-top: 7rem;

	@media screen and (max-width: 868px) {
		margin-top: 4rem;
	}

	@media screen and (max-width: 768px) {
		margin-bottom: 2.75rem;
	}

	@media screen and (max-width: 500px) {
		display: block;
	}
}

.description {
	margin-top: -6em;
}

h4 {
	margin-top: -1rem;
}

@media screen and (max-width: 1240px) {
	h1 {
		min-height: 0vw;
		font-size: clamp(4rem, 10vw, 6.25rem);
	}

	h4 {
		min-height: 0vw;
		font-size: clamp(1.4rem, 2.4vw, 1.5rem);
	}
}
</style>
