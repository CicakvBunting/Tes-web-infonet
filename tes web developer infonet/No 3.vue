<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="selectedCriteria"
            :items="criteria"
            label="Criteria"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="inputValue"
            label="Input"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary" @click="addItem">Add Item</v-btn>
      <v-btn color="error" @click="deleteItem">Delete Item</v-btn>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-content>{{ item.criteria }}: {{ item.input }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedCriteria: '',
    inputValue: '',
    criteria: ['Age', 'Education', 'Interest', 'Language', 'Marital Status', 'Skill'],
    items: []
  }),
  methods: {
    addItem() {
      this.items.push({ criteria: this.selectedCriteria, input: this.inputValue });
      this.selectedCriteria = '';
      this.inputValue = '';
    },
    deleteItem() {
      this.items.pop();
    }
  }
}
</script>

<style scoped>
</style>
