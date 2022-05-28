function soma(){
			let nome = document.getElementById('nome').value;
			let peso = document.getElementById('peso').value;
			let altura = document.getElementById('altura').value;
			let res = document.getElementById('res');

			let imc = (parseFloat(peso) / (parseFloat(altura/100) + parseFloat(altura/100))).toFixed(2);

			if(imc < 18.5){
			result.innerHTML = nome + " seu IMC é de " + imc + "<br />" + "Abaixo do peso normal";}
			if(imc >= 18.5 && imc < 24.9){
			result.innerHTML = nome + " seu IMC é de " + imc + "<br />" + "Peso normal";}
			if(imc >= 24.9 && imc < 29.9){
			result.innerHTML = nome + " seu IMC é de " + imc + "<br />" + "Excesso de peso";}
			if(imc >= 29.9 && imc < 34.9){
			result.innerHTML = nome + " seu IMC é de " + imc + "<br />" + "Obesidade grau I";}
			if(imc >= 34.9 && imc < 40){
			result.innerHTML =nome + " seu IMC é de " + imc + "<br />" + "Obesidade grau II";}
			if(imc >= 40){
			result.innerHTML = nome + " seu IMC é de " + imc + "<br />" + "Obesidade grau III";}
		}