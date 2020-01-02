import Foo from './fooclass';

window.customElements.define('foo-box', Foo);

let myfoo = new Foo();

test('Create foo-box element', () => {
  expect(myfoo.testCallback).toBe('hello world!'); // Works
});

test('Test tag name', () => {
  expect(myfoo.tagName).toBe('FOO-BOX'); // Does not work
});

test('Test outerHTML matches', () => {
  expect(myfoo.outerHTML).toBe('<foo-box>My Foo Bar Element</foo-box>'); // Does not work
});
