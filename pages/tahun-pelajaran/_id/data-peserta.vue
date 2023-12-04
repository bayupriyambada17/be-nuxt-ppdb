<template>
  <main class="c-main">
    <div class="container-fluid">
      <div class="fade-in">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div>
                  <b-tabs pills card horizontal v-model="activeTab">
                    <b-tab
                      title="Peserta Validasi"
                      active
                      @click="changeTab('validasi')"
                    >
                      <b-card-text>Peserta Validasi</b-card-text>
                    </b-tab>
                    <b-tab
                      title="Peserta Diterima"
                      @click="changeTab('diterima')"
                    >
                      <b-card-text>Peserta Diterima</b-card-text>
                    </b-tab>
                    <b-tab
                      title="Peserta Ditolak"
                      @click="changeTab('ditolak')"
                    >
                      <b-card-text>Peserta Ditolak</b-card-text>
                    </b-tab>
                  </b-tabs>
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
export default {
  layout: "operator",
  data() {
    return {
      activeTab: "  ",
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style></style>
