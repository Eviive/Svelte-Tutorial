<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { Todo } from "../types/app";

	export let todo: Todo;

	const dispatch = createEventDispatcher<{ delete: number }>();

	const handleDelete = () => {
		dispatch("delete", todo.id);
	};
</script>

<style lang="scss">
	.todo {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>

<div class="todo">
	<input type="checkbox" bind:checked={todo.completed} />
	<h3>{todo.todo}</h3>
	<p>{todo.completed ? "Terminé" : "En cours"}</p>
	<button on:click={handleDelete}>Supprimer</button>
</div>
