/*
function calc(){
	let bs =Number(document.getElementById("bs").value);
	let iv =Number(document.getElementById("iv").value);
	let ev =Number(document.getElementById("ev").value);
	let nc =Number(document.getElementById("nc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("result").innerHTML = result;
}
*/

function hcalc(){
	let bs =Number(document.getElementById("hbs").value);
	let iv =Number(document.getElementById("hiv").value);
	let ev =Number(document.getElementById("hev").value);
	let result = Math.floor((bs+iv/2+ev/8+60)
	document.getElementById("hresult").innerHTML = result;
}
function acalc(){
	let bs =Number(document.getElementById("abs").value);
	let iv =Number(document.getElementById("aiv").value);
	let ev =Number(document.getElementById("aev").value);
	let nc =Number(document.getElementById("anc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("aresult").innerHTML = result;
}

function bcalc(){
	let bs =Number(document.getElementById("bbs").value);
	let iv =Number(document.getElementById("biv").value);
	let ev =Number(document.getElementById("bev").value);
	let nc =Number(document.getElementById("bnc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("bresult").innerHTML = result;
}
function ccalc(){
	let bs =Number(document.getElementById("cbs").value);
	let iv =Number(document.getElementById("civ").value);
	let ev =Number(document.getElementById("cev").value);
	let nc =Number(document.getElementById("cnc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("cresult").innerHTML = result;
}
function dcalc(){
	let bs =Number(document.getElementById("dbs").value);
	let iv =Number(document.getElementById("div").value);
	let ev =Number(document.getElementById("dev").value);
	let nc =Number(document.getElementById("dnc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("dresult").innerHTML = result;
}
function scalc(){
	let bs =Number(document.getElementById("sbs").value);
	let iv =Number(document.getElementById("siv").value);
	let ev =Number(document.getElementById("sev").value);
	let nc =Number(document.getElementById("snc").value);
	let result = Math.floor((bs+iv/2+ev/8+5)*nc)
	document.getElementById("sresult").innerHTML = result;
}