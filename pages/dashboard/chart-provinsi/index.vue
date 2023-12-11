<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="card">
          <div class="card-body">
            <Chart :chartData="chartData" :chartOptions="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Chart from "~/components/Chart.vue"

export default {
  components: {
    Chart,
  },

  layout: "operator",

  head() {
    return {
      title: "Dashboard - Dasbor Bazma",
    };
  },

  data() {
    return {
      chartData: {}, // Provide valid data
      chartOptions: {}, // Provide valid options
    };
  },

  async asyncData({ $axios }) {
    const charts = await $axios.$get("/api/v1/dashboard/per-provinsi");
    console.log(charts);
    return { chartData: charts }; // Use the correct variable name
  },

  computed: {
    chartOptions() {
      // Sesuaikan dengan opsi chart jika diperlukan
      return {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
    },
  },
};
</script>

<style></style>
