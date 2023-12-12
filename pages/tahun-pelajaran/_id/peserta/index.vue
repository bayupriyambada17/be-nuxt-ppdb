<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> {{ dataTitle }} ({{
                    peserta.totalPeserta
                  }}) - {{ peserta.tahunData }}</span
                >
              </div>
              <div class="card-body">
                <div class="form-group">
                  <div class="row g-1">
                    <div class="col-md-4">
                      <div class="input-group mb-3">
                        <input
                          type="search"
                          v-model="search.nomor_pendaftar"
                          @input="searchData"
                          class="form-control"
                          placeholder="Pencarian Nomor Pendaftar"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="input-group mb-3">
                        <input
                          type="search"
                          v-model="search.nama_lengkap"
                          @input="searchData"
                          class="form-control"
                          placeholder="Cari Nama Lengkap"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <b-table
                  striped
                  bordered
                  hover
                  :items="peserta.pesertaDidik"
                  :fields="fields"
                  show-empty
                  responsive
                >
                  <template v-slot:cell(index)="row">
                    {{ getIndex(row.index) }}
                  </template>
                  <template v-slot:cell(actions)="row">
                    <!-- <b-button
                      :to="`/tahun-pelajaran/${row.item.id}/peserta/${row.item.nama_lengkap}/detail`"
                      variant="info"
                      size="sm"
                    >
                      Detail Peserta
                    </b-button> -->
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
  //layout
  layout: "operator",

  //meta
  head() {
    return {
      title: `Data Peserta ${this.peserta.tahunData} - Dasbor Bazma`,
    };
  },

  data() {
    return {
      fields: [
        {
          label: "No",
          key: "index",
        },
        {
          label: "Nomor Pendaftar",
          key: "nomor_pendaftar",
        },
        {
          label: "Nama Lengkap",
          key: "nama_lengkap",
        },
        {
          label: "NISN",
          key: "nisn",
        },
        {
          label: "NIK",
          key: "nik",
        },
        {
          label: "Provinsi",
          key: "provinsi",
        },
        {
          label: "",
          key: "actions",
          tdClass: "text-center",
        },
      ],

      search: {
        nomor_pendaftar: "",
        nama_lengkap: "",
        provinsi: "",
      },
      dataTitle: "Data Peserta",
    };
  },
  async asyncData({ $axios, route }) {
    const pesertaTahunPelajaran = await $axios.$get(
      `/api/v1/tahun-pelajaran/${route.params.id}/peserta`
    );

    const peserta = {
      tahunData: pesertaTahunPelajaran.data.tahun_pelajaran,
      totalPeserta: pesertaTahunPelajaran.data.jumlah_peserta,
      pesertaDidik: pesertaTahunPelajaran.data.peserta,
    };

    return {
      pesertaTahunPelajaran,
      peserta,
    };
  },

  methods: {
    getIndex(index) {
      return index + 1;
    },
    async searchData() {
      try {
        const pesertaTahunPelajaran = await this.$axios.$get(
          `/api/v1/tahun-pelajaran/${this.$route.params.id}/peserta`,
          {
            params: this.search,
          }
        );

        this.peserta = {
          tahunData: pesertaTahunPelajaran.data.tahun_pelajaran,
          totalPeserta: pesertaTahunPelajaran.data.jumlah_peserta,
          pesertaDidik: pesertaTahunPelajaran.data.peserta,
        };
      } catch (error) {
        console.error("Error searching data:", error);
      }
    },
  },
};
</script>

<style></style>
