document.getElementById("contacts").addEventListener("click",showContacts,false);

function showContacts() {
	
	let div = document.getElementsByClassName("showContacts")[0];
	let divStyle = getComputedStyle(div).opacity;
	//alert(divStyle)
	divStyle == 1?div.style.opacity = "0" :div.style.opacity = "1";
}



////////////////// обработка формы 
//alert("fdsf")

/*
jQuery(document).ready( function($) {


$(".newComent input:text").keypress(function (e) { 
	 return $(this).val().length <6 ? true :  false;    

})
///////////// Прокрутка ленты меню
$(".imgFlex > div>div:gt(0)").css({"background":function(i,v){
	return  "url('../img/"+i+".jpg') center no-repeat "
},"background-size": "cover"})

function srollHeaderImg(argument) {
	let i = 0;
	let a = 0;
	let scroll;
	let lengthScrollImg = $(".imgFlex").children().length-2;
	$(".flexSpan").children().each(function(j,e){
	if(j==0){
		$(e).click(()=>{
			$(".imgFlex").scrollLeft($(".imgFlex").scrollLeft()-400);
			i>1 ? i-- : i;
		})
		}else{
			$(e).click(()=>{
				$(".imgFlex").scrollLeft($(".imgFlex").scrollLeft()+400);
				$(".imgFlex").children().length-3 > i? i++ : i;
				})	
			}
		})
	return function foo() {
		if(i<2){
			let interval1 = setInterval(function(){
			if(lengthScrollImg > i){
				scroll = 400*i;
				$(".imgFlex").scrollLeft(scroll)
				i++;	
				}else {
					i=i-2;
					clearTimeout(interval1)
					foo();
				}
			},3000)
		}else {
			let interval2 = setInterval(function(){
			if(i>=0){
				scroll = 400*i;
				$(".imgFlex").scrollLeft(scroll)
				i--;	
				}else {
					i=i+2;
					clearTimeout(interval2)
					foo();
				}
			},3000)
		}
	}
}
srollHeaderImg()();


////////////Переключение между вкладками
function changDerection() {

	[].forEach.call($("div.menuFlex span"),(e,i,m)=>{
		switch(i){
			case 0 : $(e).click(()=>{
				$(e).css({"background-color":"#fff"}).siblings().css({"background-color":"#D8D8D8FF"});
				$("#content").css({"display":"block"});
				$(".newBockmenu , .newComent").css({"display":"none"}) }) ;break;
			case 1 : $(e).click(()=>{
				$(e).css({"background-color":"#fff"}).siblings().css({"background-color":"#D8D8D8FF"});
				$(".newBockmenu").css({"display":"block"});
				$("#content, .newComent").css({"display":"none"}) });break;
			case 2 : $(e).click(()=>{
				$(e).css({"background-color":"#fff"}).siblings().css({"background-color":"#D8D8D8FF"});
				$(".newComent").css({"display":"block"});
				$(".newBockmenu , #content").css({"display":"none"}) });break;
		}
	})
}
changDerection();

// функция добавлениея нового блока
$(".newBockmenu form button").click((e)=>{
	let newBlock = $("<div></div>").addClass(()=>$(".newBockmenu select").val() == 1 ? "box" : "box boxall");
	let img = document.querySelector("#fille")
	let reader = new FileReader();
	let src;
	reader.readAsDataURL(img.files[0]);
	let promis = new Promise((resolve)=>{
		reader.onload = function (){
			src = reader.result;
			resolve();
		}
	}).then(()=>{
		if($(".newBockmenu input:radio:checked").val() == "in"){
			newBlock.removeClass("boxall").append($("<img src='"+src+"' title='dfsdfds'>"));
			newBlock.append($("<span></span>").text($(".newBockmenu textarea").val()));
		}else{ newBlock.css({"background": "url('"+src+"') left repeat-x" , "background-size": "contain"})
		newBlock.append($("<span></span>").addClass("spanBoxall").text($(".newBockmenu textarea").val()));
		 }
		$("#content .grid").append(newBlock);
	})
e.preventDefault();
});

//////// Добавление коментариев

$(".newComent button").on("click",
function (e){
	let a =$("<div class='comentFlex'></div>").append($("<span class='left comentName'></span>").text($(".newComent form input:text").val()))
	.append($("<span class='right ComentData'></span>").text(()=>new Date().toLocaleString()))
	.append($("<div class='clear'></div>")).append($("<div></div>").html($("<span></span>").text($(".newComent form textarea").val()))).
	appendTo(".coment");
	return false;
})











});


*/







/*




jQuery(document).ready( function($){     //  $(function function_name(argument) {// body...});  тоже что и первый способ .Код будет выполнен поле загрузки страницы
//аргумент $ передаеться что бы обращаться к jQuery переданому как аргумент а не на прямую, что бы при использовании других библиотек небыло конфликта






alert("fdsfds")


<?php
if($_GET['name']){
	echo "ответ от сервера - ".$_GET['name'];
}
if($_POST['name']){
	echo "ответ от сервера - ".$_POST['name'];
}
if($_POST['id']){
	$id=$_POST['id'];
	$db = new mysqli("localhosst",'Victor','123','my_db');
	$result = $db->query("SET NAMES 'UTF8' ")
	$result = $db->query("SELECT title,date,author,text FROM statti WHERE id = '$id'");

	$row = $result->fetch_array();
	exit(json_encoge($row));
}
?>






////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 28  AJAX  --- общение с сервером без перезагрузки страницы


		//$.get("server.php",{"name":"Vasy"},function(d_data,status){alert("запрос успешо выполенен")},dateType);
//Первый парам - путь к файлу к котороиу обращаемся.Втрой парам- отправляемые данные.
//3-й парам функция которая выполниться после ответа сервера. d_data-данные которые возвращает секрвер. status -статус выполнения запроса( с ошибкой или норм все)						
//4-й dateType тип данных которен приходят . 'xml'  'html' 'script' 'json' 'text'
$("header").click(function(e){
	//alert("asdasdads")
	$.get("server.php",{"name":"Vasy"},function(data){alert("запрос успешо выполенен" +data)},'text');
})



function befor() {
	$("#aaa").text("Ожидание данныз")
}
function after(date) {
	$("#aaa").text(data);
}

$("header").bind("click",function(){
	var admin = "Admin";
	$.ajax({
		url:"server.php",
		type: "POST",
		data:({name:admin,number:5}),
		dataType:"html",
		beforeSend:befor,
		success:after
	});
});












////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 27  Дополнительные методы управления анимацией
/*	//.animate()  //плавное изменеие css  свойств
$("img:first").click(function(e){
	$(this).css({"border":"3px solid red"})
	$(this).animate({"width":"+=150px","height":"hide","borderWidth":"40px solid red"},//"width":"+=150px" увеличение шарины на 150px||
																		// Также можно передать вместо пикслей метод "height":"hide"
		2000, //скорость анимации
		"swing" ,//ускорение анимация к концу или т.д
		function() {alert("da")} //функия которая будет вызвана после выполнения анимации
		)
})  
// второй способы вызова  .animate()
$("img:first").click(function(e){
	$(this).css({"border":"3px solid red"})
	$(this).animate({"width":"+=150px","height":"hide","borderWidth":"40px solid red"},
					{
						"duration":1000,//время выплднения анимации
						"easing": "swing" ,//ускорение анимация к концу или т.д
						"complete":function() {}, //функия которая будет вызвана после выполнения анимации
						"step":function() {console.log("step")},//функия которая будет вызвана после каждого  шага анимации
						"queue": true , //слудует пгомещать анимацию в очередь ии нет
					}
					)
})  

//Анимациибудет выполняться по очереди не останавливет обработку скрипта     .queue()     .dequeue()     .clearQueue() 
$("#anim").animate({"top":"90%"},2000)
$("#anim").animate({"left":"90%"},2000)
alert("dsfds")

$("#anim").queue(function(){alert("asdada"); //сработае между анимациями
	$(this).dequeue();					//метод для продолжения выполнения очереди анимация без него анимации остановяться
	});
$("#anim").animate({"top":"0px","left":"0px"},2000)

$("#anim").clearQueue();// Очищает очередь анимаций кроме той анимации что уже ввыполняеться 

$("#anim").fadeOut(2000)

$("#anim").queue("fx","new"); // Возвращает очередь анимаций /// "fx" имя очереди  по умолчанию "new"--новое имя очереди


				//   .stop() .dequeue()
$("#anim").animate({"top":"90%"},2000)
$("#anim").dequeue();// говорит о том что две анимации выполняються одновременно без очереди .Применяеться сразу для всех анимаций в очереди
$("#anim").animate({"left":"90%"},2000)

$("#anim").stop(); // остановит первую анимацию которая в очереди уже выполняеться
$("#anim").stop(true); // остановит все анимации перед методом
$("#anim").stop(true,true); // остановит все анимации перед методом но позиция эелемента будет как будто первая анимация выполнилась и ее функция callback отработает
$("#anim").stop(false,true); // остановит все анимации перед методом но позиция эелемента будет как будто все анимации выполнились и ее функция callback отработает
$("#anim").animate({"top":"0px","left":"0px"},2000)
$("#anim").fadeOut(2000);



				//   .delay()
$("#anim").animate({"top":"90%"},2000)
$("#anim").delay(2000)// Задержка в очережди анимаций 
$("#anim").animate({"left":"90%"},2000)
$("#anim").animate({"top":"0px","left":"0px"},2000)
$("#anim").fadeOut(2000);

				//   .toggle(2200, function(){}) Скрыть или показать элемент

				//   .finish() Скрыть или показать элемент

$("#anim").animate({"top":"90%"},2000)
$("#anim").animate({"left":"90%"},2000)
$("#anim").animate({"top":"0px","left":"0px"},2000)
$("#anim").finish()// мгнавенно выполянет все анимации в очереди перед ним
$("#anim").fadeOut(2000);


$.fx.interval = 0;// Не работает .Шаг анимации
$.fx.off = true; // отклюяение анимационных эфектов анмация прописаных после нее
$("#anim").animate({"top":"90%"},2000)
$("#anim").animate({"left":"90%"},2000)
$("#anim").animate({"top":"0px","left":"0px"},2000)

$("#anim").fadeOut(2000);

////////////    			Домашние задание

$("img").one("click",function(e){

	$(this).parent().fadeTo(100,0.2).end().clone().appendTo("ul:last").css({width:"30px",height:"30px"}).animate({width:"80px",height:"80px"});
})



$("img").hover(function(){
	$("img").not(this).animate({width:"-=15px",height:"-=15px"},150)
	$("#anim").dequeue();
	$(this).animate({width:"+=30px",height:"+=30px"},150)
},
function(){
	$("img").not(this).animate({width:"+=15px",height:"+=15px"},50)
	$("#anim").dequeue();
	$(this).animate({width:"-=30px",height:"-=30px"},50)
})


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 26 Анимация методы

$("header span").click(function (e) {
	//e.stopPropagation()								// изменяет значение display
	$("header span").hide(2000,function(){alert("da")}) // первое -- время анимации , второе -- функция которая выпониться после анимации 
	return false
})
$("header").click(function (e) {
	$("header span").show(2000)
})



$(".menu").click(function (e) {
	if($(this).children().next().css("display") !="none"){
	$(this).children().next().slideUp(); //свернуть элемент
	}else $(this).children().next().slideDown(100); //развернуть элемент
})   


$(".menu").click(function (e) {
	$(this).children().next().slideToggle(); //развернуть элемент если свернуть или сврнуть 
}) * 

$(".menu").click(function (e) {
	if($(this).children().next().css("display") !="none"){
	$(this).children().next().fadeOut(1000); //скрыть элемент путем изменения прозрачности
	}else $(this).children().next().fadeIn(100); //показать элемент путем изменения прозрачности
}) 

$(".menu").click(function (e) {
	$(this).children().next().fadeToggle(); //показать элемент если скрыт или скрыть  
}) 

$(".menu").click(function (e) {
	$(this).children().next().fadeTo(1000, 0.3,function(){}); //сделать элемент прозрачным до значения 0,3
}) 


// домашние задание

$("form").submit(function(){
	$(".masege").fadeIn(1000,function() {return new Promise ((res)=>{
		$(".masege span").text("отправка данных") ;
		setTimeout(()=>{$(".masege span").text("отправлены "); res()},1000);}).then(()=>{$(".masege").fadeOut()})
		})})	


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 25 Обьект event

/*								//Методы

$("a").on("click",function(event){event.preventDefault()}) //отменяет действие по умолчанию типа переход по ссылке и т.д.
event.isdefaultPrevented() // проверяет вызывался ли методот preventDefault()  вернет true / false

$("a").on("click",function(event){event.stopPropagation()});// отменяет всплытие события так же как и возвращаемое значение false из функции
event.isPropagationStopped() //проверяет вызывался ли методот stopPropagation()  вернет true / false

$("a").on("click",function(event){event.stopImmediatePropagation()}); //если назначено несколько функция обработчика события сработает только первая.отменяет всплытие события
event.isImmediatePropagationStopped()

						//свойства
event.currentTarget// совпадет с значнием this. Элемент событие которого обрабатывается
event.date //обьект переданый перед функцие обработыика события
event.delegateTarget// при всплытии укажет содержит элемент на который установлено событие 
event.pageX//кординаты мыши
event.pageX
event.namespace// пространство имен события
event.relatedTarget//при событии  mouseout содержит обьект куда переместился курсор  / mouseover содержит обьект от куда пришел  курсор
event.result// содержи значение возвращяемое предыдущей функцией обработчиком этого же события
$("a").on("click",function(event){return 50});
$("a").on("click",function(event){console.log(event.result)});//50

event.target// обьект эелемента источника события
event.timeStamp// время когда произошло событие в милисикунлдах начиная с первого января 1970 года
event.type// тип события
event.witch//норме гнажатой клавиши 


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 24 Дополнительные события

$("#mass").bind("click mouseover",{"a":10},function(event){alert(event.data.a); return false}); //назначем функцию на несколько событий.
// return false отменяет действие по умолчанию
$("#mass").bind({"click":function(){alert("clivk")},
					"mouseover":function(){alert("mouseover")}
							})
$("#mass").unbind()//удалит все обработчики событий
$("#mass").unbind("click")//
$("#mass").unbind("click" , false)//если функция события возвращала false


$("header").delegate("span","click",{"a":10},function(event){alert("dsfsd")})// Если элемент на страницу будет добавлен через js
// то оброботчик события назначиться и ему , в отличее от метода .bind(); 
//Метод вызываетья для родительского элемента и первыйм аргуметом метода delegate() уточняеться от какого именно дочернего элемента происходить всплытие события
$("header").undelegate()


$("#mass").one("click",function(event){alert("event.data.a")})// Событие отработает всего один раз


$("#mass").on("click",function(){alert("dfs")}) // в такой форме работает как метод bind()
$("header").on("click","span",{"a":10},function(){alert("dfs")})// в таком формате работает как метод delegate() 
//"span" указывает на дочерний элемент  к которому првжеться событие
$("header").on({"click":function(){alert("clivk")},
				"mouseover":foo
			},
			"span"
				,{"a":10})
function foo(event) {
	alert("mouseover")
}

$("#mass").off("mouseover") //Удаляет обработчик событий  Второй (уточнение дочернего элемента на котором событие)и третий параметр(имя функции) не обязательные
$("#mass").off("click":foo1,
				"mouseover":foo
			)


$("#mass").trigger("click"); // вызвает на исполнение событие
$("#mass").trigger("click",["arg1","arg2"]);//параметры переданые в массиве попадут в аргументы функции привязаной к событию
$("#mass").bind("click mouseover",function(event,arg1,arg2){alert(arg1)}); 
	
$("#mass").bind("my_ev",function(){}) //можно придумывать свое событие
$("#mass").trigger("my_ev")// можно вызвать событие предуманое пользователем 

$("#mass").triggerHandler("click"); // вызвает на исполнение функцию обработцик события без срабатывания событи


			//jQuery.proxy(arg1,arg2) метож используеться для задание значения ключевому слову this
			

let obj = {
	name : "Andrey",
	foo:function(param){
		alert(this.name)
	}
}

$("header").on("click",jQuery.proxy(obj.foo,obj)) //  метож используеться для задание значения ключевому слову this
//первый аргумент это функция    второй аргумен обькт на который укажет ключевое слово this

$("header").on("click",jQuery.proxy(obj,"foo", "param"))первый аргумент это обьект,  второй аргумен функция обьекта , третий аргумент попадет в аргументы функции foo()






////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 23 События загрузки страници и события браузера

 .ready(срабатывает когда сформирована структура дом но еще не загружены картинки мультимедия и т.д. Сработает перед window.onload)
.load(срабатывает когда сформирована структура дом и вся мультимедия загрузиться) 
$("img").load({"a":10},(event)=>{}) // Если картинка будет уже иметься в кэше браухера событие на сработает
.unload(сработает при закрытия страницы)

						//события браузера

//$("img").error((e)=>{alert("img eror")}) // не работает 						
$(window).resize(()=>alert("sadasd"))//сработает при изменнении размера окна
$(document).scroll((e)=>console.log("asdsa"))

/////            домашняя работа
$(document).scroll(function(e){ $(this).scrollTop() > 150 ? $("div.scroll").css({"position":"fixed",top:"50px",width:$("div.scroll").css("width")}):
	$("div.scroll").css({"position":"relative",top:"0px"})})


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 22 События форм  


// .focus()  .blur()   .focusin( сработает при получении фокуса дочерним эелементом)   .focusout() 
//.select(работает для textarea и input:text .стработает при выделение текста )    .submit()    .change()   По аналогии с .сlick()

$("input:text").select((e)=>console.log(e))
$("form").submit((e)=>alert(e)) // срыботает перед отправкой формы

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

								//Урок 20 События Мыши  ,Урок 21 События клавиатуры

$("li").click(); //вызвает событие  click назначиное для элумента рание (Равносильно клику по элементу)

$("li").click(function(event){ //event обьект события.  В свойстве  target лежит элемент на котором сработало событие
	$(event.target).attr("class","bbb")
})
$("li").click({"a":10},foo); // первым парамсетром можно передать обьект и получить его в функции через vent.data
function foo(event) {
	console.log(event.data.a)
}
// .dblclick()  .mousedown()   .mouseup() .mouseout() .mouseover() .mousemove(движение мыши внтури обьекта);
// .mouseenter(сработает при навде на элмент) .mouseleave(сработает при отводе на элмент) По аналогии с .сlick()

$("header").hover(function(event){ //Принимает две функции перва сработает при наводе курсора на элемент , вторая при отводе курсора
	alert("in")
},
function(event){
	alert("out")
}
)
/////////////////////////////////////////События клавиатуры 

// .keydown()    .keyup()    .keypress() По аналогии с .сlick()


$(document).keypress({"a":10},(event)=>alert(event.which))// which номер клавиши .key значение клавиши


/// домашние задангие 
							///  1  выпадающие меню

$("div.menu>span").click((e)=>$(e.target).next().css("display")=="none" ? $(e.target).next().css({"display":"block"}): $(e.target).next().css({"display":"none"}));
//[].forEach.call(document.querySelectorAll("div.menu>span"),(e,i,a)=>e.onclick = (e)=> e.target.nextElementSibling.style.display=="block"?  //аналог на чистом JS
//	e.target.nextElementSibling.style.display="none" : e.target.nextElementSibling.style.display="block" )

							///  2  Создать блок с определенным позиционированием скрыть показать

$("#aaa").hover(
	(e)=>{$("#dMenu").css({"display":"block"})}
	,
	(e)=> $("#dMenu").hover(function(e){$(this).css({"display":"block"})} , function(e){$(this).css({"display":"none"})} )

	)


							///  3 в форму можно вводить только цифры
$("input:text").keypress(function (e) { 
	 return isNaN(e.key) ? false : true;    // true / false  возвращаемые из функции отменяют или подтверждают действие по усолчанию

})							



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

							//Урок 19 Доп методы по работе с выборкой



$("li").add("header") ; //add добавляет эелементы в выборку
$("article ul").add(" li","footer"); //add первый аргумент элемент оторый добовляем , Второй аргумент родитель у которого ищем li

$("img").parent().andSelf();//НЕ СРАБоТАЛ?? Добавляет к выборке $("img").parent() сам обькт $("img")

$('#replese').contents()//Возвращает все дочерние элементы в том числе и пустые и нет текстовые узлы которые находяться между элементами

	.end(); //возвращает к предыдущему эелементу выборки тоесть к $("li")
$("li").text("delete").html("<span>span</span>").parent().css({border:"1px solid red"}).end().css({border:"1px solid blue"})


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

							//Урок 18 Циклический проход выборки


$("li").each(function(i,elem) { // Проходит по всем эелементам выборки //elem   элемент обьекта дом
	//alert($(this).text())
})

let rez = $("img").map(function(i,elem) { // Проходит по всем эелементам выборки и возвращает массив из возвращаемых значений
	return $(elem).attr("src");
})
//alert(rez[3])

let raz = $("li").map(function(i,elem) { // Проходит по всем эелементам выборки и возвращает массив из возвращаемых значений
	return $(elem);
})
//alert(raz[1].html())  // в raz  будет храниться обьект в нутри которого лежат обьекты, а не такую же выборку как мы передовали методу map

////////////////Домашние задание 
							//1 Четные и не четные эелементы в каждом ul по отдельности закрасить в разные цвета
$("ul").each((indx,elem)=> $(elem).children("li").each((i,e) => i%2==0? $(e).css({border:"1px solid red"}):$(e).css({border:"1px solid blue"})) )  

							//2 
$("img").each((i,e)=> $(e).attr("title",$(e).attr("src")));

[].forEach.call(document.getElementsByTagName("img"),(e,i,a)=> e.title = e.getAttribute("src") ) //Аналог на js

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

							//Урок 17 Фильтрация выборки

$("div").eq(); //вернет элемент под номером в выборке
$("div").filter(".left")// выбирает div c классом left
$("div").filter(function(i){ //return i==7? true:false
return this.id =="replese" ? true:false ; 
}).css({border:"1px solid green"})

$("div").first(); //первый элемент из выборки
$("div").last(); //последний элемент из выборки
$("div").has("img");//вернет div в которых есть img
$("div").is(".replese");//возвращает true/false. проверяет в выборки наличие элемента 
$("div").is(function(i){  // проверяет есть ли в выборке элемент с позицией 1
	if(i ==1) return true;
});
$("div").not(".menu");//исключает из выборки div с классом menu
$("div").not(function(i){
	return true / false     //true значит что элемент надо убрать из выборку
});

$("div").slice(0,5);// вернет все эелементы с индексом с 0 по 5

//

$("div").has("img").last().css({border:"1px solid red"})

$("footer ol").last().find("li").not(function (i) {
	if(i==1){
		return false
	}else return true
}).css({border:"1px solid red"})

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

							//Урок 16 работа с деревом DOM		

$("#replese").children().css({border:"1px solid green"});// получаем дочерние элементы 
$("#replese").children("p");// получаем дочерние элементы типа P

$("#replese").closest("[class]").css({border:"1px solid red"});//ищет ближайшего родителя который соотвветсвует аргументу метода.
//сам элемент тоже участвуетв списке поска

$("#replese").find("li").css({border:"1px solid blue"})//ищем в эелементе другие элементы на всех уровнях вложености

$("#replese").next().css({border:"1px solid black"}); //следующий братский узел
$("#replese").next("p").css({color:"blue"}); //следующий братский узел если он p
$("#replese").nextAll().css({border:"1px solid black"});//все  следующий братский узел
$("#replese").nextUntil("p").css({border:"1px solid black"});//все  следующий братский элементы до того что передан в аргументу

$("#replese").prev();передыдущий братский эдемент. prevAll() / prevUntil("div")

$("#replese").offsetParent();//ищет родетяля у которого задано свойство position

$("#replese").parent().css({border:"1px solid black"});//ищет родительский элемент
$("#replese").parents().css({border:"1px solid black"});//ищет родительский и прорадительские элементы
$("#replese").parentsUntil("article").css({border:"1px solid black"});//ищет родительский и прорадительские элементы до блока article

$("#replese").siblings().css({border:"1px solid black"});// все братские узлы



/////////// Домашние задание 

$(".grid>div:last").html(()=>{ return ('	\
		<ol>\
			<li id="start">пункт1\
				<ol>\
					<li>пункт1\
						<ol>\
							<li>пункт1</li>\
							<li><b>пункт2</b></li>\
							<li>пункт3</li>\
						</ol>\
					</li>\
					<li>пункт2</li>\
					<li>пункт3</li>\
				</ol>\
			</li>\
			<li>пункт2</li>\
			<li>пункт3</li>\
		</ol>')});

//$(".grid>div:last").children().children("li:first").children().children("li:first").find("li:odd").css({border:"1px solid red"})
$(".grid>div:last").children().find("ol:last").find("li:odd").css({border:"1px solid red"})




////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

							//Урок 14 Замена элементов , Урок 15 копирование элементов

$("header").replaceWith("asdasd");//замена элемена на передаваемый в параметрах элемент.Если это элемент который есть на транице он будет перемещен
($("img")).replaceAll($("header"));// тоже самое только другой порядок передачи параметров
$("header").clone(true/false , true/false); //кланирует эулемунт.Первый параметр говорит надо или нет копировать обработчики событий,
// Второй параметр говорит надо или нет копировать обработчики событий дочерних элементов , ПО УСОЛЧАНИЮ ВЕЗДЕ false
$("header").before($("header").clone());
$("header").before($("img:first").clone().css({"width":"50px"}));

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/							//Урок 12 удаление содержимого элементов

$("header").detach();//удаляет эелемент , возвращает его при присвоении переменой этого выражаения.сохраняються так же обработчики события
$("header").detach(":last");
$("header").remove();//удаляет эелемент , возвращает его при присвоении переменой этого выражаения.НЕ сохраняються обработчики события

$("header").empty()//удаляет содержимое элемента

let a;
$("input:button").click(()=>{
	 a =$("ul:last li:last").remove();
})
$("input:reset").click((r)=>{
	 $("ul:last").prepend(a.text((i,e)=>e+"востоновлено") );
	 r.preventDefault();
})




								//Урок 11 добавление элементов

$("header").html();// тоже что и innerHtml
$("header").html("<p>header</p>");//заменили слодержимое header
$("header").html($("img").css({"width":"150px"}));//заменили слодержимое header на другую выборку элементов удаляя их с того места где они были
$("header").html(function (index,value) {
	return "<p>header</p>"
})

$("header ").text();// тоже самое что и textContent
$("header ").text("dsfdsfdsf");// сотрет все что в нутри блока и вставит строку
$("header ").text(function (index,value) {
	return "header"
})

$("img").wrap("<p class='sdfds'></p>"); //оборачиваетэлементы в тег;
$("img").wrapAll("<p class='2222'></p>");// перемещает все эелементы в кучу и оборачивате эту кучу в тег
$("img").wrap(function () {
	return "<p></p>"
});

$("header").wrapInner("<p></p>");//обернет содержимое блока hedader в тег
$("header").wrapInner(function () {
	return "<p></p>"
});
$("p").unwrap();//удаляет родительский эелемент оставляя дочернии на странице

$("<p>новый создайный элемент</p>")//создаем новый элемент

$("ul").append("<p>sdfdsf</p>")// добавляем новое соержимое в конец блока
$("ul").append(function (index,value) {
	return "<p>новый создайный элемент</p>"
})
$("<p>новый создайный элемент</p>").appendTo($("ul"))/// добавляем новое элементь  в конец блока переданого как параметр метода

$("ul").prepend("<p>d в начало</p>")// добавляем новое соержимое в начало блока

$("<p>новый создайный элемент</p>").prependTo($("ul"))// добавляем новое элементь  в начало блока переданого как параметр метода

$("ul").css({"border":"1px solid red"})
$("ul").after("<p>новый создайный элемент</p>");// добавляет эелемент на место следущего братского, Принимает в качестве аргумента функцию
$("<p>новый создайный элемент</p>").insertAfter("ul");// добавляет эелемент на место следущего братского элемента переданого в параметре
$("ul").before("<p>новый создайный элемент</p>");// добавляет эелемент на место предыдущего братского, Принимает в качестве аргумента функцию
$("<p>новый создайный элемент</p>").insertBefore("ul");// добавляет эелемент на место предыдущего братского элемента переданого в параметре

/////////Домашние задание

//$("ul").prepend($("li:last-child"));

//вывести значение введенное в форму в виде блокак на страницу
function foTest() {
	let a = $("form input:text").val()
	$("div.textContent").prepend(()=>{

		return "<div>"+a+"</div>"
		//$("<div></div>").css({"height":"100px",border:"1px solid green"}).append(a)
	})
}





							       //Урок 9-10 Работа со стилями


$("header").css("width"); //получаем знаяение width
$("header").css({"padding","20px","marginTop","20px"});
$("header").css("marginTop","20px").addClass("className"); //методы можно вызвать по очереди
$("header").css("marginTop",function(index,value){
	alert(value) ;return "new_class"});
alert($("header").height());//высота пространства в нутри блока
	$("header").height("50px");
alert($("header").innerHeight());//высота пространства в нутри блока + padding
alert($("header").outerHeight());//высота пространства в нутри блока + padding + border
alert($("header").outerHeight(true));//высота пространства в нутри блока + padding + border + marging
$("header").width();
$("header").innerWidth();
$("header").outeWidth();


let a ; //возвращает и изменяет положение элемента
a = $("header").offset("top"); //возвращает и изменяет позицю элемента
a = $("header").offset().left;//возвращает и изменяет позицю элемента

$("header").offset({"top":100, "left":250})//смещаем эелемент
$("header").offset(function(index,value){
	alert(value.top);
	return	{"top":100, "left":250}
})

$("header").offsetParent();//вернет родителя у которого прописанно CSS свойство position

a= $("header").position().top;//возвращает и изменяет позицю элемента относительно ближайшего родителя у которого прописанно CSS свойство position
a= $("header").position().left;

a= $(":root").scrollTop();   // Возвращает велечину прокрутки   :root корневойэлемент
 $(":root").scrollTop("50"); 
a= $(":root").scrollLeft();

$.cssHooks//для добавление правил css крос браузерность 

alert(a)

///////////////////////////								Домашние задание
/////////////////

window.onload = function (event){

window.onscroll = foo;
document.getElementById("fix").addEventListener("click",scroll,false);


function scroll() {
	let scrrol = $(":root").scrollTop();
	scrrol -=10;
	$(":root").scrollTop(scrrol);
	if($(":root").scrollTop()>0){
		setTimeout(scroll,5);
	}
}

function foo(argument) {
	let divFix = $("div#fix");
	function hide() {
		let h = divFix.css("opacity");
		h= +h;
		h = 0.1 +h ;
		divFix.css({"opacity":h});
		if(h < 1 ){
			setTimeout(hide,10)
		}else return
	}

	function noneHide() {
		let op = divFix.css("opacity") ;
		op -=0.1;
		if(op>0){ 
			divFix.css({"opacity":op});
			setTimeout(noneHide,10)
		}else{
			divFix.css({"display":"none"});
			return
		}
	}
	if($(":root").scrollTop() > 150 && $("div#fix").css("display") !="block"){
		$("div#fix").css({"display":"block"});
		hide()
	}
	if($(":root").scrollTop() < 50 && $("div#fix").css("display") != "none"){
		noneHide()
		}
	}
}









								// Укрок 8  Работа с атрибутами элементов


						
$("header a ").attr("href","#"); //меняем занчение атрибута href 
$("img ").attr("src"); // в такую выборку попадет только значение атрибута первого элемента в выборке
$("img ").attr("src","1.jpg"); // для всех элементов img изменится значение атрибута
$("img ").attr("src",$("img:eq(2)").attr("src")); // вторым параметром можно передавать выражение 
$("img ").attr({"src":"1.jpg",
				"title":"new atribute"
				});
$("img ").attr("heigth",function(){return "10px"});

$("header a ").removeAttr("href");//удаляет атрибут
$("header a ").addClass("className classNam2 classNam3");//даляет класс
$("header a ").addClass(function(index,classs){return "new_class"});//добляет класс
$("header a ").removeClass("");//удаляет все классы у эелемента
$("header a ").removeClass("className");//удаляет класс className у эелемента
$("header a ").removeClass(function(index,classs){return "new_class"}); //в index попадает позиция элемента , classs попадает текущий класс эдемента
$("header a ").toggleClass("prev");//если такой класс есть она будет удален , а если нет добавлен 
$("header a ").toggleClass("prev",true//false);// при заданом true//false класс будет или только добовляться или только удаляться
$("header a ").hasClass("className");// проверяе наличие класса className хотябы у одного у элемента из выборки
$("header a ").val(); //  доступ к значению value  у выбраного элемента
$("header a ").val("new value"); 
$("header a ").prop("tageName"); // читает занчение атрибутов
$("header a ").prop("class","newClass");// работает так же как attr();
$("header a ").prop("checked");// в основном импользуесться для проверки чек боксов
$("li").addClass(function(i,x){ ///$(this)указвает на элемент к которому применили функцию
 	$(this).removeClass("one");
 	return"bbb"
 });
//////////////// домашние задание 
/////////////

$("div.imgGrid div:nth-last-of-type(3) ,div.imgGrid div:nth-last-of-type(3) img ").attr({"style":"height:50px"})
$("ul li").addClass(function(i,clas){
	if(i==2){return "firstClass"
	}else {return "secondClass"}
});

let i = 0;
function test1(argument) {
	var a = $("#mass");
	a.toggleClass("firstClass");
	if(i>0){a.toggleClass("secondClass")}
	i++;
}


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////





//                        // Урок 7 Сулекторы .Выбор по нескольким селекторам

$("div.menu + p")// вернет следующий братьсякий теги <p></p> элемент блока div.menu 
$("div.menu ~ p")// вернет все предыдущие братьсякий теги <p></p> элемент блока div.menu 
//доп фиольтры 
$("li:eq(7)")//7 элемент li
$("li:first-of-type")//вернет все эдементы li которые являються первыми дочерними в своем блоке.
//В выборку дочерних элементов из которой будет выбран первый дочерний li попадут только элементы типа li
$("li:last-of-type")//вернет все эдементы li которые являються последними дочерними в своем блоке
$("li:nth-last-of-type(3)")//вернет все эдементы li которые являються  3-ми с конца дочерними элементами в своем блоке
$("li:nth-of-type(3)")//вернет все эдементы li которые являються  3-ми с начала дочерними элементами в своем блоке
$(":hidden")//вернет скрытые элементы на страницу
$("li:nth-last-child(3)")//вернет все эдементы li которые являються  3-ми с конца дочерними элементами в своем блоке. в выборке усчаствуют все дочерние элементы
$("li:nth-of-type(3)")//вернет элементы у которых нет братьев
//$("div div:first-of-type>img").css({"border": "1px solid red"});






                         // Урок 6 	Работа с формамии

$("input:button//submit//reset//radio//checkbox//text//password//file//submit//reset//image//selected(это элементы типа option)//checked//enebled//disabled")
<input disabled="true"> // такой элемент нельзя выбрать или отредактировать
$("form :input")// элементы типа input, textarea,button
$("selected(это элементы типа option)")// <select><option>1</option><option>2</option></select>
function foo(argument) {
	alert($("select :selected").val())
}
//////////////// домашние задание 
/////////////

function foTest() {
	let v = $("input:radio:checked").val();
	v = +v;
	switch(v){
		case 1 : $("li:even").css({"border":"1px solid red"}); break;
		case 2 : $("li:odd").css({"border":"1px solid red"}); break;
		case 3 : $("li").css({"border":"0px"}); break;
	}
}







						// Урок 2  выборка элементов ,Урок 3  фильтры , Урок 4 Селекторы. фильтры по содержанию ,Урок 5 Фильтр дочерних эелементов

	$("#forma form input[type = radio]").css({"margin":" 20px "});	//тоже что и $("#forma form input:radio").css({"margin":" 20px "});		
	$("*") ; //выбор всех элементов страниы
	$(".className") ; //выбор элементов c классом className
	//$(".menu").css({"border": "1px solid red",
	//	"background-color":"red"});//изменение стиля css
	$("[class]"); // выбор эдементов у которых есть атрибут class
	$("[class=menu]"); // выбор эдементов у которых  атрибут class = menu
	$("[class!=menu]"); // выбор эдементов у которых  атрибут class не равен menu
	$("[class^=me]"); // выбор эдементов у которых значение атрибута class начинаетья с букв me
	$("[class $= nu]"); // выбор эдементов у которых значение атрибута class заканчиваеться буками nu
	$("[class *= en]"); // выбор эдементов у которых значение атрибута class имеет подстроку буками en
	$("[class ~= en]"); // выбор эдементов у которых значение атрибута class имеет подстроку буками en отделенная пробелами
	$("[class |= pref]"); // выбор эдементов у которых значение атрибута class = pref  или имеет префикс pref- /Пример class="pref-str"
	$("[class][name]"); // выбор эдементов у которых есть атрибуты  class и name 
	//alert($("*").html());// тоже что и innerHTML;

   ////////////////////////////////////////////////////   3

    $("li:first").css({"border": "1px solid red"}); // находит первый лемент в выборке 
    $("li:last").css({"border": "1px solid red"}); // находит последний лемент в выборке 
    $(".menu:not(span)").css({"border": "1px solid red"}); // находит все эелементы с классом кроме элементов <span> с этим классом
    $("li:even").css({"border": "1px solid red"}); // находит все элементы с четными позициями в полученой выборке
    $("li:odd").css({"border": "1px solid red"}); // находит все элементы с не четными позициями в полученой выборке
    $("li:gt(3)").css({"border": "1px solid blue"}); // находит все элементы с  позициями в полученой выборке больше 3  
    $("li:lt(3)").css({"border": "1px solid blue"}); // находит все элементы с  позициями в полученой выборке меньше 3  
    $("*:header").css({"color": "blue"}); // находит все геги header (h1,h2 ...)
    $("li:animated"); // находит все элементы задействованые в анимации  

    //фильтры можно устанваливать стразу несколько прописывая по очереди

    ////////////////////////////////////////////////////   4

    $(":contains(text)"); //эелементы содержащие заданый текст
    $(":empty"); //элементы без содержимого (без текста и других элементов)
    $("div:has(img)"); //элементы который содержат хотябы один из селекторов. Выбирает блок див в котором есть img
    $(":perent"); //непустые элементы

////////////////////////                             5

//фильтры вызываються у дочерних элементов а не у родителей
	 $("li:first-child").css({"border":"1px solid red"}); //элементы которые являютьяс первыми дочерними у своих родителей	
	 $(":last-child"); ///элементы которые являютьяс послденими дочерними у своих родителей	
	 $("li:nth-child(even)"); //эелемент расположеный определенным номером в своем родительском элементе (четный или нечетныц или под номерм)
	 //нумерация позиций начинаеться с 1  а не с 0 
	 $("div:only-child"); //эелемент являющейся единственым потомком в своем родительском эелементу

//////////////// домашние задание 
/////////////
function test1() {
	$(".imgGrid  div:first-child , .imgGrid div:last-child ").css({"border": "1px solid red"})
	$(".imgGrid  div:nth-child(2)").css({"height":"500px","width": "50px" ,"border": "1px solid red", })
}




});


window.onload = function (event){


	

}


*/

