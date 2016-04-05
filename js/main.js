
$(document).ready(function(){

	//Click Body to Close Nav
	$(document).click(function (event){
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("in");
		if(_opened === true && !clickover.hasClass("navbar-toggle")){
			$("button.navbar-toggle").click();
		}
	});

	//Popup page and load -> show schedule data
	//Fade In
	$('.box-schedule').click(function(){
		//Show Box
		$('#schd-popup-page').show();
		$('body').css('overflow', 'hidden');
		$('#schd-popup-page').css('overflow-y', 'scroll');

		//Load and Show Data
		$('#schd-popup-page .-content').html('<div class="img-head"><img src="image/header1.jpg"></div><h2 class="text-center _margin-0 _vpadding-4"><strong>วันสงกรานต์</strong></h2><p><span class="_tab">"เข้าพรรษา"</span> แปลว่า "พักฝน" หมายถึง พระภิกษุสงฆ์ต้องอยู่ประจำ ณ วัดใดวัดหนึ่งระหว่างฤดูฝน โดยเหตุที่พระภิกษุในสมัยพุทธกาล มีหน้าที่จะต้องจาริกโปรดสัตว์ และเผยแผ่พระธรรมคำสั่งสอนแก่ประชาชนไปในที่ต่าง ๆ ไม่จำเป็นต้องมีที่อยู่ประจำ แม้ในฤดูฝน ชาวบ้านจึงตำหนิว่าไปเหยียบข้าวกล้าและพืชอื่น ๆ จนเสียหาย พระพุทธเจ้าจึงทรงวางระเบียบการจำพรรษาให้พระภิกษุอยู่ประจำที่ตลอด 3 เดือน ในฤดูฝน คือ เริ่มตั้งแต่วันแรม 1 ค่ำ เดือน 8 ของทุกปี เรียกว่า "ปุริมพรรษา"</p><p>ถ้าปีใดมีเดือน 8 สองครั้ง ก็เลื่อนมาเป็นวันแรม 1 ค่ำ เดือนแปดหลัง และออกพรรษาในวันขึ้น 15 ค่ำ เดือน 11 เรียกว่า "ปัจฉิมพรรษา" เว้นแต่มีกิจธุระคือเมื่อเดินทางไปแล้วไม่สามารถจะกลับได้ในเดียวนั้น ก็ทรงอนุญาตให้ไปแรมคืนได้ คราวหนึ่งไม่เกิน 7 คืน เรียกว่า "สัตตาหะ" หากเกินกำหนดนี้ถือว่าไม่ได้รับประโยชน์แห่งการจำพรรษา จัดว่าพรรษาขาด</p><p><strong>กิจกรรมในวันเข้าพรรษา</strong><br>ร่วมทำบุญ ตักบาตร ฟังธรรมเทศนา รักษาอุโบสถศีล</p><p><strong>วันที่:</strong> 13-15 เมษายน 2559</p>');
		//this.id;
	});

	//Fade Out
	$('#schd-popup-page, .btn-close-poppage').click(function(){
		$('#schd-popup-page').hide();
		$('body').css('overflow', 'auto');
	});

	$('#schd-popup-page .container').click(function(event){
		event.stopPropagation();
	});

});



//Fade
(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

function doFade(){
	$("._fade").each(function(i, el) {
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