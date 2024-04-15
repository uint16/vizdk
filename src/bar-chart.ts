import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("bar-chart")
export class BarChart extends LitElement {
  
  render () {
    return html`<span>This is a pie chart</span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bar-chart': BarChart;
  }
}