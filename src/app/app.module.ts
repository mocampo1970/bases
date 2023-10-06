import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';   // graficos

// Modulos, estos los cree en cada ruta, alla los export y aqui los import
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// Componentes de la app
import { AppComponent } from './app.component';


// Ese CounterModule se declara aqui.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
