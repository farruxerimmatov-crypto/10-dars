document.getElementById("loadBtn").addEventListener("click", getUsers);

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const userList = document.getElementById("userList");
      userList.innerHTML = ""; 

      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} — ${user.email}`;
        userList.appendChild(li);
      });
    })
    .catch(error => {
      console.log("Xatolik:", error);
    });
}
