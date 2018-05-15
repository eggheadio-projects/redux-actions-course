const baseUrl = process.env.REACT_APP_BASE_URL;
// hard-coded glitch url used for codesandbox

export const getTodos = () => {
  return fetch("https://adventurous-kettle.glitch.me/todos", {
    Accept: "application/json",
    "Content-Type": "application/json"
  }).then(res => res.json());
};

export const createTodo = name => {
  return fetch("https://adventurous-kettle.glitch.me/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, isComplete: false })
  }).then(res => res.json());
};

export const updateTodo = todo => {
  return fetch(`https://adventurous-kettle.glitch.me/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
};

export const destroyTodo = id => {
  return fetch(`https://adventurous-kettle.glitch.me/todos/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
