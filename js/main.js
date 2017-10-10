(function (){
var footerToggleBtns = document.querySelectorAll('.footer-singular-column h3 a');
var mobileList = document.querySelector('#primary-navigation-list');
var mobileBtn = document.querySelector('#mobile-button');
var pictureImg = document.querySelector('#featured-car');
var mobileCloseBtn = document.querySelector("#mobile-close");
var screenPOS;
var picLoc;
var windowHeight = window.innerHeight;


function infoToggle(e){
  e.preventDefault();
  var targeted = e.currentTarget;
var test = targeted.getElementsByTagName("i");
  var targetedId = targeted.getAttribute('href');
  if(targetedId != null){
var targetedInfo = document.querySelector(targetedId);
if($(targetedInfo).css('max-height') == '0px'){
  if(targeted.childNodes[1].classList.contains('passive')){
  $(targetedInfo).css('max-height', '600px') && targeted.childNodes[1].classList.remove('passive');
  }
}  else if($(targetedInfo).css('max-height') !== '0'){
     if(!targeted.childNodes[1].classList.contains('passive')){
     $(targetedInfo).css('max-height', '0') && targeted.childNodes[1].classList.toggle('passive');
     }
}
}
}
function menuToggle(){
  if (mobileList.style.display = "none"){
    $(mobileList).fadeIn(500);
    mobileCloseBtn.addEventListener('click', menuClose, false);
  }
  function menuClose(){
    if (mobileList.style.display != "none"){
      $(mobileList).fadeOut(500);
    }
  }

};
function sect2activate(evt) {
screenPOS = window.scrollY;
picLoc = pictureImg.offsetTop;
if(screenPOS>950){
  if(pictureImg.style.postion = "absolute"){
pictureImg.classList.add('slide-left');
  window.removeEventListener("scroll", sect2activate, false);
}
}

}
window.addEventListener("scroll", sect2activate, false);
mobileBtn.addEventListener('click', menuToggle, false);
[].forEach.call(footerToggleBtns, function(tog){
  tog.addEventListener('click', infoToggle, false);
});
}());
