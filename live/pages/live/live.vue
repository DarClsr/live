<template>
	<view class="live page">
		<view class="content ">


			<view class="play-view">
				<video class="video" :src="pullUrl"  ></video>
			</view>

			<view class="play-wrap">
				<view class="loading"></view>
				<view class="show">
					<view class="status_bar">
					</view>
					<view class="top">
						<view class="left">
							<view class="player">
								<u-avatar src="https://picsum.photos/510/300?random" size="50"></u-avatar>
								<view class="text">
									<text class="uasername">妮妮</text>
									<text class="count">31人</text>
								</view>
							</view>
							<view class="action">
								<u-button color="#8745ff" size="mini" shape="circle">关注</u-button>
							</view>
						</view>

						<view class="right">
							<scroll-view class="user" :scroll-x="true">
								<u-avatar class="avatar" size="50" v-for="(item,index) in 20" :key="index"
									src="https://picsum.photos/510/300?random"></u-avatar>
							</scroll-view>
							<view class="close">
								<u-icon class="icon" color="#fff" size="48" name="close-circle"></u-icon>
							</view>
						</view>

					</view>
					<view class="ad"></view>
					<scroll-view class="gift" :scroll-x="true">
						<view class="product">
							<u-avatar src=""></u-avatar>
							<text>gift01</text>
						</view>
					</scroll-view>
					<scroll-view class="chat-list" :scroll-y="true">
						<view class="info" v-for="item in 10" :key="item">
							<text>user01:</text>
							<view class="text">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 </view>
						</view>
					</scroll-view>
					<view class="chat-bottom">
						<u-input class="input" height="70" :border="true"></u-input>
						<u-button type="primary">send</u-button>
					</view>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import config from "@/config/config.js";

	export default {
		data() {
			return {
				pullUrl: config.pullUrl
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.live {
		height: 100vh;
		width: 100%;

		.content {
			height: 100%;
			width: 100%;
			padding: 0;
			position: relative;

			.play-wrap {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;

				.show {
					height: 100%;
					width: 100%;
					position: relative;

					.top {
						height: 100rpx;
						display: flex;
						padding: 10rpx;
						box-sizing: border-box;
						justify-content: space-between;
						flex-direction: row;

						.left {
							background-color: rgba(0, 0, 0, .6);
							border-radius: 30rpx;
							flex: 1;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							padding: 0 10rpx;
							margin-right: 15rpx;

							.player {
								display: flex;
								flex-direction: row;
								align-items: center;

								.text {
									font-size: 22rpx;
									margin-left: 16rpx;
								}
							}

							.action {
								margin-left: 30rpx;
								margin-left: auto;
							}
						}

						.right {
							flex: 2;
							flex-direction: row;
							align-items: center;
							display: flex;
							margin-left: 50rpx;

							.user {
								white-space: nowrap;
								overflow: hidden;
								width: 350rpx;

								.avatar {
									width: 100rpx;
									margin-top: 15rpx;
									margin-left: 10rpx;
								}
							}

							.close {
								flex: 1;
								text-align: center;
								display: flex;
								justify-content: center;
								flex-direction: row;
							}
						}
					}

					.ad {
						height: 400rpx;
						background-color: red;
					}

					.gift {
						background-color: #C8C9CC;
						height: 400rpx;
						width: 60vw;

					}

					.chat-list {
						height: 400rpx;
						position: absolute;
						bottom: 120rpx;
						width: 60vw;

						.info {
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							margin-top: 15rpx;
							padding: 10rpx;
							background-color: rgba(0, 0, 0, .4);

							.text {
								color: white;
								flex: 1;
								padding-left: 15rpx;
							}
						}
					}

					.chat-bottom {
						position: fixed;
						bottom: 0;
						height: 120rpx;
						width: 100%;
						background-color: #2979FF;
						display: flex;
						flex-direction: row;
						align-items: center;
						padding: 0 12rpx;

						.input {
							margin-right: 15rpx;
						}
					}

				}

			}


			.play-view {
				width: 100%;
				height: 100%;
				background-color: blue;
				align-items: center;
				display: flex;
				align-items: center;

				.video {
					width: 100%;
					margin: auto;
					flex: 1;
				}
			}
		}
	}
</style>
