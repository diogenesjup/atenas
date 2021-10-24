class Views {

   constructor() {

      this._content = $("section#content");

      this._allMenus = $("footer * a");
      this._menu1 = $("footer .menu-1 a");
      this._menu2 = $("footer .menu-2 a");
      this._menu3 = $("footer .menu-3 a");

      this.header = $("header");
      this.footer = $("footer");

   }

   animarTransicao() {
      new WOW().init();
   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   VIEW PRINCIPAL
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewProd() {
      voltarAoTopo();

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();
   }

   viewPrincipal() {

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Drive Camp">
                              <img src="assets/images/simbolo.png" alt="Drive Camp Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Início
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal view-intro-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        <!-- BUSCA PRINCIPAL -->
                        <div class="input-group busca-principal">
                           <input type="text" class="form-control" placeholder="Faça uma pesquisa" aria-label="Pesquise por produtos" aria-describedby="busca-principal">
                                 <div class="input-group-append">
                                 <span class="input-group-text" id="busca-principal">
                                    <img src="assets/images/pesquisa.svg" alt="Busca">
                                 </span>
                                 </div>
                        </div>
                        <!-- BUSCA PRINCIPAL -->

                     </div>
                  </div>

                  <!-- STORIES -->
                        <div class="stories">
                           <div class="row">
                              <div class="col-12">
                                 
                                    
                                    <ul class="stories">
                                       
                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories1.svg" alt="Mentores">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Mentores
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->

                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories2.svg" alt="Ao Vivo">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Ao Vivo
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->

                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories3.svg" alt="Grow">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Grow
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->

                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories4.svg" alt="Negócios">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Negócios
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->


                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories1.svg" alt="Empreendedorismo">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Empreendedorismo
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->


                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories2.svg" alt="Games">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Games
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->

                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories3.svg" alt="Notícias">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Notícias
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->

                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories4.svg" alt="Relacionamentos">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Relacionamentos
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->


                                       <!-- STORIES -->
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories1.svg" alt="Finanças">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Finanças
                                             </span>
                                          </a>
                                       </li>
                                       <!-- STORIES -->



                                       

                                       </ul>


                              </div>
                           </div>
                        </div>
                        <!-- STORIES -->


                     <!-- ABAS -->
                  <div class="page-tabs">
                     <div class="pcss3t pcss3t-height-auto">

                     <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                     <label for="tab1">Sua Network</label>
                                                                           
                     <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                     <label for="tab2">Radar</label>

                     <input type="radio" name="pcss3t" id="tab3" class="tab-content-last">
                     <label for="tab3">Mentores</label>

                        <ul>
                                                                                    
                           <!-- ABA UM -->
                           <li class="tab-content tab-content-first" id="conteudo1">
                              

                                 <div class="titulo-inner-aba">
                                    <h2>Novidades da Network <span>&nbsp;</span></h2>
                                 </div>


                                 <div class="caixa-branca">
                        <div class="caixa-branca-header">
                           <div class="row">
                              <div class="col-9 coluna-um no-padding">
                                 <div class="row">
                                    <div class="col-3 foto-perfil no-padding">
                                       <div class="caixa-foto-perfil" style="background: url('assets/images/perfil-feed.png') #ccc no-repeat;background-size: cover;background-position: center center;">
                                          <a href="javascript:void(0)" title="Ver perfil">
                                             &nbsp;
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-9 nome-perfil">
                                       <h4>Diogenes Junior <br><small>1h atrás</small></h4>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-3 coluna-dois no-padding">
                                 <a href="javascript:void(0)" title="Mais opções">
                                    <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                 </a>
                              </div>
                           </div>
                        </div>

                        <p class="thumb">
                            <a href="#" title="Clique para ver mais sobre essa postagem">
                                <img src="assets/images/foto-feed.png" alt="Foto de perfil">
                            </a>
                        </p>

                        <h5>Título da postagem que o usuário fez, ou artigo, material etc.</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                        <div class="actions-bar">
                            <div>
                                <button data-js="like" class="">
                                    <i class="fas fa-heart"></i>
                                    <span>221</span>
                                </button>
                                <button data-js="comment">
                                    <i class="fas fa-comment"></i>
                                    <span>12</span>
                                </button>
                            </div>
                            <div>
                                <button data-js="share">
                                    <i class="fas fa-share"></i>
                                    <span>Comp.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="caixa-branca">
                        <div class="caixa-branca-header">
                           <div class="row">
                              <div class="col-9 coluna-um no-padding">
                                 <div class="row">
                                    <div class="col-3 foto-perfil no-padding">
                                       <div class="caixa-foto-perfil" style="background: url('assets/images/perfil-feed.png') #ccc no-repeat;background-size: cover;background-position: center center;">
                                          <a href="javascript:void(0)" title="Ver perfil">
                                             &nbsp;
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-9 nome-perfil">
                                       <h4>Diogenes Junior <br><small>1h atrás</small></h4>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-3 coluna-dois no-padding">
                                 <a href="javascript:void(0)" title="Mais opções">
                                    <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                 </a>
                              </div>
                           </div>
                        </div>

                        <p class="thumb">
                            <a href="#" title="Clique para ver mais sobre essa postagem">
                                <img src="assets/images/foto-feed.png" alt="Foto de perfil">
                            </a>
                        </p>

                        <h5>Título da postagem que o usuário fez, ou artigo, material etc.</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                        <div class="actions-bar">
                            <div>
                                <button data-js="like" class="">
                                    <i class="fas fa-heart"></i>
                                    <span>221</span>
                                </button>
                                <button data-js="comment">
                                    <i class="fas fa-comment"></i>
                                    <span>12</span>
                                </button>
                            </div>
                            <div>
                                <button data-js="share">
                                    <i class="fas fa-share"></i>
                                    <span>Comp.</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="caixa-branca">
                        <div class="caixa-branca-header">
                           <div class="row">
                              <div class="col-9 coluna-um no-padding">
                                 <div class="row">
                                    <div class="col-3 foto-perfil no-padding">
                                       <div class="caixa-foto-perfil" style="background: url('assets/images/perfil-feed.png') #ccc no-repeat;background-size: cover;background-position: center center;">
                                          <a href="javascript:void(0)" title="Ver perfil">
                                             &nbsp;
                                          </a>
                                       </div>
                                    </div>
                                    <div class="col-9 nome-perfil">
                                       <h4>Diogenes Junior <br><small>1h atrás</small></h4>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-3 coluna-dois no-padding">
                                 <a href="javascript:void(0)" title="Mais opções">
                                    <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                 </a>
                              </div>
                           </div>
                        </div>

                        <p class="thumb">
                            <a href="#" title="Clique para ver mais sobre essa postagem">
                                <img src="assets/images/foto-feed.png" alt="Foto de perfil">
                            </a>
                        </p>

                        <h5>Título da postagem que o usuário fez, ou artigo, material etc.</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                        <div class="actions-bar">
                            <div>
                                <button data-js="like" class="">
                                    <i class="fas fa-heart"></i>
                                    <span>221</span>
                                </button>
                                <button data-js="comment">
                                    <i class="fas fa-comment"></i>
                                    <span>12</span>
                                </button>
                            </div>
                            <div>
                                <button data-js="share">
                                    <i class="fas fa-share"></i>
                                    <span>Comp.</span>
                                </button>
                            </div>
                        </div>
                    </div>



                           </li>
                           <!-- ABA UM -->

                           <!-- ABA DOIS -->
                           <li class="tab-content tab-content-2" id="conteudo2">
                                 <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                           </li>
                           <!-- ABA DOIS -->

                           <!-- ABA TRES -->
                           <li class="tab-content tab-content-last" id="conteudo3">
                              <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                           </li>
                           <!-- ABA TRES -->

                        </ul>

                  </div>
                  </div>      
                  <!-- ABAS -->  
                  <!-- BOTÃO CRIAR POST -->
                  <button type="button" data-js="post"></button>
               
      `);

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();

      /*
      if(localStorage.getItem("calibragem")==null){

            app.views.calibragem();

      }
      */
   }

   cssInicioLogado() {

      restaurarBackground();

      $("header").css("background", "#fff");
      $("header").css("color", "#000");
      $("header").css("box-shadow", "0px 2px 4px rgba(0, 0, 0, 0.06)");


   }

   calibragem() {

      voltarAoTopo();
      app.views.desativarTodosMenus();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.logoff();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Bem vindo!
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <img src="assets/images/ferpall.png" alt="Ferpall Logo" />
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        
                        <h2 class="status-tarefa">
                           Configuração inicial do aplicativo
                           
                        </h2>
                        

                        

                              <!-- TAREFA -->                
                              <div class="caixa-branca caixa-branca-tarefa">


                                    <div class="form-group">
                                       <label>Para um uso correto do aplicativo, precisamos fazer algumas configurações. Ao clicar em "Iníciar", vamos solicitar as permissões necessárias do seu dispositivo para o uso do <b>GPS</b> e da sua <b>câmera</b>. Esses recursos são essencias para o funcionamento do aplicativo.</label>
                                    </div>

                                    <div class="acessibilidade">
                                    <a href="javascript:void(0)" onclick="app.increaseFont();" title="Aumentar a fonte">
                                       <img src="assets/images/increase-font.svg" alt="Aumentar a fonte" />
                                    </a>
                                    </div>


                              </div>
                              <!-- TAREFA -->


                                 <div class="form-group">
                                 <button class="btn btn-primary" onclick="app.iniciarCalibragem();">
                                       Iniciar
                                 </button>
                                 </div>

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   tarefas() {

      voltarAoTopo();
      app.views.ativarMenuDois();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.inicio();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Agenda
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

      `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow slideInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <h1 class="titulo-pagina">
                           Agenda
                        </h1>
                        
                        

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   relatorios() {

      voltarAoTopo();
      app.views.desativarTodosMenus();
      app.views.ativarMenuTres();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.inicio();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Favoritos
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow slideInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <h1 class="titulo-pagina">
                           Favoritos
                        </h1>
                        
                                             


                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();



   }

   initTarefa() {

      voltarAoTopo();
      app.views.desativarTodosMenus();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.inicio();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Responder tarefa
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <img src="assets/images/ferpall.png" alt="Ferpall Logo" />
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        
                        <h2 class="status-tarefa">
                           Entrada do produto (1/34)
                           <span>
                              071
                              <small>
                                 CONTROLE
                              </small>
                           </span>
                        </h2>
                        

                        <form method="post" action="javascript:void(0)" onsubmit="app.views.tarefaCheckBox();">

                              <!-- TAREFA -->                
                              <div class="caixa-branca caixa-branca-tarefa">


                                    <div class="form-group">
                                       <label>Nome do avaliador</label>
                                       <input type="text" class="form-control" required placeholder="Digite nesse campo" />
                                    </div>

                                    <div class="acessibilidade">
                                    <a href="javascript:void(0)" onclick="app.increaseFont();" title="Aumentar a fonte">
                                       <img src="assets/images/increase-font.svg" alt="Aumentar a fonte" />
                                    </a>
                                    </div>


                              </div>
                              <!-- TAREFA -->


                                 <div class="form-group">
                                 <button class="btn btn-primary">
                                       Próxima pergunta 
                                 </button>
                                 </div>


                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-default" onclick="app.salvarEContinuarDepois();" title="Salvar e continuar depois">
                              Salvar e continuar depois
                           </a>
                        </div>


                        



                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   tarefaCheckBox() {

      voltarAoTopo();
      app.views.desativarTodosMenus();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.views.initTarefa()">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Responder tarefa
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <img src="assets/images/ferpall.png" alt="Ferpall Logo" />
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        
                        <h2 class="status-tarefa">
                           Entrada do produto (2/34)
                           <span>
                              071
                              <small>
                                 CONTROLE
                              </small>
                           </span>
                        </h2>
                        

                        <form method="post" action="javascript:void(0)" onsubmit="app.views.tarefaImagem();">

                              <!-- TAREFA -->                
                              <div class="caixa-branca caixa-branca-tarefa">

                                    <div class="form-group">
                                       <label>A inspeção é de reavaliação</label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                       <label class="form-check-label" for="exampleRadios1">
                                       Sim
                                       </label>
                                    </div>
                                    <div class="form-check">
                                       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                       <label class="form-check-label" for="exampleRadios2">
                                       Não
                                       </label>
                                    </div>

                                    <div class="acessibilidade">
                                    <a href="javascript:void(0)" onclick="app.increaseFont();" title="Aumentar a fonte">
                                       <img src="assets/images/increase-font.svg" alt="Aumentar a fonte" />
                                    </a>
                                    </div>

                              </div>
                              <!-- TAREFA -->


                                 <div class="form-group">
                                 <button class="btn btn-primary">
                                       Próxima pergunta 
                                 </button>
                                 </div>


                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-default" onclick="app.salvarEContinuarDepois();" title="Salvar e continuar depois">
                              Salvar e continuar depois
                           </a>
                        </div>



                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   tarefaImagem() {

      voltarAoTopo();
      app.views.desativarTodosMenus();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.views.tarefaCheckBox();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Responder tarefa
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <img src="assets/images/ferpall.png" alt="Ferpall Logo" />
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        
                        <h2 class="status-tarefa">
                           Entrada do produto (3/34)
                           <span>
                              071
                              <small>
                                 CONTROLE
                              </small>
                           </span>
                        </h2>
                        

                        <form method="post" action="javascript:void(0)" onsubmit="app.views.tarefaComUpload();">

                              <!-- TAREFA -->                
                              <div class="caixa-branca caixa-branca-tarefa">

                                    <div class="form-group form-group-imagem">
                                       <img src="assets/images/imagem.png" alt="Título da pergunta" />
                                    </div> 
                                    <div class="form-group">
                                       <label>Título da pergunta</label>
                                       <input type="text" class="form-control" required placeholder="Digite nesse campo" />
                                    </div>

                                    <div class="acessibilidade">
                                    <a href="javascript:void(0)" onclick="app.increaseFont();" title="Aumentar a fonte">
                                       <img src="assets/images/increase-font.svg" alt="Aumentar a fonte" />
                                    </a>
                                    </div>


                              </div>
                              <!-- TAREFA -->


                                 <div class="form-group">
                                 <button class="btn btn-primary">
                                       Próxima pergunta 
                                 </button>
                                 </div>


                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-default" onclick="app.salvarEContinuarDepois();" title="Salvar e continuar depois">
                              Salvar e continuar depois
                           </a>
                        </div>


                        



                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   tarefaComUpload() {

      voltarAoTopo();
      app.views.desativarTodosMenus();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.views.tarefaImagem();">
                              <img src="assets/images/voltar.svg" alt="Voltar" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Responder tarefa
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <img src="assets/images/ferpall.png" alt="Ferpall Logo" />
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        
                        <h2 class="status-tarefa">
                           Entrada do produto (4/34)
                           <span>
                              071
                              <small>
                                 CONTROLE
                              </small>
                           </span>
                        </h2>


                        <!-- CAIXA UPLOAD -->              
                        <div class="caixa-branca caixa-branca-tarefa">

                                 <div class="form-group">
                                 <label>Título da pergunta, sobre porque o usuário precisa carregar ou fotografar uma imagem</label>
                                 </div>
                                 
                                 <!-- ESCOLHER TIPO IMAGEM -->
                                 <div class="escolha-tipo-camera">
                                                <div class="row">
                                                      <div class="col-6 area-select-camera">
                                                               <a href="javascript:void(0)" title="Selecionar pela camêra" onclick="appCamera.startCameraBelow();">
                                                                  <img src="assets/images/camera.svg" alt="Camera" />
                                                                           Câmera
                                                               </a>
                                                      </div>
                                                      <div class="col-6 area-select-camera">
                                                                           
                                                               <form class="fileForm" style="padding-top:0px;" method="post" enctype="multipart/form-data" action="${app.urlApi}upload-imagens.php">
                                                                           
                                                                  <input type="hidden" name="token" value="${app.token}" />
                                                                  <div class="form-group selecionar-arquivo">
                                                                     <label id="selecionarArquivoSelfie" for="selecionarArquivoInputSelfie">
                                                                     <img src="assets/images/biblioteca.svg" alt="Biblioteca" />
                                                                           Biblioteca
                                                                     </label>
                                                                           
                                                                     <input type="file" style="opacity: 0;height: 1px;width: 1px;" name="arquivos[]" multiple id="selecionarArquivoInputSelfie" accept="image/x-png,image/gif,image/jpeg" onchange="uploadLocal()">
                                                                              
                                                                  </div>

                                                               </form>

                                                      </div>
                                                </div>
                                                                  
                                             <div class="retorno-upload"></div>
                                 </div>
                                 <!-- ESCOLHER TIPO IMAGEM -->

                                 <!-- IMAGENS DA OFERTA -->
                                 <div class="card preview-imagens-da-oferta">
                                    <p class="preview-thumb">A imagem anexada a essa pergunta será exibida aqui</p>
                                 </div>
                                 <!-- IMAGENS DA OFERTA -->


                        </div>
                        <!-- CAIXA UPLOAD -->
                        

                        <form method="post" action="javascript:void(0)" onsubmit="app.views.concluirTarefa();">

                              <!-- TAREFA -->                
                              <div class="caixa-branca caixa-branca-tarefa">

                                    <div class="form-group">
                                       <label>Legenda da imagem</label>
                                       <input type="text" class="form-control" required placeholder="Digite nesse campo" />
                                    </div>

                                    <div class="acessibilidade">
                                    <a href="javascript:void(0)" onclick="app.increaseFont();" title="Aumentar a fonte">
                                       <img src="assets/images/increase-font.svg" alt="Aumentar a fonte" />
                                    </a>
                                    </div>

                              </div>
                              <!-- TAREFA -->

                                 <div class="form-group">
                                 <button class="btn btn-primary">
                                       Finalizar
                                 </button>
                                 </div>

                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-default" onclick="app.salvarEContinuarDepois();" title="Salvar e continuar depois">
                              Salvar e continuar depois
                           </a>
                        </div>

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>

                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   concluirTarefa() {

      app.inicio();
      aviso("Tarefa concluída!", "Suas respostas foram enviadas! Obrigado.");


   }

   view2() {

      this._content.html(`
               
                  <div class="row view-2" view-name="view-2">
                     <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 2</h2>
                        <p>Essa é a segunda view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   view3() {

      this._content.html(`
               
                  <div class="row view-3" view-name="view-3">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 3</h2>
                        <p>Esse é a terceira view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   LOGIN / CADASTRO
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewLogin() {

      // RESETAR ALGUNS CSS`s`
      $("body").css("background", "#fff");
      $("section#content").css("background", "#fff");
      $("header").css("background", "#000");
      $("header").css("color", "#fff");
      $("header").css("box-shadow", "none");

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Login
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo.svg" alt="Drive Camp logo" />
                        </div>
                        
                        <div class="caixa-branca caixa-branca-login">

                              <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)" style="margin-bottom:32px;">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Usuário</label>
                                    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Senha</label>
                                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div>
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewLogin">
                                       Entrar
                                    </button>
                                 </div>
                                 
                              </form>
                              
                              
                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                          Esqueci minha senha
                                       </a>
                                    </div>

                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                          Criar uma conta
                                       </a>
                                 </div>


                        </div>

                     

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();
      app.helpers.carregarMascaras();

   }

   viewCadastro() {

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Cadastro
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo.svg" alt="Drive Camp logo" />
                        </div>

                        <div class="caixa-branca caixa-branca-login">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Seu nome completo</label>
                                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome completo" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>E-mail</label>
                                    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" required />
                                       <i class="fa fa-envelope" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Senha</label>
                                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div> 
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewCadastro">
                                       Cadastro
                                    </button>
                                 </div>

                              </form>

                              <div class="form-group link-apoio text-center">
                                    <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                                       Já tenho uma conta
                                    </a>
                                 </div>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();

   }

   cadastroPasso2() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Que tipo de usuário você é?</h3>
                        </div>

                  </div>
               </div>

               <div class="caixa-branca-passos-cadastro caixa-branca-login wow fadeInDown" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastroPasso2(event)">
                                 
                                 
                                 <div id="tipoUsuario" class="tipoUusario owl-carousel owl-theme">

                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck1" checked>
                                             <label class="form-check-label label-um" for="defaultCheck1">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-1.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Sou produtor de conteúdo</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>

                                       </div>
                                       <!-- PAGINA -->


                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck2">
                                             <label class="form-check-label label-um" for="defaultCheck2">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-2.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Sou consumidor de conteúdo</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>
                                          
                                       </div>
                                       <!-- PAGINA -->


                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck3">
                                             <label class="form-check-label label-um" for="defaultCheck3">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-1.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Estou buscando novas conexões</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>
                                          
                                       </div>
                                       <!-- PAGINA -->

                                 </div>

                                 <div class="caixa-branca col-10 offset-1" style="margin-top:-30px;">
                                    <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Próximo passo
                                       </button>
                                    </div>
                                 </div>

                              </form>

                              

                        </div>

            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();



      // INSTANCIAR O OWL CARROUSEL
      var tipoUsuario = $('#tipoUsuario').owlCarousel({
         loop: false,
         margin: 10,
         items: 1.5,
         autoplay: false,
         center: true
      });


   }

   cadastroPasso3() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Quais são os seus interesses?</h3>
                        </div>


                        <div class="caixa-branca caixa-branca-login" style="padding-left: 0px;padding-right: 0px;">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro3(event)">

                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Saúde</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Entretenimento</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Educação</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Empreendedorismo</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Tecnologia</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Netnografia</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">História</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Design</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">UX</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Esportes</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Política</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Música</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Grow</span>
                                 
                                 <p class="preferencias">
                                    Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                 </p>  
                                 <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Próximo passo
                                       </button>
                                 </div>
                              </form>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();


   }

   applyFilter(seletor) {

      if ($(seletor).hasClass("clicada")) {

         $(seletor).removeClass("clicada");

      } else {

         //$(".filtros .badge-secondary").removeClass("clicada");
         $(seletor).addClass("clicada");

      }

   }

   cadastroPasso4() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Qual o seu momento profissional?</h3>
                        </div>

                        <div class="caixa-branca caixa-branca-login view-configuracoes" style="padding-left: 0px;padding-right: 0px;">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro4(event)">

                                    <nav>

                                       <ul>

                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config1">
                                                   <label class="custom-control-label" for="config1">
                                                         Recolocação no mercado
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config2">
                                                   <label class="custom-control-label" for="config2">
                                                         Estágio ou Trainee
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config3">
                                                   <label class="custom-control-label" for="config3">
                                                         Empreendedor
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config4">
                                                   <label class="custom-control-label" for="config4">
                                                         Feliz profissionalmente
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>

                                       </ul> 

                                    </nav>
                                    
                                 <p class="preferencias">
                                    Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                 </p>  

                                 <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Finalizar cadastro
                                       </button>
                                 </div>

                              </form>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();

   }

   viewEsqueciMinhaSenha() {

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Esqueci minha senha
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo.svg" alt="Drive Camp logo" />
                        </div> 

                        <div class="caixa-branca caixa-branca-login">

                           <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                              
                              <div class="form-group has-feedback">
                                 <label>Seu e-mail ou usuário cadastrado</label>
                                 <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                                 <i class="fa fa-envelope"></i>
                              </div>
                              
                              <div class="form-group">
                                 <button class="btn btn-primary" id="btnViewResetarSenha">
                                    Resetar senha
                                 </button>
                              </div>
                           </form>

                           <div class="form-group link-apoio text-center">
                                 <a href="javascript:void(0)" onclick="app.viewLogin()" title="Cancelar reset de senha">
                                    Cancelar
                                 </a>
                              </div>

                        </div>

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   APOIOS
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   removerImagemGaleriaImagens(idDaImagem) {

      // REMOVER UMA IMAGEM DOS UPLOADS DAS IMAGENS
      $("#galeriaImgensImoveis" + idDaImagem).remove();
      $("#caixaPreviewImagemCarregada" + idDaImagem).remove();

      $("#imagemOculta").val();

   }

   // VIEW UPLOAD DE FOTO

   viewUploadFoto() {

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>Upload de foto</h2>
                        <p>Fazer upload de imagens via input ou camêra</p>
                        
                        <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                           
                           <input type="hidden" name="token" value="${app.token}" />
                           <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                           <div class="form-group">
                              <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                              <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                           </div>



                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                              Enviar o arquivo
                           </a>
                        </div>

                        <div class="retorno-upload"></div>

                        <div class="form-group link-apoio text-center">
                           <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                                 Cancelar
                           </a>
                        </div>

                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   desativarTodosMenus() {
      this._allMenus.css("font-weight", "normal");
   }

   ativarMenuUm() {
      this.desativarTodosMenus();
      this._menu1.css("font-weight", "bold");
   }

   ativarMenuDois() {
      this.desativarTodosMenus();
      this._menu2.css("font-weight", "bold");
   }

   ativarMenuTres() {
      this.desativarTodosMenus();
      this._menu3.css("font-weight", "bold");
   }
}