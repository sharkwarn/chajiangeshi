(function($){
	$.fn.extend({
		"changecolor":function(){
			this.each(function(){
				var $this = $(this);
				$this.css({
                    color: "#f00",
                });
                $this.css("background","#696");
                $this.append("<span>呵呵呵</span>");
			})
		}
	})
})($);