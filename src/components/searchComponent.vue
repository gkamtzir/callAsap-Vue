<template>
    <div>
        <div class="container">

            <h1>SEARCH</h1>

            <h4>Find any emergency phone immediately.</h4>

            <br />

            <div class="form-group">
                <div class="row">
                <div class="col-md-3">
                    <label for="country">Country:</label>
                </div>
                <div class="col-md-6">
                    <select class="custom-select" v-model="country" v-on:change="updateEmergencies">
                        <option value="" disabled>Select Country</option>
                        <option v-for="country in countries" v-bind:key="country.id" v-bind:value="country">
                            {{ country.Name }}
                        </option>
                    </select>
                </div>
                </div>
            </div>

            <hr />

            <app-country v-bind:country="country" v-bind:emergencies="emergencies"></app-country>

        </div>
    </div>
</template>

<script>

    import CountryComponent from './countryComponent.vue';
    import CountryResourceMixin from '../mixins/countryResourceMixin';

    /**
    * @vue-data {Array} [countries=[]] - All available european countries.
    * @vue-data {String} [country=''] - Selected country's name.
    * @vue-data {Array} [emergencies=null] - User's country emergency phone numbers.
    */

    export default {
        components: {
            'app-country': CountryComponent
        },
        data () {
            return {
                countries: [],
                /* 
                    We set country to '' in order to match
                    the pre-selected option.
                */
                country: '',
                emergencies: null
            }
        },
        methods: {
            /** 
             * Fetches user's country emergency phone numbers.
             **/
            updateEmergencies() {

                let self = this;

                /*
                    Fetching the emergency phone numbers.
                */
                self.getEmergencyPhoneNumbers(this.country.Name)
                    .then(function(response) {

                        
                        self.emergencies = response.body;

                    },
                    function(error) {

                        console.log(error);

                    });

            }
        },
        created() {

            let self = this;

            /*
                Fetching the countries.
            */
            self.getCountries()
                .then(function(response) {

                    let countries = response.body;

                    countries.sort(function(a, b) {

                        if (a.Name < b.Name) {

                            return -1;

                        } else if (a.Name > b.Name) {

                            return 1;

                        } else {

                            return 0;

                        }

                    });

                    self.countries = countries;

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
