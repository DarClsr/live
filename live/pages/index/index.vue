<template>
	<view class="page p-top bg-default">
		<view class="content">
			<view class="banner">
				<u-swiper :list="list"></u-swiper>
			</view>

			<view class="list">
				<view class="title">
					<u-section font-size="32" color="primary" title="列表" sub-title="查看更多" :right="false"></u-section>
					<WaterList ref="water" />
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import WaterList from "@/components/water-list/water-list.vue"
	export default {
		components: {
			WaterList
		},
		data() {
			return {
				title: 'live app',
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		onLoad() {

		},
		onReachBottom() {
			this.$refs.water.addRandomData()
		},
		methods: {


		}
	}
</script>

<style lang="scss" scoped>
	.list {
		padding-top: 20rpx;
	}
</style>
