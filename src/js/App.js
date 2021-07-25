import Component from './Component.js';
import PriceForm from './PriceForm.js';

class App extends Component {
  constructor($target) {
    super($target);
  }

  mounted() {
    const $sections = document.querySelectorAll('section');
    new PriceForm($sections[0]);
  }

  template() {
    return `
      <div class="d-flex justify-center mt-5">
        <div class="w-100">
          <h1 class="text-center">🎱 행운의 로또</h1>
          <section class="mt-5"></section>
          <section class="mt-9"></section>
          <section class="mt-9"></section>
        </div>
      </div>
    `;
  }
}

export default App;
