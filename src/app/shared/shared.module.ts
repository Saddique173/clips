import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { ModalService } from '../services/modal.service';
import {NgxMaskModule, IConfig } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent, EventBlockerDirective],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [ModalComponent, TabsContainerComponent, TabComponent, InputComponent, AlertComponent, EventBlockerDirective],
  providers: [],
  //providers: [provideEnvironmentNgxMask()],
  //providers: [ModalService], // inject service only in specific module insted of globally
})
export class SharedModule {}
