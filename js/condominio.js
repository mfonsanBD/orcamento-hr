$(document).ready(function(){
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;

	$("input[name=passo1]").click(function(e){
		e.preventDefault();
		$('#passo1Erro').html('');

		var sim1 = $("#sim1").is(':checked');
		var nao1 = $("#nao1").is(':checked');

		if(sim1 == false && nao1 == false){
			$('#passo1Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p1 = $(this).val();
			$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "18.18%");
			$("#preogressText").html("Passo 02 de 11");
		}
	});
	$("input[name=passo2]").click(function(e){
		e.preventDefault();
		$('#passo2Erro').html('');

		var sim2 = $("#sim2").is(':checked');
		var nao2 = $("#nao2").is(':checked');

		if(sim2 == false && nao2 == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p2 = $(this).val();
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "27.27%");
			$("#preogressText").html("Passo 03 de 11");
		}
	});
	$("input[name=passo3]").click(function(e){
		e.preventDefault();
		$('#passo3Erro').html('');

		var sim3 = $("#sim3").is(':checked');
		var nao3 = $("#nao3").is(':checked');

		if(sim3 == false && nao3 == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p3 = $(this).val();
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "36.36%");
			$("#preogressText").html("Passo 04 de 11");
		}
	});
	$("input[name=passo4]").click(function(e){
		e.preventDefault();
		$('#passo4Erro').html('');

		var sim4 = $("#sim4").is(':checked');
		var nao4 = $("#nao4").is(':checked');

		if(sim4 == false && nao4 == false){
			$('#passo4Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p4 = $(this).val();
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "45.45%");
			$("#preogressText").html("Passo 05 de 11");
		}
	});
	$("input[name=passo5]").click(function(e){
		e.preventDefault();
		$('#passo5Erro').html('');

		var sim5 = $("#sim5").is(':checked');
		var nao5 = $("#nao5").is(':checked');

		if(sim5 == false && nao5 == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p5 = $(this).val();
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "54.54%");
			$("#preogressText").html("Passo 06 de 11");
		}
	});
	$("input[name=passo6]").click(function(e){
		e.preventDefault();
		$('#passo6Erro').html('');

		var sim6 = $("#sim6").is(':checked');
		var nao6 = $("#nao6").is(':checked');

		if(sim6 == false && nao6 == false){
			$('#passo6Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p6 = $(this).val();
			$("#setimo").show();
			$("#sexto").hide();
			$("#progressbar").css("width", "63.63%");
			$("#preogressText").html("Passo 07 de 11");
		}
	});
	$("input[name=passo7]").click(function(e){
		e.preventDefault();
		$('#passo7Erro').html('');

		var sim7 = $("#sim7").is(':checked');
		var nao7 = $("#nao7").is(':checked');

		if(sim7 == false && nao7 == false){
			$('#passo7Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p7 = $(this).val();
			$("#oitavo").show();
			$("#setimo").hide();
			$("#progressbar").css("width", "72.72%");
			$("#preogressText").html("Passo 08 de 11");
		}
	});
	$("input[name=passo8]").click(function(e){
		e.preventDefault();
		$('#passo8Erro').html('');

		var sim8 = $("#sim8").is(':checked');
		var nao8 = $("#nao8").is(':checked');

		if(sim8 == false && nao8 == false){
			$('#passo8Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p8 = $(this).val();
			$("#nono").show();
			$("#oitavo").hide();
			$("#progressbar").css("width", "81.81%");
			$("#preogressText").html("Passo 09 de 11");
		}
	});
	$("input[name=passo9]").click(function(e){
		e.preventDefault();
		$('#passo9Erro').html('');

		var sim9 = $("#sim9").is(':checked');
		var nao9 = $("#nao9").is(':checked');

		if(sim9 == false && nao9 == false){
			$('#passo9Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p9 = $(this).val();
			$("#decimo").show();
			$("#nono").hide();
			$("#progressbar").css("width", "90.90%");
			$("#preogressText").html("Passo 10 de 11");
		}
	});
	$("input[name=passo10]").click(function(e){
		e.preventDefault();
		$('#passo10Erro').html('');

		var sim10 = $("#sim10").is(':checked');
		var nao10 = $("#nao10").is(':checked');

		if(sim10 == false && nao10 == false){
			$('#passo10Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p10 = $(this).val();
			$("#onze").show();
			$("#decimo").hide();
			$("#progressbar").css("width", "100%");
			$("#preogressText").html("Passo 11 de 11");
		}
	});
	$("#enviar").click(function(e){
		e.preventDefault();
		$("#nomeErro").html('');
		$("#telefoneErro").html('');
		$("#emailErro").html('');
		$("#cepErro").html('');

		var nome 		= $("#nome").val();
		var email 		= $("#email").val();
		var telefone 	= $("#telefone").val();
		var cep 		= $("#cep").val();

		if(nome == ''){
			swal("Atenção!", "*O campo NOME é obrigatório.", "warning");
			return false;
		}
		else if(!isNaN(nome)){ 
			swal("Atenção!", "*O campo NOME não permite número.", "warning");
			return false;
		}
		else if(nome.length < 3){
			swal("Atenção!", "*O campo NOME não pode ter menos que 3 caracteres.", "warning");
			return false;
		}
		else if(email == ''){
			swal("Atenção!", "*O campo E-MAIL é obrigatório.", "warning");
			return false;
		}
		else if(!emailValido(email)){
			swal("Atenção!", "*Digite um E-mail válido.", "warning");
			return false;
		}
		else if(telefone == ''){
			swal("Atenção!", "*O campo TELEFONE é obrigatório.", "warning");
			return false;
		}
		else if(isNaN(telefone)){
			swal("Atenção!", "*O campo TELEFONE só permite números.", "warning");
			return false;
		}
		else if(telefone.length < 11){
			swal("Atenção!", "*O campo TELEFONE não pode ter menos que 11 caracteres.", "warning");
			return false;
		}
		else if(cep == ''){
			swal("Atenção!", "*O campo CEP é obrigatório.", "warning");
			return false;
		}
		else if(isNaN(cep)){
			swal("Atenção!", "*O campo CEP só permite números.", "warning");
			return false;
		}
		else if(cep.length < 8){
			swal("Atenção!", "*O campo CEP não pode ter menos que 8 caracteres.", "warning");
			return false;
		}
		else if(cep < 20000000 || cep > 28999999){
			swal("Atenção!", "*Pedimos perdão, mas não atuamos nesta área ainda.", "warning");
			return false;
		}else{
			$.ajax({
				url: 'orcamentoc.php',
				method: 'post',
				data: {p1:p1, p2:p2, p3:p3, p4:p4, p5:p5, p6:p6, p7:p7, p8:p8, p9:p9, p10:p10, nome:nome, telefone:telefone, email:email, cep:cep, recaptcha:grecaptcha.getResponse()},
				success: function (dados){
					if(dados == 1){
						swal("Sucesso "+nome+"...", "Seu pedido de orçamento para condomínio foi enviado. Logo entraremos em contato com você. Obrigado e até breve!", "success"), setTimeout(function () {
							window.location.href = "https://grupohrbrasil.com.br";
						}, 5000);
					}else if(dados == 2){
						swal("Olá!", "Você precisa marcar o campo de verificação de robô para enviar seu pedido de orçamento.", "warning");
					}else{
						swal("Olá, "+nome+"...", "Infelizmente houve um problema ao enviar seu pedido. Tente novamente mais tarde!", "error");
					}
				}
			});
		}
		function emailValido($email){
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test($email);
		}
	});
});