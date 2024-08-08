() => {
	async function main() {
		const client = new Promise((resolve) => {
			setTimeout(() => {
				// I assume you have a good, stable connection
				// if you don't then too bad, workarounds suck
				resolve(window.controllers.client.getAvailableClient())
			}, 2500)
		})

		client.then(c => c.on("message", (m) => {
			if (m.author.id === c.user.id && m.content.startsWith("/me")) {
				m.edit({ content: `*${(c.user.display_name ?? c.user.username).trim()} ${m.content.substring(4).trim()}*`})
			}
		}))
	}

	main()
}
