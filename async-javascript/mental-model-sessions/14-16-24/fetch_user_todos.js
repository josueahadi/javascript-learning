async function fetchUserTodos(userUrls, todosUrls) {
    try {
        let user = await fetch(userUrls);
        let todos = await fetch(todosUrls);
        let promise = await Promise.all([user, todos]);
        let userJson, todosJson;

        if (!user.ok && !todos.ok) {
            throw new Error("error!!!!!!!!!!!!!");
        }

        userJson = await promise[0].json();
        todosJson = await promise[1].json();

        let arr = []
        let users = userJson.map((user) => {
            const {
                id,
                name
            } = user;
            return {
                id,
                name
            };
        });
        let todo = todosJson.map((todo) => {
            const {
                userId,
                completed
            } = todo;
            return {
                userId,
                completed
            };
        });

        users.map(user => {
            let dd = todo.filter(t => t.userId === user.id)
            const obj = {
                id: user.id,
                name: user.name,
                todo
            }
            arr.push(obj)
        })
        console.log(arr)

    } catch (err) {
        console.log("Err:", err);
    }
}
fetchUserTodos(
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/todos"
);