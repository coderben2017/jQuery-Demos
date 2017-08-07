function handleDblClick( event ){
	var target = event.target;
	// console.log( target );
	var src = $(target).attr("src");
	// console.log( src );
	var ch = src.charAt(7);
	// console.log( ch );
	(function( n ){
		$("#pop_window").css({
			"position": "fixed",
			"width": "460px",
			"height": "430px",
			"top": "160px",
			"left": "448px",
			"border": "1px solid #fc0",
			"text-align": "center",
			"z-index": "999"
		}).show();

		$("#big_img").attr("src","images/0" + n + ".jpg").css({
			"width": "460px",
			"height": "430px",
		}).dblclick( function(){
			$("#pop_window").hide();
		} );
	})( ch )
}

// function handleClick(){
// 	var target = event.target;
// 	// console.log( target );
// 	var src = $(target).attr("src");
// 	// console.log( src );
// 	var ch = src.charAt(7);
// 	// console.log( ch );
// 	(function( n ){
// 		$(".sample_r").attr("src","images/0" + n + ".jpg");
// 	})( ch )
// }

$(".imageflow").dblclick( handleDblClick );
// $(".imageflow").click( handleClick );