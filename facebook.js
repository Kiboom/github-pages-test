/* 좋아요, 댓글, 공유 버튼 */

var like = 0;
var reply = 0;
var share = 0;

var post = document.getElementsByClassName("post");

var likeCounts = document.querySelector(".like-counts");
var replyCounts = document.querySelector(".reply-counts");
var shareCounts = document.querySelector(".share-counts");

var plusCounts = function(e) {
	var span = e.target.closest('span');
	if(span.className == "lrsButton like-button" || span.className == "lrsButton like-button lrsButton-clicked"){
		var likeCounts = this.querySelector(".like-counts");
		likeCounts.innerHTML = "좋아요 " + (++like) + "개";
		span.classList.toggle("lrsButton-clicked");
		span.firstElementChild.classList.toggle("liked-icon");
	} 
	else if(span.className == "lrsButton reply-button" || span.className == "lrsButton reply-button lrsButton-clicked"){
		var replyCounts = this.querySelector(".reply-counts");		
		replyCounts.innerHTML = "댓글 " + (++reply) + "개";
		span.classList.toggle("lrsButton-clicked");
	} 
	else{
		var shareCounts = this.querySelector(".share-counts");		
		shareCounts.innerHTML = "공유 " + (++share) + "개";
		span.classList.toggle("lrsButton-clicked");
	}
};

for(var i=0 ; i<post.length ; i++){
	post[i].addEventListener("click", plusCounts, false);
};




/* 무한 스크롤 */

var body = document.querySelector("body");
var middle = document.querySelector(".middle");
var post = document.getElementsByClassName("post")[1];
var triggerScoll = window.innerHeight * 1.5;

window.addEventListener("scroll", function(){

	/* 1번째 방법 */
	/* console.log(body.scrollTop);
	if(body.scrollTop % (window.innerHeight/2) >= 0 && body.scrollTop % (window.innerHeight/2) <= 100){
		var newPost = post.cloneNode(true);
		middle.appendChild(newPost);
		newPost.style.opacity = 0;
		window.getComputedStyle(newPost).opacity;
		newPost.style.opacity = 1;
	}*/

	/* 2번째 방법 : 마지막 포스트의 위치를 기준으로.. 이렇게 하면 DOM 탐색 비용이 너무 비싸다. */
	var lastPost = middle.lastElementChild;
	var lastPostPos = lastPost.offsetTop - window.scrollY;
	console.log(lastPostPos);
	if(lastPostPos < window.innerHeight/2){
		var newPost = post.cloneNode(true);
		middle.appendChild(newPost);
		newPost.style.opacity = 0;
		window.getComputedStyle(newPost).opacity;
		newPost.style.opacity = 1;
	}


});





















