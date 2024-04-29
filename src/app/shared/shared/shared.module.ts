import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// ese SidebarComponent aqui lo export para poderlo utilizar en app-component porqu fue creado
// aqui dentro de shared

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
