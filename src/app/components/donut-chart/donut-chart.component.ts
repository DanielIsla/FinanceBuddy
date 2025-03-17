import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  imports: [CommonModule],
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent implements AfterViewInit {
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
  margin = 0;
  radius = Math.min(this.width, this.height) / 2 - this.margin;

  constructor() 
  {
    this.width = screen.width - 50;
    this.height = this.width;
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;
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
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);

    // 🔹 Crear tooltip en el body (no en el SVG)
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip-donut')
      .style('position', 'absolute')
      .style('background', '#4185ff')
      .style('color', 'white')
      .style('padding', '8px 12px')
      .style('border-radius', '8px')
      .style('font-size', '14px')
      .style('font-family', 'Inter')
      .style('font-weight', '400')
      .style('visibility', 'hidden')
      .style('pointer-events', 'none')
      .style('z-index', '1000')
      .style('transition', 'opacity 0.2s ease-in-out');

    // 🔹 Función para calcular el ángulo de cada sector
    const pie = d3.pie<{ name: string; value: number; color: string }>().value((d) => d.value);

    // 🔹 Definir el tamaño del donut
    const arc = d3
      .arc<d3.PieArcDatum<{ name: string; value: number; color: string }>>()
      .innerRadius(this.radius * 0.6) // 🔥 Aumentar el agujero interno
      .outerRadius(this.radius);

    // 🔹 Dibujar el gráfico
    svg
      .selectAll('path')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', '#03080d')
      .style('stroke-width', '4px')
      .style('cursor', 'pointer')

      // 👉 Evento para mostrar tooltip
      .on('mouseover', (event, d) => {
        console.log(`🟢 Tooltip mostrado: ${d.data.name}`); // ✅ Prueba si entra en el evento
        tooltip
          .style('visibility', 'visible')
          .style('opacity', '1')
          .text(`${d.data.name}: ${d.data.value}`);
      })
      // 👉 Evento para mover tooltip
      .on('mousemove', (event) => {
        tooltip
          .style('top', `${event.pageY - 40}px`) // Justo arriba del puntero
          .style('left', `${event.pageX}px`);   // Justo en el punto del clic
      })
      // 👉 Evento para ocultar tooltip
      .on('mouseout', () => {
        console.log('🔴 Tooltip oculto'); // ✅ Prueba si se oculta correctamente
        tooltip.style('visibility', 'hidden').style('opacity', '0');
      });
  }
}
