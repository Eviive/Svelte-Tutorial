<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let todo = '';

	const dispatch = createEventDispatcher<{ submit: string }>();

	const handleSubmit = () => {
		if (!todo) return;

		dispatch("submit", todo);
		todo = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={todo} placeholder="TODO">
	<button type="submit">Ajouter</button>
</form>
