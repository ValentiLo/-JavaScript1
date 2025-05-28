// let heart = document.querySelector('.heart');

// heart.onclick = function () {
//   heart.classList.toggle('added');
// };
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');


heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  
  heart.classList.toggle('added');
};
