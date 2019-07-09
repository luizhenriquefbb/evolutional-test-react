import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from "jquery";
import { Select, Button } from "react-materialize";
import * as studentActions from "../actions/studentActions";
import * as common from "../utils/common";


class EditStudentPopUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentToEdit: this.props.studentToEdit
        }

        window.editStudentPopUp = this;
    }

    closePopUp() {
        $("#editStudent").hide(500);
    }

    getClassesOfADegree(degreeId) {

        const allClasses = this.props.classes;
        const allRelations = this.props.relations;

        return common.getClassesOfADegree(allClasses, allRelations, degreeId);
    }

    updateForm(evt, what) {

        if (what === "name") {
            this.setState({
                ...this.state,
                studentToEdit: { ...this.state.studentToEdit, name: evt.target.value }
            });
        }

        else if (what === "degree") {
            this.setState({
                ...this.state,
                studentToEdit: { ...this.state.studentToEdit, degreeId: parseInt(evt.target.value, 0) }
            });
        }

        else if (what === "class") {
            this.setState({
                ...this.state,
                studentToEdit: { ...this.state.studentToEdit, classId: parseInt(evt.target.value, 0) }
            });

        }

    }

    updateStateFromProps() {
        // We are reusing this popup, so we might want to change the state in two cases:
        // - initial state: state is null
        // - using for multiples users
        if (!this.state.studentToEdit ||
            (this.state.studentToEdit && this.state.studentToEdit.id !== this.props.studentToEdit.id)) {
                // eslint-disable-next-line
                this.state = ({
                    ...this.state,
                    studentToEdit: this.props.studentToEdit
                })
            }
    }

    applyChange(evt) {
        evt.preventDefault();

        this.props.dispatch(studentActions.editOneStudent(
            this.state.studentToEdit.id,
            this.state.studentToEdit.name,
            this.state.studentToEdit.classId,
            this.state.studentToEdit.degreeId
        ));

        this.closePopUp();
    }



    render() {
        if (this.props.studentToEdit) {
            this.updateStateFromProps();
            return (
                <div className="">
                    <div className="hover_bkgr_fricc" id="editStudent" >
                        <span className="helper"></span>
                        <div>
                            <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>
                            <form>
                                <input type="text" value={this.state.studentToEdit.name} onChange={(evt) => this.updateForm(evt, "name")} />

                                <Select value={this.state.studentToEdit.degreeId.toString()} onChange={(evt) => this.updateForm(evt, "degree")}>
                                    <option value="" disabled> Escolha um Grau </option>
                                    {this.props.degrees.map(degree => {
                                        return (
                                            <option value={degree.id} key={degree.id} > {degree.name} </option>
                                        )

                                    })}
                                </Select>

                                <Select value={this.state.studentToEdit.classId.toString()} onChange={(evt) => this.updateForm(evt, "class")}>
                                    <option value="" disabled> Escolha uma classe </option>
                                    {this.getClassesOfADegree(this.state.studentToEdit.degreeId).map(class_ => {
                                        return (
                                            <option value={class_.id} key={class_.id} > {class_.name} </option>
                                        )
                                    })}
                                </Select>

                                <Button onClick={(evt) => this.applyChange(evt)}>Aplicar</Button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}



function mapStateToProps(state) {
    return {
        classes: state.classesReducer.classes.classes,
        degrees: state.degreesReducer.degrees,
        relations: state.relationsReducer.relationships,
    }
}

export default connect(mapStateToProps)(EditStudentPopUp);