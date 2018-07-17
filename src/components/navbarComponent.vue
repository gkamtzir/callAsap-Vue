<template>
	<div>
		<nav class="navbar navbar-expand-lg bg-light">
			<a class="navbar-brand" href="#"><router-link to="/">CallAsap</router-link></a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<router-link to="/" v-bind:class="{active: this.$route.path === '/'}">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/search" v-bind:class="{active: this.$route.path === '/search'}">Search</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about" v-bind:class="{active: this.$route.path === '/about'}">About</router-link>
					</li>

					<li>
						<a class="icon external-link" href="https://github.com/gkamtzir" title="Follow on GitHub" target="_blank"><i class="fa fa-github"></i></a>
					</li>
					<li>
						<a class="icon external-link" href="https://plus.google.com/u/0/100012202947812721560" title="Follow with Google Plus" target="_blank"><i class="fa fa-google-plus"></i></a>
					</li>
					<li>
						<a class="icon external-link" href="https://twitter.com/Programmunity/" title="Follow with Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
					</li>

				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
  data () {
	return {
	  
	}
  }
}
</script>

<style>

</style>