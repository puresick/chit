const search = async params => {
	const proxy = "https://chitproxy.herokuapp.com/"
	const lang = "de"
	const { query, type } = params
	const searchType = type === "id" ? `?q=*&fq=fs_id%3A${query}` : `?q=${query}`
	const url = `${proxy}http://searching.nintendo-europe.com/${lang}/select${searchType}&start=0&rows=999`
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
