//O método construtor é o método que é carregado automaticamente quando a classe é instanciada
//statusCode = 400 é atribuindo um valor padrão ao parametro caso não seja passado

class AppError {

  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  } 

}

module.exports = AppError;