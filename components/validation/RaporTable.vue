<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th class="text-center" scope="col">Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(values, subjectName) in raporData" :key="subjectName">
          <th colspan="2" class="text-center">{{ subjectName }}</th>
          <tr v-for="(value, semester) in values" :key="semester">
            <th>{{ semester }}</th>
            <td class="text-center">{{ value }}</td>
          </tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    raporData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      values: [], // You can adjust the initial value based on your needs
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
