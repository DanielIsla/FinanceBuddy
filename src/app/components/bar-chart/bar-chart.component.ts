import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  imports: [CommonModule],
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('chart', { static: true }) chartContainer!: ElementRef;

  data = [
    { name: 'Comida', value: 50, color: '#FF5733' },
    { name: 'Transporte', value: 20, color: '#33C1FF' },
    { name: 'Hogar', value: 10, color: '#7DFF33' },
    { name: 'Ocio', value: 70, color: '#FF33B8' },
    { name: 'Salud', value: 5, color: '#F7FF33' },
    { name: 'Trabajo', value: 20, color: '#33FF99' },
    { name: 'Viajes', value: 20, color: '#FF8833' },
    { name: 'Familia', value: 20, color: '#FF9933' },
  ];

  width = 0;
  height = 0;
  padding = 0.3;
  margin = { top: 10, right: 0, bottom: 20, left: 50 };

  constructor() {
    this.width = screen.width - 50;
    this.height = this.width;
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart(): void {
    if (!this.chartContainer?.nativeElement) {
      console.error('chartContainer no está definido');
      return;
    }

    const svg = d3
      .select(this.chartContainer.nativeElement)
      .attr('width', this.width)
      .attr('height', this.height + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(this.data.map((d) => d.name))
      .range([0, this.width - this.margin.left - this.margin.right])
      .padding(this.padding);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => d.value)!])
      .nice()
      .range([this.height, 0]);

    // 🔹 Crear el tooltip en el cuerpo del documento (no dentro del SVG)
    const tooltip = d3
      .select('body')
      .append('div')
      .style('position', 'absolute')
      .style('background', '#4185ff')
      .style('color', 'white')
      .style('padding', '8px 12px')
      .style('border-radius', '10px')
      .style('font-size', '14px')
      .style('font-family', 'Inter') // Fuente
      .style('font-weight', '400') // Texto en negrita
      .style('visibility', 'hidden')
      .style('pointer-events', 'none')
      .style('transition', 'opacity 0.2s ease-in-out')
      .style('z-index', '1000');

    // 👉 Agregar el eje Y con solo los números (sin línea ni ticks)
    svg
      .append('g')
      .call(d3.axisLeft(yScale).ticks(5))
      .selectAll('.domain')
      .remove();

    svg.selectAll('.tick line').remove();

    // 🎨 Estilizar los números del eje Y
    svg.selectAll('.tick text')
      .style('font-size', '14px')
      .style('font-weight', '600')
      .style('fill', '#999999')
      .style('font-family', 'Inter');

    // 🔹 Agregar las barras y eventos del tooltip
    svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.name)!)
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => this.height - yScale(d.value))
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', (d) => d.color)
      .attr('stroke', '#1f3347')
      .attr('stroke-width', 1)

      //Mostrar tooltip al tocar la barra
      .on('mouseover', (event, d) => {
        tooltip
          .style('visibility', 'visible')
          .text(`${d.name}: ${d.value}`);
      })
      //Mover tooltip con el cursor
      .on('mousemove', (event) => {
        tooltip
          .style('top', `${event.pageY - 0}px`)
          .style('left', `${event.pageX - 60}px`);
      })
      //Ocultar tooltip al salir de la barra
      .on('mouseout', () => {
        tooltip.style('visibility', 'hidden');
      });
  }
}
