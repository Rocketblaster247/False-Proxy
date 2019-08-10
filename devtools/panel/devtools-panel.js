/**
Handle errors from the injected script.
Errors may come from evaluating the JavaScript itself
or from the devtools framework.
See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#Return_value
*/
function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

/**
Handle the result of evaluating the script.
If there was an error, call handleError.
*/
function handleResult(result) { 
  if (result[1]) {
    handleError(result[1]);
  }
}

var blocked_urls = [];
document.getElementById("bu").addEventListener("click", function () {
  var e = document.getElementById("bku").value;
  blocked_urls.push(e);
});

