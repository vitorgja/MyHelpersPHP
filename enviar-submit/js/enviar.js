function submit(){
	// BOTÂO DE ENVIAR
	$("button[data-input=submit], input[data-input=submit]").click(function(){
		var nome = $("input[name='nome']").val();
		var email = $("input[name='email']").val();
		var assunto = $("input[name='assunto']").val();
		var mensagem = $("textarea[name='mensagem']").val();

		$.ajax({
			type: "POST",
			url: "enviar.php",
			dataType : "json",
			data: {
				nome: nome,
				email: email,
				assunto: assunto,
				mensagem: mensagem
			},
			success: function(data){
				if(data.tipo == "sucesso"){	// Enviou
					BootstrapDialog.show({
						title: 'Sucesso',
						type: BootstrapDialog.TYPE_SUCCESS, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem
					});
				} else if(data.tipo == "erro-01"){ // Erro ao enviar
					BootstrapDialog.show({
						title: 'Erro',
						type: BootstrapDialog.TYPE_DANGER, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem
					});
				} else if(data.tipo == "erro-02"){ // Erro nao preencheu todos os campos
					BootstrapDialog.show({
						title: 'Erro',
						type: BootstrapDialog.TYPE_DANGER, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem
					});
				}
			}

		});
	});
}