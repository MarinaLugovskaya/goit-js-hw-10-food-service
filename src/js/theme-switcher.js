const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');

themeSwitch.addEventListener('change', changeThemeOnClick);

function changeThemeOnClick(event) {
  if (themeSwitch.checked) {
    changeTheme(Theme.DARK, Theme.LIGHT);
  } else {
    changeTheme(Theme.LIGHT, Theme.DARK);
  }
}

function changeTheme(addClass, removeClass){
  document.body.classList.add(addClass);
  document.body.classList.remove(removeClass);
  localStorage.setItem('theme', addClass);
};

if (localStorage.getItem('theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  themeSwitch.checked = true;
}