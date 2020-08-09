function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});;
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();;
$(document).ready(function(){
	$('.locale-header__btn').click(function(){
		$('.locale-header__content').toggleClass('_active')
	})
	$('._en').click(function(){
		$('._en-main').html('English')
	})
	$('._ru').click(function(){
		$('._en-main').html('Russian')
	})
	// 
	$('.header__search').click(function(){
		$('.body').addClass('_lock')
	})
	$('.search-popup__area').click(function(){
		$('.body').removeClass('_lock')
	})
	// 
	$('.burger-header__btns').click(function(){
		$('.burger-header__btn').toggleClass('_hidden')
		$('.burger-header__content').toggleClass('_active')
		$('.body').toggleClass('_lock')
	})
	$('.burger-header__body').click(function(){
		$('.burger-header__btn').toggleClass('_hidden')
		$('.burger-header__content').removeClass('_active')
		$('.body').toggleClass('_lock')
	})
	//
	$('.main-team__btn_2').click(function(){
		$(this).addClass('_active')
		$('.main-team__btn_1').removeClass('_active')
	})
	$('.main-team__btn_1').click(function(){
		$(this).addClass('_active')
		$('.main-team__btn_2').removeClass('_active')
	})
	// 
	$('.main-team__spoiler_1').click(function(){
		$('.main-team__content_1').toggleClass('_active')
		$('.main-team__content_2').removeClass('_active')
		$('.main-team__content_3').removeClass('_active')
		$('.main-team__content_4').removeClass('_active')
		$('.main-team__spoiler_1').toggleClass('_active')
		$('.main-team__spoiler_2').removeClass('_active')
		$('.main-team__spoiler_3').removeClass('_active')
		$('.main-team__spoiler_4').removeClass('_active')
	})
	$('.main-team__spoiler_2').click(function(){
		$('.main-team__content_1').removeClass('_active')
		$('.main-team__content_2').toggleClass('_active')
		$('.main-team__content_3').removeClass('_active')
		$('.main-team__content_4').removeClass('_active')
		$('.main-team__spoiler_1').removeClass('_active')
		$('.main-team__spoiler_2').toggleClass('_active')
		$('.main-team__spoiler_3').removeClass('_active')
		$('.main-team__spoiler_4').removeClass('_active')
	})
	$('.main-team__spoiler_3').click(function(){
		$('.main-team__content_1').removeClass('_active')
		$('.main-team__content_2').removeClass('_active')
		$('.main-team__content_3').toggleClass('_active')
		$('.main-team__content_4').removeClass('_active')
		$('.main-team__spoiler_1').removeClass('_active')
		$('.main-team__spoiler_2').removeClass('_active')
		$('.main-team__spoiler_3').toggleClass('_active')
		$('.main-team__spoiler_4').removeClass('_active')
	})
	$('.main-team__spoiler_4').click(function(){
		$('.main-team__content_1').removeClass('_active')
		$('.main-team__content_2').removeClass('_active')
		$('.main-team__content_3').removeClass('_active')
		$('.main-team__content_4').toggleClass('_active')
		$('.main-team__spoiler_1').removeClass('_active')
		$('.main-team__spoiler_2').removeClass('_active')
		$('.main-team__spoiler_3').removeClass('_active')
		$('.main-team__spoiler_4').toggleClass('_active')
	})
})
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top +scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}