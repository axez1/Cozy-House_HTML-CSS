function  count_btn_like() {
  let btnLike = document.querySelectorAll('btn__like');
  let count = document.getElementById('count');
  let value = count.innerHTML;
  ++value;
  console.log(value);
  document.getElementById('count').innerHTML = value;
}