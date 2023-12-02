import React from 'react'

class State extends React.Component{

    constructor(){
        super();
        this.state = {name: 'Abhay Radadiya'}
    }

    componentDidMount(){
        console.log("Component Mount");
    }
    changeName(){
        this.setState({name : 'Vaibhav Radadiya'});
    }



    render(){
        return(
            <>
            <h1>
                Hello , {
                    this.state.name
                }
            </h1>
            <button onClick={this.changeName.bind(this)}>Change</button>
            </>
        )
    }
    componentDidUpdate(){
        console.log("Component Update");
    }
}

export default State;