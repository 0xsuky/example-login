import Component from '@core/component.js';
import { $ } from '@common/util.js';
import { SERVER_URL } from '@common/constant.js';

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
    this.addEvent('click', '.join-submit', async (e) => {
      e.preventDefault();
      await this.#joinSubmit();
    });
  }

  async #cookieSessionSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    try {
      const res = await fetch(SERVER_URL + '/api/session-cookie', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id.value, pw: pw.value }),
      });
      const { msg } = await res.json();
      if (msg === 'login success') {
        $('.cookie-info__content').textContent = document.cookie;
        alert('로그인에 성공했습니다.');
      } else {
        alert('로그인에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
    }
    id.value = '';
    pw.value = '';
  }

  async #jwtSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    id.value = '';
    pw.value = '';
  }

  async #joinSubmit() {
    const id = $('.login-form__id');
    const pw = $('.login-form__pw');
    try {
      const res = await fetch(SERVER_URL + '/api/user', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id.value, pw: pw.value }),
      });
      const { msg } = await res.json();
      if (msg === 'join success') {
        alert('회원가입에 성공했습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
    }
    id.value = '';
    pw.value = '';
  }
}
