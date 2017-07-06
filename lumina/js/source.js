$(document).ready(function(){
	$("#send_btn").click(function(){
		$.get('get_DBdata.php', function(data){console.log(data);
			$("#result").append("<table id='data_table'></table>");
			$.each(data, function(i, row) {
				var newRow = "<tr>";
				newRow += "<td>"+row.Id_Mazo+"</td>";
				newRow += "<td>"+row.Nombre_Mazo+"</td>";
				newRow += "<td>"+row.Fuente_Mazo+"</td>";
				newRow += "<td>"+row.Nombre_Anverso_Tarjeta+"</td>";
				newRow += "<td>"+row.Nombre_Reverso_Tarjeta+"</td>";
				newRow += "<td>"+row.Fecha_Hora_Crea_Mazo+"</td>";
				newRow += "<td>"+row.Usuario_Crea_Mazo+"</td>";
				newRow += "<td>"+row.Fecha_Hora_Modi_Mazo+"</td>";
				newRow += "<td>"+row.Usuario_Modi_Mazo+"</td>";
				newRow += "</tr>";
				$("#data_table").append(newRow);
			});
		},
		'json'
		);
	});
});