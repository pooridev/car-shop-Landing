// hide Preloader after page load finish
const hidePreloader = () => {
  document.querySelector('.preloader').classList.add('hidePreloader');
};
window.addEventListener('load', hidePreloader);

// Car filtering
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
  button.addEventListener('click', e => {
    const category = e.currentTarget.dataset.id;
    const germanCars = document.querySelectorAll('[data-group="[german-car]"]');
    const americanCars = document.querySelectorAll('[data-group="[american-car]"');

    switch (category) {
      case 'all': {
        americanCars.forEach(americanCar => americanCar.classList.remove('hide'));
        germanCars.forEach(germanCar => germanCar.classList.remove('hide'));
        break;
      }
      case 'american': {
        germanCars.forEach(germanCar => germanCar.classList.add('hide'));
        americanCars.forEach(americanCar => americanCar.classList.remove('hide'));
        break;
      }
      case 'german': {
        americanCars.forEach(americanCar => americanCar.classList.add('hide'))
        germanCars.forEach(germanCar => germanCar.classList.remove('hide'));
        break;
      }
      default:
        throw new Error('should not reach out here');
    }
  });
});