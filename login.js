//! Login:

async function loginclickHandler() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const variables = {
    url: "https://api-nodejs-todolist.herokuapp.com/user/login",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      email,
      password,
    }),
  };

  $.ajax(variables).done(function (response) {
    if (response?.token) {
      console.log(response);
      localStorage.setItem("token", response?.token);
      window.location.href = "/todo.html";
    }
  });
}

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  loginclickHandler();
});
