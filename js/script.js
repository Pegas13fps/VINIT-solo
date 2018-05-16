// preloader
if(document.querySelector('.preloader .intro')) {
  let a = document.querySelector('.intro');
  a.classList.add('go');
  setTimeout(function() {
    document.querySelector('.preloader').style.transition='all .6s linear';
    document.querySelector('.preloader').style.opacity='0';
  },4500)
  setTimeout(function() {
    document.querySelector('.preloader').style.display='none';
  },6000)
}
// preheader
if(document.querySelector('.index-body .preheader')) {
 head = parseInt(window.getComputedStyle(document.querySelector('.preheader'), null).height) - parseInt(window.getComputedStyle(document.querySelector('.main-menu'), null).height) - parseInt(window.getComputedStyle(document.querySelector('.header'), null).height) - 60;
 document.querySelector('.header').style.top=head+'px'; 

 menu = parseInt(window.getComputedStyle(document.querySelector('.preheader'), null).height) - parseInt(window.getComputedStyle(document.querySelector('.header'), null).height) - parseInt(window.getComputedStyle(document.querySelector('.main-menu'), null).height);

 scrollT = document.body.scrollTop;
 window.addEventListener('scroll', function() {
   scroll = window.pageYOffset || document.documentElement.scrollT;
   scr = scroll > menu ? document.querySelector('.header').classList.add('header-fixed') : document.querySelector('.header').classList.remove('header-fixed');

 });
}
if(document.querySelector('.portfolio-body')) {
 document.querySelector('.portfolio-body .contain').style.height = parseInt(document.querySelector('.header').offsetHeight) + parseInt(document.querySelector('.header .main-menu').offsetHeight) + 'px'; 

 menuPort = parseInt(document.querySelector('.header').offsetHeight);

 scrollTt = document.body.scrollTop;
 window.addEventListener('scroll', function() {
   scroll = window.pageYOffset || document.documentElement.scrollTt;
   scr = scroll > menuPort ? document.querySelector('.header').classList.add('header-port-fixed') : document.querySelector('.header').classList.remove('header-port-fixed');

 });
}

if(document.querySelector('.skills .skills-list')) {
// Get all the Meters
const meters = document.querySelectorAll('svg[data-value] .meter');

meters.forEach( (path) => {
  // Get the length of the path
  let length = path.getTotalLength();


  // Get the value of the meter
  let value = parseInt(path.parentNode.getAttribute('data-value'));
  // Calculate the percentage of the total length
  let to = length * ((100 - value) / 100);
  // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
  path.getBoundingClientRect();
  // Set the Offset
  window.addEventListener('scroll', function() {
  	var
  	scroll = window.pageYOffset || document.documentElement.scrollTop;

  	heightB = scroll > Math.floor(document.querySelector('path').getBoundingClientRect().top +  1750) ? path.style.strokeDashoffset = Math.max(0, to) : path.style.strokeDashoffset = '350';
  });
  // path.style.strokeDashoffset = Math.max(0, to);  
});
}
// heightbox
function heightBox(id) {
  mxheight = document.getElementById(id).style.maxHeight;
  let a = document.querySelector('.squares').getElementsByClassName('box');

  for (i=0;i<=a.length;i++){
    if(a[i]) {
      a[i].style.maxHeight = '0px';
    }
  }
  setTimeout(function(){
    if (mxheight == '0px') {
      document.getElementById(id).style.maxHeight = "1000px";
      document.getElementById(id).style.maxWidth = "100%";    
    } else {
      document.getElementById(id).style.maxHeight = "0px";
      document.getElementById(id).style.maxWidth = "0px";   
    }
  },400)
}
// SLIDER
let sl;
function slide(id) {
  let wrap = document.getElementById(id);
  cl = document.querySelectorAll('.left-cont .wrap');
  for(i=0;i<cl.length;i++) {

    clearInterval(sl)
  }

  sl = setInterval(function(){
    let lch = window.getComputedStyle(document.getElementById(id),null).height;
    if(wrap.style.left=='0px' && lch != '0px') {
      wrap.style.left='-98%';
    }
    else if(wrap.style.left=='-98%') {
      wrap.style.left='-196%';
    }
    else if(wrap.style.left=='-196%') {
      wrap.style.left='-97%';
    }
    else if(wrap.style.left=='-97%'){
      wrap.style.left='0px';
    }
  },3000);

}
// SANDWICH MENU
if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
  let sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
  let sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
  let sandwichBg = document.querySelector('.sandwich-right-bar .sandBg');
  sandwichButton.onclick = function() {
    if(sandwichButton.classList.contains('active')){
      sandwichButton.classList.remove('active');
      sandFullMenu.classList.remove('active');
      sandwichBg.classList.remove('active');
    }else{
      sandwichButton.classList.add('active');
      sandFullMenu.classList.add('active');
      sandwichBg.classList.add('active');
    }
  }
  sandwichBg.onclick = function() {
      sandwichButton.classList.remove('active');
      sandFullMenu.classList.remove('active');
      sandwichBg.classList.remove('active');
  }
}

// Плавный скрол
function anchorScroller(el, duration) {
	if (this.criticalSection) {
		return false;
	}

	if ((typeof el != 'object') || (typeof el.href != 'string'))
		return true;

	var address = el.href.split('#');
	if (address.length < 2)
		return true;

	address = address[address.length-1];
	el = 0;

	for (var i=0; i<document.anchors.length; i++) {
		if (document.anchors[i].name == address) {
			el = document.anchors[i];
			break;
		}
	}
	if (el === 0)
		return true;

	this.stopX = 0;
	this.stopY = 0;
	do {
		this.stopX += el.offsetLeft;
		this.stopY += el.offsetTop;
	} while (el = el.offsetParent);

	this.startX = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	this.startY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

	this. stopX = this.stopX - this.startX;
	this.stopY = this.stopY - this.startY;

	if ( (this.stopX == 0) && (this.stopY == 0) )
		return false;

	this.criticalSection = true;
	if (typeof duration == 'undefined')
		this.duration = 700;
	else
		this.duration = duration;

	var date = new Date();
	this.start = date.getTime();
	this.timer = setInterval(function () {
		var date = new Date();
		var X = (date.getTime() - this.start) / this.duration;
		if (X > 1)
			X = 1;
		var Y = ((-Math.cos(X*Math.PI)/2) + 0.5);

		cX = Math.round(this.startX + this.stopX*Y);
		cY = Math.round(this.startY + this.stopY*Y);

		document.documentElement.scrollLeft = cX;
		document.documentElement.scrollTop = cY;
		document.body.scrollLeft = cX;
		document.body.scrollTop = cY;

		if (X == 1) {
			clearInterval( this.timer);
			this.criticalSection = false;
		}
	}, 10);
	return false;
}