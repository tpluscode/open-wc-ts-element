import { html, fixture, expect } from '@open-wc/testing'

import '../src/ts-element.ts'
import TsElement from '../src/ts-element'

describe('<ts-element>', () => {
  it('has a default property heading', async () => {
    const el = await fixture<TsElement>('<ts-element></ts-element>')

    expect(el.heading).to.equal('Hello world!')
  })

  it('allows property heading to be overwritten', async () => {
    const el = await fixture<TsElement>(html`
      <ts-element heading="different heading"></ts-element>
    `)

    expect(el.heading).to.equal('different heading')
  })
})
