import { $, driver } from '@wdio/globals'
import Variables from './variables'
import Common from './common'


const variables = new Variables()
const common = new Common()

class Vendas {
    async mop116(){ 
            
      const carrosselProd = await $(variables.getProdutos().btnMcoferta)
      await carrosselProd.waitForDisplayed({ timeout : 2000})
      await carrosselProd.click();

      const selecMcoferta = await $(variables.getProdutos().btnSelecMcOferta);
      await selecMcoferta.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await selecMcoferta.click()

      const selecAcomp = await $(variables.getProdutos().btnAcomp1)
      await driver.pause(900)
      await selecAcomp.click()

      const clickAcomp = await $(variables.getProdutos().btnAcomp2)
      await driver.pause(900)
      await clickAcomp.click()

      const selecDrk = await $(variables.getProdutos().selecDrk)
      await selecDrk.click()

      const vejaMais = await $(variables.getProdutos().btnVejamais)
      await vejaMais.click()

      const btnCoca1 = await $(variables.getProdutos().clickCoca)
      await btnCoca1.click()
     
  }

   async mop112(produto) {
    await driver.pause(4000); // garante que a tela carregou
    await common.suipeCarrossel(produto)
    await driver.pause(4000)
    await common.suipeVertical()
    await driver.pause (2000)
    const bigmac = $(variables.getProdutos().carrosselBig)
    await bigmac.waitForDisplayed ({timeout : 8000})
    await bigmac.click()
    await driver.pause(2000)
    await common.addProdutoBag()

  }
} export default Vendas