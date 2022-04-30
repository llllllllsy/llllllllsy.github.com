/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-15 15:02:40
 * @version $Id$
 */

var ex = document.querySelectorAll('.m-menu li')

ex[0].addEventListener("click",function(){
	window.location.hash = "#g-index1"
})

ex[1].addEventListener("click",function(){
	window.location.hash = "#g-index2"
})

ex[2].addEventListener("click",function(){
	window.location.hash = "#g-index3"
})

/*jquery实现*/

const init1 =() => {
	$(".m-box span").on('click',magnify)
}

const magnify =()=> {
	$(".m-cli").addClass("show")
	$(".box").addClass("effect")
	$(".filter").addClass("effect")
	$(".box").on('click',renew)
	$(".m-cli").on('click',renew)
}

const renew =()=> {
	$(".m-cli").removeClass("show")
	$(".box").removeClass("effect")
	$(".filter").removeClass("effect")
}

const init2 =() => {
	$(".m-tle span:eq(0)").on('click',show1)
	$(".m-tle span:eq(1)").on('click',show2)
	$(".m-tle span:eq(2)").on('click',show3)
}

const show1 =()=> {
	$(".m-tle span:eq(0)").addClass("bk")
	$(".m-tle span:eq(1)").removeClass("bk")
	$(".m-tle span:eq(2)").removeClass("bk")
	$(".m-bd span:eq(0)").addClass("num")
	$(".m-bd span:eq(1)").removeClass("num")
	$(".m-bd span:eq(2)").removeClass("num")

}

const show2 =()=> {
	$(".m-tle span:eq(1)").addClass("bk")
	$(".m-tle span:eq(0)").removeClass("bk")
	$(".m-tle span:eq(2)").removeClass("bk")
	$(".m-bd span:eq(1)").addClass("num")
	$(".m-bd span:eq(0)").removeClass("num")
	$(".m-bd span:eq(2)").removeClass("num")
}

const show3 =()=> {
	$(".m-tle span:eq(2)").addClass("bk")
	$(".m-tle span:eq(1)").removeClass("bk")
	$(".m-tle span:eq(0)").removeClass("bk")
	$(".m-bd span:eq(2)").addClass("num")
	$(".m-bd span:eq(1)").removeClass("num")
	$(".m-bd span:eq(0)").removeClass("num")
}

const init3 =() => {
	$("#g-index3").on('click',"li .de",del)
	$("#g-index3").on('click',".m-but",add)
}

function del() {
	var l = $("li .de").index(this)
	for(var i=l+1;i<$(".m-dat li").length;i++){
		var n = $(".m-dat li:eq("+i+") span:eq(0)").text()
		$(".m-dat li:eq("+i+") span:eq(0)").text(n-1)
	}
	$(this).parent().remove()
}

const add =()=> {
	var l = $(".m-dat>li").length+1
	var tr="<li><span></span><span></span><span>Delete</span></li>"
	$(".m-dat").append(tr)
	$(".m-dat li:last span:eq(0)").text(l)
	$(".m-dat li:last span:eq(2)").addClass("de")
}

$(init1)

$(init2)

$(init3)

/*native实现
const $ =(e)=> {
	return document.querySelector(e)
}

var ele1 = document.querySelectorAll('.m-box span')

for(var i=0;i<ele1.length;i++){
	ele1[i].addEventListener('click',show)
}

$('.box').addEventListener('click',hide)
$('.m-cli').addEventListener('click',hide)

function show() {
	$(".m-cli").classList.add("show")
	$(".box").classList.add("effect")
	$(".filter").classList.add("effect")
}

function hide() {
	$(".m-cli").classList.remove("show")
	$(".box").classList.remove("effect")
	$(".filter").classList.remove("effect")
}

var ele2 = document.querySelectorAll('.m-tle span')
var ele3 = document.querySelectorAll('.m-bd span')

const init2 =()=> {
	ele2[0].addEventListener('click',show1)
	ele2[1].addEventListener('click',show2)
	ele2[2].addEventListener('click',show3)
}

function show1() {
	ele2[0].classList.add("bk")
	ele2[1].classList.remove("bk")
	ele2[2].classList.remove("bk")
	ele3[0].classList.add("num")
	ele3[1].classList.remove("num")
	ele3[2].classList.remove("num")

}

const show2 =()=> {
	ele2[1].classList.add("bk")
	ele2[0].classList.remove("bk")
	ele2[2].classList.remove("bk")
	ele3[1].classList.add("num")
	ele3[0].classList.remove("num")
	ele3[2].classList.remove("num")
}

const show3 =()=> {
	ele2[2].classList.add("bk")
	ele2[1].classList.remove("bk")
	ele2[0].classList.remove("bk")
	ele3[2].classList.add("num")
	ele3[1].classList.remove("num")
	ele3[0].classList.remove("num")
}

init2()

const adddate =() => {
	$(".m-but").addEventListener('click',add)
}

function add() {
	var tr=document.createElement("li")
	for(var i=0;i<3;i++){
		var spa =document.createElement("span")
		tr.appendChild(spa)
		if(i==2){
			spa.appendChild(document.createTextNode("Delete"))
		}
	}
	$(".m-dat").appendChild(tr)
	var e2 = document.querySelectorAll('.m-dat li')
	var l = e2.length
	e2[l-1].firstChild.innerHTML=l
	e2[l-1].lastChild.classList.add("de")
	e2[l-1].firstChild.classList.add("id")
}

adddate()

$(".m-dat").addEventListener('click',function(e){
    e=e || window.event
	var par = e.target.parentNode
	var e4 = document.querySelectorAll('.m-dat li')
	var key = document.querySelectorAll('.id')
	var l = e4.length
	for(var i=0;i<l;i++){
		e4[i].index=i
		if(par == e4[i]){
			par.parentNode.removeChild(par)
			for(var j=par.index+1;j<l;j++){
				key[j].innerHTML=j
			}
	    }
	}
 }, false);*/

