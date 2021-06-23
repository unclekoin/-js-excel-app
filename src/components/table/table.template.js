const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function toColumn(char) {
  return `
    <div class="column">${char}</div>
  `;
}

function createRow(content, rowNumber = '') {
  return `
    <div class="row">
      <div class="row-info">${rowNumber}</div>
      <div class="row-data">${content}</div>
     </div>
  `;
}

function toChar(_, index ) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowCount = 50) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  const cells = new Array(colsCount)
      .fill('')
      .map((_, index) => createCell())
      .join('');

  rows.push(createRow(cols));

  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(cells, i + 1));
  }

  return rows.join('');
}
