<template>
  <tr>
    <th>{{ label }}</th>
    <td class="text-center">
      <a
        v-if="links"
        :href="links"
        target="_blank"
        class="btn btn-sm btn-warning"
        rel="noopener noreferrer"
      >
        Lihat Dokumen
      </a>
      <span v-else> No document available </span>
    </td>
  </tr>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    links: {
      type: String,
      required: true,
    },
  },
};
</script>
