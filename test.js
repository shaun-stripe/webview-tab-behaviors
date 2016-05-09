//
// Paste this into a devtools console, then click the new button at the bottom
// of the page to see how Tab creation is handled.
//
var btn = document.createElement('button');
btn.innerHTML = 'OPEN NEW TAB';
btn.style.marginTop = btn.style.marginBottom = '100px';
btn.onclick = function() {
  console.log('Trying to open new tab');
  window.open('http://example.com', '_blank');
};
document.body.appendChild(btn);
