// - Create interface for the workload json

export interface part {
    CPN: string,
    Total: number,
    Required: number,
}
export interface BOW {
    Nose: string,
    ATA: number,
    BOWTYPE: string,
    COMMENTIND: string,
    Priority: string,
    Carrier: string,
    CRITUPGRADE: boolean,
    Created: Date,
    EMPLOYEENUMBER: number,
    FLEET: number,
    IDENTIFY: string,
    ID: number,
    MEL: string,
    MENUMBER: number,
    Modified: Date,
    REF: string,
    TASKDESCRIPTION:  string,
    TOTALHRS: number,
    CRIT: number,
    partsData: part[]
}

export interface workload {
    Nose: number,
    Station: string,
    BOW: BOW[],
    CheckType: string
}

// - Create types
  type Name = {
    name: “string”
  };
  
  type Age = {
    age: number
  };
  
  type Person = Name & Age;

// - Create simple person class, that accepts the persons first name
class Person {
    printname = () => {
        console.log("this is my firstname")
      }
}

// - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'
interface title extends Person {
    title: string;
  };
class Mecahnic implements title {
    title: "AMT";
    printmechanic = () => {
        console.log("this is my title")
      }
  };

// - 
