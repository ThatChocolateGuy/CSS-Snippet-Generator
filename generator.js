var thumbnail = 1; // Starting thumbnail image number
var postNumber = 20; // Starting post ID
const moduleCount = 3; // Number of snippets to display
var storeVals = []; // Stores thumnail and post number values
var storeCode = []; // Empty array to store CSS code blocks

var css_block = css_block = document.getElementById("css-snippet"); // Stores CSS snippet template
var thumbnail_output = document.getElementById("thumbnail");
var postNum_output = document.getElementById("postNumber");
var css_print = document.getElementById("css_print");

thumbnail_output.innerHTML = thumbnail;
postNum_output.innerHTML = postNumber;

function generateCss() {
		for (let module = 1; module < moduleCount; module++) {
				thumbnail++;
				postNumber++;

				storeVals[module] = { thumbnail, postNumber };

				console.log(module, storeVals[module]);
		}
}

function printCss() {
		document.getElementById("buttons").style.display = "none"; // Hide buttons

		for (let module = 1; module < moduleCount; module++) {
				var pre = document.createElement("pre");
				var code = document.createElement("code");

				code.innerHTML = css_block.innerHTML;
				pre.className = "prettyprint container";
				pre.appendChild(code);
				pre.style.padding = "1em";
				css_print.appendChild(pre); // Append new 'pre' block to css_print div

				thumbnail_output.innerHTML = storeVals[module].thumbnail;
				postNum_output.innerHTML = storeVals[module].postNumber;

				console.log(module, storeVals[module]);
		}
}

console.log("This class rocks!");