import React from "react"

class Box extends React.Component {
    constructor() {
        super()
        this.state = {
            counter : 0
        }
        this.nama = "Andi"

        this.tambahHandler = this.tambahHandler.bind(this)
        this.kurangHandler = this.kurangHandler.bind(this)
    }

    tambahHandler() {
        this.setState({counter : this.state.counter + 1})
    }

    kurangHandler() {
        if (this.state.counter <= 0) {
            return
        }
        this.setState({counter : this.state.counter - 1})
    }

    render() {
        return <div style={{color: this.props.color, border:"black solid 1px"}}>Counter adalah {this.state.counter}
        <button onClick={this.tambahHandler}>+</button>
        <button onClick={this.kurangHandler}>-</button>

        </div>
    }
}
export default Box;