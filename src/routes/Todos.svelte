<script lang="ts">
	import { onMount } from "svelte";
	import type { Page, Todo as TodoType } from "../types/app";
	import Todo from "./Todo.svelte";
	import TodoForm from "./TodoForm.svelte";

	let todos: TodoType[] = [];
	let loading = true;

	onMount(async () => {
		const response = await fetch('https://dummyjson.com/todos?limit=10');
		const page: Page<"todos", TodoType> = await response.json();
		todos = page.todos;
		loading = false;
	});

	const handleSubmit = (e: CustomEvent<string>) => {
		todos = [
			...todos,
			{
				id: todos.length + 1,
				todo: e.detail,
				completed: false
			}
		];
	};

	const handleDelete = (e: CustomEvent<number>) => {
		todos = todos.filter(todo => todo.id !== e.detail);
	};
</script>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>

<TodoForm on:submit={handleSubmit} />

<ul>
	{#if loading}
		<li>Loading todos...</li>
	{:else if todos.length === 0}
		<li>No todos</li>
	{:else}
		{#each todos as todo}
			<li>
				<Todo {todo} on:delete={handleDelete} />
			</li>
		{/each}
	{/if}
</ul>
