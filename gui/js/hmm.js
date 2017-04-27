function hmm(){
	var n = document.getElementById('recursao').value;
	var p = [document.getElementById('p0').value, document.getElementById('p1').value,
			document.getElementById('p2').value, document.getElementById('p3').value,
			document.getElementById('p4').value, document.getElementById('p5').value,
			document.getElementById('p6').value, document.getElementById('p7').value,
			document.getElementById('p8').value, document.getElementById('p9').value];
	var estado1 = document.getElementById('est1');
	var estado2 = document.getElementById('est2');
	var estado3 = document.getElementById('est3');
	var estado4 = document.getElementById('est4');
	var estadoini = document.getElementById('est0');
	var estadofinal = document.getElementById('estf');
	var pA = 0;
	var aux = 0;
	var aux1 = 0;
	var aux2 = 0;
	var aux3 = 0;
	var res = document.getElementById('res');
	var texto ="";

	if(estadoini.value[0]==estado1.value[0]){
		p[0]=((p[2]*p[0])+(p[5]*p[1]));
	}
	else if(estadoini.value[0]==estado2.value[0]){
		p[1]=((p[3]*p[1])+(p[4]*p[0]));
	}
	for(var j=0; j<n; j++){
		if(estadoini.value[0]==estado1.value[0]){
			if(estadofinal.value[0]==estado3.value[0]){
				aux=((p[6]*p[0])+(p[8]*(1-p[0])));
				pA=(p[6]*p[0])/aux;
				p[0]=pA;
				p[1]=1-pA;
			}
			else if(estadofinal.value[0]==estado4.value[0]){
				aux1=((p[4]*p[0])+(p[9]*(1-p[0])));
				pA=(p[4]*p[0])/aux1;
				p[0]=pA;
				p[1]=1-pA;
			}
		}
		else if(estadoini.value[0]==estado2.value[0]){
			if(estadofinal.value[0]==estado3.value[0]){
				aux2=((p[8]*p[1])+(p[6]*(1-p[1])));
				pA=(p[8]*p[1])/aux2;
				p[1]=pA;
				p[0]=1-pA;
			}
			else if(estadofinal.value[0]==estado4.value[0]){
				aux3=((p[9]*p[1])+(p[7]*(1-p[1])));
				pA=(p[9]*p[1])/aux3;
				p[1]=pA;
				p[0]=1-pA;
			}
		}
	}
	texto = "Valor: " +parseFloat(pA.toFixed(2));
	res.innerHTML = "<br/>" + texto;
}