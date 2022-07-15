const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".screen");
const string = "0123456789";
buttons.addEventListener("click", function (e) {
  if (e.target.innerText === "c") {
    screen.innerText = "";
  }
  if(e.target.innerText === 'delete'){
   
    screen.innerText=screen.innerText.slice(0,screen.innerText.length - 1);
  }
  if(e.target.innerText === 'log'){
    screen.innerText=Math.log10(screen.innerText)

  }
  if(e.target.innerText === 'exp'){
    screen.innerText=Math.exp(screen.innerText);
  }
  if (
    !screen.innerText ||
    string.indexOf(screen.innerText[screen.innerText.length - 1]) == -1
  ) {
    if (string.indexOf(e.target.innerText) === -1) {
      return;
    }
  }
  if (e.target.innerText === "=") {
    screen.innerText = eval(screen.innerText);
    return;
  }
  if(e.target.innerText!=='log' && e.target.innerText!=='exp' && e.target.innerText!=='delete' ){
    screen.innerText += e.target.innerText;
  }
  
});
