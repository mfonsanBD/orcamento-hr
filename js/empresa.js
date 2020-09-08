$(document).ready(function(){
	var p1, p2, p3, p4, p5, p6;

	$("input[name=passo1]").click(function(e){
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
			p1 = $(this).val();
       		$("#segundo").show();
			$("#primeiro").hide();
			$("#progressbar").css("width", "28.4%");
			$("#preogressText").html("Passo 02 de 07");
		}
	});

	$("input[name=passo2]").click(function(e){
		e.preventDefault();
		$('#passo2Erro').html('');

		var dentroDaCidade 		= $("#dentroDaCidade").is(':checked');
		var foraDaCidade 		= $("#foraDaCidade").is(':checked');

		if(dentroDaCidade == false && foraDaCidade == false){
			$('#passo2Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p2 = $(this).val();
			$("#terceiro").show();
			$("#segundo").hide();
			$("#progressbar").css("width", "42.6%");
			$("#preogressText").html("Passo 03 de 07");
		}
	});

	$("input[name=passo3]").click(function(e){
		e.preventDefault();
		$('#passo3Erro').html('');

		var um = $("#um").is(':checked');
		var de2a5 = $("#de2a5").is(':checked');
		var maisDe5 = $("#maisDe5").is(':checked');

		if(um == false && de2a5 == false && maisDe5 == false){
			$('#passo3Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p3 = $(this).val();
			$("#quarto").show();
			$("#terceiro").hide();
			$("#progressbar").css("width", "56.8%");
			$("#preogressText").html("Passo 04 de 07");
		}
	});

	$("input[name=passo4]").click(function(e){
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
			p4 = $(this).val();
			$("#quinto").show();
			$("#quarto").hide();
			$("#progressbar").css("width", "71%");
			$("#preogressText").html("Passo 05 de 07");
		}
	});

	$("input[name=passo5]").click(function(e){
		e.preventDefault();
		$('#passo5Erro').html('');

		var grandeValor 	= $("#grandeValor").is(':checked');
		var medioValor 		= $("#medioValor").is(':checked');
		var baixoValor 		= $("#baixoValor").is(':checked');

		if(grandeValor == false && medioValor == false && baixoValor == false){
			$('#passo5Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p5 = $(this).val();
			$("#sexto").show();
			$("#quinto").hide();
			$("#progressbar").css("width", "85.2%");
			$("#preogressText").html("Passo 06 de 07");
		}
	});

	$("input[name=passo6]").click(function(e){
		e.preventDefault();
		$('#passo6Erro').html('');

		var sim = $("#sim").is(':checked');
		var nao = $("#nao").is(':checked');

		if(sim == false && nao == false){
			$('#passo6Erro').html('*Selecione uma opção para continuar com o orçamento.');
			return false;
		}else{
			p6 = $(this).val();
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
				url: 'orcamentoe.php',
				method: 'post',
				data: {p1:p1, p2:p2, p3:p3, p4:p4, p5:p5, p6:p6, nome:nome, telefone:telefone, email:email, cep:cep, recaptcha:grecaptcha.getResponse()},
				success: function (dados){
					if(dados == 1){
						swal("Sucesso "+nome+"...", "Seu pedido de orçamento para empresa foi enviado. Logo entraremos em contato com você. Obrigado e até breve!", "success"), setTimeout(function () {
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