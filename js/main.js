// main.js

// 고객센터
// 클릭하면 on이 붙고 click하면 on이 사라짐
// toggle()
// title변경되어야 함

const dd = document.querySelector("dl.top_menu>dd:nth-of-type(5)");


dd.addEventListener("click",e=>{
  dd.classList.toggle("on");
  if(dd.classList.contains("on")){
    dd.querySelector("a").setAttribute('title','고객센터 닫기'); 
  }else{
    dd.querySelector("a").setAttribute('title','고객센터 열기');
  }
})

// 주메뉴 마우스 오버하면 header_wrap보이고,
// 검색박스가 열려있을 때 li에 mouseover하면 사라짐

const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll('.gnb>ul>li');
const snbMenu = document.querySelectorAll('.gnb>ul>li>ul');
const topMenuDD = document.querySelectorAll("dl.topMenu>DD")


for(let i=0; i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover",()=>{
    
    //고객센터에 on이 붙어 있으면 고객센터의 on을 지움
    if(dd.classList.contains('on')){
      dd.classList.remove("on")
    }
    //검색박스에 on이 붙어있으면 검색박스의 on을 지움
    if(srchOpen.classList.contains('on')){
      srchOpen.classList.remove("on");
      srch.classList.remove("on");
    }
    headerWrap.classList.add("on");
    snbMenu.forEach(item=>{
      item.classList.add("on");
    })
  })
  //mouseover
  gnbMenu[i].addEventListener("mouseout",()=>{
    headerWrap.classList.remove("on");
    snbMenu.forEach(item=>{
      item.classList.remove("on");
    })
  })//mouseout
  gnbMenu[i].children[0].addEventListener('blur',()=>{
    headerWrap.classList.remove("on");
    snbMenu.forEach(item=>{
      item.classList.remove("on");
    })
  })//blur

}








const srchOpen = document.querySelector(".srch_open");
const srch = document.querySelector(".srch");


srchOpen.addEventListener("click",e=>{
  e.currentTarget.classList.toggle("on");
  srch.classList.toggle("on");
  if(srchOpen.classList.contains('on')){
    e.currentTarget.children[0].setAttribute('title','검색입력서식 닫기')
  }else{
    e.currentTarget.children[0].setAttribute('title','검색입력서식 열기')
  }
})

// 로그인 이미지
// a.appear 안에 img 0~56.png
// a.loop안에 img 0~81.png

const login = document.querySelector(".login");

let appear="";
for(let k=0;k<57;k++){
  if(k<10){
    appear += `<img src="images/appear/appear_0000${k}.png" alt="${k}" />`;
  }else{
    appear += `<img src="images/appear/appear_000${k}.png" alt="${k}" />`;
  }
}
document.querySelector("a.appear").innerHTML = appear;


let loop="";
for(let h=0;h<82;h++){
  if(h<10){
    loop += `<img src="images/loop/loop_0000${h}.png" alt="${h}" />`;
  }else{
    loop += `<img src="images/loop/loop_000${h}.png" alt="${h}" />`;
  }
}
document.querySelector("a.loop").innerHTML = loop;



// 로그인 애니메이션
// appear 0~56 이미지 각각에 animation 속성 적용
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1; 2.8

// loop 0~81 이미지 각각에 animation 속성 적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;

let time = 0.05
for(let j=0;j<57;j++){
 login.children[0].children[j].style.animation = `ani 2.85s linear ${j*time}s 1`;
}
for(let m=0;m<82;m++){
  login.children[1].children[m].style.animation = `ani 4.1s linear ${(m*time)+2.85}s infinite`;
}

// content1 퀵이미지
// 0~19번 이미지 생성
// span 안에 넣기

//content1 li에 마우스 올렸을 때 이미지에 애니메이션 적용
// 마우스 뗐을 때 애니메이션 삭제
// css 지정
// let quick1 ='';

//   for(let b=0;b<20;b++){
  //     if(b<10){
    //       quick1.innerHTML += `<img src="images/quick01/quick01_0000${b}.png" />`
    //     }else{
      //       quick1.innerHTML += `<img src="images/quick01/quick01_000${b}.png" />`
      //     }
      //   }
      //   document.querySelector("span.quick1").innerHTML = quick1;
      
  let quicks = document.querySelectorAll(".content1>ul>li span");

  console.log(quicks);
  for(a=0;a<quicks.length;a++){
    let images='';
    for(let b=0;b<20;b++){
      if(b<10){
        images += `<img src="images/quick0${a+1}/quick0${a+1}_0000${b}.png" />`;
      }else{
        images += `<img src="images/quick0${a+1}/quick0${a+1}_000${b}.png" />`;
      }
    }
    quicks[a].innerHTML = images;
  }

  const content1Li = document.querySelectorAll(".content1 ul li");

  for(c=0;c<content1Li.length;c++){
    content1Li[c].addEventListener("mouseover",e=>{
      for(let d=0;d<20;d++){
        let imgLi = e.currentTarget.children[0].children[0].children;
        imgLi[d].style.animation = `ani 1s linear ${c*time}s 1`;
      }
    })
  }
  for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseout",e=>{
      for(let k=0;k<20;k++){
        let imgLi = e.currentTarget.children[0].children[0].children;
        imgLi[k].style.animation = "none";
      }
    })
  }



   //배너
   const btnNext = document.querySelector(".next");
   const btnPrev = document.querySelector('.prev');
   const bnnFrame = document.querySelector('.banner_frame');
   const bnnSection = document.querySelectorAll('.banner_frame>section');
   const bnn_rollA =document.querySelectorAll('.rolling li a');

   
   let bnnNum = 0;
   let lastNum = bnnSection.length - 1;
   let bnnW = document.querySelector('body>section').offsetWidth;
 
   window.addEventListener('resize', () => {
     bnnW = document.querySelector('body>section').offsetWidth;
   })
   // next버튼을 눌렀을 때 기차가 움직이듯이
   // 배너번호 1 증가
   // 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
   // 배너프레임의 left값 변경해서 배너 움직이게
   
   btnNext.addEventListener('click', e => {
     e.preventDefault();
     bnnNum++;
     if(bnnNum>lastNum) bnnNum = 0;
     bnnFrame.style.left = `${bnnNum * -bnnW}px`
     secWhite(bnnNum);
   })
 
   // prev버튼 눌렀을 때
   btnPrev.addEventListener('click', e => {
     e.preventDefault();
     bnnNum--;
     if(bnnNum<0) bnnNum = lastNum;
     bnnFrame.style.left = `${bnnNum * -bnnW}px`
     secWhite(bnnNum);
   })
   //오토배너 작동 -setTimeout사용, 재귀함수 사용, 5초마다
   function autoBanner(){
    bnnNum++
    if(bnnNum>lastNum)bnnNum=0;
    bnnFrame.style.left = `${bnnNum * - bnnW}px`;
    secWhite(bnnNum);
    autoBnn = setTimeout(autoBanner,5000);
   }
   let autoBnn = setTimeout(autoBanner, 5000);//최초 함수 호출


   // 재생,멈춤 버틈
   let flag = true;
   const btnPlay = document.querySelector('.play');
   console.log(btnPlay);

   btnPlay.addEventListener("click",e=>{
    e.preventDefault();
    if(flag){
      clearTimeout(autoBnn);
      btnPlay.classList.add("pause");
      flag = false;
    }else{
      autoBnn = setTimeout(autoBanner,5000);
      btnPlay.classList.remove("pause");
      flag = true;
    }
   })
   // 롤링 클릭

   const bnnRollLists= document.querySelectorAll(".banner_roll li");

   bnnRollLists.forEach((el,i)=>{
    el.addEventListener('click',e=>{
      e.preventDefault();
      clearTimeout(autoBnn);
      bnnFrame.style.left=`${i * -bnnW}px`
      secWhite(i);
    })
   })

 
   // function
   const arrowA= document.querySelectorAll('.banner_arrow>a');
   const rollingA =document.querySelectorAll('.banner_rolling a');

   let secWhite = bannerNumber => {
     if(bnnSection[bannerNumber].classList.contains('white')){
       arrowA.forEach(item => {
         item.classList.add('white');
       })
       rollingA.forEach(item => {
         item.classList.add('white');
       })
     }else{
       arrowA.forEach(item => {
         item.classList.remove('white');
       })
       rollingA.forEach(item => {
         item.classList.remove('white');
       })
     }

     rollingA.forEach(item => {
       item.classList.remove('on');
     });
     rollingA[bannerNumber].classList.add('on');
   }


  //  스크롤 이벤트
    window.addEventListener('scroll',()=>{
    let scroll = document.querySelector('html').scrollTop;

    //도넛
    const dougnut_Left_L = document.querySelector(".dougnut_Left_L");
    const dougnut_Left_s = document.querySelector(".dougnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");
    const dougnut_Center_M = document.querySelector(".dougnut_Center_M");
    const dougnut_Center_s = document.querySelector(".dougnut_Center_s");
    const dougnut_Right_L = document.querySelector(".dougnut_Right_L");
    const dougnut_Right_s = document.querySelector(".dougnut_Right_s");
    const combine_Right = document.querySelector(".combine_Right");

    combine_Left.style.top = `${scroll*0.7}px`;
    dougnut_Left_s.style.top = `${scroll*0.5}px`;
    dougnut_Left_L.style.top = `${1310-scroll*0.8}px`

    dougnut_Center_M.style.top =`${1310-scroll*0.8}px`
    dougnut_Center_s.style.top = `${scroll*0.5}px`;

    dougnut_Right_L.style.top= `${scroll*0.7}px`;
    combine_Right.style.top = `${scroll*0.7}px`;

    if(scroll<1350){
      dougnut_Right_s.style.top = `947px`
    }

  })

  // class on이 붙으면 움직여라

  const all = document.querySelectorAll(".content3_inner>div>ul>li");

  all.forEach((item,i)=>{
    item.addEventListener("mouseover",()=>{
      all[i].classList.add("on")
    })
    item.addEventListener("mouseleave",()=>{
      all[i].classList.remove("on");
    })
  })

  // 누른 것만 보여야 함
  // li를 클릭했을 떄 class속성값을 가져와서 변수에 저장


const content3 = document.querySelectorAll(".content3_inner>ul>li");
console.log(content3);
for(let el of content3){
  el.addEventListener("click",e=>{
    e.preventDefault();
    var cla = e.currentTarget.className
    for(let el of content3){
      el.classList.remove("on")
    }
    e.currentTarget.classList.add("on")
    for(let ell of all){
      var classAll = ell.className;
      switch(cla){
        case "all":
          ell.style.display = "block"
        break;
        case classAll:
          ell.style.display = "block"
        break;
        default:
          ell.style.display = "none"
        break;
      }
    }
  })
}



// 패밀리사이트

const familySite = document.querySelector('.footer_inner>dl>dd.family_site');

familySite.addEventListener('click',e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(e.currentTarget.classList.contains("on")){
    e.currentTarget.children[0].setAttribute("title","닫기");
  }else{
    e.currentTarget.children[0].setAttribute("title","열기");
  }
})

// top버튼
const btnTop = document.querySelector(".top");

btnTop.addEventListener('click',e=>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:'smooth'
  });
})

// 햄버거버튼 클릭->메뉴 보이고 닫기 버튼
const mob_btn = document.querySelector(".mobBtn");
const mobBtn_close = document.querySelector(".mobBtn_close");
const mob = document.querySelector(".mob");
const body = document.querySelector("body");
const bg = document.querySelector(".bg");

mob_btn.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.add("on");
  bg.classList.add("on");
  body.classList.add("on");
  mobBtn_close.classList.add("on");
  mob.classList.add("on");
})

mobBtn_close.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.remove("on");
  bg.classList.remove("on");
  body.classList.remove("on")
  mob.classList.remove("on");
  mob_btn.classList.remove("on");
})

// 모바일 고객센터 클릭

const serv = document.querySelector("dl.mob_top_menu>dd:nth-of-type(5)");

serv.addEventListener('click',e =>{
  e.preventDefault();
  serv.classList.toggle("on");

  if(e.currentTarget.classList.contains("on")){
  e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
}else{
  e.currentTarget.children[0].setAttribute("title","고객센터 열기");
}

});

// 모바일 주메뉴 li클릭

const mobGnbLis = document.querySelectorAll("nav.mob_gnb>ul>li");

for(i=0; i<mobGnbLis.length; i++){
  mobGnbLis[i].addEventListener('click',e=>{
    e.currentTarget.classList.toggle("on");
  })
}


