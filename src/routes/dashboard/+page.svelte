<script lang="ts">
	import type { PageData } from "./$types";
	import Logo from "$lib/images/LearnQuest_logo.png";
	function Account() {
		location.replace("/account");
	}
	function QuestLibrary() {
		location.replace("/dashboard/quest_library");
	}
	function MyQuests() {
		location.replace("/dashboard/my_quests");
	}
	function CreateAQuest() {
		location.replace("/dashboard/create_a_quest");
	}
	export let data: PageData;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<h1>
	Welcome to LearnQuest, <br />{data.name}!<br /><br /><img
		src={Logo}
		alt="LearnQuest"
	/>
</h1>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={QuestLibrary}>
	<div class="card-body">
		<h1>Quest Library</h1>
	</div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={MyQuests}>
	<div class="card-body">
		<h1>My Quests</h1>
	</div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={CreateAQuest}>
	<div class="card-body">
		<h1>Create a Quest</h1>
	</div>
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card" on:click={Account}>
	<div class="card-body">
		<h1>Account Settings</h1>
	</div>
</div>

<style>
	img {
		display: block;
		height: 100px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 7px;
	}
	h1 {
		text-align: center;
		font-family: "Varela Round";
		font-size: 30px;
	}
	.card h1 {
		margin-bottom: 0px;
		font-size: 24px;
		color: black;
	}

	.card {
		margin-bottom: 10px;
		border-radius: 10px;
		border: none;
	}

	.card:nth-child(2) {
		background-color: #ffb6c1;
	}

	.card:nth-child(3) {
		background-color: #90ee90;
	}

	.card:nth-child(4) {
		background-color: #add8e6;
	}

	.card:nth-child(5) {
		background-color: #fbdf71;
	}
</style>
