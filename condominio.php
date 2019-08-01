<!doctype html>
<html lang="pt-BR">
  <head>
    <title>Orçamento para Condomínio</title>
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
                <h4 class="text-center text-light p-2 mb-2 rounded text-uppercase">Orçamento para Condomínio</h4>
                <div class="progress mb-5" style="height: 40px;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 9.09%;" id="progressbar">
                    <b class="lead" style="font-size: 14px !important; color: #000000; padding-left: 10px;" id="preogressText">Passo 01 de 11</b>
                  </div>
                </div>
                <form action="" method="POST" id="form-data">
                  <div id="primeiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Houve algum caso de roubo/arrastão em Condomínios do bairro ou regiões próximas ao seu, nos últimos 3 anos?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo1" id="sim1" value="Sim">
                        <label class="form-check-label" for="sim1">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo1" id="nao1" value="Não">
                        <label class="form-check-label" for="nao1">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo1Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-1">Próximo</a>
                    </div>
                  </div>
                  <div id="segundo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Houve algum caso de roubo/arrastão no Condomínio nos últimos 5 anos?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo2" id="sim2" value="Sim">
                        <label class="form-check-label" for="sim2">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo2" id="nao2" value="Não">
                        <label class="form-check-label" for="nao2">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo2Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-2">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-2">Próximo</a>
                    </div>
                  </div>
                  <div id="terceiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Ocorreram casos de furtos ou vandalismo no Condomínio nos últimos 3 anos?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo3" id="sim3" value="Sim">
                        <label class="form-check-label" for="sim3">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo3" id="nao3" value="Não">
                        <label class="form-check-label" for="nao3">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo3Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-3">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-3">Próximo</a>
                    </div>
                  </div>
                  <div id="quarto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Existem moradores com comportamento ostensivo de riqueza ou que notoriamente guardam valores numerários ou ítens de luxo no interior do condomínio?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo4" id="sim4" value="Sim">
                        <label class="form-check-label" for="sim4">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo4" id="nao4" value="Não">
                        <label class="form-check-label" for="nao4">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo4Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-4">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-4">Próximo</a>
                    </div>
                  </div>
                  <div id="quinto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Existe uma Política de Segurança definida no Regulamento Interno do Condomínio?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo5" id="sim5" value="Sim">
                        <label class="form-check-label" for="sim5">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo5" id="nao5" value="Não">
                        <label class="form-check-label" for="nao5">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo5Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-5">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-5">Próximo</a>
                    </div>
                  </div>
                  <div id="sexto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">As barreiras físicas perimetrais (muros, cercas e grades) têm altura mínima de 3 metros?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo6" id="sim6" value="Sim">
                        <label class="form-check-label" for="sim6">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo6" id="nao6" value="Não">
                        <label class="form-check-label" for="nao6">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo6Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-6">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-6">Próximo</a>
                    </div>
                  </div>
                  <div id="setimo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">As barreiras perimetrais estão estruturadas de forma a não permitir que sejam facilmente escaladas (exemplo: muretas ou telhados próximos ou apoios para os pés nas grades)?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo7" id="sim7" value="Sim">
                        <label class="form-check-label" for="sim7">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo7" id="nao7" value="Não">
                        <label class="form-check-label" for="nao7">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo7Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-7">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-7">Próximo</a>
                    </div>
                  </div>
                  <div id="oitavo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Existe sistema de sensores monitorados em todo o perímetro (sensores infravermelho, cerca elétrica monitorada, etc.)?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo8" id="sim8" value="Sim">
                        <label class="form-check-label" for="sim8">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo8" id="nao8" value="Não">
                        <label class="form-check-label" for="nao8">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo8Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-8">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-8">Próximo</a>
                    </div>
                  </div>
                  <div id="nono">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Existem complementos de segurança cortante ou de choque, instalados acima da barreira física (concertina, espetos, cerca elétrica, etc.)?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo9" id="sim9" value="Sim">
                        <label class="form-check-label" for="sim9">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo9" id="nao9" value="Não">
                        <label class="form-check-label" for="nao9">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo9Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-9">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-9">Próximo</a>
                    </div>
                  </div>
                  <div id="decimo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Existe sistema periódico de ronda perimetral, realizado por vigilantes especializados?</h5>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo10" id="sim10" value="Sim">
                        <label class="form-check-label" for="sim10">
                          Sim
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="passo10" id="nao10" value="Não">
                        <label class="form-check-label" for="nao10">
                          Não
                        </label>
                      </div>
                      <b class="form-text text-danger" id="passo10Erro"></b>
                    <div class="form-group">
                      <a href="#" class="btn btn-dark mt-3 mb-0 text-light" id="anterior-10">Anterior</a>
                      <a href="#" class="btn btn-warning mt-3 mb-0" id="proximo-10">Próximo</a>
                    </div>
                  </div>
                  <div id="onze">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Informações para Contato</h5>
                    <div class="form-group text-left">
                      <label for="nome">Nome Completo:</label>
                      <input type="text" name="nome" id="nome" class="form-control" placeholder="Ex: João da Silva Santos">
                      <b class="form-text text-danger" id="nomeErro"></b>
                    </div>
                    <div class="form-group text-left">
                      <label for="email">E-mail:</label>
                      <input type="text" name="email" id="email" class="form-control" placeholder="Ex: joaodasilva@gmail.com">
                      <b class="form-text text-danger" id="emailErro"></b>
                    </div>
                    <div class="form-group text-left">
                      <label for="telefone">Telefone:</label>
                      <input type="text" name="telefone" id="telefone" maxlength="11" class="form-control" placeholder="Ex: (22) 9xxxx-xxxx">
                      <b class="form-text text-danger" id="telefoneErro"></b>
                    </div>
                    <div class="form-group text-left">
                      <label for="cep">CEP:</label>
                      <input type="text" name="cep" id="cep" maxlength="8" class="form-control" placeholder="Ex: 25.000-000">
                      <b class="form-text text-danger" id="cepErro"></b>
                    </div>
                    <div class="form-group">
                      <div class="g-recaptcha" data-sitekey="6LcV_Y0UAAAAANt45HN8eCyb0lRNyIfmBKtCaxDD"></div>
                    </div>
                    <div class="form-group">
                      <input type="submit" name="submit" value="Enviar Pedido" id="enviar" class="btn btn-warning text-black">
                    </div>
                  </div>
                </form>
                <h3 class="text-center text-light bg-success mt-5 p-2 rounded lead" id="resultado"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/condominio.js"></script>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </body>
</html>