class Models{
    
    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){
                
        console.log("%c RETORNO TESTE API","background:#ff0000;color:#fff;");
        console.log("200 AMBIENTE DE TESTE");
    
    }
    
    // PROC LOGIN
    procLogin(){

       $("#btnViewLogin").html("Carregando...");
       
       event.preventDefault();

       var emailUsuario = $("#email").val();
       var senhaUsuario = $("#senha").val();
      
       app.login(1,emailUsuario,senhaUsuario);

       $("#btnViewLogin").html("Login");
     
    }

    // PROC LOGIN SMS
    procLoginSms(){
        
       app.verificarCodigoSms();
                  
    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      $("#btnViewLogin").html("Processando...");
     
      var codigoSms = $("#codigoCelular").val();
      var numeroCelular = localStorage.getItem("celularCadastro");

      app.login(1);
                  
    }


    // PROC CADASTRO
    procCadastro(){

        $("#btnViewCadastro").html("Processando...");

        var dadosUsuario = $('#formCadastro').formSerialize();
        var idUsuario = localStorage.getItem("idUsuario");

        // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
        app.login(1);
                          
      }


    procResetSenha(){

              $("#btnViewResetarSenha").html("Processando...");

              var resetEmail = $("#resetEmail").val();
              
              app.viewLogin();
              aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     

    }

}