import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "../../shared/shared.module";
import { NavComponent } from './nav/nav.component';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        ProfileComponent,
        NavComponent
    ],
    imports: [
        SharedModule,
        NgbNavModule
    ],
    exports: [
        ProfileComponent
    ],
    bootstrap: []
})
export class ProfileModule { }