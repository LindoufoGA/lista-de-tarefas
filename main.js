$(document).ready(function(){

    $('form').on('submit', function(e){
    e.preventDefault();

    const tarefa = $('#input-tarefa').val();
    const novaTarefa = $(`<li style="text-decoration:none;">${tarefa}</li>`);
    $(novaTarefa).appendTo('ul');
    $('#input-tarefa').val('');
    
})
    $('ul').click(function() {
        $('style').fadeOut()
    alert('voce clicou')
})

})

    