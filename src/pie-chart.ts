import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pie-chart")
export class PieChart extends LitElement {
  
  render () {
    return html`<span>This is a pie chart</span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pie-chart': PieChart;
  }
}