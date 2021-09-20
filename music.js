
const butval1=document.getElementById("bu1")
const butval2=document.getElementById("bu2")
const butval3=document.getElementById("bu3")
const butval4=document.getElementById("bu4")
const butval5=document.getElementById("bu5")
const butval6=document.getElementById("bu6")
const butval7=document.getElementById("bu7")
const butval8=document.getElementById("bu8")
const butval9=document.getElementById("bu9")
const butval10=document.getElementById("bu10")
const butval11=document.getElementById("bu11")
const butval12=document.getElementById("bu12")
const butval13=document.getElementById("bu13")
const butval14=document.getElementById("bu14")
const butval15=document.getElementById("bu15")
const s_n=document.getElementById("s-n")
const a_n=document.getElementById("at-n")
const im=document.getElementById("a-i")
const owner=document.getElementById("owner-info")
const butval16=document.getElementById("bu16")
const ml=document.getElementById("music-lists")
const ra=document.getElementById("range")
const rb=document.getElementById("range-a")

let musictrack=[
{
	name:"Tose Naina",
	artist:"Arijit Singh",
	img:"images/pica.jpeg",
	src:"songs/02. Tose Naina (1).mp3"
},
{
name:"Zindagi",
	artist:"Jubin Nautiyal",
	img:"images/picb.jpeg",
	src:"songs/06. Zindagi (Reprise) - Zubin Nautiyal, Pritam.mp3"
},
{
name:"Dil Diya Gallan",
	artist:"Atif Aslam",
	img:"images/picc.jpeg",
	src:"songs/Dil Diyan Gallan (Tiger Zinda Hai) 128 Kbps.mp3"
},
{
name:"Tujhme rab Dikhta hai",
	artist:"Shreya Ghoshal",
	img:"images/picd.jpeg",
	src:"songs/Tujh Mein Rab Dikhta Hai - Rab Ne Bana Di Jodi 128 Kbps.mp3"
},
{
name:"Tera Zikr",
	artist:"Darshan Raval",
	img:"images/pice.jpeg",
	src:"songs/Tera Zikr - Darshan Raval 320Kbps.mp3"
},
{
name:"Shoot Da Order",
	artist:"Jass Manak",
	img:"images/picf.jpeg",
	src:"songs/Shoot Da Order - Jass Manak.mp3"
},
{
name:"Paagla",
	artist:"Akhil",
	img:"images/picg.jpeg",
	src:"songs/Paagla - Akhil 320 Kbps.mp3"
},
{
name:"Filhaal",
	artist:"B-Praak",
	img:"images/pich.jpeg",
	src:"songs/Filhall - Akshay Kumar B Praak.mp3"
},
{
name:"Do Gallan",
	artist:"Garry Randhawa",
	img:"images/pici.jpeg",
	src:"songs/Do Gallan - Garry Sandhu.mp3"
},
{
name:"Sandal",
	artist:"Sunanda Sharma",
	img:"images/picj.jpeg",
	src:"songs/Sandal - Sunanda Sharma.mp3"
}


]
let index=5;
window.addEventListener("load",()=>{
loadMusic(index);
})

function loadMusic(index){
	s_n.innerHTML=musictrack[index-1].name;
	a_n.innerHTML=musictrack[index-1].artist;
	im.src=`${musictrack[index-1].img}`;
	a.src=`${musictrack[index-1].src}`

}
var a= new Audio();
  a.src="songs/02. Tose Naina (1).mp3";

  var flip=true;
 butval1.addEventListener("click",()=>{
play();
 })
 function play(){
a.play();
 butval1.style.display="none";
 butval2.style.display="block";
 ra.style.display="none";
 rb.style.display="block";
 }
 butval2.addEventListener("click",()=>{
pause();
 })
 function pause(){
 	butval2.style.display="none";
 butval1.style.display="block";
 a.pause();

 ra.style.display="block";
 rb.style.display="none";
 }
 butval4.addEventListener("click",()=>{
 	nextMusic();
 })

 function nextMusic(){
 	index++;
 	if(index>10){
 index=1;
 	}
 	loadMusic(index);
 	play();
 }
 butval3.addEventListener("click",()=>{
 	previousMusic();
 })
 function previousMusic(){
 	index--;
 	if(index<1){
 index=10;
 	}
 	loadMusic(index);
 	play();
 }
 var show=true;
 butval5.addEventListener("click",()=>{
 	if(show){
 		owner.style.display="block";
 		show=false;
 	}
 	else{
 		owner.style.display="none";
 		show=true;
 	}

 })
 var show1=true;
 butval16.addEventListener("click",()=>{
 	if(show1){
ml.style.display="block";
show1=false;
 	}
 	else{
 	ml.style.display="none";
show1=true;	
 	}

 })


 
 butval6.addEventListener("click",()=>{
 	play1();
 })
 function play1(){
 	index=1;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }


 butval7.addEventListener("click",()=>{
 	play2();
 })
 function play2(){
 	index=2;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }


 butval8.addEventListener("click",()=>{
 	play3();
 })
 function play3(){
 	index=3;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval9.addEventListener("click",()=>{
 	play4();
 })
 function play4(){
 	index=4;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval10.addEventListener("click",()=>{
 	play5();
 })
 function play5(){
 	index=5;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval11.addEventListener("click",()=>{
 	play6();
 })
 function play6(){
 	index=6;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval12.addEventListener("click",()=>{
 	play7();
 })
 function play7(){
 	index=7;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval13.addEventListener("click",()=>{
 	play8();
 })
 function play8(){
 	index=8;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval14.addEventListener("click",()=>{
 	play9();
 })
 function play9(){
 	index=9;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }

 butval15.addEventListener("click",()=>{
 	play10();
 })
 function play10(){
 	index=10;
 	loadMusic(index);
 	play();
 	ml.style.display="none";
 }