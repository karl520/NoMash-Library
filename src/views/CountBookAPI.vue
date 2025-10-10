<template>
    <div id="app">
      <h1>Book Counter</h1>
      <button @click="getBookCountAPI">Get Book Count</button>
  
      <p v-if="count !== null">Total number of books: {{ count }}</p>
      <p v-if="error">{{ error }}</p>
  
      <pre>{{ jsondata }}</pre>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        jsondata: null,
        count: null, 
        error: null,
      };
    },
    mounted() {
      this.getBookCountAPI();
    },
    methods: {
      async getBookCountAPI() {
        try {
          const response = await axios.get(
            "https://us-central1-fit5032-week-1d500.cloudfunctions.net/countBooks"
          );
          this.jsondata = response.data;  
          this.count = response.data.count; 
          this.error = null;
        } catch (error) {
          console.error("Error fetching book count:", error);
          this.error = "Error fetching book count";
          this.count = null;
        }
      },
    },
  };
  </script>
  