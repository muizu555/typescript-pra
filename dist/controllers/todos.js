"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo); //メモリ上にのみ保存
    res.status(201).json({ message: "リスト作成", createTodo: newTodo });
};
exports.createTodo = createTodo;
//# sourceMappingURL=todos.js.map