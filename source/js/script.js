let navigation = document.querySelector('.filter__select');
let hideButton = document.querySelector('.filter__top-button');
let filterButton = document.querySelector('.filter__button')
let clientsLike = document.querySelectorAll('.clients__likes-box');

hideButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.toggle('filter__select--show')

  if(navigation.classList.contains('filter__select--show')) {
    hideButton.innerHTML = 'Свернуть'
    hideButton.classList.add('filter__top-button-js')
  } else {
    hideButton.innerHTML = 'Показать все';
    hideButton.classList.remove('filter__top-button-js')
  }
});

filterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.remove('filter__select--show');
});

// Цикл проверяет нажимает ли пользователь лайк
for (let i = 0; i < clientsLike.length; i ++) {
  clientsLike[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    clientsLike[i].classList.toggle('clients__likes-box--active')
  })
}
