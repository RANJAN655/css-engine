const size = (value) => {
  if (!value) return "0px";

  if (!isNaN(value)) {
    return `${value}px`;
  }

  return value;
};

export const spacingUtilities = {
  p: (el, value) => {
    el.style.padding = size(value);
  },

  px: (el, value) => {
    el.style.paddingLeft = size(value);
    el.style.paddingRight = size(value);
  },

  py: (el, value) => {
    el.style.paddingTop = size(value);
    el.style.paddingBottom = size(value);
  },

  pt: (el, value) => {
    el.style.paddingTop = size(value);
  },

  pb: (el, value) => {
    el.style.paddingBottom = size(value);
  },

  pl: (el, value) => {
    el.style.paddingLeft = size(value);
  },

  pr: (el, value) => {
    el.style.paddingRight = size(value);
  },

  m: (el, value) => {
    el.style.margin = size(value);
  },

  mx: (el, value) => {
    el.style.marginLeft = size(value);
    el.style.marginRight = size(value);
  },

  my: (el, value) => {
    el.style.marginTop = size(value);
    el.style.marginBottom = size(value);
  },

  mt: (el, value) => {
    el.style.marginTop = size(value);
  },

  mb: (el, value) => {
    el.style.marginBottom = size(value);
  },

  ml: (el, value) => {
    el.style.marginLeft = size(value);
  },

  mr: (el, value) => {
    el.style.marginRight = size(value);
  },

  gap: (el, value) => {
    el.style.gap = size(value);
  },
};