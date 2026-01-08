document.querySelectorAll(".game-card").forEach(card => {
  let likes = 0;
  let followed = false;

  const likeBtn = card.querySelector(".likeBtn");
  const followBtn = card.querySelector(".followBtn");
  const likesText = card.querySelector(".likes");

  likeBtn.addEventListener("click", () => {
    likes++;
    likesText.textContent = `${likes} Likes`;
    likeBtn.classList.add("liked");
    setTimeout(() => likeBtn.classList.remove("liked"), 300);
  });

  followBtn.addEventListener("click", () => {
    followed = !followed;
    followBtn.innerHTML = followed
      ? `<i class="fa-solid fa-check"></i> Voted`
      : `<i class="fa-solid fa-square-poll-vertical"></i> Vote`;
  });
});

const roleLinks = document.querySelectorAll(".nav-right a");
const cards = document.querySelectorAll(".game-card");

roleLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    roleLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const role = link.dataset.role;

    cards.forEach(card => {
  const cardRoles = card.dataset.role.split(" ");

  if (role === "all" || cardRoles.includes(role)) {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

  });
});


const helloUser = document.getElementById("helloUser");
const username = localStorage.getItem("username") || "User";

const text = `Hello, ${username}!`;
let index = 0;

function typeEffect() {
  if (index < text.length) {
    helloUser.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();
