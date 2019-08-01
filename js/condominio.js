$(document).ready(function(){
	$("#proximo-1").click(function(e){

		e.preventDefault();
		$('#passo1Erro').html('');

		var sim1 = $("#sim1").is(':checked');
		var nao1 = $("#nao1").is(':checked');

		if(sim1 == false && nao1 == false){
			$('#passo1Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "18.18%");
			$("#preogressText").html("Passo 02 de 11");
		}
	});

	$("#anterior-2").click(function(){
		$("#primeiro").show();
		$("#segundo").hide();
		$("#progressbar").css("width", "9.09%");
		$("#preogressText").html("Passo 01 de 11");
	});

	$("#proximo-2").click(function(e){

		e.preventDefault();
		$('#passo2Erro').html('');

		var sim2 = $("#sim2").is(':checked');
		var nao2 = $("#nao2").is(':checked');

		if(sim2 == false && nao2 == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "27.27%");
			$("#preogressText").html("Passo 03 de 11");
		}
	});

	$("#anterior-3").click(function(){
		$("#segundo").show();
		$("#terceiro").hide();
		$("#progressbar").css("width", "18.18%");
		$("#preogressText").html("Passo 02 de 11");
	});

	$("#proximo-3").click(function(e){

		e.preventDefault();
		$('#passo3Erro').html('');

		var sim3 = $("#sim3").is(':checked');
		var nao3 = $("#nao3").is(':checked');

		if(sim3 == false && nao3 == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "36.36%");
			$("#preogressText").html("Passo 04 de 11");
		}
	});

	$("#anterior-4").click(function(){
		$("#terceiro").show();
		$("#quarto").hide();
		$("#progressbar").css("width", "27.27%");
		$("#preogressText").html("Passo 03 de 11");
	});

	$("#proximo-4").click(function(e){

		e.preventDefault();
		$('#passo4Erro').html('');

		var sim4 = $("#sim4").is(':checked');
		var nao4 = $("#nao4").is(':checked');

		if(sim4 == false && nao4 == false){
			$('#passo4Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "45.45%");
			$("#preogressText").html("Passo 05 de 11");
		}
	});

	$("#anterior-5").click(function(){
		$("#quarto").show();
		$("#quinto").hide();
		$("#progressbar").css("width", "36.36%");
		$("#preogressText").html("Passo 04 de 11");
	});

	$("#proximo-5").click(function(e){

		e.preventDefault();
		$('#passo5Erro').html('');

		var sim5 = $("#sim5").is(':checked');
		var nao5 = $("#nao5").is(':checked');

		if(sim5 == false && nao5 == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "54.54%");
			$("#preogressText").html("Passo 06 de 11");
		}
	});

	$("#anterior-6").click(function(){
		$("#quinto").show();
		$("#sexto").hide();
		$("#progressbar").css("width", "45.45%");
		$("#preogressText").html("Passo 05 de 11");
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
			$("#progressbar").css("width", "63.63%");
			$("#preogressText").html("Passo 07 de 11");
		}
	});

	$("#anterior-7").click(function(){
		$("#sexto").show();
		$("#setimo").hide();
		$("#progressbar").css("width", "54.54%");
		$("#preogressText").html("Passo 06 de 11");
	});

	$("#proximo-7").click(function(e){

		e.preventDefault();
		$('#passo7Erro').html('');

		var sim7 = $("#sim7").is(':checked');
		var nao7 = $("#nao7").is(':checked');

		if(sim7 == false && nao7 == false){
			$('#passo7Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#oitavo").show();
			$("#setimo").hide();
			$("#progressbar").css("width", "72.72%");
			$("#preogressText").html("Passo 08 de 11");
		}
	});

	$("#anterior-8").click(function(){
		$("#setimo").show();
		$("#oitavo").hide();
		$("#progressbar").css("width", "63.63%");
		$("#preogressText").html("Passo 07 de 11");
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
			$("#progressbar").css("width", "81.81%");
			$("#preogressText").html("Passo 09 de 11");
		}
	});

	$("#anterior-9").click(function(){
		$("#oitavo").show();
		$("#nono").hide();
		$("#progressbar").css("width", "72.72%");
		$("#preogressText").html("Passo 08 de 11");
	});

	$("#proximo-9").click(function(e){

		e.preventDefault();
		$('#passo9Erro').html('');

		var sim9 = $("#sim9").is(':checked');
		var nao9 = $("#nao9").is(':checked');

		if(sim9 == false && nao9 == false){
			$('#passo9Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			$("#decimo").show();
			$("#nono").hide();
			$("#progressbar").css("width", "90.90%");
			$("#preogressText").html("Passo 10 de 11");
		}
	});

	$("#anterior-10").click(function(){
		$("#nono").show();
		$("#decimo").hide();
		$("#progressbar").css("width", "81.81%");
		$("#preogressText").html("Passo 09 de 11");
	});

	$("#proximo-10").click(function(e){

		e.preventDefault();
		$('#passo10Erro').html('');

		var sim10 = $("#sim10").is(':checked');
		var nao10 = $("#nao10").is(':checked');

		if(sim10 == false && nao10 == false){
			$('#passo10Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
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
				url: 'orcamentoc.php',
				method: 'post',
				data: $("#form-data").serialize(),
				success: function(data){
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