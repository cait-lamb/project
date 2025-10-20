const colorThemes = document.querySelectorAll('[name="theme"]');

//store mode
// const storeTheme = function(theme) {
//     localStorage.setItem("theme", theme)
// };


const setTheme = function() {
    const activeTheme = getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    // fall back for no has support
    document.documentElement.className = theme;
};


colorThemes.forEach((themeOption) => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

document.onload = setTheme();