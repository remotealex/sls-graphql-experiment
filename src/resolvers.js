import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

async function getUserQuery(args) {
  const response = await fetch(apiUrl + "/users");
  const data = await response.json();

  const users = data.filter((user) => user.username === args.username);

  if (users.length === 0) {
    throw new Error("No user found for that username");
  }

  return users[0];
}

export const resolvers = {
  Query: {
    getUser: (root, args) => getUserQuery(args),
  },
};
