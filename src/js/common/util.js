const $ = (selector, target = document) => target.querySelector(selector);
const $all = (selector, target = document) => target.querySelectorAll(selector);

export { $, $all };
