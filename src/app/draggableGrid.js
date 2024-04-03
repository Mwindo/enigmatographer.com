// Modification of the code here https://stackoverflow.com/a/57426239
// TODO: TypeScript, make more flexible

let isSidebarDragging = false;

export const DRAG_RESIZE_EVENT_NAME = "drag-resize";

export function ResetColumnSizes() {
  // when page resizes return to default col sizes
  let page = document.getElementById("page-wrapper");
  page.style.gridTemplateColumns = "25% 6px 75%";
}

function SetCursor(cursor) {
  let page = document.getElementById("page-wrapper");
  page.style.cursor = cursor;
}

export function StartLeftDrag() {
  // console.log("mouse down");
  isSidebarDragging = true;

  SetCursor("ew-resize");
}

export function EndDrag() {
  // console.log("mouse up");
  isSidebarDragging = false;

  SetCursor("auto");
}

export function OnDrag(event) {
  if (isSidebarDragging) {
    // console.log("Dragging");
    //console.log(event);

    let page = document.getElementById("page-wrapper");
    let leftcol = document.getElementById("left-panel");

    let leftColWidth = isSidebarDragging ? event.clientX : leftcol.clientWidth;
    leftColWidth = Math.max(leftColWidth, 50);
    leftColWidth = Math.min(leftColWidth, page.clientWidth - 200);
    let rightWidth = page.clientWidth - leftColWidth;

    let dragbarWidth = 6;

    let cols = [
      leftColWidth,
      dragbarWidth,
      page.clientWidth - (2 * dragbarWidth) - leftColWidth + 6,
      dragbarWidth,
      rightWidth
    ];

    let newColDefn = cols.map(c => c.toString() + "px").join(" ");

    // console.log(newColDefn);
    page.style.gridTemplateColumns = newColDefn;
    window.dispatchEvent(new Event(DRAG_RESIZE_EVENT_NAME));
    event.preventDefault()
  }
}