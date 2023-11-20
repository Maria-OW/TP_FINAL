const valorT = 4000;
const descJubilados = 80;
const descMenores = 50;
const descEstudiantes = 20;

let cantidad = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");

function montoTotal(){
    let valorTT = (cantidad.value) * valorT;
    if (categoria.value == 0){
        valorTT = valorTT;
    }
    if (categoria.value == 1){
        valorTT = valorTT-((descJubilados/100)*valorTT);
    }
    if (categoria.value == 2){
        valorTT = valorTT-((descMenores/100)*valorTT);
    }
    if(categoria.value == 3){
        valorTT = valorTT-((descEstudiantes/100)*valorTT);
    }
    totalPago.innerHTML = valorTT;
}

btnResume.addEventListener("click", montoTotal);

function resetearForm(){
    cantidad.innerHTML = 0;
   // categoria.innerHTML = 0;
    totalPago.innerHTML = 0;
}

btnBorrar.addEventListener("click", resetearForm);