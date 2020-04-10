
$('#iWantToJoinInput').on('keyup', function(){
	if($('#iWantToJoinInput').val().length > 2){
		$('#submitBTN').prop('disabled', false)
	}else{
		$('#submitBTN').prop('disabled', true)
	}
})

$('#iWantToJoin').on('blur', function(){
	document.getElementById('iWantToJoin').style.display = 'none'
})


$('.joinBTN').on('click',function(){
	document.getElementById('iWantToJoin').style.display = 'block'
	$("#iWantToJoinInput").focus()
})
$('#submitBTN').on('click',function(){
	message = "Olá, me chamo " + $('#iWantToJoinInput').val() + ". Topo seu Desafio 5 Dias!"
	url = 'https://api.whatsapp.com/send?phone=5551984863327&text='

	location.replace(url + message)

})