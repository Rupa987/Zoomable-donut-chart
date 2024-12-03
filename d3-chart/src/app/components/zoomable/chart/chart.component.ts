import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import * as d3 from 'd3';
import { ChartService } from '../../../service/zoomable/chart.service';
import { ChartData } from '../../../service/zoomable/chart.data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  @Input() data: ChartData[] = [];
  @Output() chartClick = new EventEmitter<ChartData>();

  chartData: ChartData[] = [];
  selectedData: ChartData | null = null;

  width = 960;
  height = 500;
  radius = Math.min(this.width, this.height) / 2;

  colorScale = d3
    .scaleOrdinal<string>()
    .domain([])
    .range(['pink', 'green', 'violet', 'blue']);

  pie = d3
    .pie<ChartData>()
    .sort(null)
    .value((d) => d.value);

  arc = d3
    .arc<d3.PieArcDatum<ChartData>>()
    .innerRadius(this.radius - 70)
    .outerRadius(this.radius - 10);

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getData().subscribe((data) => {
      this.chartData = data;
      this.createChart();
    });
    d3.select(this.chartContainer.nativeElement).call(
      d3.zoom().on('zoom', (event) => {
        d3.select(this.chartContainer.nativeElement).attr(
          'transform',
          event.transform
        );
      })
    );
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    this.colorScale.domain(this.chartData.map((d) => d.name));

    const g = svg.append('g').attr('class', 'slices');

    g.selectAll('path')
      .data(this.pie(this.chartData))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('fill', (d) => this.colorScale(d.data.name))
      .on('click', (event, d) => {
        this.selectedData = d.data;
        this.chartClick.emit(d.data);
        this.updateSelectedDataDisplay(svg);
      });

    svg
      .selectAll('text')
      .data(this.pie(this.chartData))
      .enter()
      .append('text')
      .attr('transform', (d) => `translate(${this.arc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'middle')
      .style('font-size', '10px')
      .style('fill', '#fff')
      .text((d) => `${d.data.name}: ${d.data.value}`);
  }

  private updateSelectedDataDisplay(
    svg: d3.Selection<SVGGElement, unknown, null, undefined>
  ): void {
    svg.selectAll('.selected-data').remove();

    if (this.selectedData) {
      svg
        .append('text')
        .attr('class', 'selected-data')
        .attr('x', 0)
        .attr('y', 0)
        .attr('text-anchor', 'middle')
        .style('font-size', '20px')
        .style('fill', '#000')
        .text(
          `Selected: ${this.selectedData.name}: ${this.selectedData.value}`
        );
    }
  }
}
