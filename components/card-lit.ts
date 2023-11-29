import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-card")
export class MyCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
