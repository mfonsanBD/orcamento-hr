$(document).ready(function(){
	$("#proximo-1").click(function(e){

		e.preventDefault();
		$('#passo1Erro').html('');

		var casa 			= $("#casa").is(':checked');
		var apartamento 	= $("#apartamento").is(':checked');

		if(casa == false && apartamento == false){
			$('#passo1Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "22.22%");
			$("#preogressText").html("Passo 02 de 09");
		}
	});

	$("#anterior-2").click(function(){
		$("#primeiro").show();
		$("#segundo").hide();
		$("#progressbar").css("width", "11.11%");
		$("#preogressText").html("Passo 01 de 09");
	});

	$("#proximo-2").click(function(e){

		e.preventDefault();
		$('#passo2Erro').html('');

		var habitual 				= $("#habitual").is(':checked');
		var segundaResidencia 		= $("#segundaResidencia").is(':checked');

		if(habitual == false && segundaResidencia == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "33.33%");
			$("#preogressText").html("Passo 03 de 09");
		}
	});

	$("#anterior-3").click(function(){
		$("#segundo").show();
		$("#terceiro").hide();
		$("#progressbar").css("width", "22.22%");
		$("#preogressText").html("Passo 02 de 09");
	});

	$("#proximo-3").click(function(e){

		e.preventDefault();
		$('#passo3Erro').html('');

		var foraDoNucleoUrbano = $("#foraDoNucleoUrbano").is(':checked');
		var dentroDoNucleoUrbano = $("#dentroDoNucleoUrbano").is(':checked');

		if(foraDoNucleoUrbano == false && dentroDoNucleoUrbano == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "44.44%");
			$("#preogressText").html("Passo 04 de 09");
		}
	});

	$("#anterior-4").click(function(){
		$("#terceiro").show();
		$("#quarto").hide();
		$("#progressbar").css("width", "33.33%");
		$("#preogressText").html("Passo 03 de 09");
	});

	$("#proximo-4").click(function(e){

		e.preventDefault();
		$('#passo4Erro').html('');

		var aPe 			= $("#aPe").is(':checked');
		var vigiada 		= $("#vigiada").is(':checked');
		var naoVigiada 		= $("#naoVigiada").is(':checked');

		if(aPe == false && vigiada == false && naoVigiada == false){
			$('#passo4Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "55.55%");
			$("#preogressText").html("Passo 05 de 09");
		}
	});

	$("#anterior-5").click(function(){
		$("#quarto").show();
		$("#quinto").hide();
		$("#progressbar").css("width", "44.44%");
		$("#preogressText").html("Passo 04 de 09");
	});

	$("#proximo-5").click(function(e){

		e.preventDefault();
		$('#passo5Erro').html('');

		var jardimOuTerreno 		= $("#jardimOuTerreno").is(':checked');
		var varandaOuTerraco 		= $("#varandaOuTerraco").is(':checked');
		var naoPossui 				= $("#naoPossui").is(':checked');

		if(jardimOuTerreno == false && varandaOuTerraco == false && naoPossui == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "66.66%");
			$("#preogressText").html("Passo 06 de 09");
		}
	});

	$("#anterior-6").click(function(){
		$("#quinto").show();
		$("#sexto").hide();
		$("#progressbar").css("width", "55.55%");
		$("#preogressText").html("Passo 05 de 09");
	});

	$("#proximo-6").click(function(e){

		e.preventDefault();
		$('#passo6Erro').html('');

		var sim6 = $("#sim6").is(':checked');
		var nao6 = $("#nao6").is(':checked');

		if(sim6 == false && nao6 == false){
			$('#passo6Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#setimo").show();
			$("#sexto").hide();
			$("#progressbar").css("width", "77.77%");
			$("#preogressText").html("Passo 07 de 09");
		}
	});

	$("#anterior-7").click(function(){
		$("#sexto").show();
		$("#setimo").hide();
		$("#progressbar").css("width", "66.66%");
		$("#preogressText").html("Passo 06 de 09");
	});

	$("#proximo-7").click(function(e){

		e.preventDefault();
		$('#passo7Erro').html('');

		var sempreHaAlguem 		= $("#sempreHaAlguem").is(':checked');
		var menosDe2Horas 		= $("#menosDe2Horas").is(':checked');
		var entre2e5 			= $("#entre2e5").is(':checked');
		var maisDe5 			= $("#maisDe5").is(':checked');

		if(sempreHaAlguem == false && menosDe2Horas == false && entre2e5 == false && maisDe5 == false){
			$('#passo7Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#oitavo").show();
			$("#setimo").hide();
			$("#progressbar").css("width", "88.88%");
			$("#preogressText").html("Passo 08 de 09");
		}
	});

	$("#anterior-8").click(function(){
		$("#setimo").show();
		$("#oitavo").hide();
		$("#progressbar").css("width", "77.77%");
		$("#preogressText").html("Passo 07 de 09");
	});

	$("#proximo-8").click(function(e){

		e.preventDefault();
		$('#passo8Erro').html('');

		var sim8 = $("#sim8").is(':checked');
		var nao8 = $("#nao8").is(':checked');

		if(sim8 == false && nao8 == false){
			$('#passo8Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#nono").show();
			$("#oitavo").hide();
			$("#progressbar").css("width", "100%");
			$("#preogressText").html("Passo 09 de 09");
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
				url: 'orcamentor.php',
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