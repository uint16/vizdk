import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("viz-dashboard")
export class VizDashboard extends LitElement {

  @property({type: String})
  queryEngineEndpoint = '';

  @property({type: Function})
  identity = () => {};

  @state()
  _addingNewRow = false;
  

  render() {
    return html`
      <div classname="viz-dash">
        <h3>Dashboard Header</h3>
        <div>
        <button>Add Row</button>
        </div>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'viz-dashboard': VizDashboard;
  }
}