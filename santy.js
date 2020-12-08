//menu
(function($){
  $(document).ready(function(){
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);

//Mansaje de confimacion
function confirmar ( mensaje ) {
  return confirm( mensaje );
}

//bloqueoButtonAtras
function NoBack(){
  window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }

//busqueda instantanea
$(document).ready(function(){
  var consulta;
         //hacemos focus al campo de búsqueda
         $("#busqueda").focus();
        //comprobamos si se pulsa una tecla
        $("#busqueda").keyup(function(e){
              //obtenemos el texto introducido en el campo de búsqueda
              consulta = $("#busqueda").val();                                                                          
              //hace la búsqueda                                                                                  
              $.ajax({
                type: "GET",
                url: "encontrar.php",
                data: "b="+consulta,
                dataType: "html",
                beforeSend: function(){
                          //imagen de carga
                          $("#resultado").html("<p align='center'><img width='50' height='50' src='../../views/template/img/loader.gif' /></p>");
                        },
                        error: function(){
                          alert("No Existe Encontrar");
                        },
                        success: function(data){                                                    
                          $("#resultado").empty();
                          $("#resultado").append(data);                                            
                        }
                      });                                                                
            });
      });

//Mostrar automaticamente Select 
function email(str) {
  if (str == "") {
    document.getElementById("txtEmail").innerHTML = "";
    return;
  } else { 
    if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("txtEmail").innerHTML = this.responseText;
            }
          };
          xmlhttp.open("GET","email.php?id="+str,true);
          xmlhttp.send();
        }
      }
      function ver_equipo(str) {
        if (str == "") {
          document.getElementById("txtEquipo").innerHTML = "";
          return;
        } else { 
          if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("txtEquipo").innerHTML = this.responseText;
            }
          };
          xmlhttp.open("GET","equipo.php?id="+str,true);
          xmlhttp.send();
        }
      }
      function cod_equipo(str) {
        if (str == "") {
          document.getElementById("txtCodec").innerHTML = "";
          return;
        } else { 
          if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
          } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("txtCodec").innerHTML = this.responseText;
            }
          };
          xmlhttp.open("GET","codec.php?id="+str,true);
          xmlhttp.send();
        }
      }

//Fechas 
function fechaNormal($fecha){
  $nfecha = date('d-m-Y',strtotime($fecha));
  return $nfecha;
}
function fechaSQL($fecha){
  $nfecha = date('Y-m-d',strtotime($fecha));
  return $nfecha;
}

// ir arriba
$(document).ready(function(){
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 100);
  });
  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(100);
    } else {
      $('.ir-arriba').slideUp(100);
    }
  });
});


//bloqueoCtrl
$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
        case 's':
            event.preventDefault();
            // alert('ctrl-s');
            break;
        case 'f':
            event.preventDefault();
            // alert('ctrl-f');
            break;
        case 'g':
            event.preventDefault();
            // alert('ctrl-g');
            break;
        case 'p':
            event.preventDefault();
            // alert('ctrl-p');
            break;
        }
    }
});


//BloqueoClickDerecho
document.oncontextmenu = function(){return false;}


//auto size
function resizeInput(){
  var valueLength = $(this).prop('value').length;
  if (valueLength > 0) {
    $(this).prop('size', valueLength);
  }
}
$('input[type="text"]').on('keyup',resizeInput).each(resizeInput);




