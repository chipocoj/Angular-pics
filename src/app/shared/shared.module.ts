import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageCardService } from "./services/image-card.service";

@NgModule({
    declarations: [
        ImageCardComponent,
        ImageListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ImageCardComponent,
        ImageListComponent
    ],
    providers: [
        ImageCardService
    ],
    bootstrap: [

    ]
})
export class SharedModule { }