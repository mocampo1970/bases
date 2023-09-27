import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos, estos los cree en cada ruta, alla los export y aqui los import
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes/heroes.module';

// Componentes de la app
import { AppComponent } from './app.component';


// Ese CounterModule se declara aqui.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
