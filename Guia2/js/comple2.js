
//contador
var i = 0;
var canProducto = 1;
var one = false;
var two = false;
var tree = false;
var four = false;
//arreglos para guardar los datos
var producto = new Array(100);
var precio = new Array(100);
var opciones;

for(i = 0; i <= 100; i++){
do
{
    do{  
        if(!(producto[i] =  prompt("Ingrese el nombre del producto"))){
            alert("ERROR... dato vacio");
        }else{
            if(isNaN(producto[i])){
                four = true;
                do{
                    if(!(precio[i] = prompt("Ingrese el precio del producto"))){
                        alert("ERROR...");
                    }else{
                        if(isNaN(precio[i])){
                            alert("ERROR...");
                        }else{
                            two = true;
                        }
                    }
                }while(two == false);
            }else{
                alert("ERROR... dato no valido");
            }
        }
    }while(four == false);

    do{
        opciones = prompt("Seleccione su opcion: 1) si quiere ingresar mas productos o 2) Si ya no desea ingresar productos")
        switch(opciones){
            case '1':
                 tree = true;
                 one = true; 
                 canProducto ++;
                 break;
            case '2':
                i = 100;
                tree = true;
                one = true;
                break;
                default:
                    alert("dato no valido");
                    tree = false;
                    break;
                }
            }while(tree == false);
        }while(one == false);
    }
    document.write("<font face='Verdana' size='15' text-align:'center' ><h1></h1></font>");
    document.write("<font face='Verdana' size='15' text-align:'center' ><table border = '1' align='center'> <tr> <th>Nombre</th> <th>Precio</th>  </tr></font>");
    for(i = 0; i <canProducto; i++){
        document.write("<tr>  <td>"+ producto[i] +"</td>   <td> $"+precio[i]+"</td></tr>");
    }
    document.write("</table>");

