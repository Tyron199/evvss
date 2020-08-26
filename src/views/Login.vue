<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-card width="500" class="mx-auto">
        <v-card-title class="secondary white--text">Login</v-card-title>
        <v-card-text class="py-6">
          <v-text-field label="Username"></v-text-field>
          <v-text-field label="Password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" to="/">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>