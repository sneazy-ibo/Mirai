<script>
	import '../styles/global.scss';
	import '../styles/fonts.scss';
	import NavHost from '../components/nucleons/NavHost.svelte';
	import Hero from '../components/atoms/Hero.svelte';
	import Syncing from '../components/atoms/Syncing.svelte';
	import Allinone from '../components/atoms/Allinone.svelte';
	import Languages from '../components/atoms/Languages.svelte';
	import Offline from '../components/atoms/Offline.svelte';
	import Friends from '../components/atoms/Friends.svelte';
	import Casting from '../components/atoms/Casting.svelte';
	import Comments from '../components/atoms/Comments.svelte';
	import Notifications from '../components/atoms/Notifications.svelte';
</script>

<NavHost />

<main>
	<Hero />
	<Syncing />
	<Allinone />
	<Languages />
	<Offline />
	<Friends />
	<Casting />
	<Comments />
	<Notifications />
</main>
