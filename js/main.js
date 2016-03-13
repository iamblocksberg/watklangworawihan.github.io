
$(document).ready(function(){
	$(document).click(function (event){
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("in");
		if(_opened === true && !clickover.hasClass("navbar-toggle")){
			$("button.navbar-toggle").click();
		}
	});
});

(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

function doFade(){
	jQuery("._fade").each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("-in"); 
    } else {
      //el.removeClass("-in");
    }
  });
}

jQuery(window).scroll(function(event) {
	doFade();

	if ($('._fade-scroll').visible(true)) {
      $('._fade-scroll').addClass("-in"); 
    }

});

doFade();