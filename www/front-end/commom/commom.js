// COMO FAZER A CHAMADA NO FORMULÁRIO onSubmit="return ajaxSubmit(this);"
var ajaxSubmit = function (form) {
  // fetch where we want to submit the form to
  var url = $(form).attr("action");
  var flag = 9;

  var data = $(form).serializeArray();

  // setup the ajax request
  $.ajax({
    url: url,
    data: data,
    dataType: "json",
    type: "POST",
  });

  swal("Obrigado!", "Sua mensagem foi enviada com sucesso", "success");

  return false;
};

// FOR"CAR VOLTAR AO TOPO
function voltarAoTopo() {
  var objDiv = document.getElementById("content");
  objDiv.scrollTop = 0;
}

function removerBackground() {
  $("body").css("background", "transparent");
  $("section#content").css("background", "transparent");
  $("section#content").css("opacity", "0");
}

function restaurarBackground() {
  $("body").css("background", "#F8F8F8");
  $("section#content").css("background", "#F8F8F8");
  $("section#content").css("opacity", "1");

  $(".take-a-picture").css("bottom", "-1000%");
}

// SE O USUÁRIO FIZER UM GESTURE PARA A PARTE INFERIOR DA PÁGINA
// VAMOS FECHAR A LAYER DO CARRO, CASO ELA ESTEJA ABERTA

$("#swipeAviso").swipe({
  swipe: function (event, direction, distance, duration, fingerCount) {
    if (direction == "down") {
      $(".modal-avisos .aviso").css("bottom", "-300%");
      $(".modal-avisos").fadeOut(500);
    }
  },
});

$("#swipemeConfirmacao").swipe({
  swipe: function (event, direction, distance, duration, fingerCount) {
    if (direction == "down") {
      $(".modal-confirmacao .confirmacao").css("bottom", "-300%");
      $(".modal-confirmacao").fadeOut(500);
    }
  },
});

// OUTSIDECLICK
// document.addEventListener("click", clickOutside);
// function clickOutside(event) {
//   if(event.target === document.querySelector("[data-js]")) {
//     return;
//   } else {
//     if(!event.target.closest(".modal > div")) {
//       document.querySelector(".modal").style.display = "none";
//     }
//   }
// }

// TABS
const elsTab = document.querySelectorAll(".tabs");
elsTab.forEach(tab => {
  const headers = tab.querySelectorAll(".tabs__header div");
  const contents = tab.querySelectorAll(".tabs__content");

  headers.forEach(header => {
    header.addEventListener("click", openTabs);
  });

  function openTabs(el) {
  
    let btnTarget = el.currentTarget;
    let attr = btnTarget.dataset.content;
    let contentTarget = tab.querySelector(`#${attr}`);
  
    contents.forEach(el => {
      el.classList.remove("active");
    });
  
    headers.forEach(el => {
      el.classList.remove("active");
    });

    contentTarget.classList.add("active");
    btnTarget.classList.add("active");
  }
});

// MODAL CRIAÇÃO POST


/* FUNÇÃO GERAL PARA EXIBIR OS AVISOS DO PÁGINA */
function aviso(titulo, mensagem) {
  console.log(
    "%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO",
    "background:#ff0000;color:#fff;"
  );
  $(".modal-avisos").fadeIn(100);

  $(".modal-avisos .aviso").css("bottom", "0");

  // ALIMENTAR O HTML
  $(".modal-avisos .aviso h3").html(titulo);
  $(".modal-avisos .aviso p").html(
    mensagem +
      '<p style="padding-top:12px;padding-left:0px;"><button type="button" onclick="fecharAviso();" class="btn btn-primary">Ok</button></p>'
  );

  //setTimeout("fecharAviso()",12000);
}

function fecharAviso() {
  $(".modal-avisos .aviso").css("bottom", "-300%");
  $(".modal-avisos").fadeOut(500);
}

/* FUNÇÃO GERAL PARA EXIBIR CONFIRMAÇÕES DE AÇÕES */
function confirmacao(titulo, mensagem, funcaoConfirmacao, textoConfirmacao) {
  console.log(
    "%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO",
    "background:#ff0000;color:#fff;"
  );
  $(".modal-confirmacao").fadeIn(100);

  $(".modal-confirmacao .confirmacao").css("bottom", "0");

  // ALIMENTAR O HTML
  $(".confirmacao h3").html(titulo);
  $(".confirmacao p").html(mensagem);

  $(".confirmacao #acaoConfirmacao").attr(
    "onclick",
    funcaoConfirmacao + "; fecharConfirmacao();"
  );
  if (textoConfirmacao != "") {
    $(".confirmacao #acaoConfirmacao").html(textoConfirmacao);
  }
}

function fecharConfirmacao() {
  $(".modal-confirmacao .confirmacao").css("bottom", "-300%");
  $(".modal-confirmacao").fadeOut(500);
}

// RETORNAR A DATA ATUAL
function queDiaEHoje() {
  var currentdate = new Date();
  var datetime =
    "Hoje é: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " | " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  return datetime;
}

// FORMULARIO FLUTUANTE onclick="ativarFormularioFlutuante('','')"
function ativarFormularioFlutuante(campoParaPreenchimento, labelPreenchimento) {
  $(".input-flutuante-acessibilidade").fadeIn(500);
  //$(".barra-navegacao").hide(0);

  $("#fieldInputFlutuante").val($(campoParaPreenchimento).val());

  localStorage.setItem("campoParaPreenchimento", campoParaPreenchimento);

  $("#fieldInputFlutuante").focus();
  $(".input-flutuante-acessibilidade label").html(labelPreenchimento);
}

function validarFormularioFlutuante(event) {
  event.preventDefault();

  var fieldInputFlutuante = $("#fieldInputFlutuante").val();

  $(".input-flutuante-acessibilidade").fadeOut(500);
  //$(".barra-navegacao").show(0);

  $(localStorage.getItem("campoParaPreenchimento")).val(fieldInputFlutuante);
}

// GARANTIR O FECHAMENTO DO CAMPO QUANDO A TELA VOLTAR AO NORMAL
$(document).ready(function () {
  var _originalSize = $(window).width() + $(window).height();
  $(window).resize(function () {
    if ($(window).width() + $(window).height() == _originalSize) {
      console.log("keyboard active " + _originalSize);
      $(".input-flutuante-acessibilidade").fadeOut(500);
      //$(".barra-navegacao").show(0);
    }
  });
});

// CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS
function uploadLocal() {
  console.log("ENTRAMOS!");
  //var files = $(this)[0].files;

  $(".retorno-upload").css("padding-bottom", "24px");

  $(".retorno-upload").html(
    `<img src="assets/images/loading.gif" style="width:32px;height:auto;"> Estamos enviando suas imagens, aguarde.`
  );

  /* Efetua o Upload 
              $('.fileForm').ajaxForm({
               dataType:  'json',
               success:   processJson 
              }).submit();
              */
}

function processJson(dados) {
  // 'data' is the json object returned from the server
  console.log(
    "%c RETORNO SOBRE O ENVIO DAS IMAGENS (UPLOAD):",
    "background:#ff0000;color:#fff;"
  );
  console.log(dados);

  if (dados.erros === null) {
    console.log("NENHUM ERRO!");
    $(".retorno-upload").html(
      `<i class="fa fa-check"></i> Imagem enviada com sucesso!`
    );

    // LIMPAR A SESSAO
    $(".card").html("");

    $(".card").append(`

                           <div class="caixa-preview-imagem-carregada" data-id="${0}" data-url="${
      dados.dados[0].url
    }" id="caixaPreviewImagemCarregada${0}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${
                                app.urlCdn
                              }${
      dados.dados[0].url
    }') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                  &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${0})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                              </a>
                              </p>
                           </div>

              `);

    $("#imagemOculta").val(dados.dados[0].url);
    $("#tipoImagem").val("batch");
  } else {
    $(".retorno-upload").html(
      '<div class="alert alert-danger">' + dados.erros + "</div>"
    );
  }

  $(".fileForm").resetForm();
}
// CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS

// LIKE ANIMATION
const likes = setInterval(() => {
  const btnsLike = document.querySelectorAll("[data-js='like']");
  if(btnsLike) {
    btnsLike.forEach(btn => {
      btn.addEventListener("click", event => {
        let currentBtn = event.currentTarget;
        currentBtn.classList.toggle("active");
        let number = currentBtn.querySelector("span");
        
        if(currentBtn.classList.contains("active")) {
          +number.textContent++;
        } else {
          +number.textContent--;
        }
      });
    });
    clearInterval(likes);
  } else {
    return;
  }
}, 10);
 
// MODAL COMENTÁRIO
function modalComment() {
  const btns = document.querySelectorAll("[data-js='comment']");
  if(btns.length > 0) {
    const comentario = document.querySelector(".comentario");
    const close = document.querySelector("[data-comentario='close']");
    close.addEventListener("click", () => {
      comentario.classList.remove("active");
    });
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        comentario.classList.add("active");
      });
    });
  }
}
modalComment();

// AUDIO PLAYER
const player = document.querySelector(".audio-player");
if(player) {
  const audio = player.querySelector("audio");
  const duration = player.querySelector("h5");
  duration.innerHTML = secToStr(audio.duration);

  player.addEventListener("click", () => {
    player.classList.toggle("active");
    if(player.classList.contains("active")) {
      audio.play();
    } else {
      audio.pause();
    }
  });
}

// LINHA PORCENTAGEM
const progress = document.querySelector(".progress-line")
function progressLine() {
  progress.querySelector("span").style.width = `${progress.querySelector("h5").textContent}`;

  return;
}
if(progress) progressLine();

// EXPANSÍVEL
function dropdown(title) {
  title.classList.toggle("active");
  title.nextElementSibling.classList.toggle("active");
}

function secToStr (num) {
  num = Math.floor(num);
  let tempo = "";
  let horas   = Math.floor(num / 3600);
  let minutos = Math.floor((num - (horas * 3600)) / 60);
  let segundos = num - (horas * 3600) - (minutos * 60);
  let horasText = "horas";
  let minutosText = "minutos";
  let segundosText = "segundos";

  if(horas === 1) horasText = "hora";
  if(minutos === 1) minutosText = "minuto";
  if(segundos === 1) segundosText = "minuto";

  if(horas === 0) {
    tempo = `${minutos} ${minutosText} e ${segundos} ${segundosText}`;
  }
  else if(minutos === 0) {
    tempo = `${segundos} ${segundosText}`;
  } else {
    tempo = `${horas} ${horasText} ${minutos} ${minutosText} e ${segundos} ${segundosText}`;
  }

  if(horas === 0 && minutos === 0 && segundos === 0) {
    tempo = "Áudio indisponível.";
  }
        
  return tempo;
}