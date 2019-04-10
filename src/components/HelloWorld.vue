<template>
  <div class="hello">
		<div class="content">
			<h1>{{ title }}</h1>
			<div class="side bbva">
				<h2>🏦 Bank Component 💳</h2>
				<my-bank-otp
					max-length="4"
					@send-pin="sendPin">
        </my-bank-otp>
			</div>
			<div class="side ctbx">
				<h2>📦 Citibox 📫</h2>
				<lock-code label="The code" :code="code"></lock-code>
			</div>
		</div>
  </div>
</template>

<script>
import '../web-components/my-bank-otp/my-bank-otp.js';
import '../web-components/lock-code/lock-code.js';


const EMPTY_CODE = '    ';
export default {
  name: 'HelloWorld',
  props: {
    title: String
	},
	data: function () {
		return {
			code: EMPTY_CODE,
    };
	},
	methods: {
		sendPin: function (event) {
			if (event.detail.accessKey) {
				this.code = event.detail.accessKey;
				this.setColor('--citibox-party');
			} else {
				this.code = EMPTY_CODE;
				this.setColor('--citibox-octopus');
			}
		},

		setColor(cutomCssColor) {
			const style = window.getComputedStyle(this.$vnode.elm);
			const color = style.getPropertyValue(cutomCssColor);
			this.$vnode.elm.style.setProperty('--citibox-color', color);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.hello {
	--text-color: white;
	--bbva-color: var(--bbva-blue);
	--citibox-color: var(--citibox-octopus);
}
.bbva {
	background: var(--bbva-color);
}
.ctbx {
	background: var(--citibox-color);
	transition: all 1s ease-in-out;
}

.content {
	position: relative;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
}

.content > h1 {
	flex: 0 0 100%;
}

.content > .side {
	flex: 1 0 50%;
	color: var(--text-color);
}

.side > * {
	width: 80%;
	margin: 1em auto;
}

</style>
