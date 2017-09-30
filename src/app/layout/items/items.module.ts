import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';

@NgModule({
    imports: [
        CommonModule,
        ItemsRoutingModule,
        Ng2SmartTableModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ItemsComponent
    ]
})
export class ItemsModule { }
