export const typographyUtilities = {
  fs: (el, value) => {
    el.style.fontSize = `${value}px`;
  },

  fw: (el, value) => {
    el.style.fontWeight = value;
  },

  lh: (el, value) => {
    el.style.lineHeight = value;
  },

  tracking: (el, value) => {
    el.style.letterSpacing = `${value}px`;
  },

  uppercase: (el) => {
    el.style.textTransform = "uppercase";
  },

  lowercase: (el) => {
    el.style.textTransform = "lowercase";
  },

  capitalize: (el) => {
    el.style.textTransform = "capitalize";
  },
};