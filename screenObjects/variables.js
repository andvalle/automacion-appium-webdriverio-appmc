import { $ } from '@wdio/globals'

  
 class Variables{
  
    getBtnMcOferta (){
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
          }
          return getBtn
    } 
         getOpcaoRetirar(){
          const opcaoRetirada = {
            btnSelecBalc:'android=new UiSelector().text("No balcão")',
            btnParaLevar:'android=new UiSelector().text("Para levar")',
            btnCloseButton:'~closeBackButton' 
            }
          return opcaoRetirada
        }
} export default  Variables

