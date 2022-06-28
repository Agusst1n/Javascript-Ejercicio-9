//*! Crea un nuevo proyecto de Node

//*! - Instala la dependencia Winston

//* - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

//* - Registra el error en un archivo a través de un try...catch
const logger = require('./logger/index')




const functionError = () =>{
    return logger.error('Hay un error')
}
functionError()

// logger.info('soy info')
// logger.warn('soy warn')
// logger.debug('soy debug')
// logger.error('soy error')

