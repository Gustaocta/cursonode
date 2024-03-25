require('./subDirectory/sub')
console.log('-------------------------------------')
console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório em que foi invocado: `, process.cwd())
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Login do Sistema Operacional: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`nome do Server: `, process.env.COMPUTERNAME)

switch(process.argv[2]){
    case '-a':
        console.log('Execute rotina principal');
        break;
    case '-i':
        console.log('Execute Instalação');
        break;
    case '-q':
        console.log('Encerando Aplicação');
        process.exit();   
        break;
    default :
    console.log('Parâmetro Inválido');
}
console.log(`Ambiente do Servidor: `, process.platform)
// console.log(`Recurso: `, )
// console.log(`Recurso: `, )