<template>
	<view class="manage-box">
		<u-toast ref="uToast"></u-toast>
		<view class="usertop-card">
			<view class="author-box">
				<view class="useravatar">
					<u-avatar :src="userData.icon"></u-avatar>
				</view>
				<!-- 用户头像、ID、个性签名 -->
				<view class="usertxt">
					<view class="username">{{userData.nickname === null ? '未设置昵称' : userData.nickname}}
					<u-icon name='man' size="20" style="padding-left: 10rpx;" color="#12B5A1" v-if="userData.gender === 1"></u-icon>
					<u-icon name='woman' size="20" style="padding-left: 10rpx;" color="#12B5A1" v-if="userData.gender === 0"></u-icon>
					</view>
					<view class="userid" style="color:#888;font-size: 25rpx;padding-top:10rpx">ID：{{userData.user_id}}</view>
					<view class="usersign" style="color:#888;font-size: 25rpx;padding: 10rpx 0rpx;">个性签名：{{userData.signature}}</view>
				</view>
			</view>
			<!-- 分割线 -->
			<u-divider lineColor="#7f8c8d"></u-divider>
		</view>	
		<view>
			<u-button type="primary" text="个人信息编辑" icon="edit-pen" plain shape="circle" color="#12B5A1" @click="this.formShow = true" :customStyle="{marginTop: '20px'}"></u-button>
		</view>
		<view class="form" v-if="formShow">
			<u--form labelPosition="top" labelWidth="80px" :model="model1" ref="form">
				<u-form-item label="用户ID" prop="userInfo.username">
					<u--input placeholder="" v-model="model1.userInfo.user_id" border="bottom" disabled>
					</u--input>
				</u-form-item>
				<u-form-item label="用户名" prop="userInfo.username">
					<u--input placeholder="" v-model="model1.userInfo.username" border="bottom" disabled>
					</u--input>
				</u-form-item>
				<u-form-item label="昵称" prop="userInfo.nickname">
					<u--input placeholder="请在这里输入昵称" v-model="model1.userInfo.nickname"  clearable border="bottom">
					</u--input>
				</u-form-item>
				<u-form-item label="个性签名" prop="userInfo.nickname">
					<u--textarea v-model="model1.userInfo.signature" placeholder="请输入个性签名" count></u--textarea>
				</u-form-item>
				</u-form-item>
				<u-form-item label="性别" prop="userInfo.sex" @click="showSex = true; hideKeyboard()"
					ref="item1" :required="true" borderBottom = "true">
					<u--input disabled disabledColor="#ffffff" placeholder="请选择性别" v-model="model1.userInfo.gender"
						border="none"></u--input>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</u-form-item>
				<u-form-item label="更改头像" prop="userInfo.image"
					ref="item1" :borderBottom = "true">
					<uni-file-picker ref="imgUP" v-model="imageValue" :auto-upload="false" fileMediatype="image"
						mode="grid" @select="select" :limit='1' @delete="deleteImg"/>
						<!-- <view style="width: 200rpx;padding-top: 10rpx;"><u-button :plain="true" color="#EE394E" shape="circle" @click="clearImg" size="mini">重选图片</u-button></view>	 -->
				</u-form-item>
				<u-form-item>
					<u-button formType="submit" shape="circle" color="rgb(18,181,161)" @click="submit()">
						提交修改
					</u-button>
				</u-form-item>
			</u--form>
			<!-- 选择性别时的弹窗 -->
			<u-action-sheet :show="showSex" :actions="genderArr" title="请选择性别" @close="showSex = false"
				@select="sexSelect">
			</u-action-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue:null,
				imagePostURL:null,
				formShow:false,
				userID: null,
				model1: {
					userInfo: {
						user_id:null,
						username: null,
						nickname: null,
						signature: "",
						gender: null,
						icon:null,
					}},
				icon:null,
				userData:{
					
				},
				showSex:false,
				genderArr: [{
						name: "男",
					},
					{
						name: "女",
					},
					{
						name: "保密",
					},
				],
			};
		},
		methods: {
			deleteImg() {
				console.log(111)
				this.imagePostURL = null
				console.log(this.imagePostURL)
			},
			// 上传图片,获取URL地址
			uploadImg() {
				console.log(222)
				return new Promise(resolve => {
					let a = uni.uploadFile({
						url: 'http://localhost:3000/upload/upimg', //仅为示例，非真实的接口地址
						filePath: this.imagePostURL,
						name: 'image',
						formData: {},
						success: (res) => {
							resolve(res)
						}
					})
				})
			},
			//获取到上传之后的照片地址，方便传入后台数据库
			async setpostUrlImg() {
				let result = await this.uploadImg()
				let imgUrl = JSON.parse(result.data)
				this.imagePostURL = imgUrl.data[0]
				console.log(this.imagePostURL)
			},
			select(e) {
				this.imagePostURL = e.tempFilePaths[0]
				this.setpostUrlImg()
			},
			submit() {
				if(this.imagePostURL) {
					this.model1.userInfo.icon  = this.imagePostURL
				}
				else {
					if(this.icon.includes('/images')) {
						let iconUrl = this.icon.substring(this.icon.indexOf('/images'))
						this.model1.userInfo.icon =  iconUrl
					}
					else {
						let iconUrl = this.icon.substring(this.icon.indexOf('/postimg'))
						this.model1.userInfo.icon =  iconUrl
					}
				}
				console.log(this.model1.userInfo.icon)
				let userData = this.model1.userInfo
				let gender = null
				if (userData.gender === "男") {
					gender = 1
				}
				else if(userData.gender === "女"){
					gender = 0
				}
				else {
					gender = -1
				}
				uni.$u.http.post('/users/updateUserInfo', {nickname:userData.nickname,gender:gender,signature:userData.signature,icon:userData.icon,user_id:userData.user_id} ).then(res => {
					console.log(res)
					this.getUserData()
					this.$refs.uToast.show({
						type:"success",
						message:"修改成功",
						duration:800,
						complete() {
							console.log(111)
							uni.reLaunch({
								url:"/pages/user/user"
							})
						}
					})
				}).catch(err => {
				})
			},
			sexSelect(e) {
				this.model1.userInfo.gender = e.name
				
			},
			getUserData() {
				uni.$u.http.get('/users/getIDTargetUser',  {params: {user_id:`${this.userID}`}}).then(res => {
						console.log(res.data.data[0])
						this.userData = res.data.data[0]
						let data = res.data.data[0]
						this.icon = data.icon[0]
						let userInfo = this.model1.userInfo
						userInfo.user_id = data.user_id
						userInfo.username = data.user_name
						userInfo.nickname = data.nickname
						userInfo.signature = data.signature
						if(data.gender === 1) {
							userInfo.gender = "男"
						}
						else if (data.gender === 0) {
							userInfo.gender = "女"
						}
						else {
							userInfo.gender = "保密"
						}
						userInfo.icon = data.icon[0]
					}).catch(err => {
					console.log(err)
				})
			}
		},
		onLoad(data) {
			this.userID = data.user_id
			console.log(this.userID)
		},
		mounted() {
			this.getUserData()
		}
	}
</script>

<style lang="scss">
.manage-box {
	padding:20rpx 20rpx;
	.usertop-card{
		width: 100%;
		padding:30rpx 30rpx;
		background-color: #fff;
		border-radius: 20rpx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		
		.author-box{
			display: flex;
			.usertxt{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left:20rpx;
				.username {
					display: flex;
					font-weight: bold;
				}
			}
		}
	}
	.form {
		margin-top: 20rpx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 40rpx 50rpx;
		background: #fff;
		border-radius: 20rpx;
	}
}
</style>
