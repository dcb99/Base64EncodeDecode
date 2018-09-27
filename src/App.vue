<template>
  <v-app>
    <v-content>
       <v-toolbar class="white--text display-1" color="blue darken-4"> 
        Base64 Encode/Decode
      </v-toolbar>

      <encode-decode id="encodeDecodeCard"></encode-decode>

       
    </v-content>
   
  </v-app>
</template>

<script>
import EncodeDecode from './EncodeDecode.vue';
  export default {
    data () {
      return {

      }
    },
    components: {
      'encode-decode': EncodeDecode
    },
    methods: {

    }
  }
</script>
<style>
  #encodeDecodeCard {
    margin-top: 2.4%;
  }
</style>

