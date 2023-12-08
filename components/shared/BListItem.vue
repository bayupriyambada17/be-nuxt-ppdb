<template>
  <b-list-group-item
    ><b>{{ label }}</b> {{ links }} </b-list-group-item
  >
</template>

<script>
export default {
  props: {
    label: {

      // type: string,
      required: true,
    },
    links: {
      type: String,
      required: true,
    },
  },
};
</script>
