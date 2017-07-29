<template>
  <div id="comment">
	  <div class="star">
	  	<span>星级</span>
	  	<ul>
		    <li v-for="n in {{me.score}}">
		    	<img :src="starOn" alt="">
		    </li>
		    <li v-for="n in 5 - {{me.score}}">
		    	<img :src="starDown" alt="">
		    </li>
		</ul>
	  </div>
	  <textarea name="" id="" cols="30" rows="10" placeholder="亲，菜品口味如何，服务满意吗？">
	  	{{me.comment}}
	  </textarea>
	  <p>发布评论成功可赢5积分</p>
	  <div>
	  	<img :src="defPhoto" alt="">
	  	<input type="file" class="photo">
	  	<p>发布评论成功可赢5积分</p>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
  	var me = {
  		score : 4,
  		comment : '美味'
  	}
    return {
    	me : me,
    	starOn: require('../../assets/ic_star_pressed.png'),
    	starDown: require('../../assets/ic_star.png'),
    	defPhoto : require('../../assets/ic_upload_img_default.jpg')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
