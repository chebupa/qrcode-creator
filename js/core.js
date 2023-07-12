// main js file
console.log('JS connected succesfuly')

// main code
let qrcode = new QRCode("qrcode");

function makeCode () {		
	let elText = document.getElementById("text");
	
	if (!elText.value) {
		elText.focus();
		return;
	}
	
	qrcode.makeCode(elText.value);
}

makeCode();


const qrLinkText = document.getElementById('text')

qrLinkText.addEventListener('blur', function () {
  makeCode();
})
qrLinkText.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    makeCode();
  }
})