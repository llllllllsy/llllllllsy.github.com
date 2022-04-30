/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-11 14:12:29
 * @version $Id$
 */
var ele = document.querySelectorAll('.m-item')

for(var i=0;i<ele.length;i++){
	ele[i].setAttribute('index',i+1);
	ele[i].onclick=function() {
		alert(this.getAttribute('index'));
	}
}



function doClick() {
	document.getElementById("p1").addEventListener('click',change)
	ele[1].addEventListener('click',changedate)
	ele[2].addEventListener('click',add)
	ele[3].addEventListener('click',del)
	ele[4].addEventListener('click',opennew)
	ele[5].addEventListener('click',addele)
	ele[6].addEventListener('click',setwid)
}

doClick()

function change(e) {
	e.target.style.color = 'red';
}

function changedate() {
	var d = new Date();
	let year = d.getFullYear();
	let month = d.getMonth();
	let day = d.getDate();
	if(month >= 1 && month <= 9)
		month = '0' + month;
	if(day >= 0 && day <= 9)
		day = '0' + day
	let current = year + '-' + month + '-' + day; 
	document.querySelector('h1').innerHTML = current;
}

function add() {
	ele[2].classList.add("fn-active")
}

function del() {
	ele[7].parentNode.removeChild(ele[7]);
}

function opennew(){
	window.open('https://taobao.com','_blank')
}

function addele() {
	let l = document.createElement("li");
	let node = document.createTextNode("p9");
	l.appendChild(node);
	document.querySelector('ul').appendChild(l);
}

function setwid() {
	let wid = window.innerWidth;
	document.querySelector('.m-box').style.width = wid;
}

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
	$(".g-index2 .m-bd span:eq(0)").addClass("num")
	$(".g-index2 .m-bd span:eq(1)").removeClass("num")
	$(".g-index2 .m-bd span:eq(2)").removeClass("num")

}

const show2 =()=> {
	$(".m-tle span:eq(1)").addClass("bk")
	$(".m-tle span:eq(0)").removeClass("bk")
	$(".m-tle span:eq(2)").removeClass("bk")
	$(".g-index2 .m-bd span:eq(1)").addClass("num")
	$(".g-index2 .m-bd span:eq(0)").removeClass("num")
	$(".g-index2 .m-bd span:eq(2)").removeClass("num")
}

const show3 =()=> {
	$(".m-tle span:eq(2)").addClass("bk")
	$(".m-tle span:eq(1)").removeClass("bk")
	$(".m-tle span:eq(0)").removeClass("bk")
	$(".g-index2 .m-bd span:eq(2)").addClass("num")
	$(".g-index2 .m-bd span:eq(1)").removeClass("num")
	$(".g-index2 .m-bd span:eq(0)").removeClass("num")
}

const init3 =() => {
	$("#g-index3").on('click',"li .de",del)
	$("#g-index3").on('click',".m-but",addda)
}

function del() {
	var l = $("li .de").index(this)
	for(var i=l+1;i<$(".m-dat li").length;i++){
		var n = $(".m-dat li:eq("+i+") span:eq(0)").text()
		$(".m-dat li:eq("+i+") span:eq(0)").text(n-1)
	}
	$(this).parent().remove()
}

const addda =()=> {
	var l = $(".m-dat>li").length+1
	var tr="<li><span></span><span></span><span>Delete</span></li>"
	$(".m-dat").append(tr)
	$(".m-dat li:last span:eq(0)").text(l)
	$(".m-dat li:last span:eq(2)").addClass("de")
}

$(init1)

$(init2)

$(init3)


