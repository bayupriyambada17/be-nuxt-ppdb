// Import required libraries
import Vue from 'vue';
import { Line } from 'vue-chartjs';

Vue.component('line-chart', {
  extends: Line,

  // Props
  props: ['data'],

  // Methods
  methods: {
    // Method to prepare chart data
    prepareChartData(data) {
      return {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Pendapatan',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            borderWidth: 2,
            pointBorderWidth: 2,
            pointRadius: 5,
            data: Object.values(data),
          },
        ],
      };
    },
  },

  // Computed
  computed: {
    // Options for the chart
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                callback: (value, index, values) => {
                  return `${value}`;
                },
              },
            },
          ],
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItems, data) => {
              return `${tooltipItems.yLabel}`;
            },
          },
        },
        beginZero: true,
      };
    },
  },

  // Mounted
  mounted() {
    // Render the chart with prepared data and options
    this.renderChart(this.prepareChartData(this.data), this.options);
  },
});
