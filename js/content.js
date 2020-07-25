initialmenu();
function initialmenu(){
    $('#contentprincipal').html('');
    $('#contentprincipal').append(
    '<div id="lateralmenu" class="sizeleft animationini" >'+           
    '</div>'
    );
    var buttonsmenu = databutton;
    var buttonsmenulength = Object.keys(buttonsmenu).length; //obtenemos el número de objetos en el fichero contando los objetos con la funcion Object.keys
    for (var i = 0; i < buttonsmenulength; i++){ //iteramos sobre el número de objetos
     var idbutton='Button'+i;//identificador del botón
     $('#lateralmenu').append(
        '<div class="buttonmenu">'+
        '<div class="buttonmenusecond" onclick="internalMenu('+buttonsmenu[idbutton].url+');">'+                               
            '<h1 id="'+buttonsmenu[idbutton].id+'" class="textbutton">'+buttonsmenu[idbutton].text+'</h1>'+
        '</div>'+
    '</div>'
        );
    }	
}         
function internalMenu(choice)
{
    
    $('#contentprincipal').html('');
    
    if (choice == 'backtomenu'){
        initialmenu();
    }

    if (choice == datamenu){
    $('#contentprincipal').append(
    '<div id="lateralmenu" class="sizelefttiny animationini" >'+           
    '</div>'
    );
        var buttonsmenu = choice;
        var buttonsmenulength = Object.keys(buttonsmenu).length; //obtenemos el número de objetos en el fichero contando los objetos con la funcion Object.keys
        for (var i = 0; i < buttonsmenulength; i++){ //iteramos sobre el número de objetos
         var idbutton='Button'+i;//identificador del botón
         $('#lateralmenu').append(
            '<div class="buttonmenu">'+
            '<div class="buttonmenusecond" onclick="internalMenu('+buttonsmenu[idbutton].url+');">'+                               
                '<h1 id="'+buttonsmenu[idbutton].id+'" class="textbutton">'+buttonsmenu[idbutton].text+'</h1>'+
            '</div>'+
        '</div>'
            );
        }
        $('#contentprincipal').append(
        '<div id="lateralmenu" class="sizerightbig animationiniright">'+
        '<div class="divmenuright">'+
        '<div class="divmenusecondright" ></div>'+
        '</div>'+
        '</div>'
        );	
    }

    if (choice == 'binarynumber'){
        $('#contentprincipal').append(
            '<div class="sizeleft animationini" >'+
            '<input type="number" id="numberbin" value="0"><br></br>'+
            '<div class="buttonmenu">'+
            '<input type="button" class="buttonmenusecond" onclick="submitNumber();">'+       
            '</div>'+
            '</div>'
            );
    }
    
    if (choice == 'algorythm'){
        $('#contentprincipal').append(
            '<div class="sizeleft animationini" >'+
            '<input type="number" id="numberalg" value="0"><br></br>'+
            '<div class="buttonmenu">'+
            '<input type="button" class="buttonmenusecond" onclick="canvasalgorythmdraw();">'+       
            '</div>'+
            '</div>'+
            '<div id="lateralmenu" class="sizeright">'+
            '<canvas id="canvalgorythm" class="canvasalgorythm">'+
            '</canvas>'+
            '</div>'
            );
    }
}


