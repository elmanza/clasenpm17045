// let mi_array = [2,3,4,5,6,7,8];
// mi_array.map(x => x*x).forEach(x=> console.log(x));
let moment = require("moment");
let Fechas = require("./fechas");
let birthday = moment("25/01/1994", "DD/MM/YYYY");
let fecha = new Fechas(birthday);

let hasta = 10000;
let obj = {};
// for (let index = 0; index < hasta; index++) {
//     let num_random = Math.ceil(Math.random() * 20);
//     obj[num_random] = obj[num_random] ? obj[num_random] + 1 : 1;    
// }

// console.log(obj);

let productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
];

let res = productos.reduce((prev, obj, i)=>{
    if(i==0){
        return {
            nombre: obj.nombre,
            total: obj.precio,
            minor: obj,
            major: obj
        };
    }else{
        let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
        let major = prev.major.precio > obj.precio ? prev.major : obj;
        return {
            nombre: prev.nombre +', '+obj.nombre,
            total: prev.total+obj.precio,
            minor,
            major
        };
    }
    
}, {});

res.promedio = res.total / productos.length;
res.promedio = (res.promedio).toFixed(2);
res.total = (res.total).toFixed(2);

console.log("Mi getToday ", fecha.getToday());
console.log("Mi getMyBirth ", fecha.getMyBirth());
console.log("Mi diffYears ", fecha.diffYears());
console.log("Mi diffDays ", fecha.diffDays());
console.log("Mi getDifference months ", fecha.getDifference('months'));




