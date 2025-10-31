import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Variables from '../../screenObjects/variables.js'
import Common from '../../screenObjects/common.js'
import Vendas from '../../screenObjects/vendas.js'

const variables = new Variables()
const common = new Common()
const venda = new Vendas()

describe.skip('Vendas Retira balcao', () => {
    it('cenário 112 - Pontuação (Compra) - Desconto por valor a nível de produto', async () => {
     
     await venda.mop112('Sanduíches')
     await common.descontoProduto()
     await common.concluirVenda()
     await common.entregaMop()
  
    })
})

describe('Vendas Retira balcao - MOP', () => {
    it.skip('cenário MOP 116 -  Mc Oferta Media Com Desconto Funcionario', async () => {
      await driver.pause(5000)
      await venda.mop116()
      await common.concluirVenda()
      //escolha do local de entrega, mop, curb, ealm ou drive.
      await common.entregaMop()

    })
    it.only('cenário MOP 113 -  Big Mac com GRILL e Desconto a Nivel de Produto', async () => {
      await driver.pause(5000)
      //passa a categoria dos lanches, e a quantidade de grill que você quer.
      await venda.mop113('Sanduíches',3)
})
})




