<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="d-flex justify-content-end align-items-center g-1">
              <button
                @click="terimaPeserta(pesertaProses.id)"
                class="btn btn-md btn-warning mx-1"
              >
                Terima Peserta
              </button>
              <button
                @click="tolakPeserta(pesertaProses.id)"
                class="btn btn-md btn-danger"
              >
                Tolak Peserta
              </button>
            </div>
          </div>
          <div class="col-md-12 mt-3">
            <div class="card border-0 rounded shadow-sm border-top-orange">
              <div class="card-header">
                <span class="font-weight-bold"
                  ><i class="fa fa-folder"></i> Nomor Peserta:
                  {{ pesertaProses.nomor_pendaftaran }} -
                  {{ pesertaProses.tahun_pelajaran }}
                </span>
              </div>
              <div class="card-body">
                <b-list-group>
                  <b-list-group-item
                    ><b>Nama Lengkap:</b>
                    {{ pesertaProses.nama_lengkap }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Nisn:</b> {{ pesertaProses.nisn }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Nik:</b> {{ pesertaProses.nik }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Tempat, Tanggal Lahir:</b>
                    {{ pesertaProses.tempat_tanggal_lahir }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Kabuten, Provinsi:</b>
                    {{ pesertaProses.kabupaten_provinsi }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Nomor Whatsapp:</b>
                    {{ pesertaProses.no_wa }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Informasi PPDB:</b>
                    {{ pesertaProses.informasi_ppdb }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Sosial Media:</b>
                    {{ pesertaProses.sosial_media }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Sekolah Menengah Pertama (SMP):</b>
                    {{ pesertaProses.smp_derajat }}</b-list-group-item
                  >
                </b-list-group>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-12">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span class="font-weight-bold"
                        ><i class="fa fa-folder"></i> Data Orang Tua (Bapak &
                        Ibu)</span
                      >
                    </div>
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th class="text-center" scope="col">Ayah</th>
                          <th class="text-center" scope="col">Ibu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.nama }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.nama }}
                          </td>
                        </tr>
                        <tr>
                          <th>Pendidikan Terakhir</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.pendidikan_terakhir }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.pendidikan_terakhir }}
                          </td>
                        </tr>
                        <tr>
                          <th>Pekerjaan</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.pekerjaan }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.pekerjaan }}
                          </td>
                        </tr>
                        <tr>
                          <th>Gaji Pokok Pensiun</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.penghasilan_pokok_pensiun }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.penghasilan_pokok_pensiun }}
                          </td>
                        </tr>
                        <tr>
                          <th>Pendapatan Dari Luar</th>
                          <td class="text-center">
                            {{
                              pesertaProses.ayah.pendapatan_diluar_penghasilan
                            }}
                          </td>
                          <td class="text-center">
                            {{
                              pesertaProses.ibu.pendapatan_diluar_penghasilan
                            }}
                          </td>
                        </tr>
                        <tr>
                          <th>Domisili</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.domisili }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.domisili }}
                          </td>
                        </tr>
                        <tr>
                          <th>Nomor Telpon / Whatsapp</th>
                          <td class="text-center">
                            {{ pesertaProses.ayah.no_wa }}
                          </td>
                          <td class="text-center">
                            {{ pesertaProses.ibu.no_wa }}
                          </td>
                        </tr>
                        <tr>
                          <th>Harapan Orang Tua</th>
                          <td colspan="2" class="text-center">
                            {{ pesertaProses.harapan }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-3">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <span class="font-weight-bold"
                        ><i class="fa fa-folder"></i> Data Fasilitas,
                        Fasilitator</span
                      >
                    </div>
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th colspan="2" class="text-center">Fasilitas</th>
                        </tr>
                        <tr>
                          <th>Status Kepemilikan Rumah</th>
                          <td class="text-center">
                            {{
                              pesertaProses.fasilitas.status_kepemilikan_rumah
                            }}
                          </td>
                        </tr>
                        <tr>
                          <th>Tahun Perolehan</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.tahun_perolehan }}
                          </td>
                        </tr>
                        <tr>
                          <th>Kualitas Rumah</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.kualitas_rumah }}
                          </td>
                        </tr>
                        <tr>
                          <th>Mandi Cuci Kakus</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.mandi_cuci_kakus }}
                          </td>
                        </tr>
                        <tr>
                          <th>Sumber Air</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.sumber_air }}
                          </td>
                        </tr>
                        <tr>
                          <th>Daya Listrik</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.daya_listrik }}
                          </td>
                        </tr>
                        <tr>
                          <th>Harta Tak Bergerak</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.harta_tak_bergerak }}
                          </td>
                        </tr>
                        <tr>
                          <th>Status Kepemilikan Harta Tak Bergerak</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitas.harta_tak_bergerak }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">Fasilitator</th>
                        </tr>
                        <tr>
                          <th>Nama</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitator.nama }}
                          </td>
                        </tr>
                        <tr>
                          <th>Hubungan Calon Siswa</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitator.hubungan_calon_siswa }}
                          </td>
                        </tr>
                        <tr>
                          <th>No Telpon/Whatsapp</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitator.no_wa }}
                          </td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitator.email }}
                          </td>
                        </tr>
                        <tr>
                          <th>Saudara di SMK</th>
                          <td class="text-center">
                            {{ pesertaProses.fasilitator.saudara_di_smk }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">Riwayat</th>
                        </tr>
                        <tr>
                          <th>Tinggi Badan</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.tinggi_badan }}
                          </td>
                        </tr>
                        <tr>
                          <th>Berat Badan</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.berat_badan }}
                          </td>
                        </tr>
                        <tr>
                          <th>Penyakit Bawaan (Sejak Dini)</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.penyakit_di_derita }}
                          </td>
                        </tr>
                        <tr>
                          <th>Penyakit Menular</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.penyakit_menular }}
                          </td>
                        </tr>
                        <tr>
                          <th>Golongan Darah</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.golongan_darah }}
                          </td>
                        </tr>
                        <tr>
                          <th>Perokok</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.perokok }}
                          </td>
                        </tr>
                        <tr>
                          <th>Buta Warna</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.buta_warna }}
                          </td>
                        </tr>
                        <tr>
                          <th>Asuransi</th>
                          <td class="text-center">
                            {{ pesertaProses.riwayat.asuransi_bpjs_kis }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-12">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <span class="font-weight-bold"
                      ><i class="fa fa-folder"></i> Data Keputusan Peserta</span
                    >
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th class="text-center" scope="col">Keputusan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Mengikuti Rangkaian Tes</th>
                          <td class="text-center">
                            {{ pesertaProses.dokumen.rangkaian_tes }}
                          </td>
                        </tr>
                        <tr>
                          <th>Dokumen Palsu</th>
                          <td class="text-center">
                            {{ pesertaProses.dokumen.dokumen_jika_palsu }}
                          </td>
                        </tr>
                        <tr>
                          <th>Pelanggaran Berlaku</th>
                          <td class="text-center">
                            {{ pesertaProses.dokumen.pelanggaran_keputusan }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-3">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <span class="font-weight-bold"
                      ><i class="fa fa-folder"></i> Data Wali (Opsional)</span
                    >
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th class="text-center" scope="col">Wali</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Nama</th>
                          <td class="text-center">
                            {{ pesertaProses.wali.nama }}
                          </td>
                        </tr>
                        <tr>
                          <th>Pekerjaan</th>
                          <td class="text-center">
                            {{ pesertaProses.wali.pekerjaan }}
                          </td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td class="text-center">
                            {{ pesertaProses.wali.email_wali }}
                          </td>
                        </tr>
                        <tr>
                          <th>Domisili</th>
                          <td class="text-center">
                            {{ pesertaProses.wali.domisili }}
                          </td>
                        </tr>
                        <tr>
                          <th>Hubungan Wali</th>
                          <td class="text-center">
                            {{ pesertaProses.wali.hubungan_wali }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-3">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <span class="font-weight-bold"
                      ><i class="fa fa-folder"></i> Data Rapor</span
                    >
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th class="text-center" scope="col">Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th colspan="2" class="text-center">Matematika</th>
                        </tr>
                        <tr>
                          <th>Semester 3</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.matematika_3 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 4</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.matematika_4 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 5</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.matematika_5 }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Ilmu Pengetahuan Alam (IPA)
                          </th>
                        </tr>
                        <tr>
                          <th>Semester 3</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.ipa_3 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 4</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.ipa_4 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 5</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.ipa_5 }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Bahasa Indonesia
                          </th>
                        </tr>
                        <tr>
                          <th>Semester 3</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.indo_3 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 4</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.indo_4 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 5</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.indo_5 }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Bahasa Inggris
                          </th>
                        </tr>
                        <tr>
                          <th>Semester 3</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.inggris_3 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 4</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.inggris_4 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 5</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.inggris_5 }}
                          </td>
                        </tr>
                        <tr>
                          <th colspan="2" class="text-center">
                            Pendidikan Agama Islam
                          </th>
                        </tr>
                        <tr>
                          <th>Semester 3</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.islam_3 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 4</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.islam_4 }}
                          </td>
                        </tr>
                        <tr>
                          <th>Semester 5</th>
                          <td class="text-center">
                            {{ pesertaProses.rapor.islam_5 }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mt-3">
                <div class="card border-0 rounded shadow-sm border-top-orange">
                  <div class="card-header">
                    <span class="font-weight-bold"
                      ><i class="fa fa-folder"></i> Data Dokumen</span
                    >
                  </div>
                  <div class="card-body">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th>Essai Karangan</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.essay_karangan
                              "
                              :links="pesertaProses.dokumen.essay_karangan"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Kartu Keluarga</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.kk
                              "
                              :links="pesertaProses.dokumen.kk"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Foto Rumah</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.upload_pdf_foto_rumah
                              "
                              :links="pesertaProses.dokumen.upload_pdf_foto_rumah"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Pas Foto</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.pas_foto
                              "
                              :links="pesertaProses.dokumen.pas_foto"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>SKTM</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.sktm
                              "
                              :links="pesertaProses.dokumen.sktm"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Upload Surat Rekomendasi</th>
                          <td class="text-center">
                            <ButtonFileItem
                              v-if="
                                pesertaProses.dokumen &&
                                pesertaProses.dokumen.upload_surat_rekomendasi
                              "
                              :links="
                                pesertaProses.dokumen.upload_surat_rekomendasi
                              "
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ButtonFileItem from '~/components/shared/ButtonFileItem.vue';
export default {
  layout: "operator",
  components: {
    ButtonFileItem,
  },
  //meta
  head() {
    return {
      title: this.pesertaProses.nama_lengkap
        ? `${this.pesertaProses.nama_lengkap} - Dasbor Bazma`
        : "Validasi Data - Dasbor Bazma",
    };
  },

  data() {
    return {
      pesertaProses: {},
      dataTitle: "Validasi Data",
    };
  },

  async asyncData({ params, $axios }) {
    try {
      const response = await $axios.get(
        `/api/v1/peserta-didik/proses/${params.id}/validasi`
      );
      return { pesertaProses: response.data.data };
    } catch (error) {
      return { pesertaProses: {} };
    }
  },

  methods: {

    async terimaPeserta(id) {
      const confirmationResult = await this.$swal.fire({
        title: `Ingin menerima peserta Didik ini?`,
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Menerima Peserta",
        cancelButtonText: "Tidak",
      });

      if (confirmationResult.isConfirmed) {
        try {
          const response = await this.$axios.post(
            `/api/v1/peserta-didik/proses/${id}/validasi/diterima`
          );

          if (response.data.status === true) {
            this.$swal.fire({
              title: "BERHASIL!",
              text: response.data.message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          this.$router.push({
            name: "peserta-diterima",
          });
        } catch (error) {
          this.$swal.fire({
            title: "GAGAL!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tutup",
          });
        }
      }
    },
    async tolakPeserta(id) {
      const confirmationResult = await this.$swal.fire({
        title: `Ingin menolak peserta didik ini?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Menolak Peserta",
        cancelButtonText: "Tidak",
      });

      if (confirmationResult.isConfirmed) {
        try {
          const response = await this.$axios.post(
            `/api/v1/peserta-didik/proses/${id}/validasi/ditolak`
          );

          if (response.data.status === true) {
            this.$swal.fire({
              title: "BERHASIL!",
              text: response.data.message,
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          this.$router.push({
            name: "peserta-ditolak",
          });
        } catch (error) {
          this.$swal.fire({
            title: "GAGAL!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Tutup",
          });
        }
      }
    },
  },
};
</script>

<style></style>
