$(document).ready(function(){
	$("#send_btn").click(function(){
		$.get('get_DBdata.php', function(data){console.log(data);
			$.each(data, function(i, row) {				
				//Add option Mazo to slect
				var o = new Option(row.Nombre_Mazo, row.Nombre_Mazo);
				//jquerify the DOM object 'o' so we can use the html method
				$(o).html(row.Nombre_Mazo);
				$("#sel1").append(o);
			});
		},
		'json'
		);
	});
});