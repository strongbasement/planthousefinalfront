size();
function size() {
  var inw=window.innerWidth;
  var inh=window.innerHeight;
  document.querySelector('.menulogo').setAttribute("width",inw);
}

window.onresize=size;
