import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './dbz/pages/main-page/main-page.component';
//import { BarChartComponent } from './components/graphics/bar-chart/bar-chart.component';

// =========================NOTA IMPORTANTE:======================================
//
// estas importaciones stes hay otro bubble char de swinlane y debe ser del propio componente
// Lo mismo que line-chart, pie-chart debe importarse de donde es, si las importas de 
// swinlane se daña el node_modules
//=================================================================================


const routes: Routes = [
  {path: 'categories', component: MainPageComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'logout'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
