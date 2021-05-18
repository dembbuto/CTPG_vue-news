<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a v-if="item.domain" :href="item.url">{{ item.title }}</a>
            <router-link v-else :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            <template v-if="item.user"> by
              <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            </template>
            <template v-else>,
              <a :href="item.url">{{ item.domain }}</a>
            </template>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>