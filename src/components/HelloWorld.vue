<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="top">
      <div class="logo">
        TodoList
      </div>
      <div class="xuanyan">{{xuanyan}}</div>
      <div class="add">+</div>
    </div>
    <div class="main">
      <div class="leftnav">
        <div v-for="(item,index) in todotype" :key="index" class="zy {{}}">{{item}}</div>
      </div>
      <div class="right">
        <form>
          <h2>新增任务</h2>
          <div class="detail">
            <label class="listlabel" for="listname">任务名称</label>
            <input class="listinput" type="text" name="listname" id="listname">
          </div>
          <div class="detail" style="height: auto;">
            <label class="listlabel" for="listdesc">任务描述</label>
            <textarea name="listdesc"></textarea>
          </div>
          <div class="detail">
            <label class="listlabel" for="listtime">完成时间</label>
            <input class="listinput" type="date" name="listtime">
          </div>
          <div class="detail">
            <label class="listlabel" for="listtime">任务性质</label>            
            <div class="xingzhi">
              <label class="xz"><input type="radio" name="xingzhi" id="veryimportant"> 重要-很紧急 </label>
              <label class="xz"><input type="radio" name="xingzhi" id="important"> 重要-不紧急 </label>
              <label class="xz"><input type="radio" name="xingzhi" id="veryjinji"> 不重要-紧急 </label>
              <label class="xz"><input type="radio" name="xingzhi" id="normal"> 不重要-不紧急 </label>
            </div>
          </div>
          <div class="queren">
            <button class="confirm">确认添加</button>
          </div>
        </form>
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
  /*outline: 1px solid;*/
  float: left;  
}
.add{
  font-size: 50px;
  width: 60px;
  /*outline: 1px solid;*/
  float: left;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  margin-left: 200px;
  cursor: pointer;
}
.leftnav{
  position: absolute;
  width: 160px;
  height: calc(100% - 60px);
  background: #252323;
  float: left;
}
.leftnav div{
  color: #fff;
  font-size: 20px;
  text-align: center;
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  background: #857e7e;
  cursor: pointer;
}
.right{
  outline: 1px solid;
  float: left;
  width: calc(100% - 160px);
  margin-left: 160px;
}
.right form{
  margin-top: 30px;
  width: 700px;
  margin: auto;
  /*outline: 1px solid;*/
  height: 600px;
}
.right form h2{
  width: 100%;
  text-align: center;
  /*outline: 1px solid;*/
  padding-top: 40px;
  padding-bottom: 20px;
}
.right .detail{
  font-family: "微软雅黑";
  width: 100%;
  height: 60px;
  /*outline: 1px solid;*/
  font-size: 20px;
  line-height: 60px;
  margin: auto;
  box-sizing: border-box;
  padding-left: 80px;
}
.right .detail .listlabel{
  margin-right: 30px;
  float: left;
}
.right .detail .listinput{
  width: 220px;
  height: 35px;
  font-size: 18px;
  float: left;
  margin-top: 10px;
}
.right .detail textarea{
  width: 220px;
  height: 200px;
  resize: none;
  margin-top: 10px;
}
.right .detail .xingzhi{
  float: left;
  font-size: 16px;
}
.xingzhi .xz{
  margin-right: 10px;
}
.confirm{
  width: 80%;
  height: 60px;
  font-size: 20px;
  border-radius: 30px;
  border: none;
  margin: auto;
  display: block;
  margin-top: 1s0px;
  background: #86c3ec;
  color: #fff;
  letter-spacing: 5px;
  outline: none;
  cursor: pointer;
}
</style>
