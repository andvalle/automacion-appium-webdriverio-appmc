import { $ } from '@wdio/globals'
import Variables from './variables.js'

const variables = new Variables()

class Common { 
    async entregaMop(){
    //aqui escolhe onde vai ser entregue ex: balcao, curb, ealm ou drive
      const btnBalcao = await $(variables.getOpcaoRetirar().btnSelecBalc)
      await btnBalcao.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnBalcao.click()

      const btnParaLevar = await $(variables.getOpcaoRetirar().btnParaLevar)
      await btnParaLevar.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnParaLevar.click()

      const closeButton = await $(variables.getOpcaoRetirar().btnCloseButton)
      await driver.pause (9000)
      await closeButton.click()
              
    }


    async escolhaMeuM(){
        
        
    }
   


} export default Common