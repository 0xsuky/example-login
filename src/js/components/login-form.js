import Component from '@core/component.js';
import { $ } from '@common/util.js';

export default class LoginForm extends Component {
  template() {
    return `
    <form class="login-form__form">
      <div class="login-form__wrap">
        <input
          type="text"
          class="login-form__input login-form__id"
          size="10"
          maxlength="20"
          placeholder="ID"
        />
        <input
          type="password"
          class="login-form__input login-form__pw"
          size="10"
          maxlength="20"
          placeholder="PW"
        />
      </div>
      <div class="login-form__wrap">
        <div class="login-form__submit">
          <input type="submit" class="cookie-session-submit" value="쿠키/세션 방식 로그인" />
        </div>
        <div class="login-form__submit">
          <input type="submit" class="jwt-submit" value="JWT 방식 로그인" />
        </div>
        <div class="login-form__submit">
          <input type="submit" class="join-submit" value="회원가입" />
        </div>
      </div>
    </form>
    `;
  }

  setEvent() {
    this.addEvent('click', '.cookie-session-submit', (e) => {
      e.preventDefault();
      this.#cookieSessionSubmit();
    });
    this.addEvent('click', '.jwt-submit', (e) => {
      e.preventDefault();
      this.#jwtSubmit();
    });
    this.addEvent('click', '.join-submit', (e) => {
      e.preventDefault();
      this.#joinSubmit();
    });
  }

  #cookieSessionSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    console.log(id, pw);
    id.value = '';
    pw.value = '';
  }

  #jwtSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    console.log(id, pw);
    id.value = '';
    pw.value = '';
  }

  #joinSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    console.log(id, pw);
    id.value = '';
    pw.value = '';
  }
}
