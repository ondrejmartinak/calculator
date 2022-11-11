import CylinderModel from "./cylinder-model";

class BoltModel {

    private totalShape: CylinderModel[] = [];

    getShape():CylinderModel[]{
        return this.totalShape;
    }

    totalArea():number {
        let area: number = 0;
        this.totalShape.forEach(shape => {
            area = + shape.total;
        }
        );

        

        return area;
    }
}


export default BoltModel;