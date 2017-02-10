$(document).ready(function(){
	
	function heightBlock(column){
		var myblock = 0;
		
		column.each(function(){
			thisHight = $(this).height();
			if(thisHight > myblock){
			  myblock = thisHight;			  
			}
		});
		column.height(myblock);
	};
	
	heightBlock($("nav > div"));
	
  });