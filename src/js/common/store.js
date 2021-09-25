import { observable } from '@core/observer.js';

export const store = {
  state: observable({
    log: [],
  }),

  setState(newState) {
    for (const [key, value] of Object.entries(newState)) {
      this.state[key] = this.state[key] ? value : this.state[key];
    }
  },
};
