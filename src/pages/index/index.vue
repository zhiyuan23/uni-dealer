<template>
	<view class="content">
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
    import { homeInfo, login } from '@/api/home'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			login({
				userName: 'test4',
				password: '123456'
			}).then(data => {
                localStorage.setItem('orgId', data.data.orgId)
			})
            homeInfo().then(data => {
				uni.showToast({
					title: '请求成功'
				})
				this.title = data.data
            }).catch(e => {
				uni.showToast({
					title: '请求失败'
				})
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
