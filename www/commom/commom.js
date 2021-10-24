// MAPA

// VARIAVEIS GLOBAIS DO MAPA
var input;
var map;
var directionsDisplay; // Instanciaremos ele mais tarde, que será o nosso google.maps.DirectionsRenderer

// SETAR AS COORDANADAS PADRÃO PARA A ESTAÇÃO DE METRÔ PALMEIRAS BARRA FUNDA
var pscLat = "-23.5266758";
var pscLon = "-46.6673684";

var pscLatUsuario = "-23.5266758";
var pscLonUsuario = "-46.6673684";


// INICIALIZAR GEOLOCATION
function initGeolocation(){

      if( navigator.geolocation )
       {
          // Call getCurrentPosition with success and failure callbacks
          navigator.geolocation.getCurrentPosition( success, fail );
       }
       else
       {
          aviso("Sem GPS","Não conseguimos acessar o seu GPS. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
       }
       function success(position)
            {
                var cordenadas = "";
                cordenadas = position.coords.longitude;
                cordenadas = cordenadas+", ";
                cordenadas = cordenadas + position.coords.latitude;
                // SETAR AS NOVAS COORDENADAS
                pscLatUsuario = position.coords.latitude;
                pscLonUsuario = position.coords.longitude;

                console.log("LAT NEW: "+pscLatUsuario);
                console.log("LON NEW: "+pscLonUsuario);

                // SALVAR NA MEMORIA A POSIÇÃO ATUAL DO USUARIO
                if(pscLat!="" && pscLon!=""){
                  localStorage.setItem("latitude",pscLat);
                  localStorage.setItem("longitude",pscLon);
                }

                // SE TIVERMOS A LOCALIZAÇÃO ATUAL, A GENTE COMEÇA A EXIBIR O MAPA A PARTIR DESSE PONTO
                if(pscLatUsuario!="" && pscLonUsuario!=""){

                    console.log("Coordenadas foram obtidas sem maiores problemas.");
                    carregarMapa();

                }else{

                   aviso("Problemas com o GPS","Conseguimos obter os dados do seu GPS, mas os mesmos não estão no formato esperado. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
                   carregarMapa();
                }


            }
          function fail()
            {
               aviso("Sem GPS","Não conseguimos acessar o seu GPS, por causa de um problema de permissões no disposítivo. Mas não se preocupe, você poderá utilizar o aplicativo mesmo assim.");
               carregarMapa();
            }


}



function initMapa(){

   console.log("INICIANDO FUNÇÃO PARA GERAR O MAPA GOOGLEMAPS");
   console.log("%c NESSA FUNÇÃO VAMOS INICIAR O AUTOCOMPLETE","background:#ff0000;color:#fff;");
   
   // AUTO COMPLETO DO ENDEREÇO
   input = document.getElementById('destino');
   var autoComplete = new google.maps.places.Autocomplete(input);

   var directionsService = new google.maps.DirectionsService();
   google.maps.event.addDomListener(window, 'load', autoComplete);

  localStorage.setItem("latitude",pscLat);
  localStorage.setItem("longitude",pscLon);

  initGeolocation();


}


function carregarMapa(){

         directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...

          pscLat = "-23.5260741";
          pscLon = "-46.667251";

           var latlng = new google.maps.LatLng(pscLat, pscLon);

           var options = {
              zoom: 15,
              center: latlng,
              scrollwheel: true,
              disableDefaultUI: true,
              draggable: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [
              {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              }, {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [{
                  "visibility": "off"
                }]
              },
                  {
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f5f5f5"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#bdbdbd"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#757575"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#dadada"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#616161"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c9c9c9"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#9e9e9e"
                      }
                    ]
                  }
                ]
           };


           map = new google.maps.Map(document.getElementById("mapa"), options);
           directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado
               
               var image = {
                  url: 'assets/images/selo.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };

                var local = {
                  url: 'assets/images/local.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };


                var midia1 = {
                  url: 'assets/images/midia1.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };
                var midia2 = {
                  url: 'assets/images/midia2.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };
                var midia3 = {
                  url: 'assets/images/midia3.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };
                var midia4 = {
                  url: 'assets/images/midia4.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };
                var midia5 = {
                  url: 'assets/images/midia5.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };
                var midia6 = {
                  url: 'assets/images/midia6.png',
                  //size: new google.maps.Size(40, 60),
                  //origin: new google.maps.Point(0,0),
                  //anchor: new google.maps.Point(40, 24)
                };

                var marker = new google.maps.Marker({
                    icon: image,
                    position: latlng,
                    map: map,
                });

                var latlng2 = new google.maps.LatLng("-23.5235377", "-46.6688168");
                var marker2 = new google.maps.Marker({
                  icon: local,
                  position: latlng2,
                  map: map,
              });


              var latlngMidia1 = new google.maps.LatLng("-23.5201586", "-46.6649008");
              var markerMidia1 = new google.maps.Marker({
                icon: midia1,
                position: latlngMidia1,
                map: map,
            });
            var latlngMidia2 = new google.maps.LatLng("-23.5288153", "-46.6645145");
              var markerMidia2 = new google.maps.Marker({
                icon: midia2,
                position: latlngMidia2,
                map: map,
            });
            var latlngMidia3 = new google.maps.LatLng("-23.5245756", "-46.6588604");
              var markerMidia3 = new google.maps.Marker({
                icon: midia3,
                position: latlngMidia3,
                map: map,
            });
            var latlngMidia4 = new google.maps.LatLng("-23.5360354", "-46.6729259");
              var markerMidia4 = new google.maps.Marker({
                icon: midia4,
                position: latlngMidia4,
                map: map,
            });
            var latlngMidia5 = new google.maps.LatLng("-23.5417206", "-46.6539788");
              var markerMidia5 = new google.maps.Marker({
                icon: midia5,
                position: latlngMidia5,
                map: map,
            });
            var latlngMidia6 = new google.maps.LatLng("-23.5257462", "-46.6538286");
              var markerMidia6 = new google.maps.Marker({
                icon: midia5,
                position: latlngMidia6,
                map: map,
            });
            var latlngMidia7 = new google.maps.LatLng("-23.5254117", "-46.6748571");
              var markerMidia7 = new google.maps.Marker({
                icon: midia1,
                position: latlngMidia7,
                map: map,
            });
            var latlngMidia8 = new google.maps.LatLng("-23.5289137", "-46.6719174");
              var markerMidia8 = new google.maps.Marker({
                icon: midia6,
                position: latlngMidia8,
                map: map,
            });
            var latlngMidia9 = new google.maps.LatLng("-23.5329664", "-46.6668534");
              var markerMidia9 = new google.maps.Marker({
                icon: midia3,
                position: latlngMidia9,
                map: map,
            });
            var latlngMidia10 = new google.maps.LatLng("-23.5335763", "-46.6632056");
              var markerMidia10 = new google.maps.Marker({
                icon: midia6,
                position: latlngMidia10,
                map: map,
            });


            
                google.maps.event.addListener(marker,'click',function(){

                    map.panTo(marker.getPosition());
                    aviso('<img src="assets/images/simbolo-pequeno.png" /> Estação Palmeiras Barra Funda',`
                      
                    <p><img src="assets/images/unnamed.jpg" style="width:100%;heigth:auto" /></p>
                       <p>
                       Segundo seu GPS, essa é a estação da CPTM mais próxima da sua localização.
                       </p>
                       <p><span class="badge badge-primary" style="font-size:14px;">Temos 18 lojas nessa estação!</span></p>
                       <p>&nbsp;</p>
                       <table class="table">
                         <tr>
                            <td><img src="assets/images/Bicicletario.jpg" style="width:29px"  /> Bicicletário</td>
                           
                         </tr>
                         <tr>
                            <td><img src="assets/images/Piso-Tátil.jpg" style="width:29px"  /> Piso Tátil</td>
                           
                         </tr>
                         <tr>
                            <td><img src="assets/images/Sanitário-Uniacessível.jpg" style="width:29px"  /> Sanitário masculino e feminino acessível</td>
                           
                         </tr>
                         <tr>
                            <td><img src="assets/images/acesso_elevador.jpg" style="width:29px"  /> Acesso elevador</td>
                           
                         </tr>
                         <tr>
                            <td><img src="assets/images/escada_rolante.jpg" style="width:29px"  /> Escadas Rolantes</td>
                           
                         </tr>
                       </table>
                    
                    
                    `);
                });

                google.maps.event.addListener(marker2,'click',function(){
                  map.panTo(marker2.getPosition());
                  aviso('Sua localização','Segundo seu GPS, essa é a sua localização atual');
              });



              google.maps.event.addListener(latlngMidia1,'click',function(){
                map.panTo(latlngMidia1.getPosition());
            });
            google.maps.event.addListener(latlngMidia2,'click',function(){
              map.panTo(latlngMidia2.getPosition());
          });
          google.maps.event.addListener(latlngMidia3,'click',function(){
            map.panTo(latlngMidia3.getPosition());
        });
        google.maps.event.addListener(latlngMidia4,'click',function(){
          map.panTo(latlngMidia4.getPosition());
      });
      google.maps.event.addListener(latlngMidia5,'click',function(){
        map.panTo(latlngMidia5.getPosition());
    });
    google.maps.event.addListener(latlngMidia6,'click',function(){
      map.panTo(latlngMidia6.getPosition());
  });
  google.maps.event.addListener(latlngMidia7,'click',function(){
    map.panTo(latlngMidia7.getPosition());
});
google.maps.event.addListener(latlngMidia8,'click',function(){
  map.panTo(latlngMidia8.getPosition());
});
google.maps.event.addListener(latlngMidia9,'click',function(){
  map.panTo(latlngMidia9.getPosition());
});
google.maps.event.addListener(latlngMidia10,'click',function(){
  map.panTo(latlngMidia10.getPosition());
});
           
                

              

}




        // APÓS O CLICK EM UM LOCAL, VAMOS APAGAR O MAPA, E FAZER APARECER A SELEÇÃO DO TIPO DE TREINO
        $("#destino").change(function(){

               // FAZER APARECER NA TELA A DIV PARA SALVAR O DESTINO
               console.log("DESTINO ESCOLHIDO");

               //var destinoEscolhido = $("#destino").val();

               //$("#mapa").fadeOut("250");
               //console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
               //localStorage.setItem("destinoViagemPrimario",destinoEscolhido);

               // ALIMENTAR SELEÇÃO
               //$("#enderecoDaSelecao").html('<li><a href="javascript:void(0)" title="Sugestão de endereço"><img src="images/sugestao.svg" alt="Sugestão de endereço"> '+destinoEscolhido+'</a></li>');


        });


        $("body .pac-container").click(function(){
          
          console.log("CLICOU NO PAC");

        });

        // CORREÇÃO PARA SELEÇÃO DO DESTINO ONMOBILE
        $(document).on({
            'DOMNodeInserted': function() {

                $('.pac-item, .pac-item span', this).addClass('no-fastclick');
                //$(".tepping-flex").fadeOut("250");
                //$(".caixa-sugestoes-treinos").fadeOut();
                console.log("PAC GOOGLE: ");

                $( ".pac-item, .pac-item" ).each(function( index ) {
                  if($(this).html()!=""){
                     $("#enderecoDaSelecao").append('<li><a href="javascript:void(0)" title="Sugestão de endereço" onclick="salvarEnderecoFinalmente(this)"><img src="assets/images/sugestao.svg" alt="Sugestão de endereço">'+$(this).html()+'</a></li>');
                  }
                });
                
                //var text = $('.pac-item, .pac-item').html();
                
                
                // TESTES FUNÇÕES DE ALIMENTAÇÃO DO PAC AUTO COMPLET DO GOOGLE
                //var destinoEscolhido = $("#destino").val();
                //console.log("DESTINO ESCOLHIDO: "+destinoEscolhido);
                //localStorage.setItem("destinoViagemPrimario",destinoEscolhido);

                // ALIMENTAR SELEÇÃO
                //$("#enderecoDaSelecao").html('<li><a href="javascript:void(0)" title="Sugestão de endereço"><img src="images/sugestao.svg" alt="Sugestão de endereço"> '+destinoEscolhido+'</a></li>');



            }
        }, '.pac-container');

        

function autoCompletarEndereco(param){
  
  $(".caixa-endereco-autocomplet").css("bottom","0px");
  localStorage.setItem("paramEndereco",param);

  var preEndereco = $("#destinoEndereco").val();

  $("#destino").val(preEndereco);
  $("#destino").focus();

  $("a.more-link").fadeOut(0);

}


function salvarEnderecoFinalmente(seletor){

           console.log("ESSE É O ENDEREÇO FINAL:");
           var enderecoFinal = $(seletor).html().replace('</span><span class="no-fastclick">'," ");
           enderecoFinal = enderecoFinal.replace(/(<([^>]+)>)/ig,"");
          
           console.log(enderecoFinal);
           $("#destino").val(enderecoFinal);
           localStorage.setItem("destinoViagemPrimario",enderecoFinal);

           $("a.more-link").fadeIn(500);

        }  
        function salvarEnderecoFinalmente2(endereco){

           console.log("ESSE É O ENDEREÇO FINAL:");
           var enderecoFinal = endereco;
          
           console.log(enderecoFinal);
           $("#destino").val(enderecoFinal);
           localStorage.setItem("destinoViagemPrimario",enderecoFinal);
          
           // O ENDEREÇO JÁ É UM FAVORITO, NÃO PRECISAMOS ADICIONA-LO NOVAMENTE
           //$("a.more-link").fadeIn(500);

        }





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


// ABRIR A URL EM UM LINK EXTERNO OU PELO MENOS EM UM NAVEGADOR INTERNO MELHOR
function openUrl(url){

  if(url!=""){
   
    // ABRINDO A URL
    //cordova.InAppBrowser.open(url, '_system', 'location=yes');
    cordova.InAppBrowser.open(url, '_blank', 'location=yes,toolbarcolor=#00dff2,hidden=no,hardwareback=no,toolbarposition=top');

    /*

        CAPTURAR A URL DO NAVEGADOR IN APP

        You can get the url from javascript on any of the inAppBrowser events (loadstart, loadstop, loaderror, exit)

        var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
        var myCallback = function(event) { alert(event.url); }
        ref.addEventListener('loadstart', myCallback);


        But for the "bookmark" button, I think you will need to edit the inAppBrowser plugin to add a native button, and as you will use a native button and you will use native code, you can get the url with

        webView.getOriginalUrl();

    */

  }

}
// COMPARTILHAR EXTERNO
            function compartilharExterno(url,titulo){

                  // this is the complete list of currently supported params you can pass to the plugin (all optional)
                  var options = {
                    message: titulo+" - "+url, // not supported on some apps (Facebook, Instagram)
                    subject: url, // fi. for email
                    //files: ['', ''], // an array of filenames either locally or remotely
                    url: url,
                    chooserTitle: titulo, // Android only, you can override the default share sheet title
                    //appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
                    //iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
                  };

                  var onSuccess = function(result) {
                    console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                    console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
                  };

                  var onError = function(msg) {
                    console.log("Sharing failed with message: " + msg);
                  };

                  window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);

            }

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
function aviso(titulo, mensagem, tipo) {
  console.log(
    "%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO",
    "background:#ff0000;color:#fff;"
  );
  $(".modal-avisos").fadeIn(100);

  $(".modal-avisos .aviso").css("bottom", "0");

  // ALIMENTAR O HTML
  $(".modal-avisos .aviso h3").html(titulo);

  if(tipo!="html"){
    $(".modal-avisos .aviso p").html(
      mensagem +
        '<p style="padding-top:12px;padding-left:0px;"><button type="button" onclick="fecharAviso();" class="btn btn-primary">Ok</button></p>'
    );
  }else{
    $(".modal-avisos .aviso").append(mensagem);
  }


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
