async function fetchWithFallback(container, url){
    const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';

    try{
        const result = await fetch(proxyUrl + url)
        const res = await result.text()
        const parser = new DOMParser()

        const doc = parser.parseFromString(res, "text/html")
        console.log(doc.getElementsByClassName("simple-little-table financials")[0])
        container.innerHTML = doc.getElementsByClassName("simple-little-table financials")[0].outerHTML
    }
    catch (err){
        console.error(err)
    }
}
