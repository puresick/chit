const search = async params => {
	const { query, type } = params
	const server = `chitapi.hnnng.dev`
	const url = `https://${server}/de/${type}/${query}`
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
