import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "../../shared/shared.module";
import { NavComponent } from './nav/nav.component';
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { SearchBarComponent } from "./new-search/search-bar/search-bar.component";
import { NewSearchComponent } from './new-search/new-search.component';
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
    declarations: [
        ProfileComponent,
        SearchBarComponent,
        NavComponent,
        NewSearchComponent
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule,
        FormsModule,
        NgbNavModule
    ]
})
export class ProfileModule { }