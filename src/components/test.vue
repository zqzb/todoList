<template>
	<div>
		test
		<ul>
			<li v-for="item in list">{{item.color}}</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
export default{
	name:"list",
	data(){
		return {
			list:[]
		}
	},
	methods:{
		getParams(){
			console.log(this.$route.query.type)
		}
	},
	watch:{
		'$route':'getParams'
	},
	mounted(){
		
		axios.get("http://127.0.0.1:3000/cars").then((res)=>{
			console.log(this)
			this.list=res.data
		})
	}
}
</script>

<style>
	
</style>