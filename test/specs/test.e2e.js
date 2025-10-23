import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import Balcao from '../../screenObjects/balcao.js'

const balcao = new Balcao()
const botoes = balcao.getBotoes()



describe('Vendas Retira Balcao', () => {
    it('001 Cenário -  Mc Oferta Media Com Desconto Funcionario', async () => {
      await balcao.CenarioBase()
      
      //escolha do local de entrega, mop, curb, ealm ou drive.
      await balcao.escolhaEntrega()

    })
})

