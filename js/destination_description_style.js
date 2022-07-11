const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const destination =  new URLSearchParams(location.search).get('destination');
const destinaionList = ['europa','mars','moon','titan']
const sleep = (delay) => new Promise((resolve)=>setTimeout(resolve,delay));

async function initialize(){
  prev.disabled = true;
  next.disabled = true;
  let index = destinaionList.indexOf(destination) * 100;
  for(var step=0;step<index+1;step++){
    await sleep(2);
    document.querySelector('main').style.right = step + '%'
  }
  prev.disabled = false;
  next.disabled = false;
}

async function goNext (){
  next.disabled= true;
  prev.disabled = true;
  let windowPosition = Number(document.querySelector('main').style.right.replace('%',''));
  console.log(windowPosition);
  if(windowPosition < 300){
    for(var step = 0; step<100 + 1;step++){
      await sleep(4);
      document.querySelector('main').style.right = String(windowPosition+step) + '%';
    }
  }else{
    for(var step = 0; step<300+1;step++){
      await sleep(2);
      document.querySelector('main').style.right = String(windowPosition - step) + '%';
    }
  }
  next.disabled= false;
  prev.disabled = false;
}

async function goPrev (){
  prev.disabled= true;
  next.disabled= true;
  let windowPosition = Number(document.querySelector('main').style.right.replace('%',''));
  if(windowPosition > 0){
    for(var step = 0;step<100 + 1;step++){
      await sleep(4);
      document.querySelector('main').style.right = String(windowPosition - step) + '%';
    }
  }else{
    for(var step = 0; step<300+1;step++){
      await sleep(2);
      document.querySelector('main').style.right = String(windowPosition + step) + '%';
    }
  }
  prev.disabled= false;
  next.disabled = false;
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);
initialize();
