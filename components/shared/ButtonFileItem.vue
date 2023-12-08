<template>
  <a
    v-if="links"
    :href="links"
    target="_blank"
    class="btn btn-sm btn-warning d-block"
    rel="noopener noreferrer"
  >
    Lihat Dokumen
  </a>
  <span v-else>
    No document available
  </span>
</template>

<script>
export default {
  props: {
    links: {
      type: String,
      required: true,
    },
  },
};
</script>
