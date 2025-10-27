import { $ } from '@wdio/globals'
import Variables from './variables'

const variables = new Variables()

class SwipeCarrossel {
async getCarrossel(vezes = 1) {

   const { width, height } = await driver.getWindowRect();
 
      // Posições aproximadas para o carrossel
    const startX = Math.floor(width * 0.8);
    const endX = Math.floor(width * 0.2);
    const centerY = Math.floor(height * 0.6);
  

    for (let i = 0; i < vezes; i++) {
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: startX, y: centerY },
          { type: 'pointerDown' },
          { type: 'pause', duration: 200 },
          { type: 'pointerMove', duration: 500, x: endX, y: centerY },
          { type: 'pointerUp' }
        ]
      }])
      await driver.pause(800); // pausa para animação
    }

    // Limpa ações após o swipe
   // await driver.releaseActions();
  }

  
   async selecionarProduto() {
    await driver.pause(1000)
    const produto = await $('android=new UiScrollable(new UiSelector().description("viewCategoriesList"))' +
    '.setAsHorizontalList()' + '.scrollIntoView(new UiSelector().text("Sanduíches"))')
    await produto.waitForDisplayed({ timeout: 5000 });
    await driver.pause(1000)
    await produto.click();
  }

} export default SwipeCarrossel