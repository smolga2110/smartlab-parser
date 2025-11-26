async function fetchWithFallback(container, url){
    const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';

    try{
        const result = await fetch(proxyUrl + url)
        const res = await result.text()
        const parser = new DOMParser()

        const doc = parser.parseFromString(res, "text/html")
        const table = doc.getElementsByClassName("simple-little-table financials")[0]
        const rows = table.rows;
        console.log(rows[2].cells[1].innerText)
        for (let i = 0; i < rows.length; i++){
            for (let j = 3; j < rows[i].cells.length; j++)
                if (j != 8){
                    console.log(rows[2].cells[j - 1].innerText + rows[i].cells[0].innerText + rows[i].cells[j].innerText)
                }
        }
        container.innerHTML = doc.getElementsByClassName("simple-little-table financials")[0].outerHTML
    }
    catch (err){
        console.error(err)
    }
}
