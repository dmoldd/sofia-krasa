const changeThemeButton = document.querySelector('.header__change-theme-button');
const buttonContainer = document.querySelector('.header__change-theme-button-container');
const themeName = document.querySelector('.header__theme-name');

const pageBody = document.querySelector('.page__body');

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

buttonContainer.addEventListener('click', onChangeTheme);