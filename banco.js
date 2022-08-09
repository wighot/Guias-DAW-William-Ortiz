var ordenamiento = prompt("Digite su genero sexual (1)Masculino o (2)Femenino");
 
    switch (ordenamiento) {

        case "1":
                var i, max, estudiante, edad, prestamo, tasa;
                var numeros = new Array();

                max = prompt("Digite (1) si eres estudiante (2) otro");

                switch(ordenamiento){
                    case "1":
                    edad = prompt("Digite su edad");
                    if(edad >24){
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                    }else{
                        alert("La edad elejida no es correcta");

                        edad = prompt("Digite su edad");

                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        if(prestamo <=2000){
                        }else{
                            alert("No puedes seleccionar más de $2000"); 

                            prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        }
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                    }
                   
                    break;

                    case "2": 

                    edad = prompt("Digite su edad");
                    if(edad >24){
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                    }else{
                        alert("La edad elejida no es correcta");

                        edad = prompt("Digite su edad");
                        
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        if(prestamo <=2000){
                        }else{
                            alert("No puedes seleccionar más de $2000"); 

                            prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        }
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                }
                    
                    
          break;

          case "2":

          var i, max, estudiante, edad, prestamo, tasa;
                var numeros = new Array();

                max = prompt("Digite (1) si eres estudiante (2) otro");

                switch(ordenamiento){
                    case "1":
                    edad = prompt("Digite su edad");
                    if(edad >24){
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                    }else{
                        alert("La edad elejida no es correcta");

                        edad = prompt("Digite su edad");

                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        if(prestamo <=2000){
                        }else{
                            alert("No puedes seleccionar más de $2000"); 

                            prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        }
                        tasa = 0.12;
                        Cf= prestamo - tasa;
                    }
                   
                    break;

                    case "2": 

                    edad = prompt("Digite su edad");
                    if(edad >24){
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        tasa = 0.15;
                        Cf= prestamo - tasa;
                    }else{
                        alert("La edad elejida no es correcta");

                        edad = prompt("Digite su edad");
                        
                        prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        if(prestamo <=2000){
                        }else{
                            alert("No puedes seleccionar más de $2000"); 

                            prestamo = prompt("Digite la cantidad de su prestamo, recordando que sólo se pueden realizar por 6 meses, 12 meses y 18 meses");
                        }
                        tasa = 0.15;
                        Cf= prestamo - tasa;
                }
                    
                    
          break;

            }
        }
 }
 document.write("<h1 text-align: center >Cuotas a cancelar mensualmente</h1>");
 document.write("<fieldset><h1>"+ Cf +"</h1></fieldset>");
 document.write("<h1 text-align: center >Fecha de pago</h1>");
 document.write("<fieldset><h1>"+ Cf +"</h1></fieldset>");