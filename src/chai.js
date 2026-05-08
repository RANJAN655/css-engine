import { spacingUtilities } from "./utils/spacing.js";
import { colorUtilities } from "./utils/colors.js";
import { typographyUtilities } from "./utils/typography.js";
import { borderUtilities } from "./utils/borders.js";
import { layoutUtilities } from "./utils/layout.js";

const utilities = {
  ...spacingUtilities,
  ...colorUtilities,
  ...typographyUtilities,
  ...borderUtilities,
  ...layoutUtilities,
};

const processedElements = new WeakSet();

function parseClass(className) {
  const segments = className.split("-");

  segments.shift();

  let utility = segments[0];
  let value = segments.slice(1).join("-");

  if (segments.length >= 2) {
    const combined = `${segments[0]}-${segments[1]}`;

    if (utilities[combined]) {
      utility = combined;
      value = segments.slice(2).join("-");
    }
  }

  return {
    utility,
    value,
  };
}

function applyUtility(element, className) {
  if (!className.startsWith("chai-")) return;

  const { utility, value } = parseClass(className);

  const handler = utilities[utility];

  if (!handler) {
    console.warn(`Unknown utility: ${className}`);
    return;
  }

  try {
    handler(element, value);
  } catch (error) {
    console.error(`Error applying ${className}`, error);
  }
}

function processElement(element) {
  if (processedElements.has(element)) return;

  const classes = [...element.classList];

  classes.forEach((className) => {
    applyUtility(element, className);
  });

  processedElements.add(element);
}

function scanDOM(root = document) {
  const elements = root.querySelectorAll("*");

  elements.forEach(processElement);
}

function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {

        if (!(node instanceof HTMLElement)) return;

        processElement(node);

        scanDOM(node);
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

window.ChaiTailwind = {
  scanDOM,
  utilities,
};

window.addEventListener("DOMContentLoaded", () => {
  scanDOM();
  observeDOM();

  console.log("☕ ChaiTailwind Initialized");
});