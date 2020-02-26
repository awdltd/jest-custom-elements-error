export default class Foo extends HTMLElement {
  constructor() {
    super();

    this._clicker = 2;
  }

  connectedCallback() {
    this.textContent = 'My Foo Bar Element';
  }

  get testCallback() {
    return 'hello world!';
  }

  set clicker(num) {
    this._clicker = Number(num);
  }

  get clicker() {
    return this._clicker;
  }
}
