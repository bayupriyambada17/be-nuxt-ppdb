<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row" v-for="(chartData, index) in charts.data" :key="index">
          <div class="col-md-6">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold">
                  <i class="fa fa-chart-line"></i> GRAFIK PENDAPATAN {{ chartData.tahun_pelajaran }}
                </span>
              </div>
              <div class="card-body">
                <client-only>
                  <line-chart :data="prepareChartData(chartData.provinsi)"></line-chart>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "operator",
  head() {
    return {
      title: "Dashboard - Dasbor Bazma",
    };
  },
  async asyncData({ $axios }) {
    const charts = await $axios.$get("/api/v1/dashboard/per-provinsi");
    console.log(charts);

    return { charts };
  },
  methods: {
    prepareChartData(provinsiData) {
      const labels = Object.keys(provinsiData);
      const data = Object.values(provinsiData);

      return {
        labels: labels,
        datasets: [
          {
            label: "Jumlah Peserta",
            borderColor: "rgba(75,192,192,1)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data,
          },
        ],
      };
    },
  },
};
</script>

<style></style>
