import Component from '@core/component.js';
import { store } from '@common/store.js';
import { observable } from '../core/observer';

export default class LogBoard extends Component {
  template() {
    return `
      <div class="log-board__block">
      ${store.state.log.reduce(
        (acc, cur) =>
          (acc += `
            <div class="log-board__log">
              <p>${cur}</p>
            </div>
          `),
        ''
      )}
      </div>
    `;
  }
}
