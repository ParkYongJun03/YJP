const sec_toggleBtn = document.querySelector('.sec_sidebar_toggleBtn');
const sec_sidebar_up = document.querySelector('.sec_sidebar_up');
const sidebar = document.querySelector('.sidebar');

sec_toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  sec_sidebar_up.classList.toggle('active');
  sec_toggleBtn.classList.toggle('active');
  console.log('toggle!');
});
