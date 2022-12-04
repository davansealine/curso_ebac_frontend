
     $('form').on('submit', function(e){
        e.preventDefault();
        adicionarTarefa();
        concluirTarefa();
       
        
     });
    
    function adicionarTarefa(){
    const inputNomeTarefa = $('#nome-tarefa').val();

    $(document).ready(function() {
       
        $("<li></li>")
        .html(inputNomeTarefa)
        .appendTo('ul');
       
    })
        $('#nome-tarefa').val('');
        
}

    function concluirTarefa(){
    
            $("#lista").on("click", "li", function(){
            $(this).css('text-decoration', 'line-through');
            
        })
       

        }
        
    
   
    
