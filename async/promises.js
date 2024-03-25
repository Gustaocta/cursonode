function soma(x){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    })  
}

soma(230).then((resultado)=>{
    console.log(`Resolvido, Resultado: ${resultado}`);
})

// function resolveSoma(err, resultado){
//     if(err) throw err;
//     console.log(resultado);
// }

// function escreve(){
//     console.log('Executando a função escreve: ', soma(270));
// }

// escreve();