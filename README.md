## Constants

<dl>
<dt><a href="#floatRandomBetween">floatRandomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random float number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>floatRandomBetween(-10, 20); // 12.513
</code></pre></dd>
<dt><a href="#randomBetween">randomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random integer number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>randomBetween(-10, 20); // 12
</code></pre></dd>
<dt><a href="#lerp">lerp</a> ⇒ <code>number</code></dt>
<dd><p>Linearly interpolate between two values by a unit interval</p>
<pre class="prettyprint source lang-javascript"><code>lerp(100, 200, .5); // 150
</code></pre></dd>
<dt><a href="#shuffleArray">shuffleArray</a> ⇒ <code>array</code></dt>
<dd><p>Shuffle an array.</p></dd>
<dt><a href="#fireCustomEvent">fireCustomEvent</a></dt>
<dd><p>Fire a custom event.</p>
<pre class="prettyprint source lang-javascript"><code>fireCustomEvent(name, data);
</code></pre></dd>
<dt><a href="#getElementPosition">getElementPosition</a> ⇒ <code>Object</code></dt>
<dd><p>Get the position of the element relative to document or optionally to the nearest offset parent.</p>
<pre class="prettyprint source lang-javascript"><code>getElementPosition(element); // returns something like { top: 100, left: 500 }
</code></pre></dd>
<dt><a href="#isChildOf">isChildOf</a> ⇒ <code>Boolean</code></dt>
<dd><p>Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.</p>
<p>This method can be used to determine whether a node is detached
by something like:</p>
<pre class="prettyprint source"><code>attached = isChildOf(element, document.body);
</code></pre></dd>
<dt><a href="#getSiblings">getSiblings</a> ⇒</dt>
<dd><p>Get siblings from element</p>
<pre class="prettyprint source lang-javascript"><code>getSiblings(e);
</code></pre></dd>
<dt><a href="#getAncestors">getAncestors</a></dt>
<dd><p>Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.</p></dd>
<dt><a href="#matches">matches</a></dt>
<dd><p>Function to normalize the selctor 'matchesSelector' across browsers</p></dd>
<dt><a href="#getSelectorForElement">getSelectorForElement</a> ⇒ <code>String</code></dt>
<dd><p>Returns the CSS selector for a provided element</p></dd>
<dt><a href="#fixWidows">fixWidows</a></dt>
<dd><p>Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future</p></dd>
<dt><a href="#serializeArray">serializeArray</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the form data as an array of name/value pairs.</p></dd>
<dt><a href="#asyncImageLoad">asyncImageLoad</a> ⇒ <code>Promise</code></dt>
<dd><p>Asynchronous image loader. Returns a promise for an image
allowing it to be used directly via <code>.then()</code> or as a part
of an async workload via <code>await</code>.</p>
<p>The then returns the provided image for use in the promise
fulfullment.</p>
<p>Usage:</p>
<pre class="prettyprint source"><code>try {
 const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; })
 // do something cool with img
} catch(err) {
 // Something happened and img didn't load
}
</code></pre>
<p>Without async/await:</p>
<pre class="prettyprint source"><code>const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; }).then((img) => {
 // do something cool with img
 return img
}).catch((err) => {
 // Something happened and img didn't load
}) {
</code></pre></dd>
<dt><a href="#floatRandomBetween">floatRandomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random float number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>floatRandomBetween(-10, 20); // 12.513
</code></pre></dd>
<dt><a href="#randomBetween">randomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random integer number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>randomBetween(-10, 20); // 12
</code></pre></dd>
<dt><a href="#lerp">lerp</a> ⇒ <code>number</code></dt>
<dd><p>Linearly interpolate between two values by a unit interval</p>
<pre class="prettyprint source lang-javascript"><code>lerp(100, 200, .5); // 150
</code></pre></dd>
<dt><a href="#shuffleArray">shuffleArray</a> ⇒ <code>array</code></dt>
<dd><p>Shuffle an array.</p></dd>
<dt><a href="#fireCustomEvent">fireCustomEvent</a></dt>
<dd><p>Fire a custom event.</p>
<pre class="prettyprint source lang-javascript"><code>fireCustomEvent(name, data);
</code></pre></dd>
<dt><a href="#getElementPosition">getElementPosition</a> ⇒ <code>Object</code></dt>
<dd><p>Get the position of the element relative to document or optionally to the nearest offset parent.</p>
<pre class="prettyprint source lang-javascript"><code>getElementPosition(element); // returns something like { top: 100, left: 500 }
</code></pre></dd>
<dt><a href="#isChildOf">isChildOf</a> ⇒ <code>Boolean</code></dt>
<dd><p>Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.</p>
<p>This method can be used to determine whether a node is detached
by something like:</p>
<pre class="prettyprint source"><code>attached = isChildOf(element, document.body);
</code></pre></dd>
<dt><a href="#getSiblings">getSiblings</a> ⇒</dt>
<dd><p>Get siblings from element</p>
<pre class="prettyprint source lang-javascript"><code>getSiblings(e);
</code></pre></dd>
<dt><a href="#getAncestors">getAncestors</a></dt>
<dd><p>Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.</p></dd>
<dt><a href="#matches">matches</a></dt>
<dd><p>Function to normalize the selctor 'matchesSelector' across browsers</p></dd>
<dt><a href="#getSelectorForElement">getSelectorForElement</a> ⇒ <code>String</code></dt>
<dd><p>Returns the CSS selector for a provided element</p></dd>
<dt><a href="#fixWidows">fixWidows</a></dt>
<dd><p>Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future</p></dd>
<dt><a href="#serializeArray">serializeArray</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the form data as an array of name/value pairs.</p></dd>
<dt><a href="#asyncImageLoad">asyncImageLoad</a> ⇒ <code>Promise</code></dt>
<dd><p>Asynchronous image loader. Returns a promise for an image
allowing it to be used directly via <code>.then()</code> or as a part
of an async workload via <code>await</code>.</p>
<p>The then returns the provided image for use in the promise
fulfullment.</p>
<p>Usage:</p>
<pre class="prettyprint source"><code>try {
 const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; })
 // do something cool with img
} catch(err) {
 // Something happened and img didn't load
}
</code></pre>
<p>Without async/await:</p>
<pre class="prettyprint source"><code>const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; }).then((img) => {
 // do something cool with img
 return img
}).catch((err) => {
 // Something happened and img didn't load
}) {
</code></pre></dd>
</dl>

<a name="floatRandomBetween"></a>

## floatRandomBetween ⇒ <code>number</code>
<p>Generate a random float number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>floatRandomBetween(-10, 20); // 12.513
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>Random number.</p>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | <p>Minimum value.</p> |
| max | <code>number</code> | <p>Maximum value.</p> |

<a name="randomBetween"></a>

## randomBetween ⇒ <code>number</code>
<p>Generate a random integer number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>randomBetween(-10, 20); // 12
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>Random number.</p>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | <p>Minimum value.</p> |
| max | <code>number</code> | <p>Maximum value.</p> |

<a name="lerp"></a>

## lerp ⇒ <code>number</code>
<p>Linearly interpolate between two values by a unit interval</p>
<pre class="prettyprint source lang-javascript"><code>lerp(100, 200, .5); // 150
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>The interpolated value</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The lower value</p> |
| y | <code>number</code> | <p>The upper value</p> |
| amount | <code>number</code> | <p>the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this <em>will</em> work with higher and lower values as well.</p> |

<a name="shuffleArray"></a>

## shuffleArray ⇒ <code>array</code>
<p>Shuffle an array.</p>

**Kind**: global constant  
**Returns**: <code>array</code> - <p>Shuffled array.</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | <p>Arrray to be shuffled.</p> |
| [modifyOriginal] | <code>Boolean</code> | <p>A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)</p> |

<a name="fireCustomEvent"></a>

## fireCustomEvent
<p>Fire a custom event.</p>
<pre class="prettyprint source lang-javascript"><code>fireCustomEvent(name, data);
</code></pre>

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>Name of the event.</p> |
| data | <code>object</code> | <p>Object to be passed to the event.</p> |
| [bubbles] | <code>Boolean</code> | <p>Indicates whether the event bubbles (default True)</p> |
| [cancelable] | <code>Boolean</code> | <p>Indicates whether the event is cancellable  default True)</p> |

<a name="getElementPosition"></a>

## getElementPosition ⇒ <code>Object</code>
<p>Get the position of the element relative to document or optionally to the nearest offset parent.</p>
<pre class="prettyprint source lang-javascript"><code>getElementPosition(element); // returns something like { top: 100, left: 500 }
</code></pre>

**Kind**: global constant  
**Returns**: <code>Object</code> - <p>the element coordinates.</p>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DOMNode</code> | <p>Element.</p> |
| [toWorld] | <code>Boolean</code> | <p>indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)</p> |

<a name="isChildOf"></a>

## isChildOf ⇒ <code>Boolean</code>
<p>Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.</p>
<p>This method can be used to determine whether a node is detached
by something like:</p>
<pre class="prettyprint source"><code>attached = isChildOf(element, document.body);
</code></pre>

**Kind**: global constant  
**Returns**: <code>Boolean</code> - <p>true is the parentElement is parent (or ancestor) to Element</p>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DomNode</code> | <p>The element to test with</p> |
| parentElement | <code>DomNode</code> | <p>The parent element to test against</p> |
| [toWorld] | <code>Boolean</code> | <p>Whether to test this up the DOM hierarchy</p> |

<a name="getSiblings"></a>

## getSiblings ⇒
<p>Get siblings from element</p>
<pre class="prettyprint source lang-javascript"><code>getSiblings(e);
</code></pre>

**Kind**: global constant  
**Returns**: <p>Returns a list with the element's siblings.</p>  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | <p>Element</p> |

<a name="getAncestors"></a>

## getAncestors
<p>Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.</p>

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | <p>The element to retrieve the ancestors for</p> |
| [toBody] | <code>boolean</code> | <p>whether to only test to the body (default True)</p> |
| [ancestors] | <code>array</code> | <p>the list of already existing elements to pass. This is nromally only used internally</p> |

<a name="matches"></a>

## matches
<p>Function to normalize the selctor 'matchesSelector' across browsers</p>

**Kind**: global constant  
<a name="getSelectorForElement"></a>

## getSelectorForElement ⇒ <code>String</code>
<p>Returns the CSS selector for a provided element</p>

**Kind**: global constant  
**Returns**: <code>String</code> - <p>The CSS selector the describes exactly where to find the element</p>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>DOMElement</code> | <p>The DOM node to find a selector for</p> |

<a name="fixWidows"></a>

## fixWidows
<p>Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future</p>

**Kind**: global constant  
<a name="serializeArray"></a>

## serializeArray ⇒ <code>Array</code>
<p>Returns the form data as an array of name/value pairs.</p>

**Kind**: global constant  
**Returns**: <code>Array</code> - <p>Serialized data</p>  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>DOMElement</code> | <p>The <form> DOM node</p> |

<a name="asyncImageLoad"></a>

## asyncImageLoad ⇒ <code>Promise</code>
<p>Asynchronous image loader. Returns a promise for an image
allowing it to be used directly via <code>.then()</code> or as a part
of an async workload via <code>await</code>.</p>
<p>The then returns the provided image for use in the promise
fulfullment.</p>
<p>Usage:</p>
<pre class="prettyprint source"><code>try {
 const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; })
 // do something cool with img
} catch(err) {
 // Something happened and img didn't load
}
</code></pre>
<p>Without async/await:</p>
<pre class="prettyprint source"><code>const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; }).then((img) => {
 // do something cool with img
 return img
}).catch((err) => {
 // Something happened and img didn't load
}) {
</code></pre>

**Kind**: global constant  
**Returns**: <code>Promise</code> - <p>A primise</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>Image properties</p> |
| props.src | <code>String</code> | <p>The image SRC</p> |

<a name="floatRandomBetween"></a>

## floatRandomBetween ⇒ <code>number</code>
<p>Generate a random float number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>floatRandomBetween(-10, 20); // 12.513
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>Random number.</p>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | <p>Minimum value.</p> |
| max | <code>number</code> | <p>Maximum value.</p> |

<a name="randomBetween"></a>

## randomBetween ⇒ <code>number</code>
<p>Generate a random integer number max and min.</p>
<pre class="prettyprint source lang-javascript"><code>randomBetween(-10, 20); // 12
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>Random number.</p>  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | <p>Minimum value.</p> |
| max | <code>number</code> | <p>Maximum value.</p> |

<a name="lerp"></a>

## lerp ⇒ <code>number</code>
<p>Linearly interpolate between two values by a unit interval</p>
<pre class="prettyprint source lang-javascript"><code>lerp(100, 200, .5); // 150
</code></pre>

**Kind**: global constant  
**Returns**: <code>number</code> - <p>The interpolated value</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The lower value</p> |
| y | <code>number</code> | <p>The upper value</p> |
| amount | <code>number</code> | <p>the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this <em>will</em> work with higher and lower values as well.</p> |

<a name="shuffleArray"></a>

## shuffleArray ⇒ <code>array</code>
<p>Shuffle an array.</p>

**Kind**: global constant  
**Returns**: <code>array</code> - <p>Shuffled array.</p>  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | <p>Arrray to be shuffled.</p> |
| [modifyOriginal] | <code>Boolean</code> | <p>A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)</p> |

<a name="fireCustomEvent"></a>

## fireCustomEvent
<p>Fire a custom event.</p>
<pre class="prettyprint source lang-javascript"><code>fireCustomEvent(name, data);
</code></pre>

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>Name of the event.</p> |
| data | <code>object</code> | <p>Object to be passed to the event.</p> |
| [bubbles] | <code>Boolean</code> | <p>Indicates whether the event bubbles (default True)</p> |
| [cancelable] | <code>Boolean</code> | <p>Indicates whether the event is cancellable  default True)</p> |

<a name="getElementPosition"></a>

## getElementPosition ⇒ <code>Object</code>
<p>Get the position of the element relative to document or optionally to the nearest offset parent.</p>
<pre class="prettyprint source lang-javascript"><code>getElementPosition(element); // returns something like { top: 100, left: 500 }
</code></pre>

**Kind**: global constant  
**Returns**: <code>Object</code> - <p>the element coordinates.</p>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DOMNode</code> | <p>Element.</p> |
| [toWorld] | <code>Boolean</code> | <p>indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)</p> |

<a name="isChildOf"></a>

## isChildOf ⇒ <code>Boolean</code>
<p>Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.</p>
<p>This method can be used to determine whether a node is detached
by something like:</p>
<pre class="prettyprint source"><code>attached = isChildOf(element, document.body);
</code></pre>

**Kind**: global constant  
**Returns**: <code>Boolean</code> - <p>true is the parentElement is parent (or ancestor) to Element</p>  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DomNode</code> | <p>The element to test with</p> |
| parentElement | <code>DomNode</code> | <p>The parent element to test against</p> |
| [toWorld] | <code>Boolean</code> | <p>Whether to test this up the DOM hierarchy</p> |

<a name="getSiblings"></a>

## getSiblings ⇒
<p>Get siblings from element</p>
<pre class="prettyprint source lang-javascript"><code>getSiblings(e);
</code></pre>

**Kind**: global constant  
**Returns**: <p>Returns a list with the element's siblings.</p>  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | <p>Element</p> |

<a name="getAncestors"></a>

## getAncestors
<p>Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.</p>

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | <p>The element to retrieve the ancestors for</p> |
| [toBody] | <code>boolean</code> | <p>whether to only test to the body (default True)</p> |
| [ancestors] | <code>array</code> | <p>the list of already existing elements to pass. This is nromally only used internally</p> |

<a name="matches"></a>

## matches
<p>Function to normalize the selctor 'matchesSelector' across browsers</p>

**Kind**: global constant  
<a name="getSelectorForElement"></a>

## getSelectorForElement ⇒ <code>String</code>
<p>Returns the CSS selector for a provided element</p>

**Kind**: global constant  
**Returns**: <code>String</code> - <p>The CSS selector the describes exactly where to find the element</p>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>DOMElement</code> | <p>The DOM node to find a selector for</p> |

<a name="fixWidows"></a>

## fixWidows
<p>Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future</p>

**Kind**: global constant  
<a name="serializeArray"></a>

## serializeArray ⇒ <code>Array</code>
<p>Returns the form data as an array of name/value pairs.</p>

**Kind**: global constant  
**Returns**: <code>Array</code> - <p>Serialized data</p>  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>DOMElement</code> | <p>The <form> DOM node</p> |

<a name="asyncImageLoad"></a>

## asyncImageLoad ⇒ <code>Promise</code>
<p>Asynchronous image loader. Returns a promise for an image
allowing it to be used directly via <code>.then()</code> or as a part
of an async workload via <code>await</code>.</p>
<p>The then returns the provided image for use in the promise
fulfullment.</p>
<p>Usage:</p>
<pre class="prettyprint source"><code>try {
 const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; })
 // do something cool with img
} catch(err) {
 // Something happened and img didn't load
}
</code></pre>
<p>Without async/await:</p>
<pre class="prettyprint source"><code>const img = asyncImageLoad({ src: '/assets/images/cool_image.png', alt: 'Cool Cats', crossOrigin: &quot;anonymous&quot; }).then((img) => {
 // do something cool with img
 return img
}).catch((err) => {
 // Something happened and img didn't load
}) {
</code></pre>

**Kind**: global constant  
**Returns**: <code>Promise</code> - <p>A primise</p>  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | <p>Image properties</p> |
| props.src | <code>String</code> | <p>The image SRC</p> |

