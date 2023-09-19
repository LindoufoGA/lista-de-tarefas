$(document).ready(function(){

    $('form').on('submit', function(e){
    e.preventDefault();

    const tarefa = $('#input-tarefa').val();
    const novaTarefa = $(`<li style="text-decoration: none">${tarefa}</li>`);
    $(novaTarefa).appendTo('ul');
    $('#input-tarefa').val('');
    
})
    $('li').click(function() {
        const lineThrough = $(`<li style="text-decoration: line-through;">${tarefa}</li>`)
        $('li').text() = $(lineThrough)
        alert('voce clicou')
})

})

    