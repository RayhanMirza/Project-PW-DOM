const Like = document.getElementById("likeButton");
const LikeCount = document.getElementById("likeCount");

const button = document.getElementById("btn");
const tabel = document.getElementById("tabel");

Like.addEventListener("click", () => {
  LikeCount.textContent = parseInt(LikeCount.textContent) + 1;
});

button.addEventListener("click", () => {
  if (tabel.style.display == "none") {
    tabel.style.display = "block";
  } else {
    tabel.style.display = "none";
  }
});
