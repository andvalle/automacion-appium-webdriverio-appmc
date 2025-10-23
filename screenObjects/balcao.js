import { $ } from '@wdio/globals'

  
 class Balcao{
  
    getBotoes (){
        const getBtn = {
            btnMcoferta:'android=new UiSelector().text("McOfertas")',
            btnSelecMcOferta:`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("McOferta Média Big Mac")`,
            btnAcomp1:'android=new UiSelector().className("android.widget.Button").instance(1)',
            btnAcomp2:'android=new UiSelector().text("McFritas Média")',
            selecDrk:'android=new UiSelector().className("android.widget.Button").instance(2)',
            btnVejamais:'//android.widget.TextView[@text="Veja mais"]',
            clickCoca:'//android.widget.TextView[@content-desc="tvAdditionalName" and @text="Coca-Cola 500ml"]',
            btnAdd:'android=new UiSelector().text("Adicionar")',
            addToBag:'~btnGoToBag',
            btnProx:'//android.widget.TextView[@text="Próximo"]',
            btnPagar:'android=new UiSelector().text("Pagar")',
            btnRetirar:'//android.widget.TextView[@text="Opções de retirada"]',
            btnCont:'android=new UiSelector().text("Continuar")',
            btnSelecBalc:'android=new UiSelector().text("No balcão")',
            btnParaLevar:'android=new UiSelector().text("Para levar")',
            btnCloseButton:'~closeBackButton'    
        }
             
         return getBtn
    } 

    async CenarioBase(){ 
            
      const carrosselProd = await $(this.getBotoes().btnMcoferta)
      await carrosselProd.waitForDisplayed({ timeout : 2000})
      await carrosselProd.click();

      const selecMcoferta = await $(this.getBotoes().btnSelecMcOferta);
      await selecMcoferta.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await selecMcoferta.click()

      const selecAcomp = await $(this.getBotoes().btnAcomp1)
      await driver.pause(900)
      await selecAcomp.click()

      const clickAcomp = await $(this.getBotoes().btnAcomp2)
      await driver.pause(900)
      await clickAcomp.click()

      const selecDrk = await $(this.getBotoes().selecDrk)
      await selecDrk.click()

      const vejaMais = await $(this.getBotoes().btnVejamais)
      await vejaMais.click()

      const btnCoca1 = await $(this.getBotoes().clickCoca)
      await btnCoca1.click()

      const btnAdd = await $(this.getBotoes().btnAdd)
      await btnAdd.click()

      const addtoBag = await $ (this.getBotoes().addToBag)
      await addtoBag.click()

      const btnProx = await $(this.getBotoes().btnProx)
      await btnProx.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await btnProx.click()

      const btnPagar = await $(this.getBotoes().btnPagar)
      await btnPagar.waitForDisplayed ({ timeout : 30000 })
      await driver.pause(8000);
      await btnPagar.click()

      const btnRetirada = await $(this.getBotoes().btnRetirar)
      await btnRetirada.waitForDisplayed ({ timeout : 51000 })
      await driver.pause(900)
      await btnRetirada.click()

      const btnCont = await $(this.getBotoes().btnCont)
      await btnCont.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnCont.click()

    }
   async escolhaEntrega(){
    //aqui escolhe onde vai ser entregue ex: balcao, curb, ealm ou drive
      const btnBalcao = await $(this.getBotoes().btnSelecBalc)
      await btnBalcao.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnBalcao.click()

      const btnParaLevar = await $(this.getBotoes().btnParaLevar)
      await btnParaLevar.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnParaLevar.click()

      const closeButton = await $(this.getBotoes().btnCloseButton)
      await driver.pause (9000)
      await closeButton.click()

    }


} export default  Balcao

