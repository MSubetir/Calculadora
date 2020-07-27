function Add(el){
        	var divconteudo = document.getElementById(el.id).innerHTML;
     		var inputquadro = document.getElementById("tela");
     	inputquadro.value += divconteudo;
    	}

    	function calcular(){
    		var inputquadro = document.getElementById("tela");
    		var conta = eval(inputquadro.value);
     	inputquadro.value = conta;
}