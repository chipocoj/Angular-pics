import { NgModule } from "@angular/core";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SearchUnsplashService } from "./services/search-unsplash.service";
import { FormsModule } from '@angular/forms';
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
    declarations: [
        SearchBarComponent,
        ImageCardComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        SearchBarComponent,
        ImageCardComponent
    ],
    providers: [
        SearchUnsplashService
    ],
    bootstrap: [

    ]
})
export class SharedModule { }