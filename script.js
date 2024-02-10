//complete this code
class Rectangle {
	construtor(width,height){
		this._width=width;
		this._height=height;
	}
	get height(){
		return this._height;
	}
	get width (){
		return this._width;
	}
	getArea(){
		return (this._width)*(this._height);
	}
}
class Square extends Rectangle {
constructor(side){
	super(side,side);
	this._side=side;
}
	getPerimeter(){
		return 4*(this._side);
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
