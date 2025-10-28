import { $ } from '@wdio/globals'
import Variables from './variables'
import SwipeCarrossel from './swipeCarrosselParaFrente'


const variables = new Variables()
const swipcarrossel = new SwipeCarrossel()

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

    /*  async ealm003() {
    const produto = await $(variables.getALC().btnSelecAlc);
    await produto.waitForDisplayed({ timeout: 10000 });
    await produto.click();
  }*/

      // Swipe horizontal na tela, posição aproximada do carrossel
  
 

  /**
   * Fluxo completo: swipe + seleção do produto
   */
  async ealm003(carrossel, sanduiches) {
    await driver.pause(4000); // garante que a tela carregou
    await swipcarrossel.getCarrossel(); // rola 1 vez (ajuste se precisar)
    await swipcarrossel.selecionarProduto(carrossel, sanduiches);


    /*const bigmac = await $(variables.getBicMac().bigmacAlc)
    await bigmac.waitForDisplayed({ timeout : 5000})
    await driver.pause(2000)
    await bigmac.click()*/
       
  }
} export default Vendas