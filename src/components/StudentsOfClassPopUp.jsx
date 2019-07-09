import React, { Component } from 'react';
import { connect } from "react-redux";
import inDevelopmentImage from "../images/in_development.png";
import $ from "jquery";


class StudentsOfClassPopUp extends Component {

    constructor(props) {
        super(props);

        // while developing only
        window.studentsOfClassPopUp = this;
    }
    closePopUp() {
        $("#showStudentsPopup").hide(500);
    }

    render() {
        const students = this.props.studentsToShow;
        console.log('students', students);
        return (
            <div className="">
                <div className="hover_bkgr_fricc" id="showStudentsPopup" >
                    <span className="helper"></span>
                    <div>
                        <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>

                        {!(students.length>0) && (
                            <div>
                                <h2>In development</h2>

                                <img style={{ width: "30%" }} src={inDevelopmentImage} alt="" />
                            </div>
                        )}

                        {(students.length>0) && (
                            <div style={{overflowY: "auto",maxHeight: "473px"}}>
                                <table className="highlight">
                                    <thead>
                                        <tr>
                                            <th>-</th>
                                            <th>Nome</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {students.map((student, index) => (
                                            <tr key={student.id}>
                                                <td>{index+1}</td>
                                                <td>{student.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
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