import Component from '@core/component.js';

export default class CookieInfo extends Component {
  template() {
    return `
      <div class="cookie-info__block">
        <p class="cookie-info__title">현재 쿠키 정보</p>
        <p class="cookie-info__remark">쿠키를 보여주기 위하여 httpOnly, secure 옵션을 설정하지 않았습니다</p>
        <div class="cookie-info__content-div">
          <p class="cookie-info__content"></p>
        </div>
      </div>
    `;
  }
}
