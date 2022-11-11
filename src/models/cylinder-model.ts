import { Shape } from "./Shape";

class CylinderModel implements Shape{
    diameter: number = 0;
    height: number = 0;
    threaded: boolean = false;
    
    constructor(diameter:number, height:number,threaded:boolean=false){
        this.diameter=diameter;
        this.height=height;
        this.threaded=threaded;
    }

    outer() {
        let outer = 2 * Math.PI * this.diameter * this.height;

        if (this.threaded) outer *= 1.5;

        return outer;
    }

    ends(){
       return 2* (2 * Math.PI * Math.sqrt(this.diameter));
    }

    total(){
      return this.outer() + this.ends();
    }
}

export default CylinderModel;