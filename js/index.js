
$('#iWantToJoinInput').on('keyup', function(){
	if($('#iWantToJoinInput').val().length > 2){
		$('#submitBTN').prop('disabled', false)
		let name = $('#iWantToJoinInput').val()
		
		$('#iWantToJoinInput').val(name.replace(name.charAt(0),name.charAt(0).toUpperCase()))
		
		
	}else{
		$('#submitBTN').prop('disabled', true)
	}
})


$('#iWantToJoinInput').on('keydown',function(e){
	let kc = [16,8,32,13,20]
	let toReturn = false
	
	for(k of kc){
		if(e.keyCode == k){
			toReturn = true
			break
		}
	}
	
	if(toReturn){
		return
	}
	
	
	
	if(Number.isInteger(parseInt(e.key.toString()))
		|| e.key.toString() < 'a' 
		|| e.key.toString() > 'z' ){
				
		e.preventDefault()
		e.stopPropagation()
		e.stopImmediatePropagation()
				
		return
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