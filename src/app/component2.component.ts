import { DataService } from './data.service';
import { Component } from "@angular/core";


@Component({
   selector: 'component2',
   template:`
   <h1>Component 1</h1>
   <div>
     <button (click)="onGetData()">Get randon Data</button>
     <p>Random Data: {{data}}</p>
     <input type="text" #input>
     <button (click)="onAddItem(input.value)">Add Data</button>
   </div>
   `,
   providers: [DataService]
})
export class Component2{
   data: string;
   constructor(private dataService: DataService){}

   onGetData(){
       this.data=this.dataService.getRandomData();
   }

   onAddItem(data: string){
       this.dataService.insertData(data);

   }
}
