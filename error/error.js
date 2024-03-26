// throw new Error('deu erro')

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('deu erro')
}

function init(){ 
    try {
        execute()
    } catch (e) {
        console.log(`Temos um problema ${e}`)
    }
}

init()
console.log(`Depois do erro`)