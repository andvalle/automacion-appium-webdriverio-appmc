import { $ } from '@wdio/globals'

  
 class Variables{
  
    getProdutos (){
        const getBtn = {
            carrosselCategorias: 'android=new UiSelector().description("viewCategoriesList")',
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
            carrosselBig:`android=new UiSelector().text("Big Mac")`,
            btnDesceProm:'android=new UiSelector().text("Descontos e promoções")',
            campoCupom:'~textSimpleEditTextLabel',
            retiraDesc: '~employeeDiscount',
            campoCupomText:'~textSimpleEditTextValue',
            btnAplicarCupom:'android=new UiSelector().text("Aplicar")'
          

          }
          return getBtn
    } 
    getALC(){
     const getBtnAlc = {
            swipCarrossel:'android=new UiScrollable(new UiSelector().description("viewCategoriesList")).setAsHorizontalList().scrollForward().scrollForward()',
            btnSanduiches:'android=new UiSelector().text("Sanduíches")'
     }
       return getBtnAlc

    }  
    getOpcaoRetirar(){
          const retiraMop = {
            btnSelecDT:'android=new UiSelector().text("Por Drive-Thru")',
            btnSelecBalc:'android=new UiSelector().text("No balcão")',
            btnSelecCurb:'android=new UiSelector().text("No estacionamento")',
            btnSelecEalm:'android=new UiSelector().text("Na Mesa")',
            btnParaLevar:'android=new UiSelector().text("Para levar")',
            btnCloseButton:'~closeBackButton'
            } 
            return retiraMop
        } 
        getBicMac(){
          const getbigmac = {
              bigmacAlc: `//android.widget.TextView[@content-desc="tvCategoryName" and @text="Sanduíches"]`
          }
          return getbigmac 
        } 
} export default  Variables

