<template>
	<div>
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
</template>

<script type="text/javascript">
export default {
    name:'add'    
  }

</script>

<style type="text/css" scoped>
form{
  margin-top: 30px;
  width: 700px;
  margin: auto;
  outline: 1px solid;
  height: 600px;
}
form h2{
  width: 100%;
  text-align: center;
  /*outline: 1px solid;*/
  padding-top: 40px;
  padding-bottom: 20px;
}
.detail{
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
.detail .listlabel{
  margin-right: 30px;
  float: left;
}
.detail .listinput{
  width: 220px;
  height: 35px;
  font-size: 18px;
  float: left;
  margin-top: 10px;
}
.detail textarea{
  width: 220px;
  height: 200px;
  resize: none;
  margin-top: 10px;
}
.detail .xingzhi{
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