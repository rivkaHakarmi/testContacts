export class insured{
    constructor(public name : string,
        public type : string,
        public tz : string,
        public adress : string,
        public  age : number,
        public  phone : string,
        public  mail : string,
        public deliveryFlag:boolean,
        public isEdit:boolean,
        public counterId:number=0){
        
    }
   
}