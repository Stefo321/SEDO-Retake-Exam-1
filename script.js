document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

document.getElementById('reset-btn').addEventListener('click', function () {
  document.getElementById('box').style.backgroundColor = '#ddd';
  document.getElementById('color-input').value = '';
});
