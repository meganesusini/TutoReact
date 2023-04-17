class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            nom : 'demo2'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            nom : e.target.va
        })
    }

    render () {
        return <div>
            <label htmlFor = "nom">Mon nom</label>
            {/* <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/> */}
            <select value={this.state.nom} onChange={this.handleChange}>
                <option value="demo1">Demo 1</option>
                <option value="demo2">Demo 2</option>
                <option value="demo3">Demo 3</option>
            </select>
        </div>
    }
}
ReactDOM.render(<Home />, document.querySelector('#app'))

// CHAP6 6:50