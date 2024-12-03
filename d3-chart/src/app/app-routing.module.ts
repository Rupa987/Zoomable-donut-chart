import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunburstComponent } from '../app/components/sunburst/sunburst.component';
import { HeatmapComponent } from '../app/components/heatmap/heatmap.component';
import { BubbletooltipsComponent } from './components/bubbletooltips/bubbletooltips.component';

const routes: Routes = [
  { path: 'sunburst', component: SunburstComponent },
  { path: 'heatmap', component: HeatmapComponent },
  { path: 'bubble', component: BubbletooltipsComponent },
  { path: '', redirectTo: '/heatmap', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
