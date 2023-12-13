<template>
  <div>
    <div v-for="(p, i) in itemsMenu" :key="i">
      <li class="c-sidebar-nav-title">
        {{ p.title }}
      </li>
      <LinkItem
        v-for="(sub, j) in p.menu"
        :key="j"
        :label="sub.name"
        :to="sub.link"
      />
    </div>
  </div>
</template>

<script>
import LinkItem from "@/components/shared/linkItem.vue";
export default {
  components: {
    LinkItem,
  },

  data() {
    return {
      itemsMenu: [
        {
          title: "Data Peserta",
          menu: [
            {
              name: "Peserta Didik (Proses)",
              link: "/peserta/proses",
            },
            {
              name: "Peserta Didik (Diterima)",
              link: "/peserta/diterima",
            },
            {
              name: "Peserta Didik (Ditolak)",
              link: "/peserta/ditolak",
            },
          ],
        },
      ],
    };
  },
};
</script>
