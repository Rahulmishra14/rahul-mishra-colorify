export class Log{
    static success(msg:string){
        console.log(`%c ${msg}`,'color:green; background:grey');
        
    }

    static danger(msg:string){
        console.log(`%c ${msg}`,'color:red; background:pink');
    }

    static info(msg:string){
        console.log(`%c ${msg}`,'color:black;background:yellow');
    }
}