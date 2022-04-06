$(document).ready(function () {
  


  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  $(".texto-rojo").on("dblclick", function () {
    $(this).css("color", "red");
  });

  $(".plato1").on('click', function(){
    $(".detalle1").toggle("slow");   
  })

  $(".plato2").on('click', function(){
    $(".detalle2").toggle("slow");
  })

  $(".plato3").on('click', function(){
    $(".detalle3").toggle("slow");
  })
});
$("a").on("click", function (event) {
  event.preventDefault();

  var hash = this.hash;

  $("html").animate(
    {
      scrollTop: $(hash).offset().top - 80,
    },
    1000
  );
});
    