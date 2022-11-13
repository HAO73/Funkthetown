var $ = require ('jquery');


$('form').button(function(event){
 

    var tbox = $('tbox').val();
    
    



 event.preventDefault();


 $.ajax({
    url: '/',
    type:'POST',
    data:{
        email: tbox
    },
success: function(response){
    console.log(response);


}

});
});


