const changeThemeButton = document.querySelector('.header__change-theme-button');

const onChangeTheme = () => {
    changeThemeButton.classList.toggle('dark-theme');
    console.log(1)
};

changeThemeButton.addEventListener('click', onChangeTheme);