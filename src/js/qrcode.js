// page width and height
let pageWidth = document.documentElement.clientWidth
let pageHeight = document.documentElement.clientHeight

// qr code params
let qrcode = new QRCode(document.getElementById('qrcode'), {
	text: '',

	width: pageWidth * 0.4,
	height: pageWidth * 0.4,

	colorDark : '#000000',
	colorLight : '#ffffff',

	correctLevel : QRCode.CorrectLevel.H
})

// qr code creation
function makeCode () {
	let elText = document.getElementById('text')
	
	if (!elText.value) {
		elText.focus()
		return
	}
	
	qrcode.makeCode(elText.value)
}
makeCode()

// idk
const qrLinkText = document.getElementById('text')

qrLinkText.addEventListener('blur', function () {
	makeCode()
})

qrLinkText.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    makeCode()
  }
})