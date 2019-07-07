import React, { Component } from 'react';
import { connect } from "react-redux";
import in_development_image from "../images/in_development.png";
import $ from "jquery";


class StudentChart extends Component {


    closePopUp(){
        $("#studentChart").hide(500);
    }
    render() {

        return (
            <div className="">
                <div className="hover_bkgr_fricc" id="studentChart" /* style={{ display: this.props.visible ? 'block' : 'none' }} */ >
                    <span className="helper"></span>
                    <div>
                        <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>

                        <h1>Em desenvolvimento</h1>

                        <img src={in_development_image} alt="in development" style={{width:"186px"}}/>
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

export default connect(mapStateToProps)(StudentChart);