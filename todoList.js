

$("ul").on("click", "span.delete", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		$("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> " + $(this).val() + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});