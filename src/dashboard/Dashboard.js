import React, {Component} from 'react'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem("authenticated") === "false") {
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"> Welcome!</div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
