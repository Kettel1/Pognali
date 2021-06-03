let navigation = document.querySelector('.filter__select');
let hideButton = document.querySelector('.filter__top-button');
let filterButton = document.querySelector('.filter__button')
let clientsLike = document.querySelectorAll('.clients__likes-box');
let filterLink = document.querySelectorAll('.filter__link')
let filterLinkActive = document.querySelector('.filter__link--active')

hideButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.toggle('filter__select--show')

  if(navigation.classList.contains('filter__select--show')) {

    hideButton.innerHTML = '<img src="img/icon_close.svg" class="filter-top-button-icon--close">'
    hideButton.classList.add('filter__top-button-js')
  } else {
    hideButton.innerHTML = '<img src="img/3-dots.svg" class="filter-top-button-icon">';
    hideButton.classList.remove('filter__top-button-js')
  }
});

filterButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigation.classList.remove('filter__select--show');
  hideButton.classList.remove('filter__top-button-js')
  hideButton.innerHTML = '<img src="img/3-dots.svg" class="filter-top-button-icon">';
});

// Цикл проверяет нажимает ли пользователь лайк
for (let i = 0; i < clientsLike.length; i ++) {
  clientsLike[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    clientsLike[i].classList.toggle('clients__likes-box--active')
  })
};

//Фильтрация по странам
function tabs (evt) {
  evt.preventDefault()
  for (let i = 0; i < filterLink.length; i++) {
    filterLink[i].className = filterLink[i].className.replace(' filter__link--active', '')
  }
  evt.currentTarget.className += " filter__link--active";
}
