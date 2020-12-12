// Preloader
Preloader = () => {
  document.querySelector('.preloader').classList.add('hidePreloader');
}
window.addEventListener('load', Preloader);



const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
  button.addEventListener('click', e => {
    const category = e.currentTarget.dataset.id;
    const germanCars = document.querySelectorAll('[data-group="[german-car]"]');
    const americanCars = document.querySelectorAll('[data-group="[american-car]"')
    category == 'all'
      ? americanCars.forEach(americanCar => americanCar.classList.remove('hide'))
      & germanCars.forEach(germanCar => germanCar.classList.remove('hide'))
      : null;
    category == 'american'
      ? germanCars.forEach(germanCar => germanCar.classList.add('hide'))
      & americanCars.forEach(americanCar => americanCar.classList.remove('hide'))
      : null;
    category == 'german'
      ? americanCars.forEach(americanCar => americanCar.classList.add('hide'))
      & germanCars.forEach(germanCar => germanCar.classList.remove('hide'))
      : null;
  })
})