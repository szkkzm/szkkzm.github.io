document.querySelector('.link-imgat').addEventListener('mouseenter', () => {
  const element = document.querySelector('.link-imgat');
  element.classList.add('state-show');
  document.querySelector('.link-textat').textContent = "アート思考";
});

document.querySelector('.link-imgat').addEventListener('mouseleave', () => {
  const element = document.querySelector('.link-imgat');
  element.classList.remove('state-show');
  document.querySelector('.link-textat').textContent = "";
});

document.querySelector('.link-imgwt').addEventListener('mouseenter', () => {
  const element = document.querySelector('.link-imgwt');
  element.classList.add('state-show');
  document.querySelector('.link-textwt').textContent = "ライティング";
});

document.querySelector('.link-imgwt').addEventListener('mouseleave', () => {
  const element = document.querySelector('.link-imgwt');
  element.classList.remove('state-show');
  document.querySelector('.link-textwt').textContent = "";
});
