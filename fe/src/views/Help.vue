<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        a
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        b
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        c
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        d
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="red">
        e
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md4 lg3 xl2>
      <v-card color="blue">
        f
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'help',
  data () {
    return {
      cards: []
    }
  },
  methods: {
    test () {
      const user = {
        name: `JeonBS ${Math.random()}`,
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
      }
      user.age = 11
      this.cards.push(user)
    }
  }
}
</script>
