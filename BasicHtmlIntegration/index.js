window.onload = function () {
  const elemMain = document.getElementById("main");
  elemMain.style.color = "red";
  const button1 = document.querySelector('button');
  button1.addEventListener("click",e=>{
      alert('you clicked me');
  })
};
