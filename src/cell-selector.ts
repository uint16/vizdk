import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

enum CellTemplate {
  BAR_CHART,
  PIE_CHART
}

@customElement("cell-selector")
export class CellSelector extends LitElement {

  @property({type: Boolean})
  isEmptyCell = false;

  @state()
  selectedTemplate = null;
  
  private _onClick(template: CellTemplate) {
    switch(template){
      case CellTemplate.BAR_CHART:
        this.selectedTemplate = null;
        break;
      case CellTemplate.PIE_CHART:
        this.selectedTemplate = null;
        break;
      default:
        break;
    }
  }

  render () {
    return this.isEmptyCell ? 
    html`
    <div>
      <button @click=${this._onClick(CellTemplate.BAR_CHART)} part="button">
      Bar Chart
      </button>
      <button @click=${this._onClick(CellTemplate.PIE_CHART)} part="button">
      Pie Chart
      </button>
    </div>`: 
    html`${this.selectedTemplate}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cell-selector': CellSelector;
  }
}