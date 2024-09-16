const url = 'http://localhost:3000'


function saveLink() {
    let path    = generateURL()
    let name    = document.getElementById('name').value
    let content = document.getElementById('content').value
    let link    = document.getElementById('link')

    const data = {
        path: path,
        name: name,
        content: content
    }
    
    axios.post(`${url}/`, data).then(
        (response) => {
            console.log(response.data.result)
        }
    ).catch(err => console.error(err))

    let shortLink    = `http://moth/${path}`
    link.href        = `http://127.0.0.1:5500/link.html?path=${path}`
    link.textContent = shortLink
    link.target      = '_target'

    document.getElementById('short-box').style.display = 'flex'

    document.getElementById('copy').addEventListener('click', () => {
        navigator.clipboard.writeText(shortLink)
        .then(() => {
            alert('Link copiado!')
        }).catch(() => {
            alert('Algo deu errado, tente novamente.')
        })
    })
}

function getLink() {
    let params     = new URLSearchParams(window.location.search)
    let pathParams = params.get('path')
    console.log(pathParams)

    axios.get(`${url}/${pathParams}`).then(
        (response) => {
            const data = response.data.result
            document.getElementById('table').innerHTML = `<tr><td>${data.name}</td><td>http://moth/${data.path}</td><td><a href="${data.content}" target="_blank">${data.content}</a></td></tr>`

            console.log(data)
        }
    ).catch(err => console.error(err))
}

function deleteLink() {

}

function generateURL() {
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
    
    let url = ''

    for (let i = 0; i < 6; i++) {
        url += chars[Math.floor(Math.random() * chars.length)]
    }

    return url
}

