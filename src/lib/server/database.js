import SQLite from 'better-sqlite3';
const sql = new SQLite("./bancoteste.sqlite");

export async function initialize () {
    // Criar uma table de nome 'todolist'
    const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'todolist';").get();
    if (!table["count(*)"]) {
        sql.prepare("CREATE TABLE todolist (title TEXT PRIMARY KEY, age INTEGER, description TEXT);").run();
        // Ensure that the "id" row is always unique and indexed.
        sql.prepare("CREATE UNIQUE INDEX id ON todolist (title);").run();
    }
}

export async function setToDo (title, age, description) {
    return sql.prepare("INSERT INTO todolist (title, age, description) VALUES (?, ?, ?);").run(title, age, description);
}

export async function getToDoByTitle (title) {
    return sql.prepare("SELECT * FROM todolist WHERE title = ?;").get(title);
}

export async function getAllToDos () {
    return sql.prepare("SELECT * FROM todolist;").all();
}