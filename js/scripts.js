$(document).ready(function(){
  $("#design-content").hide();
  $("#design-image").click(function(){
    $(this).slideDown('1500').hide('1000');
    $("#design-content").show();
  });
  $("#design-content").click(function(){
    $(this).slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#development-content").hide();
  $("#development-image").click(function(){
    $(this).slideDown("1500").hide("1000");
    $("#development-content").show();

  });
  $("#development-content").click(function(){
    $(this).slideUp("1500");
    $("#development-image").slideDown("1500");
  });

});

$(document).ready(function(){
  $("#product-content").hide();
  $("#product-image").click(function(){
    $(this).slideDown("1500").hide("1000");
    $("#product-content").show();

  });
  $("#product-content").click(function(){
    $(this).slideUp("1500");
    $("#product-image").slideDown("1500");
  });

});

$(document).ready(function(){
  $("#porfolio1").mouseenter(function(){
    $("#m-hover1").show();

  });
  $("#portfolio1").mouseleave(function(){
    $("#m-hover").hide();
  });
});
$(document).ready(function(){
  $("#porfolio2").mouseenter(function(){
    $("#m-hover2").show();

  });
  $("#portfolio1").mouseleave(function(){
    $("#m-hover2").hide();
  });
});