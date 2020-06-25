import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PageHeaderModule} from './../../shared';

import {TestRoutingModule} from './test-routing.module';
import {TestComponent} from './test.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TestwebserviceComponent } from './testwebservice/testwebservice.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [CommonModule, TestRoutingModule, PageHeaderModule, ReactiveFormsModule, NgbDropdownModule],
    declarations: [TestComponent, TestwebserviceComponent]
})
export class TestModule {
}
