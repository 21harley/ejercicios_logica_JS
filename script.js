
/*ejercicio 1*/
function concadenarLetra(array){
    let cadena=""; 
    let numero=1;  
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(array.length-1>i){
                cadena+=" "+array[i]+",";
            }else{
                cadena+=" "+array[i];
            }
        }
    }
    return cadena;
}
//console.log(concadenarLetra([2,3,4,"dsd","152*"]));
/*final ejercicio*/

/*ejercicio 2*/
function validarArrayNumeros(array){
    let rep=true;
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(!Number.isInteger(array[i])){
                return false;
            }
        }
    }
    return rep;
}
//console.log(validarArrayNumeros([2,3,4]));
//console.log(validarArrayNumeros([2,3,4,"A"]));
/*final ejercicio*/

/*ejercicio 3*/
function validarArrayNumerosM2(array){
    let rep=true;
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(Number.isInteger(array[i])){
                if(2>=array[i]){
                     return false;
                }
            }else{
                return false;
            }
        }
    }
    return rep;
}
//console.log(validarArrayNumerosM2([2,3,4]));
//console.log(validarArrayNumerosM2([5,3,4]));
/*final ejercicio*/

/*ejercicio 4*/
function buscarArray(array,elemento){
    let pos=-1;
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(elemento==array[i]){
                return i;
            }
        }
    }
    return pos;
}
//console.log(buscarArray([2,3,4],1));
//console.log(buscarArray([5,3,4],3));
//console.log(buscarArray([3,4,"A"],"A"));
/*final ejercicio*/

/**
  for(varible;true;contador){

  }
  for(;;){

  }

  array.forEach()
   [0]=>[1]=>[2]
 */

/*ejercicio 5*/
function dividirArray2(array){
    let newArray=[];
    if(Array.isArray(array)){
        array.forEach(element => {
           newArray.push(element/2);
        });
    }
    return newArray;
}
//console.log(dividirArray2([2,3,4]));
/*final ejercicio*/

/*ejercicio 6*/
function agregarElemento(array,elemento){
    let newArray=[];
    if(Array.isArray(array)){
        newArray=array;
        newArray.push(elemento);
    }
    return newArray;
}
//console.log([1,2,3]);
//console.log(agregarElemento([1,2,3],4));
/*final ejercicio*/

/*ejercicio 7*/
function finalArray(array){
    let rep=null;
    if(Array.isArray(array)){
       rep=array[array.length-1];
    }
    return rep;
}
//console.log(finalArray([1,2,3]));
/*final ejercicio*/

/*ejercicio 8*/
function reverseArray(array){
    let newArray=[];
    if(Array.isArray(array)){
        for(let i=array.length-1;i>=0;i--){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//console.log(reverseArray([1,2,3,4]));
/*final ejercicio*/

/*ejercicio 9*/
function cortarArrayIn(array,n){
    let newArray=[];
    if(Array.isArray(array)){
      if(n+1<=array.length){
        for(let i=0;i<n+1;i++){
            newArray.push(array[i]);
        }
      }  
    }
    return newArray;
}
//console.log(cortarArrayIn([1,2,3,4,5,6],2));
/*final ejercicio*/

/*ejercicio 10*/
function cortarArrayFn(array,inicio){
    let newArray=[];
    if(Array.isArray(array)){
      if(inicio+1<=array.length){
        for(let i=inicio+1;i<array.length;i++){
            newArray.push(array[i]);
        }
      }else{
          return -1;
      }  
    }
    return newArray;
}
//console.log(cortarArrayFn([1,2,3,4,5,6],2));
/*final ejercicio*/

/*Segundo trabajo de ejercicios*/

/*Ejercicio 1*/
let array=new Array(10,12,43,20,11,95,40,8,71,66,44,92);
function mostrarArray(array){
    let aux="";
    if(Array.isArray(array)){
        for(let i=0,cont=0;i<array.length;i++){
            if(4>cont){
              aux+=" "+array[i]+" ";cont++;
            }
            if(cont==4){
              console.log(aux);   
              cont=0;
              aux="";
            }
        }
    }
}
mostrarArray(array);
/*final ejercicio*/

/*Ejercicio 2*/
function media(array){
    let cal=-1;
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(Number.isInteger(array[i])){
                cal+=array[i];
            }else{
                return -1;
            }
        }
        cal=cal/array.length;
    }
    return cal;
}
console.log(media(array));
/*final ejercicio*/

/*Ejercicio 3*/
function sumar(array){
    if(Array.isArray(array)){
        for(let i=0;i<array.length;i++){
            if(Number.isInteger(array[i])){
                array[i]+=1;
            }else{
                console.error("Dato en posicion:"+i+" no es un valor sumable"); return;
  
            }
        }
        mostrarArray(array);
    }
}
sumar(array);
/*final ejercicio*/

let array1=new Array(10,12,43,20,11,95,40,8,71,66,44,92);
/*Ejercicio 4*/
function sumaPrimeraFila(array){
    if(Array.isArray(array)){
       for(let i=0,cont=0;i<=4;i++){
          if(i<4){
            cont+=array[i];
          }
          if(i==4) console.log(cont);   
       }
    } 
}
sumaPrimeraFila(array1);
/*final ejercicio*/

/*Ejercicio 5*/
function sumaPrimeraColumna(array){
    if(Array.isArray(array)){
       for(let i=0,cont=0,aux=0;i<=3;i++,aux+=4){
          if(i<3){
            cont+=array[aux];
          }
          if(i==3) console.log(cont);   
       }
    } 
}
sumaPrimeraColumna(array1);
/*final ejercicio*/

/*Ejercicio 6*/
let arrayMult=new Array(new Array(10,12,43,20),new Array(11,95,40,8),new Array(71,66,44,92));
function mayorNumeroMult(array){
    let mayor=-999999;
    if(Array.isArray(array)){
       for(let i=0;i<array.length;i++){
            for(let j=0;j<array[i].length;j++){
                if(Number.isInteger(array[i][j])){
                    if(array[i][j]>mayor){
                        mayor=array[i][j];
                    }
                }else{
                    return -1
                }
           }
       }
    }
    return mayor;
}
console.log(mayorNumeroMult(arrayMult));
/*final ejercicio*/

/*---------------Ejercicios de Obj */

/*ejercicio 1*/
const Estudiante={  nombre : "Luis Vargas",  edad : 21, estadoCivil: "soltero" };

function listaPropiedades(obj){
    return Object.values(obj);
}
console.log(listaPropiedades(Estudiante));
/*final ejercicio */


/*ejercicio 2*/
class Libro{
    constructor(autor,titulo){
       this.autor=autor;
       this.titulo=titulo;
    }
    mostrarDatosClass(){
        console.log("Autor:"+this.autor+"   Titulo:"+this.titulo);
    }
    get getAutor(){
        return this.autor;
    }
    get getTitulo(){
        return this.titulo;
    }
    set setAutor(autor){
        this.autor=autor;
    }
    set setTitulo(titulo){
        this.titulo=titulo;
    }
}
const libros=new Array(new Libro('Bill Gates','The Road Ahead'),
                       new Libro('Steve Jobs','Walter Isaacson'),
                       new Libro('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games'));

function mostrarDatos(array){
    if(Array.isArray(array)){
        array.forEach(elemt=>{
            //elemt.mostrarDatosClass();
            console.log("Autor:"+elemt.getAutor+"   Titulo:"+elemt.getTitulo);
        });
    }
}
mostrarDatos(libros);                       
/*final ejercicio */

/*ejercicio 3*/
class Pelicula{
    constructor(nombre,director,estreno,tipo){
        this.nombre=nombre;
        this.director=director;
        this.estreno=estreno;
        switch(tipo){
            case "D":this.tipo="drama";break;
            case "C":this.tipo="comedia";break;
            case "A":this.tipo="accion";break;
            case "I":this.tipo="indie";break;
            default:this.tipo="accion";break;
        }
        this.pretado=false;
    }
    mostrarDatosPelicula(){
        console.log("Nombre:"+this.nombre+" Director:"+this.director+" Estreno:"+this.estreno+" Tipo:"+this.tipo+" Prestado:"+this.pretado);
    }
    set setEstreno(estreno){
        this.estreno=estreno;
    }
    set setPrestado(prestado){
        this.pretado=prestado;
    }

}
/*final ejercicio */
