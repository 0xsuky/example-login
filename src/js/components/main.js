import Component from '@core/component.js';
import CookieInfo from '@components/cookie-info.js';
import LogBoard from '@components/log-board.js';
import LoginForm from '@components/login-form.js';
import { $ } from '@common/util.js';

export default class MainComponent extends Component {
  template() {
    return `
      <section>
        <article class="article__block cookie-info"></article>
        <article class="article__block log-board"></article>
        <article class="article__block login-form"></article>
      </section>
    `;
  }

  mounted() {
    const $cookieInfo = $('.cookie-info');
    const $logBoard = $('.log-board');
    const $loginForm = $('.login-form');

    new CookieInfo($cookieInfo);
    new LogBoard($logBoard);
    new LoginForm($loginForm);
  }
}
