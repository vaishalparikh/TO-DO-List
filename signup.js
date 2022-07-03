//! Sign up

async function signUpClickHandler() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;

  const settings = {
    url: "https://api-nodejs-todolist.herokuapp.com/user/register",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      name: name,
      email: email,
      password: password,
      age: age,
    }),
  };
  await $.ajax(settings).done(function (response) {
    if (response?.user && response?.token) {
      window.location.href = "/index.html";
    }
  });
}

const btn = document.getElementById("submit");
btn.addEventListener("click", (event) => {
  // To prefvent the default event to not submit the form.
  event.preventDefault();
  signUpClickHandler();
});