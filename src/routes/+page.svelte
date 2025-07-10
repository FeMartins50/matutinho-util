<script>
    let { data } = $props();
</script>

<a href="/home"><p>Home</p></a>

<h3>Add To Do</h3>
<form method="POST" action="?/addToDo">
	<label>
		Título:
		<input name="title" type="text">
	</label>
    <label>
		Descrição:
		<input name="description" type="text">
	</label>
	<button type="submit">Adicionar</button>
</form>

<br><br>

<div class="todo">
    <p style="flex: 2">Título</p>
    <p style="flex: 4">Descrição</p>
</div>
{#each data.todos as todo}
<div class="todo">
    <p style="flex: 2">{todo.title}</p>
    <p style="flex: 4">{todo.description}</p>
</div>
{/each}

<style>
    form {
        width: 100%;

        display: flex;
        flex-flow: column;
        align-items: baseline;
    }
    label {
        width: 100%;
        padding: 1em;
        
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    label input {
        width: 50%;
        padding: .4em;
        margin: 0 1em 0 auto;
    }
    form button {
        margin: 0 auto;
    }

    .todo {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    .todo p {
        margin: .4em;
    }
</style>