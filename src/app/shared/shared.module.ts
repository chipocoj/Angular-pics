import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageListComponent } from './components/image-list/image-list.component';

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
    ],
    bootstrap: [

    ]
})
export class SharedModule { }