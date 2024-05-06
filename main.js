 $(document).ready(function(){
    console.log(document.querySelector('header button'));
    console.log($('#botao-cancelar'));

    document.querySelector('header button').addEventListener('click', function(){


    })
    $('header button').click(function(){
       $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
     })
 

    $('form').on('submit', function(e){
        e.preventdefault();
    })

 })