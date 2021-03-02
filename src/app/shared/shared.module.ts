import { NgModule } from "@angular/core";
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageListComponent } from './components/image-list/image-list.component';

@NgModule({
    declarations: [
        ImageCardComponent,
        ImageListComponent
    ],
    imports: [

    ],
    exports: [
        ImageCardComponent
    ],
    providers: [
    ],
    bootstrap: [

    ]
})
export class SharedModule { }