<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="top">
      <div class="logo">
        TodoList
      </div>
      <div class="xuanyan">{{xuanyan}}</div>
      <router-link class="add" to="/add">+</router-link>
    </div>
    <div class="main">
      <div class="leftnav">
        <router-link v-for="(item,index) in todotype" :key="index" class="zy {{}}" to="/test/+id"
        >{{item}}</router-link>
        <!-- <router-link  class="zy" to="/test">重要-很紧急</router-link> -->
      </div>

      <div class="right">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      xuanyan: '高效率',
      todotype:['重要-很紧急','重要-不紧急','不重要-紧急','不重要-不紧急']
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;padding: 0;font-family: '微软雅黑'
}
.top{
  height: 60px;
  background: #eee;
  font-size: 30px;
  line-height: 60px;
}
.top .logo{
  line-height: 60px;
  width: 200px;
  /*outline: 1px solid;*/
  text-align: center;
  margin-left: 400px;
  float: left;
}
.xuanyan{
  width: 500px;
  text-align: center;
  float: left;  
}
.add{
  font-size: 50px;
  width: 60px;
  float: left;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  margin-left: 200px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
}
.leftnav{
  position: absolute;
  width: 160px;
  height: calc(100% - 60px);
  background: #252323;
  float: left;
}
.leftnav .zy{
  color: #fff;
  display: block;
  width: 100%;
  font-size: 20px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  background: #857e7e;
  cursor: pointer;
  text-decoration: none;
}
.right{
  outline: 1px solid;
  float: left;
  width: calc(100% - 160px);
  margin-left: 160px;
}

</style>
