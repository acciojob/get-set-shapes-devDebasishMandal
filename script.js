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
		let area=this._width*this._length;
		return area;
	}
}

class Square extends Rectangle {
constructor(side){
	this._side=side;
}
	getPerimeter(){
		let peri=4*_side;
		return peri;
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
