//var form = document.forms['form']; //Llama al form
//e.preventDefault(); Evita que refresque la página luego de submitear el form. Esto sirve para que no se pierdan los datos. Se pone sólo en un form

function calcularPromedio() {
    var Matemáticas = document.getElementById('Matemáticas').value;
    var notaMate = validarNota(Matemáticas, "Matemáticas");

    var Lengua = document.getElementById('Lengua').value;
    var notaLengua = validarNota(Lengua, "Lengua");

    var Efsi = document.getElementById('Efsi').value;
    var notaEfsi = validarNota(Efsi, "Efsi");
    
    if(notaMate && notaLengua && notaEfsi){
        let promedio = (parseInt(Matemáticas) + parseInt(Lengua) + parseInt(Efsi)) / 3;
        var textPromedio = "El promedio es: " + promedio;
        
        if(promedio => 6){
            promedio.style.color = 'green';
            return alert(textPromedio);
        }
        else{
            promedio.style.color = 'red';
            return alert(textPromedio);
        }
        return alert("El promedio es: " + promedio);
    }
    return alert("Vuelva a ingresar las notas");
}

function validarNota(nota, materia) {
    if (nota < 0 || nota > 10) {
        document.getElementById(materia).style.color = 'red';
        alert("Error. La nota de " + materia + " debe ser entre 0 y 10 inclusive.");
        return false;
    }
    document.getElementById(materia).style.color = 'green';
    return true;
}

function mostrarMayorNota() {
    var Matemáticas = document.getElementById('Matemáticas').value;
    var notaMate = validarNota(Matemáticas, "Matemáticas");

    var Lengua = document.getElementById('Lengua').value;
    var notaLengua = validarNota(Lengua, "Lengua");

    var Efsi = document.getElementById('Efsi').value;
    var notaEfsi = validarNota(Efsi, "Efsi");

    var materia;

    if(notaMate && notaLengua && notaEfsi){
        if(Matemáticas > Lengua){
            if(Matemáticas > Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'cornflowerblue';
                document.getElementById("TextoLengua").style.color = 'black';
                document.getElementById("TextoEfsi").style.color = 'black';
                return alert("Matemáticas es la materia con la mayor nota. Nota matemáticas: " + Matemáticas);
            }
            else if(Matemáticas == Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'cornflowerblue';
                document.getElementById("TextoLengua").style.color = 'black';
                document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                return alert("Matemáticas y Efsi son las materias con las mayores notas. Nota matemáticas: " + Matemáticas + ", Nota Efsi: " + Efsi);
            }
            else{
                document.getElementById("TextoMatemáticas").style.color = 'black';
                document.getElementById("TextoLengua").style.color = 'black';
                document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                return alert("Efsi es la materia con la mayor nota. Nota Efsi: " + Efsi);
            }
        }
        else if (Matemáticas == Lengua){
            if(Matemáticas > Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'cornflowerblue';
                document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                document.getElementById("TextoEfsi").style.color = 'black';
                return alert("Matemáticas y Lengua son las materias con las mayores notas. Nota matemáticas: " + Matemáticas + ", Nota lengua: " + Lengua);  
            }
            else if(Matemáticas == Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'cornflowerblue';
                document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                return alert("Todas las materias tienen la misma nota. Nota matemáticas: " + Matemáticas + ", Nota lengua: " + Lengua + ", Nota Efsi: " + Efsi);  
            }
            else{
                document.getElementById("TextoMatemáticas").style.color = 'black';
                document.getElementById("TextoLengua").style.color = 'black';
                document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                return alert("Efsi es la materia con la mayor nota. Nota Efsi: " + Efsi);
            }
        }
        else{
            if(Matemáticas > Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'black';
                document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                document.getElementById("TextoEfsi").style.color = 'black';
                return alert("Lengua es la materia con la mayor nota. Nota Lengua: " + Lengua);
            }
            else if(Matemáticas == Efsi){
                document.getElementById("TextoMatemáticas").style.color = 'black';
                document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                document.getElementById("TextoEfsi").style.color = 'black';
                return alert("Lengua es la materia con la mayor nota. Nota Lengua: " + Lengua);
            }
            else{
                if(Lengua > Efsi){
                    document.getElementById("TextoMatemáticas").style.color = 'black';
                    document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                    document.getElementById("TextoEfsi").style.color = 'black';
                    return alert("Lengua es la materia con la mayor nota. Nota Lengua: " + Lengua);
                }
                else if(Lengua == Efsi){
                    document.getElementById("TextoMatemáticas").style.color = 'black';
                    document.getElementById("TextoLengua").style.color = 'cornflowerblue';
                    document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                    return alert("Lengua y Efsi son las materias con las mayores notas. Nota Lengua: " + Lengua + ", Nota Efsi: " + Efsi);
                }
                else{
                    document.getElementById("TextoMatemáticas").style.color = 'black';
                    document.getElementById("TextoLengua").style.color = 'black';
                    document.getElementById("TextoEfsi").style.color = 'cornflowerblue';
                    return alert("Efsi es la materia con la mayor nota. Nota Efsi: " + Efsi);
                }
            }
        }
    }
    else{
        return alert("Vuelva a ingresar las notas");
    }
}