//This Code Free To Use - Providing This Notice Remains//
	//Autumn leaves- by Kurt Grigg (kurt.grigg@virgin.net)//
	//Modified by Dynamic Drive for NS6 functionality//
	//visit http://www.dynamicdrive.com for this script//
	//Javascript Code Effect Found At: Development Resource & Javascript Code & Generator Public Archive Center//
	//Located: http://www.DesignerWiz.com//
	//Though This Material May Have Been In A Public Depository, Certain Author Copyright Restrictions May Apply*//
	//Pre-load your image below!
	grphcs=new Array(6)
	Image0=new Image();
	Image0.src=grphcs[0]="./img/snow.png";
	Image1=new Image();
	Image1.src=grphcs[1]="./img/snow.png"
	Image2=new Image();
	Image2.src=grphcs[2]="./img/snow.png"
	Image3=new Image();
	Image3.src=grphcs[3]="./img/snow.png"
	Image4=new Image();
	Image4.src=grphcs[4]="./img/snow.png"
	Image5=new Image();
	Image5.src=grphcs[5]="./img/snow.png" 

	Amount=30; //Smoothness depends on image file size, the smaller the size the more you can use!
	Ypos=new Array();
	Xpos=new Array();
	Speed=new Array();
	Step=new Array();
	Cstep=new Array();
	ns=(document.layers)?1:0;
	ns6=(document.getElementById&&!document.all)?1:0;
	
	if (ns){
	for (i = 0; i < Amount; i++){
	var P=Math.floor(Math.random()*grphcs.length);
	rndPic=grphcs[P];
	document.write("<LAYER NAME='sn"+i+"' LEFT=0 TOP=0><img src="+rndPic+"></LAYER>");
	}
	}
	else{
	document.write('<div style="position:fixed;top:0px;left:0px"><div style="position:relative">');
	for (i = 0; i < Amount; i++){
	var P=Math.floor(Math.random()*grphcs.length);
	rndPic=grphcs[P];
	document.write('<img id="si'+i+'" src="'+rndPic+'" style="position:absolute;top:0px;left:0px">');
	}
	document.write('</div></div>');
	}
	WinHeight=(ns||ns6)?window.innerHeight:window.document.body.clientHeight;
	WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
	for (i=0; i < Amount; i++){																
	 Ypos[i] = Math.round(Math.random()*WinHeight);
	 Xpos[i] = Math.round(Math.random()*WinWidth);
	 Speed[i]= Math.random()*5+3;
	 Cstep[i]=0;
 	Step[i]=Math.random()*0.1+0.05;
	}
	function fall(){
	var WinHeight=(ns||ns6)?window.innerHeight:window.document.body.clientHeight;
	var WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
	var hscrll=(ns||ns6)?window.pageYOffset:document.body.scrollTop;
	var wscrll=(ns||ns6)?window.pageXOffset:document.body.scrollLeft;
	for (i=0; i < Amount; i++){
	sy = Speed[i]*Math.sin(90*Math.PI/180);
	sx = Speed[i]*Math.cos(Cstep[i]);
	Ypos[i]+=sy;
	Xpos[i]+=sx; 
	if (Ypos[i] > WinHeight){
	Ypos[i]=-60;
	Xpos[i]=Math.round(Math.random()*WinWidth);
	Speed[i]=Math.random()*5+3;
	}
	if (ns){
	document.layers['sn'+i].left=Xpos[i]+'px';
	document.layers['sn'+i].top=Ypos[i]+hscrll+'px';
	}
	else if (ns6){
	document.getElementById("si"+i).style.left=Math.min(WinWidth,Xpos[i])+'px';
	document.getElementById("si"+i).style.top=Ypos[i]+hscrll+'px';
	}
	else{
	eval("document.all.si"+i).style.left=Xpos[i]+'px';
	eval("document.all.si"+i).style.top=Ypos[i]+hscrll+'px';
	} 
	Cstep[i]+=Step[i];
	}
	setTimeout('fall()',20);
	}

	window.onload=fall
	//-->