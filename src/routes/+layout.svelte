<script lang="ts">
	import { page } from '$app/stores';
  import Nav from '$lib/components/Nav.svelte';
  import RemoveGlobalComponent from '$lib/components/RemoveGlobalComponent.svelte';
  import { onMount } from 'svelte';

  // Define routes where the header should be removed
  const hiddenRoutes = [
  '/loading/registrationsuccessful', 
  '/dashboard', 
  '/dashboard/create_a_quest/quest_storage', 
  '/dashboard/create_a_quest/question1',
  '/dashboard/create_a_quest/question2',
  '/dashboard/create_a_quest/question3',
  '/dashboard/create_a_quest/question4',
  '/dashboard/create_a_quest/question5',
  '/dashboard/create_a_quest/question6',
  '/dashboard/create_a_quest/question7',
  '/dashboard/create_a_quest/question8',
  '/dashboard/create_a_quest/question9',
  '/dashboard/create_a_quest/question10',
  '/dashboard/create_a_quest/question11'
];


  // Reactive variable to check if current page is in the hiddenRoutes list
  $: remove = hiddenRoutes.includes($page.url.pathname);
	import type { LayoutData } from "./$types";
	export let data: LayoutData;
</script>

<RemoveGlobalComponent remove={remove}>
	<Nav logged_in={!!data.name && !!data.email} />
</RemoveGlobalComponent>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}
</style>
