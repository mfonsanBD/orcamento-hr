<!doctype html>
<html lang="en">
  <head>
    <title>Orçamento para Residência</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/estilo.css">
    <script src="js/sweetalert.min.js"></script>
    <link rel="icon" href="https://grupohrbrasil.com.br/wp-content/uploads/2018/10/favicon.png" type="image/png">

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
                <h4 class="text-center text-light p-2 mb-2 rounded text-uppercase">Orçamento para Residência</h4>
                <div class="progress mb-5" style="height: 40px;">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 11.11%;" id="progressbar">
                    <b class="lead" style="font-size: 14px !important; color: #000000; padding-left: 10px;" id="preogressText">Passo 01 de 09</b>
                  </div>
                </div>
                <form action="" method="POST" id="form-data">
                  <div id="primeiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Como é a sua Residência?</h5>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="casa" value="Casa">
                      <label class="form-check-label" for="casa">
                        Casa
                      </label>
                    </div>
                    <div class="form-check text-left">
                      <input class="form-check-input" type="radio" name="passo1" id="apartamento" value="Apartamento">
                      <label class="form-check-label" for="apartamento">
                        Apartamento
                      </label>
                    </div>
                    <b class="form-text text-danger" id="passo1Erro"></b>
                  </div>
                  <div id="segundo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Esta é a sua Residência Habitual ou Segunda Residência?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo2" id="habitual" value="Habitual">
                        <label class="form-check-label" for="habitual">
                          Habitual
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo2" id="segundaResidencia" value="Segunda Residência">
                        <label class="form-check-label" for="segundaResidencia">
                          Segunda Residência
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo2Erro"></b>
                  </div>
                  <div id="terceiro">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Qual é a localização da Residência?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo3" id="foraDoNucleoUrbano" value="Fora do Núcleo Urbano">
                        <label class="form-check-label" for="foraDoNucleoUrbano">
                          Fora do Núcleo Urbano
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo3" id="dentroDoNucleoUrbano" value="Dentro do Núcleo Urbano">
                        <label class="form-check-label" for="dentroDoNucleoUrbano">
                          Dentro do Núcleo Urbano
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo3Erro"></b>
                  </div>
                  <div id="quarto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Como é o acesso principal da Residência?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="aPe" value="A Pé">
                        <label class="form-check-label" for="aPe">
                          A Pé
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="vigiada" value="Vigiada">
                        <label class="form-check-label" for="vigiada">
                          Vigiada
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo4" id="naoVigiada" value="Não Vigiada">
                        <label class="form-check-label" for="naoVigiada">
                          Não Vigiada
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo4Erro"></b>
                  </div>
                  <div id="quinto">
                    <h5 class="text-center mb-4 p-2 rounded text-light">A sua Residência possui Acessos Secundários?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="jardimOuTerreno" value="Jardim ou Terreno">
                        <label class="form-check-label" for="jardimOuTerreno">
                          Jardim ou Terreno
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="varandaOuTerraco" value="Varanda ou Terraço">
                        <label class="form-check-label" for="varandaOuTerraco">
                          Varanda ou Terraço
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo5" id="naoPossui" value="Não Possui">
                        <label class="form-check-label" for="naoPossui">
                          Não Possui
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo5Erro"></b>
                  </div>
                  <div id="sexto">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">As janelas da sua Residência têm grades?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo6" id="sim6" value="Sim">
                        <label class="form-check-label" for="sim6">
                          Sim
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo6" id="nao6" value="Não">
                        <label class="form-check-label" for="nao6">
                          Não
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo6Erro"></b>
                  </div>
                  <div id="setimo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">Quanto tempo a casa permanece desabitada?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo7" id="sempreHaAlguem" value="Sempre Há Alguém">
                        <label class="form-check-label" for="sempreHaAlguem">
                          Sempre Há Alguém
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo7" id="menosDe2Horas" value="Menos de 2 Horas por dia">
                        <label class="form-check-label" for="menosDe2Horas">
                          Menos de 2 Horas por dia
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo7" id="entre2e5" value="Entre 2 e 5 horas">
                        <label class="form-check-label" for="entre2e5">
                          Entre 2 e 5 horas
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo7" id="maisDe5" value="Mais de 5 horas">
                        <label class="form-check-label" for="maisDe5">
                          Mais de 5 horas
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo7Erro"></b>
                  </div>
                  <div id="oitavo">
                    <h5 class="text-center  mb-4 p-2 rounded text-light">A sua residência ou a dos seus vizinhos foi roubada anteriormente?</h5>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo8" id="sim8" value="Sim">
                        <label class="form-check-label" for="sim8">
                          Sim
                        </label>
                      </div>
                      <div class="form-check text-left">
                        <input class="form-check-input" type="radio" name="passo8" id="nao8" value="Não">
                        <label class="form-check-label" for="nao8">
                          Não
                        </label>
                      </div>
                    <b class="form-text text-danger" id="passo8Erro"></b>
                  </div>
                  <div id="nono">
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
    <script src="js/residencia.js"></script>
      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </body>
</html>