import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import * as CanvasJSAngularChart from '../../canvas/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
var CanvasJS = require('../../../../../assets/canvas/canvasjs.min');
 
CanvasJS.addColorSet("customColorSet",["#ffcb06", "#ce1249", "#3a943c", "#7f3e83", "#812900", "#2078b6", "#df7f2e", "#e3e3e3"]);

@Component({
    selector: 'app-carrousel-item',
    templateUrl: './carrousel-item.component.html',
    standalone: true,
    imports: [CommonModule, CanvasJSChart]
})
export class CarrouselItemComponent {
    chartOptions = {
      animationEnabled: true,
      theme: "dark1",
      colorSet: "customColorSet",
      data: [{
        type: "doughnut",
        indexLabel: "{name}: {y}",
        innerRadius: "90%",
        yValueFormatString: "#,##0.00'%'",
        dataPoints: [
          { y: 5, name: "Tienda" },
          { y: 25, name: "Video" },
          { y: 65, name: "Referral" },
        ]
      }]
    }
}