export const layoutUtilities = {
  flex: (el) => {
    el.style.display = "flex";
  },

  grid: (el) => {
    el.style.display = "grid";
  },

  block: (el) => {
    el.style.display = "block";
  },

  hidden: (el) => {
    el.style.display = "none";
  },

  "grid-cols": (el, value) => {
    el.style.gridTemplateColumns = `repeat(${value}, minmax(0, 1fr))`;
  },

  justify: (el, value) => {
    el.style.justifyContent = value;
  },

  items: (el, value) => {
    el.style.alignItems = value;
  },

  flexcol: (el) => {
    el.style.flexDirection = "column";
  },

  wrap: (el) => {
    el.style.flexWrap = "wrap";
  },

  w: (el, value) => {
    el.style.width = !isNaN(value)
      ? `${value}px`
      : value;
  },

  h: (el, value) => {
    el.style.height = !isNaN(value)
      ? `${value}px`
      : value;
  },

  minw: (el, value) => {
    el.style.minWidth = `${value}px`;
  },

  maxw: (el, value) => {
    el.style.maxWidth = `${value}px`;
  },

  pointer: (el) => {
    el.style.cursor = "pointer";
  },

  relative: (el) => {
    el.style.position = "relative";
  },

  absolute: (el) => {
    el.style.position = "absolute";
  },

  fixed: (el) => {
    el.style.position = "fixed";
  },
};