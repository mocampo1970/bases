import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter.component";

// Todo este codigo lo hicimos manual
// Con este decorador le decimos a angular que es un module
// con exports me permite utilizar ese counter en cualquier parte de la app debemos colocar dentro
// el CounterComponent y ya con eso lo podemos utilizar en cualquier parte de la app. 
// Eso si tambien este modulo llamado CounterModule debe estar importado en el app.module
@NgModule({
    declarations: [
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})
export class CounterModule {

}