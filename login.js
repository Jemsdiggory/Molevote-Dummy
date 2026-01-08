function login() {
  const username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Username wajib diisi!");
    return;
  }

  
  localStorage.setItem("username", username);


  window.location.href = "login.html";
}


