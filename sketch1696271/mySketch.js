function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0)
	noFill()	
    
	var span=map(mouseX,0,width,0,100)
        //用map指令讓圖形隨滑鼠移動座標
    
	for(var x=0;x<width;x=x+100){
	for(var y=0;y<height;y=y+100){
        //迴圈為x(或y)軸從0開始(即起點),當條件成立(即終點前)就需要一直做迴圈執行
        
	stroke(255,0,0)//RGB紅色大圓
	ellipse(x,y,100+span);
	stroke(255,255,0)//RGB黃色正方形
	rectMode(CENTER)
	rect(x,y,100+span);
	stroke(0,0,255)//RGB藍色小圓
	ellipse(x+50,y+50,50+span);
	}
  }
}