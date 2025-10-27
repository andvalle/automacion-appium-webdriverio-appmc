import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Variables from '../../screenObjects/variables.js'
import Common from '../../screenObjects/common.js'
import Vendas from '../../screenObjects/vendas.js'

const variables = new Variables()
const common = new Common()
const venda = new Vendas()
describe('Vendas Retira balcao', () => {
    it('cenário 003 -  Mc Oferta Media Com Desconto Funcionario', async () => {
     
     await venda.ealm003()
          

    })
})

describe.skip('Vendas Retira balcao', () => {
    it('cenário 026 -  Mc Oferta Media Com Desconto Funcionario', async () => {
      await venda.CenarioBase()

      //escolha do local de entrega, mop, curb, ealm ou drive.
      await common.entregaMop()

    })
})




