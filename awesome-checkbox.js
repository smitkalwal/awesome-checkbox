/*
 *  Project: Awesome Checkbox
 *  Description: jQuery plugin for creating awesome looking checkboxes.
 *  Author: Smit Kalwal
 *  License: Licensed under the MIT License
 */
(function($){
		$.fn.awesome = function(options){
				
			var config = $.extend({
				color : 'default',				
			},options);

			return this.each( function(){
				
				$this = $(this);
				
				var data_color = $this.attr('data-color');
				var color_class = config.color;
				
				if (typeof data_color !== typeof undefined && data_color !== false) {
					color_class = data_color;
				}
				
				$this.css("display","none").wrapAll("<div class='clearfix awesome_checkbox_wrap "+color_class+"'></div>");
				$elem = $("<a></a>").insertAfter($this);
				
				var data_label = $this.attr('data-label');
				if (typeof data_label !== typeof undefined && data_label !== false) {
					$label = $("<label>"+data_label+"</label>").insertAfter($elem);
				}
				
				if($this.is(':checked')){
					$($elem).addClass('checked');
				}else{
					$($elem).removeClass('checked');
				}
				
				$($elem)
				.click(function(){
					if($(this).hasClass('checked')){
						$this.removeAttr('checked');
						$(this).removeClass('checked');
						
					}else if(!$(this).hasClass('checked')){
						$this.attr('checked',true);
						$(this).addClass('checked');
						
					}
					
					
				});	

			});
			
		}
}(jQuery));