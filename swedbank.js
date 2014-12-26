// ==UserScript==
// @name       Swedbank         
// @namespace  https://internetbank.swedbank.se/      
// @include    https://internetbank.swedbank.se/* 
// ==/UserScript==
//Enter your social security number (personnummer) instead of 12345-1234
document.getElementById("auth:kundnummer").value = "123456-1234";
//Changes drop down select to "Mobilt BankID".
//ACTCARD = Säkerhetsdosa
//MOBILBID = Mobilt BankID
//BIDKORT = BankID på kort
//PIN6 = Personlig kod
//FTGKOPPL = Företagskopplad dosa
var val = "MOBILBID";
var sel = document.getElementById('auth:metod_2');
var opts = sel.options;
for (var opt, j = 0; opt = opts[j]; j++) {
	if (opt.value == val) {
		sel.selectedIndex = j;
		break;
	}
}
