import { html, LitElement, property } from 'lit-element'

export default class TsElement extends LitElement {
  @property({ type: String })
  public heading = 'Hello world!'

  public render() {
    return html`
      <h1>${this.heading}</h1>
      <div><slot></slot></div>
    `
  }
}

customElements.define('ts-element', TsElement)
