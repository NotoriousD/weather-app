const currentDay = document.querySelector('.vh_today_btn')
const fiveDays = document.querySelector('.vh_5day_btn')






fiveDays.addEventListener("click", () => {
  document.querySelector('.vh_date_section').classList.remove('is_flex')
  document.querySelector('.vh_date_section').classList.add('is_hidden')
  document.querySelector('.fiveday_block').classList.remove('is_hidden')
  document.querySelector('.vh_degree_section').classList.remove('is_flex')
  document.querySelector('.vh_degree_section').classList.add('is_hidden')
  // document.querySelector('.vh-change_day_section').classList.remove('is_flex')
  // document.querySelector('.vh-change_day_section').classList.add('is_hidden')
  fiveDays.style.backgroundColor = 'white';
  currentDay.style.backgroundColor = '#9d9fa9';
})

currentDay.addEventListener("click", () => {
  document.querySelector('.fiveday_block').classList.add('is_hidden')
  document.querySelector('.vh_date_section').classList.remove('is_hidden')
  document.querySelector('.vh_date_section').classList.add('is_flex')
  document.querySelector('.vh_degree_section').classList.remove('is_hidden')
  document.querySelector('.vh_degree_section').classList.add('is_flex')
  // document.querySelector('.vh-change_day_section').classList.remove('is_hidden')
  // document.querySelector('.vh-change_day_section').classList.add('is_flex')
  currentDay.style.backgroundColor = 'white';
  fiveDays.style.backgroundColor = '#9d9fa9';

})
