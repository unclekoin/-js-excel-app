import {$} from '../../core/DOM';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coordinates = $parent.getCoordinates();
  const type = $resizer.data.resize;
  let value;

  document.onmousemove = (e) => {
    if (type === 'column') {
      const delta = e.pageX - coordinates.right;
      value = coordinates.width + delta;
      $resizer.css({right: -delta + 'px'});
    } else {
      const delta = e.pageY - coordinates.bottom;
      value = coordinates.height + delta;
      $resizer.css({bottom: -delta + 'px'});
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (type === 'column') {
      $parent.css({width: value + 'px'});
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach((el) => el.style.width = value + 'px');
    } else {
      $parent.css({height: value + 'px'});
    }

    $resizer.css({
      right: 0,
      bottom: 0,
    });
  };
}
