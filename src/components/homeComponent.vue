<template>
	<div>
		<div class="container">

			<h1>What is your emergency?</h1>

			<app-country v-bind:country="country" v-bind:emergencies="emergencies"></app-country>

		</div>
	</div>
</template>

<script>
import CountryComponent from './countryComponent.vue';

export default {
	components: {
		'app-country': CountryComponent
	},
	data () {
		return {
			country: {},
			emergencies: {}
		}
	},
	created() {
		console.log('here');
		this.$http.get('http://83.212.115.201/api.php/country/Finland')
			.then(function(data) {

				this.country = data.body;
				console.log(this.country);

			});

		this.$http.get('http://83.212.115.201/api.php/country/emergency/Finland')
			.then(function(data) {

				this.emergencies = data.body;
				console.log(this.emergencies)

			})
	}
}
</script>

<style>

</style>