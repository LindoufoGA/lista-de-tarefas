$(document).ready(function(){
    $('#form').on('submit', function(e){
    e.preventDefault();
    adicionarTarefa();
    })

    function adicionarTarefa() {
        const tarefa = $('#input-tarefa').val().trim();  
        if(tarefa !== '') {
            const novaTarefa = (`<li>${tarefa}</li>`);
            $('#lista-de-tarefas').append(novaTarefa);
            $('#input-tarefa').val('')
        }
    }
        $('#lista-de-tarefas').on('click', 'li', function() {
        const tarefa = $(this).text();
        $(this).css('text-decoration', 'line-through');
        alert(`Você concluiu a tarefa: ${tarefa}`);
    });
    
})
