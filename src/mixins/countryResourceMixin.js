export default {
    methods: {
        /** 
         * Fetching user's country details based
         * on his/her IP.
        **/
        getCountryName() {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://ip-api.com/json')
                    .then(resolve, reject);

            });
           
        },
        /**
         * Fetching all the available european countries.
         **/
        getCountries() {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country')
                    .then(resolve, reject);

            });

        },
        /**
         * Fetching user's country emergency details.
         **/
        getCountry(country) {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country/' + country)
                    .then(resolve, reject);

            });

        },
        /**
         * Fetching user's country emergency phone numbers.
         **/
        getEmergencyPhoneNumbers(country) {

            let self = this;

            return new Promise(function(resolve, reject) {
   
                self.$http.get('http://83.212.115.201/api.php/country/emergency/' + country)
                    .then(resolve, reject);

            });

        }
    }

}