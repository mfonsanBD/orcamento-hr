<!doctype html>
<html lang="en">
  <head>
    <title>Orçamento para Empresa</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/estilo.css">
    <script src="js/sweetalert.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body class="bg-dark">
      <div class="container">
        <div class="todo">
          <div class="row justify-content-center">
            <div class="col-md-6 bg-white p-4 rounded branco">
              <div class="text-center">
                <a href="index.php"><img src="img/logo.png" alt="Marca Grupo HR" width="200" class="mb-2"></a>
                <h4 class="text-center text-light p-2 mb-2 rounded text-uppercase">Orçamento para Empresa</h4>
                <div class="progress mb-3" style="height: 40px;">
                  <div class="progress-bar bg-hr" role="progressbar" style="width: 14.2%;" id="progressbar">
                    <b class="lead" style="font-size: 14px !important; color: #FFFFFF; padding-left: 10px;" id="preogressText">Passo 01 de 07</b>
                  </div>
                </div>
                <form action="" method="POST" id="form-data">
                  <div id="primeiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Como é a sua empresa?</h5>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="comercioDeRua" value="Comércio de Rua">
                      <label class="form-check-label" for="comercioDeRua">
                        Comércio de Rua
                      </label>
                    </div>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="centroComercial" value="Empresa em um Centro Comercial">
                      <label class="form-check-label" for="centroComercial">
                        Empresa em um Centro Comercial
                      </label>
                    </div>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="industrial" value="Fábrica em Polígono Industrial">
                      <label class="form-check-label" for="industrial">
                        Fábrica em Polígono Industrial
                      </label>
                    </div>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="edificio" value="Escritório em Edifício Empresarial">
                      <label class="form-check-label" for="edificio">
                        Escritório em Edifício Empresarial
                      </label>
                    </div>
                  </div>
                  <div id="segundo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Onde se localiza a sua empresa?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo2" id="dentroDaCidade" value="Dentro da Cidade">
                        <label class="form-check-label" for="dentroDaCidade">
                          Dentro da Cidade
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo2" id="foraDaCidade" value="Fora da Cidade">
                        <label class="form-check-label" for="foraDaCidade">
                          Fora da Cidade
                        </label>
                      </div>
                  </div>
                  <div id="terceiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Quantos funcionários tem na empresa?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo3" id="um" value="1 Funcionário">
                        <label class="form-check-label" for="um">
                          1 Funcionário
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo3" id="de2a5" value="De 2 a 5 Funcionários">
                        <label class="form-check-label" for="de2a5">
                          De 2 a 5 Funcionários
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo3" id="maisDe5" value="Mais de 5 Funcionários">
                        <label class="form-check-label" for="maisDe5">
                          Mais de 5 Funcionários
                        </label>
                      </div>
                  </div>
                  <div id="quarto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Qual é o horário de funcionamento da sua empresa?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="pelaManha" value="Pela Manhã">
                        <label class="form-check-label" for="pelaManha">
                          Pela Manhã
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="aTarde" value="À Tarde">
                        <label class="form-check-label" for="aTarde">
                          À Tarde
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="manhaETarde" value="Manhã e Tarde">
                        <label class="form-check-label" for="manhaETarde">
                          Manhã e Tarde
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="noturno" value="Noturno">
                        <label class="form-check-label" for="noturno">
                          Noturno
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="24horas" value="24 horas">
                        <label class="form-check-label" for="24horas">
                          24 Horas
                        </label>
                      </div>
                  </div>
                  <div id="quinto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Qual é o tipo de mercadoria comercializada pela sua empresa?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="grandeValor" value="Grande Valor">
                        <label class="form-check-label" for="grandeValor">
                          Grande Valor
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="medioValor" value="Médio Valor">
                        <label class="form-check-label" for="medioValor">
                          Médio Valor
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="baixoValor" value="Baixo Valor">
                        <label class="form-check-label" for="baixoValor">
                          Baixo Valor
                        </label>
                      </div>
                  </div>
                  <div id="sexto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Seu negócio ou os negócios próximos foram roubados anteriormente?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo6" id="sim" value="Sim">
                        <label class="form-check-label" for="sim">
                          Sim
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo6" id="nao" value="Não">
                        <label class="form-check-label" for="nao">
                          Não
                        </label>
                      </div>
                  </div>
                  <div id="setimo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Informações para Contato</h5>
                    <div class="form-row">
                      <div class="form-group col-md-6 text-left">
                        <label for="nome">Nome Completo:</label>
                        <input type="text" name="nome" id="nome" class="form-control" placeholder="Ex: João da Silva Santos">
                      </div>
                      <div class="form-group col-md-6 text-left">
                        <label for="email">E-mail:</label>
                        <input type="text" name="email" id="email" class="form-control" placeholder="Ex: joaodasilva@gmail.com">
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="form-group col-md-6 text-left">
                        <label for="telefone">Telefone:</label>
                        <input type="text" name="telefone" id="telefone" maxlength="11" class="form-control" placeholder="Ex: (22) 9xxxx-xxxx">
                      </div>
                      <div class="form-group col-md-6 text-left">
                        <label for="cep">CEP:</label>
                        <input type="text" name="cep" id="cep" maxlength="8" class="form-control" placeholder="Ex: 25.000-000">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="g-recaptcha" data-sitekey="6LcV_Y0UAAAAANt45HN8eCyb0lRNyIfmBKtCaxDD"></div>
                    </div>
                    <div class="form-group">
                      <input type="submit" name="submit" value="Enviar Pedido" id="enviar" class="btn btn-warning text-black"><br>
                    </div>
                  </div>
                </form>
                <h3 class="text-center text-light bg-success mb-4 p-2 rounded lead" id="resultado"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    <script src="js/jquery.min.js"></script>
    <!-- <script src="js/empresa.js"></script> -->
    <script src="js/empresa2.js"></script>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </body>
</html>