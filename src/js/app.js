import Component from '@core/component.js';
import { $ } from '@common/util.js';
import headerTitle from '@components/header-title.js';
import mainComponent from '@components/main.js';

export default class App extends Component {
  template() {
    return `
      <header></header>
      <main></main>
      <footer></footer>
    `;
  }

  mounted() {
    const $header = $('header');
    const $main = $('main');

    new headerTitle($header);
    new mainComponent($main);
  }
}
