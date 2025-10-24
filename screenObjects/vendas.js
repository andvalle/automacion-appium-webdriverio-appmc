import { $ } from '@wdio/globals'
import Variables from './variables'

const variables = new Variables()

class Vendas {
    async CenarioBase(){ 
            
      const carrosselProd = await $(variables.getBtnMcOferta().btnMcoferta)
      await carrosselProd.waitForDisplayed({ timeout : 2000})
      await carrosselProd.click();

      const selecMcoferta = await $(variables.getBtnMcOferta().btnSelecMcOferta);
      await selecMcoferta.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await selecMcoferta.click()

      const selecAcomp = await $(variables.getBtnMcOferta().btnAcomp1)
      await driver.pause(900)
      await selecAcomp.click()

      const clickAcomp = await $(variables.getBtnMcOferta().btnAcomp2)
      await driver.pause(900)
      await clickAcomp.click()

      const selecDrk = await $(variables.getBtnMcOferta().selecDrk)
      await selecDrk.click()

      const vejaMais = await $(variables.getBtnMcOferta().btnVejamais)
      await vejaMais.click()

      const btnCoca1 = await $(variables.getBtnMcOferta().clickCoca)
      await btnCoca1.click()

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
   
} export default Vendas