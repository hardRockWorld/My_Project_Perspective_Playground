Vue.createApp({
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
		}
	},
	computed: {
		box() {
			return {
				transform: `
					perspective(${this.perspective}px)
					rotateX(${this.rotateX}deg)
					rotateY(${this.rotateY}deg)
					rotateZ(${this.rotateZ}deg)
				`
			}
		}
	},
	methods: {
		reset() {
			this.perspective = 100
			this.rotateX = 0
			this.rotateY = 0
			this.rotateZ = 0
		},
		async copy() {
			let text = `
				transform: ${this.box.transform};
			`

			// using browser's native navigator object to use the clipboard method which we will eventually write the above text to. writeText() returns a promise, so we await it.
			await navigator.clipboard.writeText(text)

			// finally, we alert the user about copy data to clipboard successful.
			alert('Playground data successfully copied to browser clipboard!')
		}
	}
}).mount('#app');