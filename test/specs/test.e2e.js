import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Variables from '../../screenObjects/variables.js'
import Common from '../../screenObjects/common.js'
import Vendas from '../../screenObjects/vendas.js'

const variables = new Variables()
const common = new Common()
const venda = new Vendas()

describe('Vendas Retira balcao', () => {
    it('cenário 112 - Pontuação (Compra) - Desconto por valor a nível de produto', async () => {
     
     await venda.mop112('Sanduíches')
     await common.descontoProduto()
     await common.concluirVenda()
     await common.entregaMop()
  
    })
})

describe('Vendas Retira balcao - MOP', () => {
    it('cenário MOP 116 -  Mc Oferta Media Com Desconto Funcionario', async () => {
      await venda.mop116()
      await common.concluirVenda()
      //escolha do local de entrega, mop, curb, ealm ou drive.
      await common.entregaMop()

    })
})




