<template>
	<view class="message">
		<!-- 顶部图标j及选项-->
		<view class="title">
			<view class="title-item" @click="toNotice">
				<view class="title-img-box">
					<image src="../../static/icon/message.png"></image>
				</view>
				<view>公告</view>
			</view>
		</view>
		<!-- 下方好友私聊信息区-->
		<u-divider text="好友消息"></u-divider>
		<userMessageCard></userMessageCard>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData:null,
			};
		},
		methods: {
			toComment(){
				uni.navigateTo({
					url:"/pages/message/comment/comment"
				})
			},
			toLike() {
				uni.navigateTo({
					url:"/pages/message/likes/likes"
				})
			},
			toNotice() {
				uni.navigateTo({
					url:"/pages/message/notice/notice"
				})
			}
		},
		onShow(){
			const isLogin = uni.getStorageSync("isLogin")
			// consol.log(isLogin)
			 if (!isLogin) {
			      uni.reLaunch({
			        url: '/pages/user/login/login'
			      })
			    }
		}
	}
</script>

<style lang="scss">
	.message {
		padding: 20rpx 20rpx;

		.title {
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			text-align: center;
			border-radius: 20rpx;

			.title-item {
				padding: 20rpx 20rpx;

				.title-img-box {
					width: 100rpx;
					height: 100rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}


	}
</style>
