import { Component } from "@angular/core";
import { CarrouselHeaderComponent } from "./carrousel-header/carrousel-header.component";
import { CarrouselItemComponent } from "./carrousel-item/carrousel-item.component";

@Component({
    selector: 'app-carrousel',
    templateUrl: './carrousel.component.html',
    standalone: true,
    imports: [CarrouselHeaderComponent, CarrouselItemComponent]
})
export class CarrouselComponent {}