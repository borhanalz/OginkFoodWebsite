import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import WindowMenu from './WindowMenu'
import $ from 'jquery'

export default class TinyNav extends Component {

    constructor(props){
        super(props)
        this.state = {
            windowStatus:false
        }
    }

  HndleWindowStatus = ()=>{
    $('.window').slideToggle(800);
    this.setState({
        windowStatus:!this.state.windowStatus
    });
   }
  

  render() {


    return (
    <>
        <div className='tiny_nav text-center'>
            <div className='float-end mt-4 toggle_btn' onClick={this.HndleWindowStatus}>
                    {this.state.windowStatus ? <FontAwesomeIcon icon={faXmark} className="toggleBar_ico" onClick={this.HndleCloseWindow}/>:
                    <FontAwesomeIcon icon={faBars} className="toggleBar_ico"/> 
                    }
            </div>
            <div className="logo mt-3 float-start">
                <img src="./assets/لوگو.png" className="header_logo" />
            </div>
        </div>   
        <WindowMenu/>
    </>
       )
  }
}
