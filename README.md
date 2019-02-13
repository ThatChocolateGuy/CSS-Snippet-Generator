# CSS Snippet Generator

Generate formatted CSS which would otherwise be tedious to code by hand.

Using variables and a bit of custom logic, you can generate repetitive code snippets with parameters that differ slightly from snippet-to-snippet.

Project utilizes the [prettify.js](https://github.com/google/code-prettify) library by Google and [Vim Sunburst Theme](https://github.com/google/code-prettify/blob/master/styles/sunburst.css) by David Leibovic.

## Usage

Clone the repo and replace the sample code in the `<pre>` block with your own. Use the `<span class="nocode">` blocks to play with your variables. You can inspect the existing logic tied to the `id` attributes (`postNumber` & `thumbnail`) for an example on how this works.

When using the app in-browser, first click `Generate Snippets` to generate your snippets with set parameters, then `Print Snippets` to display. Buttons will disappear once results are displayed. Refresh the page to restart.

### Example

The default example sets the following parameters in generator.js:
- `id="postNumber"(index.html)` initialized as `var postNumber = 20;`
- `id="thumbnail"(index.html)` initialized as `var thumbnail = 1;`
- `const moduleCount = 3;` represents number of code snippets to display