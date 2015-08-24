setTimeout과 setInterval!
/* fn(10)을 치면 1초마다 카운드 내려가면서 마지막엔 "끝!" 나오게! */

function fn(seconds){

	var intevalID = setInterval(function(){
		console.log(seconds--);	

		if(seconds < 0){
			clearInterval(intevalID);
			console.log("끝!");
		}
	}, 1000);
}

function fn(seconds){

	while(seconds>=0){
		var timerID = setTimeout(function(){
			console.log(seconds--);	
		}, 1000);	
	}

	clearInterval(timerID);
	console.log("끝!");
}




자바스크립트는 싱글스레드이다!
	 // 웹페이지에서는 굉장히 여러가지 이벤트가 일어나기 때문에 싱글스레드를 차지될 일이 굉장히 많다! 
	 // 따라서 setInterval을 사용했다고 해서 제 시간에 작동하리라는 보장이 없다!! 
	 // 중간에 무슨 일이 일어나면 그만큼 대기 타야하니까! 
	 // 따라서 한 함수가 큰 작업시간이 차지하는걸 지양해야! 쪼개라쪼개 
	 // 참고 사이트 http://taggon.github.io/WebUI_Basic/example/thread.html
	 // 성능이 필요한 분야에서 자바스크립트는 그렇게 좋지 않다.




[Event Target]
	// 엘리먼트마다 지원하는 이벤트가 다를 수 있음.
	addeventListener (type, listener[], useCapture)
		// listener : 어떤 이벤트가 발생하면 그 뒤에 호출할 함수를 call-back함수!
		// useCapture : 원래 이벤트는 자식 쪽에서 먼저 캡처한 다음 부모 쪽으로 위로 올라가는 타입! 
		// useCapture를 사용하면 body에서 먼저 발생하고 그 다음에 자식으로 내려감!
		// 이벤트는 따로 지정하지 않는 이상 전파되는 속성이 있다!! 일부러 멈추지 않으면 이벤트는 항상 연좌제로 퍼진다!
		// 예제 : http://taggon.github.io/WebUI_Basic/example/usecapture.html
	dispatchEvent(eventInstance) : 잘 안씀.

	window.addEventListener('click',
		function(event){
			console.log(event);
		}
	);
	// 이벤트가 발생하면 리스너에 event 객체가 인수로 전달된다.
	// 이 event객체에서 별놈의 걸 다 건들 수 있음. 얘가 뭐로 클릭했는지 어딜 클릭했는지, 그전엔 뭐 클릭했느지 등등...



DOM 0 이벤트 모델
	// 옛날엔 이렇게 썼으니까 참고는 하되(누가 이렇게 쓴 걸 알아는 봐야하니까!), 이런 식으로 쓰지는 말 것!




BOM : Browser Object Model
	// 웹 브라우저 환경의 다양한 기능을 객체처럼 다루는 모델!
	alert, confirm, prompt
		// alert, confirm, prompt : 공통적으로 이게 실행되면 자바스크립트가 멈춤! 동기적으로 실행됨!
		// 네이버에서 alert('!')을 치면 움직이는 것들 다 얼음땡함!
		// alert 남발하면 꼴사나움. 성능상으로도 alert을 띄우면 자바스크립트가 꽁꽁 얼어버림. 꼭 필요한 경우 아니면 지양할 것!
		// 예제 : http://taggon.github.io/WebUI_Basic/example/alert.html
	window
		var windowObjectReference 
   		= window.open(strUrl, strWindowName, [strWindowFeatures]);
		// 콘솔에서 window를 찍으면 관련 프로퍼티, 메소드 쭈욱 나옴!
		// open() 요즘은 사용자가 직접 클릭해서 confirm하는 경우에만 open될 수 있게 브라우저가 지 함.
		// 옛날에는 strWindowFeatures 에 이런저런 값을 줘서 윈도우의 몇몇 요소들(작업표시줄, 주소바, 상태 바 등등..)을 지울 수 있었는데,
		// 요즘은 fishing 문제 때문에 거의 다 못씀. 없는 셈 치셈.
	

[window 관련 이벤트, 프로퍼티] -- 꼭 레퍼런스 찾아볼 것!!
	- 윈도우는 글로벌 콘텍스트다!!!
	- focus(), blur()
		// 포커스를 받거나 잃게해서 제일 앞에 또는 뒤에로 갈 수 있게!
	- beforeunload
		window.onbeforeunload = function(){
	   		return '작성 중인 메시지가 있습니다.';
		};
		// 아주 유용한 기능. 페이지를 벗어날 때 확인 메시지를 표시할 수 있다.
	- deviceorentation 
		// 이벤트를 사용해 기기의 방향과 기울기를 확인할 수 있다.
		// 짱신기 : http://sandbox.juurlink.org/accelerometer/
	- frames
		// 하위 frames의 정보를 알려줌! 대개 iframe


[screen 관련 이벤트, 프로퍼티]
// 버튼을 클릭하면 화면 중앙에 400x300 크기의 새 창을 표시하라.



[location 관련 프로퍼티, 메소드]
	// protocol : 뒤에 :까지 포함.
	// host : host랑 hostname까지 포함
	// hostname : 말그대로 hostname만
	// search : url에서 search와 관련된 부분만 따로 떼와서 줌! 서버에 구걸할 필요 없이!
	// reload(true), reload(false)
	// replace() : 뒤로가기 할 때 주소 이력이 안남음.
	location.href = 'http://naver.com';		// 그냥 링크 눌렀을 때랑 마찬가지! 뒤로가기 해도 나옴! 이렇게 쓰는 걸 추천! 더 명시적임!
	location = 'http://naver.com';
	location.replace = 'http://naver.com';	// replace를 달면 이 페이지에 방문했던 이력을 지워서 나중에 뒤로가기 해도 안나옴!


[navigator]
	userAgent : 현재 사용하고 있는 유저의 정보! 컴퓨터에 대한 정보 등등 싹 다 들어 있음!




[DOM : Documnet Object Model]
	// 
























