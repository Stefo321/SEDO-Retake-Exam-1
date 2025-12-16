function isValidColor(color) {
  // Check for hex color format (#FFF or #FFFFFF)
  var hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  // Check for named colors (basic ones)
  var namedColors = ['red', 'green', 'blue', 'black', 'white', 'yellow', 'purple', 'orange'];
  
  return hexPattern.test(color) || namedColors.includes(color.toLowerCase());
}

document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  if (isValidColor(c)) {
    document.getElementById('box').style.backgroundColor = c;
    document.getElementById('error-message').textContent = '';
  } else {
    document.getElementById('error-message').textContent = 'Invalid color format. Use #FFF, #FFFFFF, or named colors.';
    document.getElementById('error-message').style.color = 'red';
  }
});

document.getElementById('reset-btn').addEventListener('click', function () {
  document.getElementById('box').style.backgroundColor = '#ddd';
  document.getElementById('color-input').value = '';
  document.getElementById('error-message').textContent = '';
});
