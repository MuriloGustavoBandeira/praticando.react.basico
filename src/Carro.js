import React from 'react'

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={
            ligado:false,
            velAtual:0,
        }
    }

}    
