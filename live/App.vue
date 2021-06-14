<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			uni.onTabBarMidButtonTap(()=>{
				console.log("click mid")
				uni.navigateTo({
					url:"/pages/liveroom/liveroom",
					fail(e) {
						console.log(e)
					}
				})
			})
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import  "@/static/css/common.scss";
</style>
