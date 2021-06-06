import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ListSelectionComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListSelectionComponent]
})
export class SharedModule { }
