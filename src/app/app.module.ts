import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';   // graficos

// Modulos, estos los cree en cada ruta, alla los export y aqui los import
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { GifsModule } from './gifs/gifs/gifs.module';
import { SharedModule } from './shared/shared/shared.module';

// Componentes de la app
import { AppComponent } from './app.component';
import { HomePageComponent } from './gifs/pages/home/home-page/home-page.component';
import { SearchBoxComponent } from './gifs/components/search-box/search-box/search-box.component';
import { CardListComponent } from './gifs/components/card-list/card-list.component';


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
    DbzModule,
    GifsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
