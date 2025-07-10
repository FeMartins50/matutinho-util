import { setToDo, getAllToDos } from "$lib/server/database.js";

export const load = async () => {
    const todos = await getAllToDos();

    return {
        todos: todos
    };
};

export const actions = {
    addToDo: async ({ cookies, request }) => {
        const data = await request.formData();
		const title = data.get('title').trim();
		const description = data.get('description').trim();
        if (title == "" || description == "") return { success: false };

		const age = (new Date()).getTime();

		await setToDo(title, age, description);

		return { success: true };
    }
}