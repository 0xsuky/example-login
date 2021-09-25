import Component from '@core/component.js';
import { $ } from '@common/util.js';
import { store } from '@common/store';
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
    this.addEvent('click', '.join-submit', async (e) => {
      e.preventDefault();
      this.#joinSubmit();
    });
  }

  #cookieSessionSubmit() {
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
      const isoTime = new Date().toISOString();
      if (msg === 'login success') {
        $('.cookie-info__content').textContent = document.cookie;
        store.setState({
          log: [
            `[*] ${id.value} 로그인에 성공했습니다. (${isoTime})`,
            ...store.state.log,
          ],
        });
      } else {
        store.setState({
          log: [
            `[!] ${id.value} 로그인에 실패했습니다. (${isoTime})`,
            ...store.state.log,
          ],
        });
      }
    } catch (err) {
      console.error(err);
    }
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
      const isoTime = new Date().toISOString();
      if (msg === 'join success') {
        store.setState({
          log: [
            `[*] ${id.value} 회원가입에 성공했습니다. (${isoTime})`,
            ...store.state.log,
          ],
        });
      } else {
        store.setState({
          log: [
            `[!] ${id.value} 회원가입에 실패했습니다. (${isoTime})`,
            ...store.state.log,
          ],
        });
      }
    } catch (err) {
      console.error(err);
    }
    id.value = '';
    pw.value = '';
  }
}
