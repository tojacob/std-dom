import HomePage from "./app/pages/home/home.page";

class AppRoot extends HTMLElement {
  static tagName: string = 'app-root';

  constructor() {
    super();
  }

  public connectedCallback() {
    this.bootstap();
  }

  private bootstap(): void {
    this.innerHTML =
      `
      <h1>Probando implementaciones nativas</h1>
      <app-home-page>
        <p>Hola mundo desde un slot nativo!</p>
      </app-home-page>
      `;
  }
}

window.customElements.define(AppRoot.tagName, AppRoot);
window.customElements.define(HomePage.tagName, HomePage);
