<template>
    <v-container fluid grid-list-md>
        <v-layout align-center justify-center row>           
            <v-flex xs5 order-md1 order-xs1 d-flex>                   
                <v-card>
                    <v-card-title primary-title>
                        <p class="display-1">
                            Encode Base64 String
                        </p>
                    </v-card-title>   

                    <v-container>
                        <v-text-field
                            label="Input"
                            v-model="encodingInput"
                            v-validate=" 'required' "
                            name="encodingInput"
                            type="text"></v-text-field>  
                            <span class="help is-danger">{{ errors.first('encodingInput') }}</span>                  
                        <br />
                        <v-btn color="success" v-on:click="encodeBase64()">Submit</v-btn><br />                      

                        <v-text-field
                            name="encodeOutput"
                            label="Base64 Encoded String"
                            v-model="encodingOutput">                                
                        </v-text-field>
                    </v-container>                        
                </v-card>
            </v-flex>

            <v-flex xs5 order-md2 order-xs1>
                <v-card>
                        <v-card-title primary-title>
                            <p class="display-1">
                                Decode Base64 String
                            </p>
                        </v-card-title>   

                        <v-container>
                            <v-text-field
                                label="Input"
                                v-model="decodingInput"
                                v-validate=" 'required' "
                                name="decodingInput"
                                type="text"></v-text-field>  
                                <span class="help is-danger">{{ errors.first('decodingInput') }}</span>                      
                            <br />
                            <v-btn color="success" v-on:click="decodeBase64()">Submit</v-btn><br />

                            <v-text-field
                                name="decodeOutput"
                                label="Base64 Decoded String"
                                v-model="decodingOutput">                                
                            </v-text-field>
                        </v-container>                        
                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>   
</template>

<script>
export default {
  data() {
    return {
      encodingInput: "",
      encodingOutput: "",
      decodingInput: "",
      decodingOutput: ""
    };
  },
  methods: {   
    encodeBase64: function() {      
      var encodedString = btoa(this.encodingInput);
      this.encodingOutput = encodedString;
    },
    decodeBase64: function () {       
        var decodedString = atob(this.decodingInput);
        this.decodingOutput = decodedString;
    }
  }
};
</script>

<style scoped>
  .is-danger {
      color: red;
  }
</style>

