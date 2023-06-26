let buttonThemeState = document.getElementById('change-theme');
let themeState = 0;

buttonThemeState.addEventListener('click', function (event) {
 event.preventDefault();

 if (themeState === 0) {
  themeState = 1;
  console.log('escuro' + themeState);
  document.documentElement.style.setProperty('--filter-state', themeState);
 } else {
  themeState = 0;
  console.log('claro' + themeState);
  document.documentElement.style.setProperty('--filter-state', themeState);
 }
});
