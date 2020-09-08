<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['recaptcha']) && !empty($_POST['recaptcha'])){
	$chaveSecreta 		= "6LcV_Y0UAAAAABe4xU6CIAkuH9vchv9YDAxkXyh5";
	$chaveDaResposta 	= $_POST['recaptcha'];
	$ipDoUsuario 		= $_SERVER['REMOTE_ADDR'];

	$url = "https://www.google.com/recaptcha/api/siteverify?secret=$chaveSecreta&response=$chaveDaResposta&remoteip=$ipDoUsuario";
	$resposta = file_get_contents($url);
	$resposta = json_decode($resposta);

	if ($resposta->success) {
		// Load Composer's autoloader
		require 'vendor/autoload.php';

		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {
			//Server settings
			$mail->SMTPDebug = SMTP::DEBUG_SERVER;// Enable verbose debug output
			$mail->isSMTP();// Send using SMTP
			$mail->Host       = 'smtp.grupohrbrasil.com.br';// Set the SMTP server to send through
			$mail->SMTPAuth   = true;// Enable SMTP authentication
			$mail->Username   = 'orcamento@grupohrbrasil.com.br';// SMTP username
			$mail->Password   = 'Seguranca2020';// SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;// Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 465;

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
			
			$assunto 		= 'Pedido de Orçamento para Empresa';

			$mail->setFrom($email, utf8_decode($nome));
			$mail->addAddress('orcamento@grupohrbrasil.com.br', 'Grupo HR');
			// $mail->addAddress('contato@grupohrbrasil.com.br', 'Grupo HR');
			$mail->addReplyTo($email, utf8_decode($nome));

			$mail->isHTML(true);
			$mail->Subject = utf8_decode($assunto);
			$mail->Body = utf8_decode("
			<div style='width: 600px; background-color: #000000; padding: 10px 0; text-align: center;'>
				<a href=https://grupohrbrasil.com.br><img src=https://grupohrbrasil.com.br/wp-content/uploads/2018/10/logo-branca.png width=180 alt=Logo Grupo HR></a>
			</div>
			<div style='width: 560px; padding: 30px 20px; font-size:14px; background-color: #ededed; font-family: helvetica;'>
				<h2 style='text-align: center; text-transform: uppercase; letter-spacing: -0.3px; margin-bottom: 30px;'>".$assunto."</h2>
				
				<p style='color: #666; margin-bottom: 5px;'>Como é a sua empresa?</p><b style='color: #000 !important;'>".$p1."</b>

				<p style='color: #666; margin-bottom: 5px;'>Onde se localiza a sua empresa?</p><b style='color: #000 !important;'>".$p2."</b>

				<p style='color: #666; margin-bottom: 5px;'>Quantos funcionários tem na empresa?</p><b style='color: #000 !important;'>".$p3."</b>

				<p style='color: #666; margin-bottom: 5px;'>Qual é o horário de funcionamento da sua empresa?</p><b style='color: #000 !important;'>".$p4."</b>

				<p style='color: #666; margin-bottom: 5px;'>Qual é o tipo de mercadoria comercializada pela sua empresa?</p><b style='color: #000 !important;'>".$p5."</b>

				<p style='color: #666; margin-bottom: 5px;'>Seu negócio ou os negócios próximos foram roubados anteriormente?</p><b style='color: #000 !important;'>".$p6."</b><br>

				<p style='color: #666;'>Nome do Cliente: <b style='color: #000 !important;'>".$nome."</b></p>
				<p style='color: #666;'>E-mail: <b style='color: #000 !important;'>".$email."</b></p>
				<p style='color: #666;'>Telefone: <b style='color: #000 !important;'>".$telefone."</b></p>
				<p style='color: #666;'>CEP: <b style='color: #000 !important;'>".$cep."</b></p>
			</div>
			<img style='margin: 0; padding: 0;' src=https://grupohrbrasil.com.br/orcamento/img/base.png alt=Fundo width=600>
			<div style='margin-top: -70px; width: 600px; background-color: #000000; font-family: helvetica; padding: 10px 0; text-align: center;'>
				<p style='color: #FFFFFF; font-size: 14px;'>Pedido feito através do site: <a style='color: #f2e62e; text-decoration: none;' href=https://grupohrbrasil.com.br>www.grupohrbrasil.com.br</a></p>
			</div>
			");

			$mail->send();
			echo '<script>
					$(document).ready(function(){
						swal("Sucesso '.$nome.'...", "Seu pedido de orçamento para empresa foi enviado. Logo entraremos em contato com você. Obrigado e até breve!", "success"), setTimeout(function () {
							window.location.href = "https://grupohrbrasil.com.br";
						}, 5000);
					});
				</script>';
		}catch (Exception $e) {
			echo "<script>
			$(document).ready(function(){
				swal('Olá, ".$nome."...', 'Infelizmente houve um problema ao enviar seu pedido. Tente novamente mais tarde!', 'error');
			});
			</script>".$mail->ErrorInfo;
		}
	}else{
		echo '
			<script>
				$(document).ready(function(){
					swal("Olá!", "Você precisa marcar o campo de verificação de robô para enviar seu pedido de orçamento.", "warning");
				});
			</script>
		';
	}
}