
// Highlight current nav item
var hasCurrent = false;
var isindexpage = true;
$('#main-nav > li').each(function () {
	if(isindexpage){
		isindexpage = false;
		return true;
	  }
	var url = window.location.href;
	if(url.toUpperCase().indexOf($(this).attr("linktext").trim().toUpperCase()) != -1){
		$(this).addClass('current-menu-item current_page_item');
		hasCurrent = true;
	} else {
		$(this).removeClass('current-menu-item current_page_item');
	}
});

if (!hasCurrent) {
	$('#main-nav > li:first').addClass('current-menu-item current_page_item');
}



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });


  $(function() {
	var url = window.location.href;
	if(url.indexOf("%E9%A6%96%E9%A1%B5") != -1) {
		$("#main-nav li a").css("color", "#333");
		$("#main-nav li:nth-child(1) a").css("color", "#1fa0ae");
	} else if(url.indexOf("%E8%AE%BA%E6%96%87%E5%88%97%E8%A1%A8") != -1) {
		$("#main-nav li a").css('color', '#333');
		$("#main-nav li:nth-child(2) a").css('color', '#1fa0ae');

	} else if(url.indexOf("%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C") != -1) {
		$("#main-nav li a").css('color', '#333');
		$("#main-nav li:nth-child(3) a").css('color', '#1fa0ae');

	} else if(url == 'https://liutong-lab.github.io/') {
		$("#main-nav li a").css('color', '#333');
		$("#main-nav li:nth-child(1) a").css('color', '#1fa0ae');

	} else {
		$("#main-nav li a").css('color', '#333');
		$("#main-nav li:nth-child(4) a").css('color', '#1fa0ae');
	}
});