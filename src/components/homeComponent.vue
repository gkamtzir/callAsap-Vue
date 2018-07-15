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

	/**
    * @vue-data {Object} [country=null] - User's country details.
    * @vue-data {Array} [emergencies=null] - User's country emergency phone numbers.
    */

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

			/*
				Fetching client's country name.
			*/
			self.getCountryName()
				.then(function(response) {
					
					let countryName = response.body.country;

					/*
						Fetching country's details.
					*/
					self.getCountry(countryName)
						.then(function(response) {

							self.country = response.body;

						},
						function(error) {

							console.log(error);

						});

					/*
						Fetching country's emergency phone numbers.
					*/
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