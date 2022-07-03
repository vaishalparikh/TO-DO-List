let allTasksArray = [];
let usersByLikes;
function getalltask() {
  const token = localStorage.getItem("token");
  var variables = {
    url: "https://api-nodejs-todolist.herokuapp.com/task",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  $.ajax(variables).done(async function (response) {
    allTasksArray = await response?.data;
  });
}

btn1.addEventListener("click", () => {
  getalltask();
  if (allTasksArray.length > 0) {
    const markUp = allTasksArray.map((item) => {
      return `<li> ${item?.description} </li>`;
    });

    document.getElementById("myUL1").innerHTML = markUp;
  }
});
