const search = async params => {
	const { query, type } = params
	// const server = `localhost`
	const server = `chit.hnnng.dev`
	// const url = `https://${server}:3333/de/${type}/${query}`
	const url = `http://${server}/de/${type}/${query}`
	const response = await fetch(url)
	const body = await response.json()
	const result = body.response.docs.filter(
		item => item.pg_s === "GAME" && item.playable_on_txt.includes("HAC")
	)

	return result
}

export {
	search
}