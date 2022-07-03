
async function submitTodo() {
    const token = localStorage.getItem("token");
    console.log(token);
    const variables = {
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      method: "POST",
      timeout: 0,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(todoItemObj),
    };
  
    await $.ajax(variables).done(function (response) {
      console.log(response);
    });
  }
  
  btn.addEventListener("click", () => {
    submitTodo();
  });