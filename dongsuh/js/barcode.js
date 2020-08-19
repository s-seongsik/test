$('#barCode-text').on('focus',function(){
    	//$(this).trigger('blur');
    });
$('#barCode-text').focus();
$('#barCode-text').on('change',function(){
	var txt = $(this).val();
	txt = korToEng(txt);
	txt = txt.toUpperCase();
	$(this).val(txt);
  $('#barCode-text').val(txt);
  $(this).val('');
  $(this).focus();
});
