import { Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Add, Autorenew, Remove } from '@material-ui/icons'
import React, { Component } from 'react'
import styled from 'styled-components'

export default class Example extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
          counter:0
        }
        this.addClicked=this.addClicked.bind(this)
        this.resetClicked=this.resetClicked.bind(this)
        this.subClicked=this.subClicked.bind(this)
    }
    addClicked(){
        this.setState({
            counter: this.state.counter+1
        })
    }
    resetClicked(){
        this.setState({
            counter:this.state.counter=0
        })
    }
    subClicked(){
        this.setState({
           counter: this.state.counter? (this.state.counter-1):0
        })
    }

    render() {
        return (
            <CardView>
            <Card className="container">

                <CardContent className="content" >
                    <p>
                        {this.state.counter}
                    </p>
                </CardContent>
                <div className="action" >
                    <div className="btn-gr">
                        <div className="btn-itm" id="btn-itm1">
                            <Button onClick={this.addClicked} className="btn1" border="0">
                                <Add/>
                            </Button>
                        </div>
                        <div className="btn-itm">
                            <Button onClick={this.resetClicked} className="btn2">
                                <Autorenew/>
                            </Button>
                        </div>
                        <div className="btn-itm">
                            <Button onClick={this.subClicked}  className="btn3" >
                                <Remove/>
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </Card>
            </CardView>
        )
    }
}

// const Card=styled.card`

// `
const CardView=styled.section`
    margin:0;
    padding:0;
    display: flex;
    position: absolute;
    height: 300px;
    width: 400px;
    top:30%;
    left:40%;
  
  .container{
      position:absolute;
      margin:auto;
      padding:0;
      border: 1px solid brown;
  }  
  .content{
    margin:auto;
    padding:0;
    text-align:center;
    font-size:40px;
    border: 1px solid brown;
  }
  .action{
      border:1px solid;
  }

  .btn-gr{
    margin:auto;
    position:relative;
    padding:0;
    width:100%;
    height:100%;
    ver-align:bottom;
    background-color:brown;
    
  }
  .btn-itm{
      display:inline;
     
  }
  Button{
      color:white;
      border-right:1px solid green;
      height:60px;
  }
  Button#btn-itm1{
      background-color:green;
      width:100px;
  }
 

 


`