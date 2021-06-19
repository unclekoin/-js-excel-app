import {DOMListener} from './DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }
  // Returns a component template
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }
}
