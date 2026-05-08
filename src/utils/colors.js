const colors = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  black: "#111827",
  white: "#ffffff",
  gray: "#6b7280",
  yellow: "#eab308",
  purple: "#8b5cf6",
  pink: "#ec4899",
};

export const colorUtilities = {
  bg: (el, value) => {
    el.style.backgroundColor = colors[value] || value;
  },

  text: (el, value) => {

    if (
      value === "center" ||
      value === "left" ||
      value === "right" ||
      value === "justify"
    ) {
      el.style.textAlign = value;
      return;
    }

    el.style.color = colors[value] || value;
  },
};