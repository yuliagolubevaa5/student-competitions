import {AfterViewInit, Component, ElementRef, Inject, NgZone, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import * as am4plugins from '@amcharts/amcharts4/plugins/sunburst';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Importing translations
import am4lang_lt_LT from '@amcharts/amcharts4/lang/lt_LT';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements AfterViewInit {

  private chart: am4plugins.Sunburst;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  // tslint:disable-next-line:typedef
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      const chart = am4core.create('chartdiv', am4plugins.Sunburst);

      chart.radius = am4core.percent(100);

      // Make colors more distinctive
      chart.colors.step = 2;

      chart.data = [{
        name: 'First',
        children: [
          { name: 'A1', value: 100 },
          { name: 'A2', value: 60 }
        ]
      },
        {
          name: 'Second',
          children: [
            { name: 'B1', value: 135 },
            { name: 'B2', value: 98 }
          ]
        },
        {
          name: 'Third',
          children: [
            {
              name: 'C1',
              children: [
                { name: 'EE1', value: 130 },
                { name: 'EE2', value: 87 },
                { name: 'EE3', value: 55 }
              ]
            },
            { name: 'C2', value: 148 },
            {
              name: 'C3', children: [
                { name: 'CC1', value: 53 },
                { name: 'CC2', value: 30 }
              ]
            },
            { name: 'C4', value: 26 }
          ]
        },
        {
          name: 'Fourth',
          children: [
            { name: 'D1', value: 415 },
            { name: 'D2', value: 148 },
            { name: 'D3', value: 89 }
          ]
        },
        {
          name: 'Fifth',
          children: [
            {
              name: 'E1',
              children: [
                { name: 'EE1', value: 33 },
                { name: 'EE2', value: 40 },
                { name: 'EE3', value: 89 }
              ]
            },
            {
              name: 'E2',
              value: 148
            }
          ]
        }];

// Define data fields
      chart.dataFields.value = 'value';
      chart.dataFields.name = 'name';
      chart.dataFields.children = 'children';

// Configure levels
      const level1 = chart.seriesTemplates.create('1');
      level1.slices.template.fillOpacity = 0.75;
      level1.hiddenInLegend = true;

      const level2 = chart.seriesTemplates.create('2');
      level2.slices.template.fillOpacity = 0.5;
      level2.hiddenInLegend = true;

// Add legend
      chart.legend = new am4charts.Legend();

      this.chart = chart;
    });
  }

}
