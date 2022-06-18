// - Create interface for the workload json
interface WorkloadBowItem {
    Nose: string,
    ATA: string
    BOWTYPE: string,
    COMMENTIND: string,
    Priority: string
    Carrier: string,
    CRITUPGRADE: boolean,
    Created: string,
    EMPLOYEENUMBER: string,
    FLEET: string,
    IDENTIFY: string,
    ID: number,
    MEL: string,
    MENUMBER: string,
    Modified: string,
    REF: string,
    TASKDESCRIPTION: string,
    TOTALHRS: number,
    CRIT: number,
    partsData: []
}
interface Workload {
    Nose: string,
    Station: string,
    BOW: Array<WorkloadBowItem>,
    CheckType: string

}

// - Create types
type Point = {
    x?: number,
    y?: number
}

type Line = {
    startPoint: Point,
    endPoint: Point
}

// - Create simple person class, that accepts the persons first name
class Person {
    firstName?: string;
    constructor(firstName?: string) {
        this.firstName = firstName;
    }
}

// - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'
class Mecahnic extends Person {
    title : String = "AMT";
    constructor(firstName? : string) {
        super(firstName);
    }
}

// - 
