import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderModule} from "../../shared/modules";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {ExecuteComponent} from "./execute.component";
import {ExecuteRoutingModule} from "./execute-routing.module";


@NgModule({
    imports: [CommonModule, ExecuteRoutingModule, PageHeaderModule, ReactiveFormsModule, NgbDropdownModule],
    declarations: [ExecuteComponent]
})
export class ExecuteModule { }
