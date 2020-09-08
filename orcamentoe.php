<?php
if(isset($_POST['recaptcha']) && !empty($_POST['recaptcha'])){
	$chaveSecreta 		= "6LcV_Y0UAAAAABe4xU6CIAkuH9vchv9YDAxkXyh5";
	$chaveDaResposta 	= $_POST['recaptcha'];
	$ipDoUsuario 		= $_SERVER['REMOTE_ADDR'];

	$url = "https://www.google.com/recaptcha/api/siteverify?secret=$chaveSecreta&response=$chaveDaResposta&remoteip=$ipDoUsuario";
	$resposta = file_get_contents($url);
	$resposta = json_decode($resposta);

	if ($resposta->success) {
		require_once("phpmailer/PHPMailerAutoload.php");
		$mail = new PHPMailer();

		$mail->IsSMTP();
		$mail->Host = "smtp.grupohrbrasil.com.br";
		$mail->SMTPAuth = true;
		$mail->Port = 587;
		$mail->SMTPSecure = false;
		$mail->SMTPAutoTLS = false;
		$mail->Username = 'orcamento@grupohrbrasil.com.br';
		$mail->Password = 'GrupoHR2020';

		$p1 			= addslashes($_POST['p1']);
		$p2 			= addslashes($_POST['p2']);
		$p3 			= addslashes($_POST['p3']);
		$p4 			= addslashes($_POST['p4']);
		$p5 			= addslashes($_POST['p5']);
		$p6 			= addslashes($_POST['p6']);
		$nome 			= addslashes($_POST['nome']);
		$email 			= addslashes($_POST['email']);
		$telefone 		= addslashes($_POST['telefone']);
		$cep 			= addslashes($_POST['cep']);

		// DADOS DO REMETENTE
		$mail->Sender = "orcamento@grupohrbrasil.com.br"; // Conta de email existente e ativa em seu domínio
		$mail->From = $email; // Sua conta de email que será remetente da mensagem
		$mail->FromName = $nome; // Nome da conta de email

		// DADOS DO DESTINATÁRIO
		$mail->AddAddress('orcamento@grupohrbrasil.com.br', 'Grupo HR');

		// Definição de HTML/codificação
		$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
		$mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

		// DEFINIÇÃO DA MENSAGEM
		$mail->Subject  = "Pedido de Orçamento para Empresa"; // Assunto da mensagem
		$mail->Body = "
		<div style='width: 600px; background-color: #000000; padding: 10px 0; text-align: center;'>
			<a href=https://grupohrbrasil.com.br><img src=https://grupohrbrasil.com.br/wp-content/uploads/2019/09/Logo-Horizontal-Branca-Sem-Fundo.png width=180 alt=Logo Grupo HR></a>
		</div>
		<div style='width: 600px; padding: 30px 20px; font-size:14px; background-color: #ededed; font-family: helvetica;'>
			<h2 style='text-align: center; text-transform: uppercase; letter-spacing: -0.3px; margin-bottom: 30px;'>".$mail->Subject."</h2>
			
			<p style='color: #666; margin-bottom: 5px;'>Como é a sua empresa? <b style='color: #000 !important;'>".$p1."</b></p>

			<p style='color: #666; margin-bottom: 5px;'>Onde se localiza a sua empresa? <b style='color: #000 !important;'>".$p2."</b></p>

			<p style='color: #666; margin-bottom: 5px;'>Quantos funcionários tem na empresa? <b style='color: #000 !important;'>".$p3."</b></p>

			<p style='color: #666; margin-bottom: 5px;'>Qual é o horário de funcionamento da sua empresa? <b style='color: #000 !important;'>".$p4."</b></p>

			<p style='color: #666; margin-bottom: 5px;'>Qual é o tipo de mercadoria comercializada pela sua empresa? <b style='color: #000 !important;'>".$p5."</b></p>

			<p style='color: #666; margin-bottom: 5px;'>Seu negócio ou os negócios próximos foram roubados anteriormente? <b style='color: #000 !important;'>".$p6."</b></p><br><br>

			<nome style='color: #666;'>
				Nome do Cliente: 
					<b style='color: #000 !important;'>".$nome."</b>
			</nome>
			<br>
			<email style='color: #666;'>
				E-mail: 
					<b style='color: #000 !important;'>".$email."</b>
			</email>
			<br>
			<telefone style='color: #666;'>
				Telefone: 
					<b style='color: #000 !important;'>".$telefone."</b>
			</telefone>
			<br>
			<cep style='color: #666;'>
				CEP: 
					<b style='color: #000 !important;'>".$cep."</b>
			</cep>
		</div>
		<img style='margin: 0; padding: 0;' src=https://grupohrbrasil.com.br/wp-content/uploads/2018/10/base.png alt=Fundo width=600>
		<div style='margin-top: -70px; width: 600px; background-color: #000000; font-family: helvetica; padding: 10px 0; text-align: center;'>
			<p style='color: #FFFFFF; font-size: 14px;'>Pedido feito através do site: <a style='color: #f2e62e; text-decoration: none;' href=https://grupohrbrasil.com.br>www.grupohrbrasil.com.br</a></p>
		</div>
		";

		// ENVIO DO EMAIL
		$enviado = $mail->Send();
		// Limpa os destinatários e os anexos
		$mail->ClearAllRecipients();
		// Exibe uma mensagem de resultado do envio (sucesso/erro)
		if ($enviado) {
			echo 1;
		} else {
			echo 0;
		}
	}else{
		echo 2;
	}
}