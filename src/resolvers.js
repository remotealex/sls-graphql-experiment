import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

async function getAllTodos() {
  const response = await fetch(apiUrl + "/todos");
  const todos = await response.json();
  return todos;
}

async function getTodosByUserId(userId) {
  const response = await fetch(apiUrl + "/users/" + userId + "/todos");
  const todos = await response.json();
  return todos;
}

async function getAllUsers() {
  const response = await fetch(apiUrl + "/users");
  const users = await response.json();
  return users;
}

async function getUserByUsername(args) {
  const data = await getAllUsers();
  const users = data.filter((user) => user.username === args.username);

  if (users.length === 0) {
    throw new Error("No user found for that username");
  }

  const user = { ...users[0], todos: [] };
  const todos = await getTodosByUserId(user.id);

  if (todos && todos.length > 0) {
    user.todos = todos;
  }

  return user;
}

export const resolvers = {
  Query: {
    getUsers: (root, args) => getAllUsers(args),
    getUserByUsername: (root, args) => getUserByUsername(args),
    getTodos: (root, args) => getAllTodos(args),
  },
};
