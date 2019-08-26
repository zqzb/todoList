<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
	  title: 'My Example App', // set a title
	  meta: [{                 // set meta
	    name: 'keyWords',
	    content: 'My Example App'
	  }],
	  link: [{                 // set link
	    rel: 'asstes',
	    href: 'https://assets-cdn.github.com/'
	  }]
	}
}
</script>

<style>
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin: auto;
}
</style>
