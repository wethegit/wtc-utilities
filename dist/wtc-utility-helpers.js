"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeArray = exports.fixWidows = exports.getSelectorForElement = exports.matches = exports.getAncestors = exports.getSiblings = exports.isChildOf = exports.getElementPosition = exports.fireCustomEvent = exports.shuffleArray = exports.lerp = exports.randomBetween = exports.floatRandomBetween = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Generate a random float number max and min.
 *
 * ```javascript
 * utilities.floatRandomBetween(-10, 20); // 12.513
 * ```
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */
var floatRandomBetween = function floatRandomBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
};
/**
 * Generate a random integer number max and min.
 *
 * ```javascript
 * utilities.randomBetween(-10, 20); // 12
 * ```
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */


exports.floatRandomBetween = floatRandomBetween;

var randomBetween = function randomBetween(min, max) {
  return Math.floor(utilities.floatRandomBetween(min, max));
};
/**
 * Linearly interpolate between two values by a unit interval
 *
 * ```javascript
 * utilities.lerp(100, 200, .5); // 150
 * ```
 *
 * @param {number} x The lower value
 * @param {number} y The upper value
 * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.
 * @return {number} The interpolated value
 */


exports.randomBetween = randomBetween;

var lerp = function lerp(x, y, amount) {
  return (1 - amount) * x + amount * y;
};
/**
 * Shuffle an array.
 *
 * @param {Array} array Arrray to be shuffled.
 * @param {Boolean=} modifyOriginal A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)
 * @return {array} Shuffled array.
 */


exports.lerp = lerp;

var shuffleArray = function shuffleArray(array) {
  var modifyOriginal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // destructuring this to essentially clone the array
  // this will not clone array values, which shouldn't
  // matter. But if it does, in your case, then now
  // you know why.

  if (modifyOriginal === false) {
    var _array = array;

    var _array2 = _toArray(_array);

    array = _array2.slice(0);
  } // While there remain elements to shuffle...


  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
/**
 * Fire a custom event.
 *
 * ```javascript
 * utilities.fireCustomEvent(name, data);
 * ```
 *
 * @param {string} name Name of the event.
 * @param {object} data Object to be passed to the event.
 * @param {Boolean=} bubbles Indicates whether the event bubbles (default True)
 * @param {Boolean=} cancelable Indicates whether the event is cancellable  default True)
 */


exports.shuffleArray = shuffleArray;

var fireCustomEvent = function fireCustomEvent(name, data, bubbles, cancelable) {
  var ev;
  var params = {
    bubbles: bubbles || true,
    cancelable: cancelable || true,
    detail: data || null
  };
  ev = new CustomEvent(name, params);
  window.dispatchEvent(ev);
};
/**
 * Get the position of the element relative to document or optionally to the nearest offset parent.
 *
 * ```javascript
 * utilities.getElementPosition(element); // returns something like { top: 100, left: 500 }
 * ```
 *
 * @param {DOMNode} element Element.
 * @param {Boolean=} toWorld indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)
 * @returns {Object} the element coordinates.
 */


exports.fireCustomEvent = fireCustomEvent;

var getElementPosition = function getElementPosition(element) {
  var toWorld = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var offset = {
    top: 0,
    left: 0
  };

  if (toWorld === false) {
    offset.top = element.offsetTop;
    offset.left = element.offsetLeft;
  } else {
    var positionToViewport = element.getBoundingClientRect();
    var scrollTop = window.pageYOffset;
    var scrollLeft = window.pageXOffset;
    var clientTop = document.body.clientTop || 0;
    var clientLeft = document.body.clientLeft || 0;
    offset.top += Math.round(positionToViewport.top + scrollTop - clientTop);
    offset.left += Math.round(positionToViewport.left + scrollLeft - clientLeft);
  }

  return offset;
};
/**
 * Determines whether the element is a child 0 ancestor of the other.
 * If the toWorld flag is true (default), this will test recursively
 * up the node hierarchy.
 *
 * This method can be used to determine whether a node is detached
 * by something like:
 * ```
 * attached = utilities.isChildOf(element, document.body);
 * ```
 * @param {DomNode} element The element to test with
 * @param {DomNode} parentElement The parent element to test against
 * @param {Boolean=} toWorld Whether to test this up the DOM hierarchy
 * @return {Boolean} true is the parentElement is parent (or ancestor) to Element
 */


exports.getElementPosition = getElementPosition;

var isChildOf = function isChildOf(element, parentElement) {
  var toWorld = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isChildOf = false;

  if (element.parentNode === parentElement) {
    isChildOf = true;
  }

  if (toWorld === true && isChildOf === false && element.parentNode) {
    isChildOf = utilities.isChildOf(element.parentNode, parentElement);
  }

  return isChildOf;
};
/**
 * Get siblings from element
 *
 * ```javascript
 * utilities.getSiblings(e);
 * ```
 *
 * @param {DOMElement} e Element
 * @return Returns a list with the element's siblings.
 */


exports.isChildOf = isChildOf;

var getSiblings = function getSiblings(element) {
  return _toConsumableArray(element.parentNode.children).filter(function (child) {
    return child !== element;
  });
};
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


exports.getSiblings = getSiblings;

var getAncestors = function getAncestors(e) {
  var toBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var ancestors = arguments.length > 2 ? arguments[2] : undefined;
  if (!ancestors) ancestors = [];

  if (toBody === true && e.parentNode === document.body) {
    return ancestors;
  }

  if (e.parentNode) {
    ancestors.splice(0, 0, [e.parentNode]);
    utilities.getAncestors(e.parentNode, toBody, ancestors);
  }

  return ancestors;
};
/**
 * Function to normalize the selctor 'matchesSelector' across browsers
 */


exports.getAncestors = getAncestors;

var matches = function matches() {
  var doc, matches;
  doc = document.documentElement;
  matches = doc.matchesSelector || doc.webkitMatchesSelector || doc.mozMatchesSelector || doc.oMatchesSelector || doc.msMatchesSelector;
  return matches;
};
/**
 * Returns the CSS selector for a provided element
 *
 * @param  {DOMElement}   el         The DOM node to find a selector for
 * @return {String}                  The CSS selector the describes exactly where to find the element
 */


exports.matches = matches;

var getSelectorForElement = function getSelectorForElement(element) {
  var particles = [];

  while (element.parentNode) {
    if (element.id) {
      particles.unshift("#" + element.id);
      break;
    } else {
      if (element == element.ownerDocument.documentElement) particles.unshift(element.tagName);else {
        for (var c = 1, e = element; e.previousElementSibling; e = e.previousElementSibling, c++) {
          ;
        }

        particles.unshift(element.tagName + ":nth-child(" + c + ")");
      }
      element = element.parentNode;
    }
  }

  return particles.join(" > ");
}; // Fix widows replaces the last space in a sentence with a non-breaking space
// This function is a little dangerous at the moment so we should revisit it at some point in the future


exports.getSelectorForElement = getSelectorForElement;

var fixWidows = function fixWidows(els) {
  _els = els;

  if (els instanceof Node) {
    _els = [els];
  }

  if (_els && _els.length) {
    for (var i = 0; i < _els.length; i++) {
      var el = _els[i];

      if (el instanceof Node) {
        el.innerHTML = el.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;");
      }
    }
  }
};
/**
 * Returns the form data as an array of name/value pairs.
 *
 * @param  {DOMElement}   form       The <form> DOM node
 * @return {Array}                   Serialized data
 */


exports.fixWidows = fixWidows;

var serializeArray = function serializeArray(form) {
  var s = [];

  if (_typeof(form) == "object" && form.nodeName == "FORM") {
    for (var i = 0; i < form.elements.length; i++) {
      var field = form.elements[i];

      if (field.name && !field.disabled && field.type != "file" && field.type != "reset" && field.type != "submit" && field.type != "button") {
        if (field.type == "select-multiple") {
          for (var j = 0; j < form.elements[i].options.length; j++) {
            if (field.options[j].selected) s[s.length] = {
              name: field.name,
              value: field.options[j].value
            };
          }
        } else if (field.type != "checkbox" && field.type != "radio" || field.checked) {
          s[s.length] = {
            name: field.name,
            value: field.value
          };
        }
      }
    }
  }

  return s;
};

exports.serializeArray = serializeArray;