let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const title = <React.Fragment><h1>Bonjour les gens <span>{n}</span>
    </h1>
    <ul>
        {items.map((item, k) => <li key={k}>{item}</li>)}
    </ul>
    </React.Fragment>
    ReactDOM.render(title, document.querySelector('#app'))
    // document.querySelector('#app').innerHTML = '<h1>Bonjour tout le monde</h1>'
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)