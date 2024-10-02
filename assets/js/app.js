// [헤더] 토글 메뉴
$('#header .btn-menu').click(function(){
  $('#header .btn-menu').toggleClass('on');
  $('#header .gnb').toggleClass('on');

  if ($('body').hasClass('hidden')) {
    $('body').removeClass('hidden');
  } else {
    $('body').addClass('hidden');
  }
});

const headerTl = gsap.timeline({})
headerTl.to('#header .head-inner',{autoAlpha:1},1,)


// [섹션1] 비주얼
const visual = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-visual",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
  }
})
visual.to('.sc-visual .info',{ autoAlpha:1 })
visual.to('.sc-visual .sticky .item:nth-child(4)',{height:0})
visual.to('.sc-visual .sticky .item:nth-child(3)',{height:0})
visual.to('.sc-visual .sticky .item:nth-child(2)',{height:0})

const visualTl = gsap.timeline({})
visualTl.to('.sc-visual .item .thumb img',{
  'clip-path': 'circle(10% at 50% 50%)'
})
visualTl.to('.sc-visual .item .thumb img',{
  'clip-path': 'circle(100% at 50% 50%)'
})


// [섹션2] 스타일
const styles = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-styles",
    start:"0% 0%",
    end:"100% 100%",
    scrub:0,
  }
})
styles.to('.sc-styles .inner .headline',{
  'color':'#fff'
})
styles.to('.sc-styles .inner .headline',{
  'color':'#000'
})


// [섹션3] 안경
const glass = new Swiper('.sc-glass .swiper', {
  slidesPerView: 5,
  spaceBetween : 10,

  pagination:{
    el:".pagination"
  },

  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20, 
    },
    768: {
      slidesPerView: 3, 
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    }
  }
})

gsap.from('.sc-glass .swiper-slide',0.7,{
  scrollTrigger:{
    trigger:'.sc-glass .swiper',
    start:"0% 100%",
    end:"0% 70%",
    // markers: true,
    toggleActions:"none play none reset"
  },
  opacity:0,
  stagger:0.2,
})


// [푸터] 반응형
$('#footer .group-top .tit-box').click(function(){
  $(this).siblings().slideToggle();
  $(this).toggleClass('on');
  
  $('#footer .tit-box').each(function(){
    if($(this).hasClass('on')){
      $(this).find('.plus').text('-');
    } else {
      $(this).find('.plus').text('+');
    }
  });
})