<script>
	async function getData() {
		const url = 'http://localhost:1236/apps';
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			return json;
		} catch (error) {
			console.error(error.message);
		}
	}
	import { redirect } from '@sveltejs/kit';
	function redirectUrl(website) {
		window.location.href = website;
	}
</script>

{#await getData()}
	WAITING
{:then apps}
	<div class="h-screen">
		{#each apps as app}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onclick={redirectUrl(app.link)} class="block">
				<img alt={app.name} src={app.icon} />
				{app.name}
			</div>
		{/each}
	</div>
{/await}

<style>
	.block {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: rgba(255, 255, 255, 0.7);
		min-width: fit-content;
		max-width: fit-content;
		margin: 10px;
		border-radius: 5px;
		border: solid 2px lightgrey;
		padding: 2px;
	}
	.block img {
		width: 5em;
	}
	.h-screen {
		display: flex;
		align-items: start;
		justify-content: center;
		flex-direction: row;
		vertical-align: top;
	}
	.h-screen {
		font-family: sans-serif;
		background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/D%C3%BClmen%2C_Wildpark_--_2020_--_3427.jpg/1280px-D%C3%BClmen%2C_Wildpark_--_2020_--_3427.jpg);
		width: 100%;
		margin: 0;
		height: 100%;
	}
</style>
