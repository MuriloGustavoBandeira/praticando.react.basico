import React from 'react'

export default class Classe extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Primeiro componente de classe</h1>
                <p>Canal: {this.props.nome}</p>
            </div>
        )
    }
}
