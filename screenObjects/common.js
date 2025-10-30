import { $, driver } from '@wdio/globals'
import Variables from './variables.js'

const variables = new Variables()

class Common { 

    async addProdutoBag(){
      const btnAdd = await $(variables.getProdutos().btnAdd)
      await btnAdd.click()

      const addtoBag = await $ (variables.getProdutos().addToBag)
      await addtoBag.click()
      await driver.pause(3000)
      
    }

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
       const btnProx = await $(variables.getProdutos().btnProx)
      await btnProx.waitForDisplayed({ timeout : 2000})
      await driver.pause(900)
      await btnProx.click()

      const btnPagar = await $(variables.getProdutos().btnPagar)
      await btnPagar.waitForDisplayed ({ timeout : 30000 })
      await driver.pause(8000);
      await btnPagar.click() 

      const btnRetirada = await $(variables.getProdutos().btnRetirar)
      await btnRetirada.waitForDisplayed ({ timeout : 51000 })
      await driver.pause(900)
      await btnRetirada.click()

      const btnCont = await $(variables.getProdutos().btnCont)
      await btnCont.waitForDisplayed ({ timeout : 50000 })
      await driver.pause(900)
      await btnCont.click()
    }
    //suipe horizontal carrossel, passar o produto a ser selecionado
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
      async suipeVertical (){
          await driver.performActions([{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
          { type: 'pointerMove', duration: 0, x: 500, y: 1800 },
          { type: 'pointerDown', button: 0 },
          { type: 'pointerMove', duration: 800, x: 500, y: 400 },
          { type: 'pointerUp', button: 0 }
        ]
      }])
    }

      //aplica desconto BIGMAC10R 
      async descontoProduto (){
      /* const btnAdd = await $(variables.getProdutos().btnAdd)
      await btnAdd.click()

      const addtoBag = await $ (variables.getProdutos().addToBag)
      await addtoBag.click()
      await driver.pause(3000) */

      const descprom = await $(variables.getProdutos().btnDesceProm)
      await descprom.waitForDisplayed ({timeout:3000})
      await driver.pause(3000)
      await descprom.click()
     
      const retirarDesc = await $(variables.getProdutos().retiraDesc)
      await retirarDesc.waitForDisplayed ({timeout:5000})
      await driver.pause (2000)
      await retirarDesc.click()
      await driver.pause(3000)
      const cupomText = await $(variables.getProdutos().campoCupomText)
      await cupomText.waitForDisplayed ({timeout:3000})
      await cupomText.click()
      await driver.pause(3000)
  
      await driver.keys('BIGMAC10R')
      await driver.pause(1000)
      
      //toca em OK para confirmar o cupom 
      await driver.action('pointer',  {parameters:{ 
      pointerType: 'touch' } 
    })
       .move({ x: 1100, y: 1600 })
       .down()
       .up()
       .perform();
  
    const aplicarCupom = await $(variables.getProdutos().btnAplicarCupom) 
    await aplicarCupom.waitForDisplayed ({ timeout : 2000})
    await driver.pause(1000)
    await aplicarCupom.click()
    
  }
    async escolhaMeuM(){  
        
    }
   


} export default Common