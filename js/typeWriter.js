
let i = 0;
let text1 = "To my beloved princess, Randa. happy anniversary ";
let text2 = "I feel so very lucky to know you, and very lucky to have you absolutely. falling in love with you really makes me happy. i never thought i could find a girlfriend like you, but look now i found the best one in the world, yeah its u. i always choose you no matter what happens, i love everything about u, kamu sempurna i love u, i love u so much, i love u more then u even know, kamu lucu banget. thank u for being part of my journey, being with u and loving u has made me happier than I had ever hoped to be. I cannot wait to spend a lifetime making memories with u"
let speed = 120;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
