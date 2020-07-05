import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExecuteComponent} from "./execute.component";


const routes: Routes = [
    {
        path: '',
        component: ExecuteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExecuteRoutingModule {
}
