import homeTemplate from "./home.template.html";

export default class HomePage extends HTMLElement {
  static tagName: string = 'app-home-page';
  private readonly root: ShadowRoot;

  constructor() {
    super();
    console.log('¡Hola consola desde un componente nativo!');

    this.root = this.attachShadow({ mode: 'open' });
  }

  public connectedCallback(): void {
    console.log('connectedCallback');
    this.root.innerHTML = homeTemplate;
  }

  public disconnectedCallback(): void {
    console.log('disconnectedCallback');
  }
}