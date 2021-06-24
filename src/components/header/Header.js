import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
    <input class="input" type="text" placeholder="New table">
    <div class="button-block">
      <div class="button">
        <i class="material-icons">delete_outline</i>
      </div>
      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
     </div>
    `;
  }
}
