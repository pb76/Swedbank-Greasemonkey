// ==UserScript==
// @name       Swedbank         
// @namespace  https://internetbank.swedbank.se/      
// @include    https://internetbank.swedbank.se/* 
// ==/UserScript==
document.getElementById("auth:kundnummer").value = "123456-1234";
var val = "MOBILBID";
var sel = document.getElementById('auth:metod_2');
var opts = sel.options;
for (var opt, j = 0; opt = opts[j]; j++) {
	if (opt.value == val) {
		sel.selectedIndex = j;
		break;
	}
}
