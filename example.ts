//variables
//boolean,string,number,symbol,
let fullName:string = "Jonathan";
let isTeacher:boolean=true;
let age:number=39;
let oldEay = 102;
//type inference
let oldWay = 102;

let thisisAnything : any;
let thisIsTwoTypes:(boolean|number|string)=true;
thisIsTwoTypes=50;

//retu=rn type could be inferred based on  the retutrn stateement
function Sum (a:number, b:number) : number{
    return a+b;
}

function sayHi(name:string):void{
    console.log("Hi there"+ name);
}

function unionFunction(incoming:(number|string)){

}

let newPlayer: Player = {
    level:12,
    name:"zao",
    class:"monk"
}

let playerArray:Player[]={
    level:12,
    name:"zao",
    class:"monk"

}
    
function playerLevelUp(player: Player){
    playerArray.level +=1;
}