// Получаем все элементы с классом "infoBoard-section__post"
const posts = document.querySelectorAll(".infoBoard-section__post");

// Перебираем каждый элемент
posts.forEach((post) => {
  // Получаем изображение внутри элемента
  const img = post.querySelector("img");

  // Если изображение существует, добавляем класс "absolute" к элементу "infoBoard-section__post-info"
  if (img) {
    post
      .querySelector(".infoBoard-section__post-info")
      .classList.add("absolute");
  }
});
