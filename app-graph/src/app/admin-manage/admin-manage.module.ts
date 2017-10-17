import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from 'app/admin-manage/home-admin.component';
import {AccordionModule} from "ngx-accordion";

@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [HomeAdminComponent]
})
export class AdminManageModule { }
