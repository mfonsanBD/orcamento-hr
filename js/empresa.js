$(document).ready(function(){
	$("#proximo-1").click(function(e){

		e.preventDefault();
		$('#passo1Erro').html('');

		var comercioDeRua 		= $("#comercioDeRua").is(':checked');
		var centroComercial 	= $("#centroComercial").is(':checked');
		var industrial 			= $("#industrial").is(':checked');
		var edificio 			= $("#edificio").is(':checked');

		if(comercioDeRua == false && centroComercial == false && industrial == false && edificio == false){
			$('#passo1Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "28.4%");
			$("#preogressText").html("Passo 02 de 07");
		}
	});

	$("#anterior-2").click(function(){
		$("#primeiro").show();
		$("#segundo").hide();
		$("#progressbar").css("width", "14.2%");
		$("#preogressText").html("Passo 01 de 07");
	});

	$("#proximo-2").click(function(e){

		e.preventDefault();
		$('#passo2Erro').html('');

		var dentroDaCidade 		= $("#dentroDaCidade").is(':checked');
		var foraDaCidade 		= $("#foraDaCidade").is(':checked');

		if(dentroDaCidade == false && foraDaCidade == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "42.6%");
			$("#preogressText").html("Passo 03 de 07");
		}
	});

	$("#anterior-3").click(function(){
		$("#segundo").show();
		$("#terceiro").hide();
		$("#progressbar").css("width", "28.4%");
		$("#preogressText").html("Passo 02 de 07");
	});

	$("#proximo-3").click(function(e){

		e.preventDefault();
		$('#passo3Erro').html('');

		var um = $("#um").is(':checked');
		var de2a5 = $("#de2a5").is(':checked');
		var maisDe5 = $("#maisDe5").is(':checked');

		if(um == false && de2a5 == false && maisDe5 == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "56.8%");
			$("#preogressText").html("Passo 04 de 07");
		}
	});

	$("#anterior-4").click(function(){
		$("#terceiro").show();
		$("#quarto").hide();
		$("#progressbar").css("width", "42.6%");
		$("#preogressText").html("Passo 03 de 07");
	});

	$("#proximo-4").click(function(e){

		e.preventDefault();
		$('#passo4Erro').html('');

		var pelaManha = $("#pelaManha").is(':checked');
		var aTarde = $("#aTarde").is(':checked');
		var manhaETarde = $("#manhaETarde").is(':checked');
		var noturno = $("#noturno").is(':checked');
		var vqhoras = $("#24horas").is(':checked');

		if(pelaManha == false && aTarde == false && manhaETarde == false && noturno == false && vqhoras == false){
			$('#passo4Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "71%");
			$("#preogressText").html("Passo 05 de 07");
		}
	});

	$("#anterior-5").click(function(){
		$("#quarto").show();
		$("#quinto").hide();
		$("#progressbar").css("width", "56.8%");
		$("#preogressText").html("Passo 04 de 07");
	});

	$("#proximo-5").click(function(e){

		e.preventDefault();
		$('#passo5Erro').html('');

		var grandeValor 	= $("#grandeValor").is(':checked');
		var medioValor 		= $("#medioValor").is(':checked');
		var baixoValor 		= $("#baixoValor").is(':checked');

		if(grandeValor == false && medioValor == false && baixoValor == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "85.2%");
			$("#preogressText").html("Passo 06 de 07");
		}
	});

	$("#anterior-6").click(function(){
		$("#quinto").show();
		$("#sexto").hide();
		$("#progressbar").css("width", "71%");
		$("#preogressText").html("Passo 05 de 07");
	});

	$("#proximo-6").click(function(e){

		e.preventDefault();
		$('#passo6Erro').html('');

		var sim = $("#sim").is(':checked');
		var nao = $("#nao").is(':checked');

		if(sim == false && nao == false){
			$('#passo6Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#setimo").show();
			$("#sexto").hide();
			$("#progressbar").css("width", "100%");
			$("#preogressText").html("Passo 07 de 07");
		}
	});

	$("#enviar").click(function(e){
		e.preventDefault();
		$("#nomeErro").html('');
		$("#telefoneErro").html('');
		$("#emailErro").html('');
		$("#cepErro").html('');

		if($("#nome").val() == ''){
			$("#nomeErro").html('*O campo Nome é obrigatório.');
			return false;
		}
		else if(!isNaN($("#nome").val())){
			$("#nomeErro").html('*O campo Nome não permite número.');
			return false;
		}
		else if($("#nome").val().length < 3){
			$("#nomeErro").html('*O campo Nome não pode ter menos que 3 caracteres.');
			return false;
		}
		else if($("#email").val() == ''){
			$("#emailErro").html('*O campo E-mail é obrigatório.');
			return false;
		}
		else if(!emailValido($("#email").val())){
			$("#emailErro").html('*Digite um E-mail válido.');
			return false;
		}
		else if($("#telefone").val() == ''){
			$("#telefoneErro").html('*O campo Telefone é obrigatório.');
			return false;
		}
		else if(isNaN($("#telefone").val())){
			$("#telefoneErro").html('*O campo Telefone só permite números.');
			return false;
		}
		else if($("#telefone").val().length < 11){
			$("#telefoneErro").html('*O campo Telefone não pode ter menos que 11 caracteres.');
			return false;
		}
		else if($("#cep").val() == ''){
			$("#cepErro").html('*O campo CEP é obrigatório.');
			return false;
		}
		else if(isNaN($("#cep").val())){
			$("#cepErro").html('*O campo CEP só permite números.');
			return false;
		}
		else if($("#cep").val().length < 8){
			$("#cepErro").html('*O campo CEP não pode ter menos que 8 caracteres.');
			return false;
		}
		else if($("#cep").val() < 20000000 || $("#cep").val() > 28999999){
			$("#cepErro").html('*Pedimos perdão, mas não atuamos nesta área ainda.<br>Você será redirecionado para nossa página inicial.');

			setTimeout(function () {
		       window.location.href = "https://grupohrseguranca.com.br";
		    }, 7000);
			return false;
		}else{
			$.ajax({
				url: 'orcamentoe.php',
				method: 'post',
				data: $("#form-data").serialize(),
				success: function(data){
					// $("#resultado").show();
					$("#resultado").html(data);
				}
			});
		}
		function emailValido($email){
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test($email);
		}
	});
});