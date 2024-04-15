<script>
	import NavHost from '../components/nucleons/NavHost.svelte';
	import Hero from '../components/atoms/Hero.svelte';
	import Global from '../components/atoms/Global.svelte';
	import Syncing from '../components/atoms/Syncing.svelte';
	import Media from '../components/atoms/Media.svelte';
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
	<Global />
	<Syncing />
	<Media />
	<Languages />
	<Offline />
	<Friends />
	<Casting />
	<Comments />
	<Notifications />
</main>
