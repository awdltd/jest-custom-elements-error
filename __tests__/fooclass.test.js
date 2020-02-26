import Foo from './fooclass';

// Define Foo
window.customElements.define('foo-box', Foo);

// Create instance of Foo
let myfoo = new Foo();

// Append to body (to run connectedCallback)
document.body.appendChild(myfoo);

/**
 *  Tests
 * 
 */
test('Create foo-box element', () => {
  expect(myfoo.testCallback).toBe('hello world!');
});

test('Check foo-box is a node', () => {
  expect(myfoo.nodeType).toBe(1);
});

test('Check clicker clicks and adds', () => {
  expect(myfoo.clicker).toBe(2);

  // Change clicker
  myfoo.clicker = 5;

  // Re-test
  expect(myfoo.clicker).toBe(5);

  // Change clicker
  myfoo.clicker += 3;

  // Re-test
  expect(myfoo.clicker).toBe(8);
});

test('Test element textContent', () => {
  expect(myfoo.textContent).toBe('My Foo Bar Element');
});

test('Test tag name', () => {
  expect(myfoo.tagName).toBe('FOO-BOX');
});

test('Test outerHTML matches', () => {
  expect(myfoo.outerHTML).toBe('<foo-box>My Foo Bar Element</foo-box>');
});
