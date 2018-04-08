<template>
  <div>
    <h3 v-show="todoList.length === 0 && !loading" v-cloak>Não há tarefas salvas. Crie uma!</h3>
    <ul class="list-group" v-show="todoList && !loading">
      <li v-for="todo in todoList" class="list-group-item">{{ todo.body }}</li>
    </ul>
  </div>
</template>

<script>

  import axios from 'axios'

  export default {

    data() {
      return {
        todoList: [],
        loading: true
      }
    },

    created() {
      axios.get('/api/todos')
      .then(({data}) => {
        this.todoList = data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      })
    }

  }

</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
