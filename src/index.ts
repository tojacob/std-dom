class FirstComponent extends HTMLElement {
  static tagName = 'app-first-component';

  static get observedAttributes(): string[] {
    console.log('observedAttributes');
    return ['disabled', 'open'];
  }

  static define(cb?: () => void): void {
    if (cb) {
      customElements.whenDefined(FirstComponent.tagName).then(cb);
    }

    window.customElements.define(FirstComponent.tagName, FirstComponent);
  }

  private readonly root: ShadowRoot;

  constructor() {
    super();
    console.log('¡Hola consola desde un componente nativo!');

    this.root = this.attachShadow({ mode: 'open' });
  }

  public connectedCallback(): void {
    console.log('connectedCallback');
    this.render();
  }

  public disconnectedCallback(): void {
    console.log('disconnectedCallback');
  }

  public attributeChangedCallback(
    attrName: any, oldVal: any, newVal: any
  ): void {
    console.log('attributeChangedCallback');
  }

  public adoptedCallback(): void {
    console.log('adoptedCallback');
  }

  private render(): void {
    this.root.innerHTML =
      "<h1>¡Hola DOM desde un companente nativo!</h1><slot></slot>";
  }
}

FirstComponent.define();