async function fetchWithFallback(container, url){
    const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';

    try{
        const result = await fetch(proxyUrl + url)
        const res = await result.text()
        const parser = new DOMParser()

        const doc = parser.parseFromString(res, "text/html")
        console.log(doc.documentElement.innerHTML)
        container.innerHTML = doc.documentElement.innerHTML
    }
    catch (err){
        console.error(err)
    }
}

// Другие прокси:
// 'https://api.codetabs.com/v1/proxy?quest='
// 'https://corsproxy.io/?url'
