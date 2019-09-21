import React from "react"

class Box extends React.Component {
    constructor() {
        super()
        this.state = {
            movement: "idle",
            locX: 0,
            locY: 0
        }
        this.nama = "Andi"

        this.kananHandler = this.kananHandler.bind(this)
        this.kiriHandler = this.kiriHandler.bind(this)
        this.atasHandler = this.atasHandler.bind(this)
        this.bawahHandler = this.bawahHandler.bind(this)
        this.stopHandler = this.stopHandler.bind(this)
    }

    internalHandler(movement, func) {
        if (this.state.movement === movement) {
            var x = this
            setTimeout( function() {
                func()
                x.internalHandler(movement, func)
            }, 10)
        }
    }

    kananHandler() {
        if (this.state.movement === "kanan") {
            return
        }

        this.setState({movement: "kanan"}, function () {
            var x = this
            this.internalHandler("kanan", function() {
                x.setState({locX : x.state.locX + 1})
            })
        })
    }

    kiriHandler() {
        if (this.state.movement === "kiri") {
            return
        }

        this.setState({movement: "kiri"}, function () {
            var x = this
            this.internalHandler("kiri", function() {
                x.setState({locX : x.state.locX - 1})
            })
        })
    }

    atasHandler() {
        if (this.state.movement === "atas") {
            return
        }

        this.setState({movement: "atas"}, function () {
            var x = this
            this.internalHandler("atas", function() {
                x.setState({locY : x.state.locY - 1})
            })
        })
    }

    bawahHandler() {
        if (this.state.movement === "bawah") {
            return
        }

        this.setState({movement: "bawah"}, function () {
            var x = this
            this.internalHandler("bawah", function() {
                x.setState({locY : x.state.locY + 1})
            })
        })
    }

    stopHandler() {
        this.setState({movement: "idle"})
    }

    render() {
        var divStyle = {border:"1px solid black", width:10, height:10, position:"absolute", top: this.state.locY, left: this.state.locX}
        return <div>
            <div style={divStyle}></div>
            <div>Loc {this.state.locX}, {this.state.locY}</div>
            <button onClick={this.kananHandler}>Kanan</button>
            <button onClick={this.kiriHandler}>Kiri</button>
            <button onClick={this.atasHandler}>Atas</button>
            <button onClick={this.bawahHandler}>Bawah</button>
            <button onClick={this.stopHandler}>Stop</button>
        </div>
    }
}
export default Box;