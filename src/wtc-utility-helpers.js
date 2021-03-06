/**
 * Generate a random float number max and min.
 *
 * ```javascript
 * floatRandomBetween(-10, 20); // 12.513
 * ```
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */
export function floatRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Generate a random integer number max and min.
 *
 * ```javascript
 * randomBetween(-10, 20); // 12
 * ```
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */
export function randomBetween(min, max) {
  return Math.round(floatRandomBetween(min, max));
}

/**
 * Linearly interpolate between two values by a unit interval
 *
 * ```javascript
 * lerp(100, 200, .5); // 150
 * ```
 *
 * @param {number} x The lower value
 * @param {number} y The upper value
 * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.
 * @return {number} The interpolated value
 */
export function lerp(x, y, amount) {
  return (1 - amount) * x + amount * y;
}

/**
 * Clamps a value between an upper and lower bound.
 *
 * ```javascript
 * clamp(0, 1, 2); // 1
 * ```
 *
 * @param {number} min The lower bound
 * @param {number} max The upper bound
 * @param {number} value The value to clamp.
 * @return {number} A number in the range [min, max]
 */
export function clampfunction(min, max, value) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Shuffle an array.
 *
 * @param {Array} array Arrray to be shuffled.
 * @param {Boolean=} modifyOriginal A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)
 * @return {array} Shuffled array.
 */
export function shuffleArray(array, modifyOriginal = true) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // destructuring this to essentially clone the array
  // this will not clone array values, which shouldn't
  // matter. But if it does, in your case, then now
  // you know why.
  if (modifyOriginal === false) {
    [...array] = array;
  }

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/**
 * Fire a custom event.
 *
 * ```javascript
 * fireCustomEvent(name, data);
 * ```
 *
 * @param {string} name Name of the event.
 * @param {object} data Object to be passed to the event.
 * @param {Boolean=} bubbles Indicates whether the event bubbles (default True)
 * @param {Boolean=} cancelable Indicates whether the event is cancellable  default True)
 */
export function fireCustomEvent(name, data, bubbles = true, cancelable = true) {
  window.dispatchEvent(
    new CustomEvent(name, {
      bubbles,
      cancelable,
      detail: data,
    })
  );
}

/**
 * Get the position of the element relative to document or optionally to the nearest offset parent.
 *
 * ```javascript
 * getElementPosition(element); // returns something like { top: 100, left: 500 }
 * ```
 *
 * @param {DOMNode} element Element.
 * @param {Boolean=} toWorld indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)
 * @returns {Object} the element coordinates.
 */
export function getElementPosition(element, toWorld = true) {
  const offset = {
    top: 0,
    left: 0,
  };

  if (toWorld === false) {
    offset.top = element.offsetTop;
    offset.left = element.offsetLeft;
  } else {
    const positionToViewport = element.getBoundingClientRect();

    const scrollTop = window.pageYOffset;
    const scrollLeft = window.pageXOffset;

    const clientTop = document.body.clientTop || 0;
    const clientLeft = document.body.clientLeft || 0;

    offset.top += Math.round(positionToViewport.top + scrollTop - clientTop);
    offset.left += Math.round(
      positionToViewport.left + scrollLeft - clientLeft
    );
  }

  return offset;
}

/**
 * Determines whether the element is a child 0 ancestor of the other.
 * If the toWorld flag is true (default), this will test recursively
 * up the node hierarchy.
 *
 * This method can be used to determine whether a node is detached
 * by something like:
 * ```
 * attached = isChildOf(element, document.body);
 * ```
 * @param {DomNode} element The element to test with
 * @param {DomNode} parentElement The parent element to test against
 * @param {Boolean=} toWorld Whether to test this up the DOM hierarchy
 * @return {Boolean} true is the parentElement is parent (or ancestor) to Element
 */
export function isChildOf(element, parentElement, toWorld = true) {
  let isChildOf = false;

  if (element.parentNode === parentElement) isChildOf = true;

  if (toWorld === true && isChildOf === false && element.parentNode)
    isChildOf = isChildOf(element.parentNode, parentElement);

  return isChildOf;
}

/**
 * Get siblings from element
 *
 * ```javascript
 * getSiblings(e);
 * ```
 *
 * @param {DOMElement} e Element
 * @return Returns a list with the element's siblings.
 */
export function getSiblings(element) {
  return [...element.parentNode.children].filter((child) => {
    return child !== element;
  });
}

/**
 * Retrieves all of the ancestors of an element, optionally to
 * the document body (true by default). The list that is
 * returned is the list of ancestors in order from the oldest
 * to youngest.
 *
 * @param {DOMElement} e The element to retrieve the ancestors for
 * @param {boolean=} toBody whether to only test to the body (default True)
 * @param {array=} ancestors the list of already existing elements to pass. This is nromally only used internally
 */
export function getAncestors(e, toBody = true, ancestors) {
  if (!ancestors) ancestors = [];

  if (toBody === true && e.parentNode === document.body) return ancestors;

  if (e.parentNode) {
    ancestors.splice(0, 0, [e.parentNode]);
    getAncestors(e.parentNode, toBody, ancestors);
  }

  return ancestors;
}

/**
 * Returns the CSS selector for a provided element
 *
 * @param  {DOMElement}   el         The DOM node to find a selector for
 * @return {String}                  The CSS selector the describes exactly where to find the element
 */
export function getSelectorForElement(element) {
  let particles = [];

  while (element.parentNode) {
    if (element.id) {
      particles.unshift("#" + element.id);
      break;
    } else {
      if (element == element.ownerDocument.documentElement)
        particles.unshift(element.tagName);
      else {
        for (
          let c = 1, e = element;
          e.previousElementSibling;
          e = e.previousElementSibling, c++
        );

        particles.unshift(element.tagName + ":nth-child(" + c + ")");
      }

      element = element.parentNode;
    }
  }

  return particles.join(" > ");
}

/**
 * Fix widows replaces the last space in a sentence with a non-breaking space
 * This function is a little dangerous at the moment so we should revisit it at some point in the future
 */
export function fixWidows(els) {
  _els = els;

  if (els instanceof Node) _els = [els];

  if (_els && _els.length) {
    for (let i = 0; i < _els.length; i++) {
      let el = _els[i];

      if (el instanceof Node)
        el.innerHTML = el.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;");
    }
  }
}

/**
 * Returns the form data as an array of name/value pairs.
 *
 * @param  {DOMElement}   form       The <form> DOM node
 * @return {Array}                   Serialized data
 */
export function serializeArray(form) {
  let s = [];

  if (typeof form == "object" && form.nodeName == "FORM") {
    for (let i = 0; i < form.elements.length; i++) {
      let field = form.elements[i];

      if (
        field.name &&
        !field.disabled &&
        field.type != "file" &&
        field.type != "reset" &&
        field.type != "submit" &&
        field.type != "button"
      ) {
        if (field.type == "select-multiple") {
          for (let j = 0; j < form.elements[i].options.length; j++) {
            if (field.options[j].selected)
              s[s.length] = { name: field.name, value: field.options[j].value };
          }
        } else if (
          (field.type != "checkbox" && field.type != "radio") ||
          field.checked
        ) {
          s[s.length] = { name: field.name, value: field.value };
        }
      }
    }
  }

  return s;
}

/**
 * Asynchronous image loader. Returns a promise for an image
 * allowing it to be used directly via `.then()` or as a part
 * of an async workload via `await`.
 *
 * The then returns the provided image for use in the promise
 * fulfullment.
 *
 * Usage:
 * ```js
 * try {
 *  const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: "anonymous" })
 *  // do something cool with img
 * } catch(err) {
 *  // Something happened and img didn't load
 * }
 * ```
 * Without async/await:
 * ```js
 * const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: "anonymous" }).then((img) => {
 *  // do something cool with img
 *  return img
 * }).catch((err) => {
 *  // Something happened and img didn't load
 * }) {
 * ```
 *
 * @param  {Object}  props     Image properties
 * @param  {String}  props.src The image SRC
 * @return {Promise}           A promise
 */
export function asyncImageLoadfunction({ src, ...props }) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = reject;

    for (let [key, val] of Object.entries(props)) {
      img[key] = val;
    }

    img.src = src;
  });
}
