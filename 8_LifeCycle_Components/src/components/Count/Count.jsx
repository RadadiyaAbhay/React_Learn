import React from "react";

class Count extends React.Component{

    constructor(){
        super();
        this.state = {Counting : 0}
    }

    componentDidMount(){
        console.log("Component Mount");
    }

    Add(){
        this.setState({Counting : 1})
    }

    render(){
        return(
            <>
            <h1>
                {
                    this.state.Counting
                }
            </h1>
            <button onClick={this.Add.bind(this)}>Add</button>
            </>
        )
    }

    componentDidUpdate(){
        console.log("Component Update");
    }
}
export default Count;