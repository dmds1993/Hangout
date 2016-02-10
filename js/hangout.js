// window.onload = function() {
//
//     var desenvolvimento = document.getElementById('desenvolvimento');
//     var coordenador = document.getElementsByClassName('coordenador-de-equipe');
//     var devops = document.getElementsByClassName('devops');
//     var qualidade = document.getElementsByClassName('equipe-qualidade');
//
//     desenvolvimento.onclick = function (event){
//         event.preventDefault();
//         var outros =  document.getElementsByClassName('outros');
//         outros.setAttribute('hide');
//     }
// }
$( document ).ready(function() {
    $('#desenvolvimento').click(function (){
        event.preventDefault();
        $('.visto').addClass('hidden');
        $('.dev').removeClass('hidden');
    })
    $('#daily').click(function (){
        event.preventDefault();
        $('.visto').addClass('hidden');
        $('.daily').removeClass('hidden');
    })
    $('#coordenador').click (function (){
        event.preventDefault();
        $('.visto').addClass('hidden');
        $('.coordenador').removeClass('hidden');
    })
    $('#devops').click(function (){
        event.preventDefault();
        $('.visto').addClass('hidden');
        $('.devops').removeClass('hidden');
    })
    $('#qualidade').click(function (){
        event.preventDefault();
        $('.visto').addClass('hidden');
        $('.qa').removeClass('hidden');
    })
    $('#todos').click(function (){
        event.preventDefault();
        $('.visto').removeClass('hidden');
    })
});
