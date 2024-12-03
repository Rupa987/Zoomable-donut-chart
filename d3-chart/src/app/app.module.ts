import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { SunburstComponent } from './components/sunburst/sunburst.component';
import { HttpClientModule } from '@angular/common/http';
import { BubbletooltipsComponent } from './components/bubbletooltips/bubbletooltips.component';
import { TableComponent } from './components/sunburst/table/table.component';
import { TestComponent } from './test/test.component';
import { ChartComponent } from './components/zoomable/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapComponent,
    SunburstComponent,
    BubbletooltipsComponent,
    TableComponent,
    TestComponent,
    ChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
