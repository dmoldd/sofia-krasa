const changeThemeButton = document.querySelector('.header__change-theme-button');
const buttonContainer = document.querySelector('.header__change-theme-button-container');
const whiteThemeName = document.querySelector('.header__theme-name--white');
const whiteThemeNameStyle = window.getComputedStyle(whiteThemeName);
const blackThemeName = document.querySelector('.header__theme-name--black');
const blackThemeNameStyle = window.getComputedStyle(blackThemeName);

const pageBody = document.querySelector('.page__body');

const changeThemeName = () => {
  if (whiteThemeNameStyle.display === 'block') {
    whiteThemeName.style.display = 'none'
    blackThemeName.style.display = 'block'
  } else if (blackThemeNameStyle.display === 'block') {
    whiteThemeName.style.display = 'block'
    blackThemeName.style.display = 'none'
  }
}

const onChangeTheme = () => {
  pageBody.classList.toggle('dark-theme');
  changeThemeName();
  console.log(whiteThemeNameStyle.display)
};

changeThemeButton.addEventListener('click', onChangeTheme);