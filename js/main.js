// main.js
const topmenu = document.querySelector(".top_menu>dd:nth-of-type(5)");

topmenu.addEventListener("click", e=>{
  e.preventDefault();
  topmenu.classList.toggle("on");
  topmenu.classList.contains("on") ? topmenu.children[0].setAttribute('title','고객센터 닫기') : topmenu.children[0].setAttribute('title','고객센터 열기');
})
const header = document.querySelector(".header_wrap")
const gnbmenu = document.querySelectorAll(".gnb>ul>li");
const list = document.querySelectorAll(".gnb>ul>li>ul");
gnbmenu.forEach((el,i) =>{
  el.addEventListener("mouseover", e=>{
    if(topmenu.classList.contains("on")) topmenu.classList.remove("on");
    if(srch_box.classList.contains("on")) srch_box.classList.remove("on");
    if(srch_btn.classList.contains("on")) srch_btn.classList.remove("on");
    
    for(let el of list) el.classList.add("on");
    header.classList.add("on");
  })
  el.addEventListener("mouseout", e=>{
    for(let el of list) el.classList.remove("on");
    header.classList.remove("on");
  })
  el.addEventListener("focus", e=>{
    for(let el of list) el.classList.add("on");
    header.classList.add("on");
  })
})

const srch_btn = document.querySelector(".srch_open");
const srch_box = document.querySelector(".srch");

srch_btn.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  srch_box.classList.toggle("on");
  e.currentTarget.classList.contains("on") ? e.currentTarget.setAttribute('title','검색입력서식 닫기') : currentTarget.setAttribute('title','검색입력서식 열기');
})

const a = document.querySelectorAll(".login a");
let img_appear ="";
for(let i=0;i<57;i++){
  i<10 ? img_appear +=`<img src="images/appear/appear_0000${i}.png" alt=${i} />` : img_appear +=`<img src="images/appear/appear_000${i}.png" alt=${i} />`
}
let img_loop ="";
for(let i=0;i<81;i++){
  i<10 ? img_loop +=`<img src="images/loop/loop_0000${i}.png" />` : img_loop +=`<img src="images/loop/loop_000${i}.png" />`
}
a[0].innerHTML = img_appear;
a[1].innerHTML = img_loop;

const appear = document.querySelectorAll(".appear img")
const loop = document.querySelectorAll(".loop img")
const flip_gap = 0.05;
appear.forEach((el,i) =>{
  el.style.animation = `ani 2.85s linear ${i*flip_gap}s 1`;
  el.setAttribute("alt","animation-appear");
});
loop.forEach((el,i) =>{
  el.style.animation = `ani 4.1s linear ${(i*flip_gap)+2.85}s infinite`;
  el.setAttribute("alt","ainmation-loop");
})

const quick = document.querySelectorAll(".content1>ul>li>a>span")

quick.forEach((el,idx) =>{
  let img = '';
  for(let i=0;i<20;i++){
    if(i<10){
      img +=  `<img src="images/quick0${idx+1}/quick0${idx+1}_0000${i}.png" alt='${i+1}'>`
    }else img +=  `<img src="images/quick0${idx+1}/quick0${idx+1}_000${i}.png" alt='${i+1}'>`
  }
  el.innerHTML = img;
})
let delay = 0.05;
const content1Li = document.querySelectorAll(".content1 ul li")
for(let i=0;i<content1Li.length;i++){
  content1Li[i].addEventListener("mouseover", e=>{
    for(let k = 0;k<20;k++){
      let imgLi = e.currentTarget.querySelectorAll("img");
      imgLi[k].style.animation = `ani 1s linear ${delay*k}s`;
    }
  })
  content1Li[i].addEventListener("mouseout", e=>{
    for(let k = 0;k<20;k++){
        let imgLi = e.currentTarget.querySelectorAll("img");
        imgLi[k].style.animation = `none`;
      // console.log(1)
    }
  })
}

// 오토배너
const banner = document.querySelectorAll(".banner_frame section");
const banner_btns = document.querySelectorAll(".banner .arrow>a");
const frame = document.querySelector(".banner_frame");
const play_btn = document.querySelector(".rolling .play");
const rolling = document.querySelectorAll(".rolling ul li a");
let width = document.querySelector("body").offsetWidth;
window.addEventListener("resize", e=>{
  width = document.querySelector("body").offsetWidth;
})
let banner_num = 0;
banner_btns.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    if(i == 0){
      banner_num--;
      if(banner_num < 0) banner_num = banner.length-1;
      frame.style.left = `${-banner_num*width}px`;
    } else{
      banner_num++;
      if(banner_num > banner.length-1) banner_num = 0;
      frame.style.left = `${-banner_num*width}px`;
    }
    activation(rolling,banner_num,"on");
  })
})

let timer = setInterval(play, 5000);

function play(){
  banner_num++;
  if(banner_num > banner.length-1) banner_num = 0;
  frame.style.left = `${-banner_num*width}px`;
  activation(banner,banner_num,"white");
  secWhite(banner_num);
  setInterval(timer,5000);
}

function activation(ob,idx,name){
  for(let el of ob){
    el.classList.remove(name);
  }
    ob[idx].classList.add(name);
}

let flag = 1;
play_btn.addEventListener("click", e=>{
  e.preventDefault();
  if(flag == 1){
  clearInterval(timer);
  play_btn.classList.add("pause");
  flag = 0;
  console.log(`중지`);
  } else {
    timer = setInterval(play,5000);
    play_btn.classList.remove("pause");
    flag = 1;
    console.log(`재생`);
  }
})

rolling.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    clearTimeout(timer);
    banner_num = i;
    frame.style.left = `${-(banner_num)*width}px`;
    activation(banner,banner_num,"white");
    activation(rolling,i,"on");
  })
})

let secWhite = (number) =>{
  if(banner[number].classList.contains("white")){
    banner_btns.forEach((el,i) =>{
      el.classList.add("white");
    })
    rolling.forEach((el,i) =>{
      el.classList.add("white");
    })
    play_btn.classList.add("white");
  }else {
    rolling.forEach((el,i) =>{
      el.classList.remove("white");
    })
    banner_btns.forEach((el,i) =>{
      el.classList.remove("white");
    })
    play_btn.classList.remove("white");
  }
  rolling.forEach((el,i) =>{
    el.classList.remove("on");
  })
  rolling[number].classList.add("on");
}

// circle
window.addEventListener("scroll", e=>{
  let scroll = document.querySelector("html").scrollTop;
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_s = document.querySelector(" .doughnut_Left_s");
  const conbine_Left = document.querySelector(".combine_Left");
  if(parseInt(conbine_Left.style.top) == parseInt(doughnut_Left_s.style.top)){
    // console.log(1)
    doughnut_Left_s.style.top = `${420+scroll*0.5}px`;
    conbine_Left.style.top = doughnut_Left_s.style.top;
  } else{
  conbine_Left.style.top = `${70+scroll*0.7}px`;
  doughnut_Left_s.style.top = `${420+scroll*0.5}px`;
  }
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
  
  const doughnut_Center_M = document.querySelector(".doughnut_Center_M");
  const doughnut_Center_s = document.querySelector(" .doughnut_Center_s");
  doughnut_Center_M.style.top = `${scroll*0.7}px`;
  doughnut_Center_s.style.top = `${430-scroll*1}px`;

  const doughnut_Right_L = document.querySelector(".doughnut_Right_L");
  const doughnut_Right_s = document.querySelector(" .doughnut_Right_s");
  const conbine_Right = document.querySelector(".combine_Right");

  if(parseInt(conbine_Right.style.top) == parseInt(doughnut_Right_s.style.top)){
    // console.log(2)
    doughnut_Right_s.style.top = `${360+scroll*0.4}px`;
    conbine_Right.style.top = doughnut_Right_s.style.top
  } else{
    doughnut_Right_s.style.top = `${360+scroll*0.4}px`;
    conbine_Right.style.top = `${70+scroll*0.6}px`;
  }
  doughnut_Right_L.style.top = `${1210-scroll*0.5}px`;
})



const lists = document.querySelectorAll(".content3_inner>div>ul>li");

lists.forEach((el,i) =>{
  el.addEventListener("mouseover", e=>{
    activation(lists,i,"on");
  })
})
const all = document.querySelectorAll(".content3_inner>div>ul>li");

const content3_menu = document.querySelectorAll(".content3_inner>ul>li");

const group = document.querySelectorAll(".content3_inner>ul>li>a");
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shopping");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.dinner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");

group.forEach((el,i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    for(let el of group) el.classList.remove("on");
    el.classList.add("on");

    all.forEach(item =>{
      item.style.display = `none`;
    });
    let className = e.currentTarget.parentElement.getAttribute("class");
    // console.log(className);
    switch(className){
      case "ent" :
        show(ent);
      case "shopping" :
        show(shop);
      case "dinner" :
        show(diner);
      case "box" :
        show(box);
        break;
    }
  })
})

function show(className){
  className.forEach(item =>{
    item.style.display = `block`;
  })
}

// family
const btn_family = document.querySelector(".family_site a");
btn_family.addEventListener("click", e=>{
  e.preventDefault();
  let family = e.currentTarget.parentElement;
  family.classList.toggle("on");
  family.classList.contains("on") ? e.currentTarget.setAttribute("title","열기") : e.currentTarget.setAttribute("title","닫기");
});

// topbtn
const btn_toTop = document.querySelector("footer .top");
btn_toTop.addEventListener("click", e=>{
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
});

window.addEventListener("scroll", e=>{
  let scroll_point = document.querySelector(".content3").offsetTop-document.querySelector("footer").offsetHeight;
  scrollY = window.pageYOffset;
  if(scrollY >= scroll_point){
    btn_toTop.classList.add("fix");
  } else btn_toTop.classList.remove("fix");
});

// mob menu
const mob_btn = document.querySelector(".mobBtn");
const mob_menu = document.querySelector(".mob");
const mob_close = document.querySelector(".mobBtn_close");
const bg = document.querySelector(".bg");
const mob_list = document.querySelectorAll(".mob a");

mob_btn.addEventListener("click", e=>{
  e.preventDefault();
  mob_menu.classList.add("on");
  mob_close.classList.add("on");
  bg.classList.add("on");
  mob_list.forEach((el,i)=>{
    el.parentElement.classList.remove("on");
  })
});
mob_close.addEventListener("click", e=>{
  e.preventDefault();
  if(mob_menu.classList.contains("on")){
    mob_menu.classList.toggle("on");
    mob_close.classList.toggle("on");
    bg.classList.remove("on");
  }
});
mob_list.forEach((el, i) =>{
  el.addEventListener("click", e=>{
    e.preventDefault();
    let list_name = el.innerText;
    if(el.parentElement.classList.contains("on")){
      el.setAttribute("title",`${list_name} 열기`);
    } else el.setAttribute("title",`${list_name} 닫기`);
    el.parentElement.classList.toggle("on");
  })
});