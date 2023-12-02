const changeThemeButton = document.querySelector('.header__change-theme-button');
const pageBody =  document.querySelector('.page__body');

const onChangeTheme = () => {
    pageBody.classList.toggle('dark-theme');
    console.log(1)
};

changeThemeButton.addEventListener('click', onChangeTheme);