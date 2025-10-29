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
    async entregaEalm(){

      
    //aqui escolhe onde vai ser entregue ex: balcao, curb, ealm ou drive
      const btnEalm = await $(variables.getOpcaoRetirar().btnSelecEalm)
      await btnEalm.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnEalm.click()

      const btnParaLevar = await $(variables.getOpcaoRetirar().btnParaLevar)
      await btnParaLevar.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnParaLevar.click()

      const closeButton = await $(variables.getOpcaoRetirar().btnCloseButton)
      await driver.pause (9000)
      await closeButton.click()
              
    }
    async entregaCurb(){
    //aqui escolhe onde vai ser entregue ex: balcao, curb, ealm ou drive
      const btnCurb = await $(variables.getOpcaoRetirar().btnSelecCurb)
      await btnCurb.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnCurb.click()

      const btnParaLevar = await $(variables.getOpcaoRetirar().btnParaLevar)
      await btnParaLevar.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnParaLevar.click()

      const closeButton = await $(variables.getOpcaoRetirar().btnCloseButton)
      await driver.pause (9000)
      await closeButton.click()
              
    }
    async entregaDT(){
    //aqui escolhe onde vai ser entregue ex: balcao, curb, ealm ou drive
      const btnDT = await $(variables.getOpcaoRetirar().btnSelecDT)
      await btnDT.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnDT.click()

      const btnParaLevar = await $(variables.getOpcaoRetirar().btnParaLevar)
      await btnParaLevar.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnParaLevar.click()

      const closeButton = await $(variables.getOpcaoRetirar().btnCloseButton)
      await driver.pause (9000)
      await closeButton.click()
              
    }

    async concluirVenda(){
      const btnAdd = await $(variables.getBtnMcOferta().btnAdd)
      await btnAdd.click()

      const addtoBag = await $ (variables.getBtnMcOferta().addToBag)
      await addtoBag.click()

      const btnProx = await $(variables.getBtnMcOferta().btnProx)
      await btnProx.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await btnProx.click()

      const btnPagar = await $(variables.getBtnMcOferta().btnPagar)
      await btnPagar.waitForDisplayed ({ timeout : 30000 })
      await driver.pause(8000);
      await btnPagar.click()

      const btnRetirada = await $(variables.getBtnMcOferta().btnRetirar)
      await btnRetirada.waitForDisplayed ({ timeout : 51000 })
      await driver.pause(900)
      await btnRetirada.click()

      const btnCont = await $(variables.getBtnMcOferta().btnCont)
      await btnCont.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnCont.click()
    }
    async suipeCarrossel(produto){

        const carrossel = variables.getALC().swipCarrossel
        const carrosselSeletor = await $(carrossel)
        await carrosselSeletor.waitForDisplayed({ timeout: 5000 })
        await driver.pause(4000)

        const  selecProduto = $(`android=new UiSelector().text("${produto}")`)
        await selecProduto.waitForDisplayed ({ timeout : 5000})
        await driver.pause (3000)
        await selecProduto.click()
        await driver.pause (1000)
      }
  


    async escolhaMeuM(){  
        
    }
   


} export default Common