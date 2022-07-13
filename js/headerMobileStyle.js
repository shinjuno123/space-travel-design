const hamburgerBtn = document.querySelector('.hambuger-button');
const transparentCvr = document.querySelector('.transparent-cover');
const btnCloseHeader = document.querySelector('.btn-close-header');
const mobileHeader = document.querySelector('.mobile-header');
const body = document.body;
const html = document.documentElement;
var sleep = (delay) => new Promise((resolve)=>setTimeout(resolve,delay));


async function OpenMobileHeader(event) {
  console.log("click");
  const height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
  console.log(window.innerWidth);
  if (window.innerWidth <= 1240) {
    console.log(height);
    // Transparent cover style
    transparentCvr.style.position = "absolute";
    transparentCvr.style.display = "inline-block";
    transparentCvr.style.top = "0";
    transparentCvr.style.width = "100%";
    transparentCvr.style.height = height + 'px';
    transparentCvr.style.backgroundColor = "#ffffff33";
    transparentCvr.style.zIndex = "5";

    // mobile header style
    mobileHeader.style.position = "absolute";
    mobileHeader.style.display = "inline-block";
    mobileHeader.style.top = "0";
    mobileHeader.style.right = "-30%";
    mobileHeader.style.width = "30%";
    mobileHeader.style.height = height + "px";
    mobileHeader.style.backgroundColor = "#343434";
    mobileHeader.style.zIndex = "6";

    // opens mobile header slowly from right side
    transparentCvr.disabled = true;
    hamburgerBtn.disabled = true;
    for(var step=0;step<30+1;step++){
      await sleep(5);
      mobileHeader.style.right = String(-30 + step) + "%";
    }
    transparentCvr.disabled = false;
    hamburgerBtn.disabled = false;




  }
}
function CloseMobileHeader(event) {
  // Transparent cover style
  transparentCvr.style.display = "none";
  transparentCvr.style.zIndex = "-1";

  // mobile header style
  mobileHeader.style.display = "none";
  mobileHeader.style.zIndex = "-1";
}


function Resize(event) {
  console.log(window.innerWidth);
  if (window.innerWidth > 1240) {
    // transparent cover style
    transparentCvr.style.display = "none";
    transparentCvr.style.zIndex = "-1";

    // mobile header style
    mobileHeader.style.display = "none";
    mobileHeader.style.zIndex = "-1";
  }else{
    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    // transparent cover style
    transparentCvr.style.height = height + 'px';


    // mobile header style
    mobileHeader.style.height = height + 'px';
  }
}




hamburgerBtn.addEventListener('click', OpenMobileHeader);
transparentCvr.addEventListener('click', CloseMobileHeader);
btnCloseHeader.addEventListener('click', CloseMobileHeader);
window.addEventListener('resize', Resize);
