<template>
  <div>
    <nav>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="admin">Admin</a></li>
        <li>
          <router-link class="add_post" to="/addarticle" tag="button">
            Add post
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header'
};
</script>
<style>
</style>
