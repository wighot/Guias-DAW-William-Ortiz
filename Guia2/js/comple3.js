    var ordenamiento = prompt("Digite el tipo de orden que desea (1)Ascendente o (2)Descendente");
    //defino mi varaible para el switch
    
        switch (ordenamiento) {

            case "1":
                do {
                    var numeros = new Array();
                    var i, max, temp, contenido="", tdelement;

                    max = prompt("Digite la cantidad de  números va a ingresar (valor entero):");
                    if(isNaN(max)){
                        alert("El valor digitado no es numérico.");
                        continue;
                        }
                        if(max < 2){
                        alert("El arreglo debe ser de dimensión 2 o superior");
                        }
                        }while(isNaN(max) || max < 2);

                        for(i=0; i<max; i++){
                        numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
                        }
                        var datos = document.getElementById('datos');
                        with(document){
                        contenido += "<h1>Números ingresados</h1>\n";
                        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";

                        for(i=0; i<max; i++){
                            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
                        }
                        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
                        for(i=0; i<max-1; i++){
                        for(j=i+1; j<max; j++){
                            if(numeros[i]>numeros[j]){
                                temp = numeros[j];
                                numeros[j] = numeros[i];
                                numeros[i] = temp;
                        }
                        }
                        }
                        contenido += "<h1>Números ordenados ascendentemente</h1>\n";
                        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                        for(i=0; i<max; i++) {
                            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
                        }
                        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                        }
                        datos.innerHTML = contenido;
                        tdelement = document.getElementsByClassName('Off');
                        alert(tdelement.length);
                        for(var i=0; i<tdelement.length; i++){
                            tdelement[i].onmouseover = function(){
                                this.className = 'On';
                        }
                        tdelement[i].onmouseout = function(){
                        this.className = 'Off';
                        }
                    }
              break;

              case "2":
                do {
                    var numeros = new Array();
                    var i, max, temp, contenido="", tdelement;

                    max = prompt("Digite la cantidad de  números va a ingresar (valor entero):");
                    if(isNaN(max)){
                        alert("El valor digitado no es numérico.");
                        continue;
                        }
                        if(max < 2){
                        alert("El arreglo debe ser de dimensión 2 o superior");
                        }
                        }while(isNaN(max) || max < 2);

                        for(i=0; i<max; i++){
                        numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
                        }
                    
                        var datos = document.getElementById('datos');
                        with(document){
                        contenido += "<h1>Números ingresados</h1>\n";
                        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                        for(i=0; i<max; i++){
                            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
                        }
                        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
                        for(i=0; i<max-1; i++){
                        for(j=i+1; j<max; j++){
                            if(numeros[i]<numeros[j]){
                                temp = numeros[j];
                                numeros[j] = numeros[i];
                                numeros[i] = temp;
                        }
                        }
                        }
                        contenido += "<h1>Números ordenados descendentemente</h1>\n";
                        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
                        for(i=0; i<max; i++) {
                            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
                        }
                        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
                        }
                        datos.innerHTML = contenido;
                        tdelement = document.getElementsByClassName('Off');
                        alert(tdelement.length);
                        for(var i=0; i<tdelement.length; i++){
                            tdelement[i].onmouseover = function(){
                                this.className = 'On';
                        }
                        tdelement[i].onmouseout = function(){
                        this.className = 'Off';
                        }
                    }
              break;            
          }
