$(document).ready(function(){
	var p1, p2, p3, p4, p5, p6, p7, p8;
	
	$("input[name=passo1]").click(function(e){
		e.preventDefault();
		$('#passo1Erro').html('');

		var casa 			= $("#casa").is(':checked');
		var apartamento 	= $("#apartamento").is(':checked');

		if(casa == false && apartamento == false){
			$('#passo1Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p1 = $(this).val();
			$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "22.22%");
			$("#preogressText").html("Passo 02 de 09");
		}
	});

	$("input[name=passo2]").click(function(e){
		e.preventDefault();
		$('#passo2Erro').html('');

		var habitual 				= $("#habitual").is(':checked');
		var segundaResidencia 		= $("#segundaResidencia").is(':checked');

		if(habitual == false && segundaResidencia == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p2 = $(this).val();
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "33.33%");
			$("#preogressText").html("Passo 03 de 09");
		}
	});

	$("input[name=passo3]").click(function(e){
		e.preventDefault();
		$('#passo3Erro').html('');

		var foraDoNucleoUrbano = $("#foraDoNucleoUrbano").is(':checked');
		var dentroDoNucleoUrbano = $("#dentroDoNucleoUrbano").is(':checked');

		if(foraDoNucleoUrbano == false && dentroDoNucleoUrbano == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p3 = $(this).val();
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "44.44%");
			$("#preogressText").html("Passo 04 de 09");
		}
	});

	$("input[name=passo4]").click(function(e){
		e.preventDefault();
		$('#passo4Erro').html('');

		var aPe 			= $("#aPe").is(':checked');
		var vigiada 		= $("#vigiada").is(':checked');
		var naoVigiada 		= $("#naoVigiada").is(':checked');

		if(aPe == false && vigiada == false && naoVigiada == false){
			$('#passo4Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p4 = $(this).val();
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "55.55%");
			$("#preogressText").html("Passo 05 de 09");
		}
	});

	$("input[name=passo5]").click(function(e){
		e.preventDefault();
		$('#passo5Erro').html('');

		var jardimOuTerreno 		= $("#jardimOuTerreno").is(':checked');
		var varandaOuTerraco 		= $("#varandaOuTerraco").is(':checked');
		var naoPossui 				= $("#naoPossui").is(':checked');

		if(jardimOuTerreno == false && varandaOuTerraco == false && naoPossui == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p5 = $(this).val();
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "66.66%");
			$("#preogressText").html("Passo 06 de 09");
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
			$("#progressbar").css("width", "77.77%");
			$("#preogressText").html("Passo 07 de 09");
		}
	});

	$("input[name=passo7]").click(function(e){
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
			p7 = $(this).val();
			$("#oitavo").show();
			$("#setimo").hide();
			$("#progressbar").css("width", "88.88%");
			$("#preogressText").html("Passo 08 de 09");
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
				url: 'orcamentor.php',
				method: 'post',
				data: {p1:p1, p2:p2, p3:p3, p4:p4, p5:p5, p6:p6, p7:p7, p8:p8, nome:nome, telefone:telefone, email:email, cep:cep, recaptcha:grecaptcha.getResponse()}
			});
		}
		function emailValido($email){
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test($email);
		}
	});
});