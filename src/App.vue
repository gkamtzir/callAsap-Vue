<template>
  <div>
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from './components/navbarComponent.vue';

export default {
  components: {
    'app-navbar': NavbarComponent
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  background-image: url("./assets/background.jpg");
  text-align: center;
  font-family: 'Merriweather', serif !important;
}

navbar-brand {
  font-size: 14px;
  text-decoration: none;
}

nav li a {
  margin:10px;
  float: right;
  -webkit-border-radius: 17px;
  -moz-border-radius: 17px;
  border-radius: 17px;
  padding: 10px 15px;
}

nav li a:hover {
  background-color: #ffffff;
  text-decoration: none;
}

nav li a {
  color: #337ab7 !important;
  text-decoration: none;
}

.external-link {
  color: #ffffff !important;
}

a.external-link:hover {
  color: #337ab7 !important;
}

button span {
  color: #ffffff;
}

.container {
  background-image: url("./assets/container-background.jpg");
  border-radius: 5px;
  margin: 2% auto;
  padding: 2% 2%;
}

.navbar {
  background-color: #000000 !important;
  padding: auto 50%;
  margin: auto;
}

.navbar-brand {
  font-size: 24px;
  margin: 10px;
}

.icon {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  margin: 0 1px 8px;
  -webkit-border-radius: 17px;
  -moz-border-radius: 17px;
  border-radius: 17px;
  margin:10px;
}

.feedback {
  font-size: 12px;
}

.center {
    text-align: center;
}

.active {
    background-color: #ffffff;
}

</style>
