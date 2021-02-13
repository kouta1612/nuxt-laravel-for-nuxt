<template>
  <div class="container">
    <div>
      <form @submit.prevent="login">
        <div>
          <label for="name">名前</label>
          <input type="text" id="name" v-model="user.name">
        </div>
        <div>
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="user.email">
        </div>
        <div>
          <label for="password">パスワード</label>
          <input type="password" id="password" v-model="user.password">
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup(_, { root }) {
    const user = reactive({
      name: '',
      email: '',
      password: '',
    })
    const login = async () => {
      const result = await root.$axios.$post('/api/signup', user)
        .catch(error => console.log(error))
      root.$router.push(result.redirect_url)
    }
    return {
      user,
      login,
    }
  }
})
</script>
