console.log("Loaded False-Proxy...");
var False_Proxy_XHR = XMLHttpRequest;
var XMLHttpRequest = False_Proxy_XHR;
XMLHttpRequest.prototype.FPopen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (x, y, z, j, w) {
  if (x === "POST") {
    var com = false;
    com = window.confirm("Block URL: " + y);
    if (com) {
      this.FPopen(x, y, z, j, w);
    }
  }
};
