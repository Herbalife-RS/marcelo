$('#iWantToJoinInput').on('keyup', function(){
	if($('#iWantToJoinInput').val().length > 2){
		$('#submitBTN').prop('disabled', false)
	}else{
		$('#submitBTN').prop('disabled', true)
	}
})


joinBTN
$('#joinBTN').on('click',function(){
	document.getElementById('iWantToJoin').style.display = 'block'

})
$('#submitBTN').on('click',function(){
	message = "Olá, me chamo " + $('#iWantToJoinInput').val() + ". Topo seu Desafio 5 Dias!"
	url = 'https://api.whatsapp.com/send?phone=5551997189948&text='

	location.replace(url + message)

})