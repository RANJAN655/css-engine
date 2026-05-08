export const borderUtilities = {
  border: (el, value) => {
    el.style.border = `${value || 1}px solid #d1d5db`;
  },

  rounded: (el, value) => {
    el.style.borderRadius = `${value}px`;
  },

  shadow: (el) => {
    el.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
  },

  "border-none": (el) => {
    el.style.border = "none";
  },
};