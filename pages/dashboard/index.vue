<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-6 col-lg-4">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-primary py-4 px-3 mfe-3">
                  <i class="fas fa-circle-notch fa-spin fa-2x"></i>
                </div>
                <div>
                  <div class="text-value text-primary">
                    {{ peserta.proses }}
                  </div>
                  <div class="text-muted text-uppercase font-weight-bold small">
                    Peserta Didik Proses
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-6 col-lg-4">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-success py-4 px-3 mfe-3">
                  <i class="fas fa-check-circle fa-2x"></i>
                </div>
                <div>
                  <div class="text-value text-success">
                    {{ peserta.diterima }}
                  </div>
                  <div class="text-muted text-uppercase font-weight-bold small">
                    Peserta Didik Diterima
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-4">
            <div class="card border-0 rounded shadow-sm overflow-hidden">
              <div class="card-body p-0 d-flex align-items-center">
                <div class="bg-danger py-4 px-3 mfe-3">
                  <i class="fas fa-times-circle fa-2x"></i>
                </div>
                <div>
                  <div class="text-value text-danger">
                    {{ peserta.ditolak }}
                  </div>
                  <div class="text-muted text-uppercase font-weight-bold small">
                    Peserta Didik Ditolak
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> Peserta Pendaftaran Harian ({{
                    pesertaHari.total
                  }} / 10) - Proses Validasi</span>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button
                      @click="refreshHalaman"
                        class="btn btn-warning btn-md"
                      >
                        Refresh Data
                      </button>
                    </div>

                  </div>
                </div>
                <b-table
                  striped
                  bordered
                  hover
                  :items="pesertaHari.validasi"
                  :fields="fields"
                  show-empty
                  responsive
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>
                </b-table>
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

  data() {
    return {
      fields: [
        {
          label: "#",
          key: "index",
          tdClass: "text-center",
        },
        {
          label: "Nomor Pendaftar",
          key: "nomor_pendaftar",
        },
        {
          label: "Tahun Pelajaran",
          key: "tahun_pelajaran.tahun_pelajaran",
        },
        {
          label: "Nama Lengkap",
          key: "nama_lengkap",
        },
        {
          label: "Tanggal Terdaftar",
          key: "tanggal_terdaftar",
        },
      ],
    };
  },

  async asyncData({ $axios }) {
    //fetching dashboard
    const pesertaHarian = await $axios.$get("/api/v1/dashboard/peserta-harian");
    const pesertaHari = {
      total: pesertaHarian.data.total_jumlah,
      validasi: pesertaHarian.data.perhari,
    };

    const pesertaCount = await $axios.$get(
      "/api/v1/dashboard/status-peserta-didik"
    );
    const peserta = {
      diterima: pesertaCount.data.diterima,
      ditolak: pesertaCount.data.ditolak,
      proses: pesertaCount.data.proses,
    };
    return {
      peserta,
      pesertaHari,
    };
  },
  methods: {
    getIndex(index) {
      // Menghitung indeks dengan menambahkan 1
      return index + 1;
    },
     refreshHalaman() {
      // Merefresh halaman
      this.$nuxt.refresh();
    },
  },
};
</script>

<style></style>
