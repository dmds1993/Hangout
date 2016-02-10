
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
