import {$} from '../../core/DOM';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components.forEach((Component) => {
      const $element = $.create('div', Component.className);
      const component = new Component($element);
      $element.html(component.toHTML());
      $root.append($element);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
