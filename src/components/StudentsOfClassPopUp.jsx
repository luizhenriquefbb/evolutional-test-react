import React, { Component } from 'react';
import { connect } from "react-redux";
import inDevelopmentImage from "../images/in_development.png";
import $ from "jquery";


class StudentsOfClassPopUp extends Component {

    closePopUp(){
        $("#showStudentsPopup").hide(500);
    }

    render() {

        return (
            <div className="">
               <div className="hover_bkgr_fricc" id="showStudentsPopup" >
                    <span className="helper"></span>
                    <div>
                        <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>
                        
                        <h2>In development</h2>

                        <img style={{width:"30%"}} src={inDevelopmentImage} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(StudentsOfClassPopUp);