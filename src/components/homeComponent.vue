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
import CountryResourceMixin from '../mixins/countryResourceMixin';

export default {
	components: {
		'app-country': CountryComponent
	},
	data () {
		return {
			country: null,
			emergencies: null
		}
	},
	created() {

		let self = this;

		self.getCountryName()
			.then(function(response) {
				
				let countryName = response.body.country_name;

				self.getCountry(countryName)
					.then(function(response) {

						self.country = response.body;

					},
					function(error) {

						console.log(error);

					});

				self.getEmergencyPhoneNumbers(countryName)
					.then(function(response) {

						self.emergencies = response.body;

					},
					function(error) {

						console.log(error);

					});
				
			},
			function(error) {
			
				console.log(error);

			});
	
	},
	mixins: [CountryResourceMixin]
}
</script>

<style>

</style>