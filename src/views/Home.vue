<template>
  <div class="container">
    <news-letter></news-letter>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsLetter from '@/components/NewsLetter.vue'

export default {
  name: 'Home',
  components: {
    NewsLetter
  }
}
</script>
