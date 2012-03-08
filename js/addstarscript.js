$(document).ready(function() {	
	var SelectedOptionClass = $('option:checked').attr('class');
	$('div.ui-select').addClass(SelectedOptionClass);
	
	$('#note_utilisateur').live('change', function(){	 
		$('div.ui-select').removeClass(SelectedOptionClass);
		
		SelectedOptionClass = $('option:checked').attr('class');
		$('div.ui-select').addClass(SelectedOptionClass);		
		
	 });
	
  
});
