export default class Foo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.textContent = 'My Foo Bar Element';
  }

  get testCallback() {
    return 'hello world!';
  }
}
