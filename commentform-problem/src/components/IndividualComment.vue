<template>
  <div>
    <li> 
      <img class="post-img" :src="commentpost.authorImg" />
      {{ index }}
      <small>{{ commentpost.author }}</small>
      <p class="post-comment">
      "{{ commentpost.text }}"
      <button @click="removeComment" type="button">x</button>
      </p>
    </li>
  </div>
</template>


<script>
  export default {
    props: ['commentpost', 'index'],

    methods: {
      removeComment () {
        this.$emit('removecomment', this.index)
      }
    }
  }
</script>