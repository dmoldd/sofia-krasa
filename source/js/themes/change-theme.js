const buttonContainer = document.querySelector('.header__change-theme-button-container');
const themeName = document.querySelector('.header__theme-name');
const burgerButton = document.querySelector('.main-nav__burger');
const navigationList = document.querySelector('.main-nav');
const pageBody = document.querySelector('.page__body');

const hideChangeThemeButton = () => {
  buttonContainer.style.display = 'none'
}

const showChangeThemeButton = () => {
  buttonContainer.style.display = 'flex'
}

const changeThemeName = () => {
  if (themeName.textContent === 'Светлая тема') {
    themeName.textContent = 'Тёмная тема';
  } else {
    themeName.textContent = 'Светлая тема';
  }
}

const onChangeTheme = () => {
  pageBody.classList.toggle('dark-theme');
  changeThemeName();
  console.log(themeName.textContent)
};

const regulateVisibilityThemeButton = () => {
  if (navigationList.classList.contains('main-nav--opened')) {
    hideChangeThemeButton();
  } else if (navigationList.classList.contains('main-nav--closed')) {
    showChangeThemeButton();
  }
}

const onBurgerButtonClick = () => {
  regulateVisibilityThemeButton();
}

const changeThemes = () => {
  burgerButton.addEventListener('click', onBurgerButtonClick);
  buttonContainer.addEventListener('click', onChangeTheme);
}

export {changeThemes}
