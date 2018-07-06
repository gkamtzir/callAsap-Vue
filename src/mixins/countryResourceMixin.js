export default {
    methods: {
        getCountryName() {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://ip-api.com/json')
                    .then(resolve, reject);

            });
           
          },
        getCountries() {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country')
                    .then(resolve, reject);

            });

        },
        getCountry(country) {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country/' + country)
                    .then(resolve, reject);

            });

        },
        getEmergencyPhoneNumbers(country) {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country/emergency/' + country)
                    .then(resolve, reject);

            });

        }
    }

}