import * as db from '$lib/server/database.js';

export async function init() {
	await db.initialize();
}