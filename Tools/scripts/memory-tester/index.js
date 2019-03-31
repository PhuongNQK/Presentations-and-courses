function createOptions(selectSelector){
	var select = $(selectSelector);
	if (select.length == 0){ return; }
	
	var builder = new StringBuilder();
	
	for(var key in DataType){
		builder.append('<option value="{0}">{1}</option>'.format(DataType[key], DataTypeDisplayName[key]));
	}
	select.append($(builder.toString()));
}

$(function () {				
	createOptions('#criteriaForm select[name=itemType]');

	var tester = new MemoryTester({
		inputForm: '#criteriaForm',
		buttons: '#criteriaForm :button[data-command]',
		messageArea: '#messageArea',
		data: data
	});
});