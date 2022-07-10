// Create a class for the element
class sideBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const section = document.createElement('section');
    const input = document.createElement('input');
    const datalist = document.createElement('datalist');
    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
  connectedCallback() {
    console.log('Custom square element added to page.');
    updateStyle(this);
  }
}
customElements.define('custom-sideBar', sideBar);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}

const add = document.querySelector('.add');
let square;

add.onclick = function() {
  // Create a custom sideBar element
  sideBar = document.createElement('custom-square');
  sideBar.setAttribute('l', '100');
  sideBar.setAttribute('c', 'red');
  document.body.appendChild(sideBar);
};