import { $ } from '@wdio/globals'
import Variables from './variables'
import Common from './common'


const variables = new Variables()
const common = new Common()

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

     
    }

  async ealm003(produto) {
    await driver.pause(4000); // garante que a tela carregou
    await common.suipeCarrossel(produto)

  }
} export default Vendas