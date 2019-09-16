import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/js/canvasjs.min';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: false,
      theme: "light2",
      title: {
        text: ""
      },
      data: [{
        type: "pie",
        dataPoints: [
          { y: 71, indexLabel: "Project QBZ" },
          { y: 55, indexLabel: "Project ABC" },
          { y: 50, indexLabel: "Project XYZ" },
        ]
      }]
    });

    chart.render();
  }

}
