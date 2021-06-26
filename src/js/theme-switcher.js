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



// function changeThemeDarkOnClick(event){
// if(localStorage.getItem('theme') === Theme.LIGHT){
//   document.body.classList.add('Theme.DARK');
//   document.body.classList.remove('Theme.LIGHT');
//   localStorage.setItem('theme', 'dark');
// }
// }

// function changeThemeLightOnClick(event){
//   if(localStorage.theme === Theme.DARK){
//     document.body.classList.add('Theme.LIGHT');
//     document.body.classList.remove('Theme.DARK');
//     localStorage.setItem('theme', 'light');
//   }
//   }

// if (localStorage.getItem('theme') === Theme.LIGHT) {
//   document.body.classList.add(Theme.LIGHT);
//   themeSwitch.checked = true;
// }