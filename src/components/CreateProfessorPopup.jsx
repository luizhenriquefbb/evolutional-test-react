import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from "jquery";
import { Select } from 'react-materialize';
import Button from 'react-materialize/lib/Button';
import { create_new_teacher } from "../actions/TeacherActions";
import { new_relation } from "../actions/relationsActions";


class StudentsOfClassPopUp extends Component {

    // constructor(props) {
    // super(props);

    // while developing only
    // window.studentsOfClassPopUp = this;
    // }

    closePopUp() {
        $("#createProfessor").hide(500);
    }

    createProfessor(evt) {
        evt.preventDefault();

        const teacherName   = $("#teacherName").val();
        const teacherDegree = parseInt($("#teacherDegree").val());
        const teacherClass  = parseInt($("#teacherClass").val());
        const teacherMatter  = parseInt($("#teacherMatter").val());
        const teacherId  = this.props.teachers.length+1

        this.props.dispatch(create_new_teacher(teacherName, teacherId));
        this.props.dispatch(new_relation(teacherId,teacherMatter,teacherDegree, teacherClass));

        alert("Professor criado com sucesso =)");
        this.closePopUp();

    }

    render() {
        const {classes, degrees, matters} = this.props;
        return (
            <div className="">
                <div className="hover_bkgr_fricc" id="createProfessor" >
                    <span className="helper"></span>
                    <div>
                        <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>

                        <form onSubmit={(evt) => this.createProfessor(evt)}>
                            {/* Professor name */}
                            <input type="text" id="teacherName" placeholder="Nome" />

                            {/* Professor degree */}
                            <Select id="teacherDegree">
                                <option value="" disabled> Escolha uma graduação </option>
                                {degrees.map(class_ => {
                                    return (
                                        <option value={class_.id} key={class_.id} > {class_.name} </option>
                                    )
                                })}
                            </Select>

                            {/* professor class */}
                            <Select id="teacherClass">
                                <option value="" disabled> Escolha uma classe </option>
                                {classes.map(class_ => {
                                    return (
                                        <option value={class_.id} key={class_.id} > {class_.name} </option>
                                    )
                                })}
                            </Select>

                            {/* professor Matter */}
                            <Select id="teacherMatter">
                                <option value="" disabled> Escolha uma matéria </option>
                                {matters.map(matter => {
                                    return (
                                        <option value={matter.id} key={matter.id} > {matter.name} </option>
                                    )
                                })}
                            </Select>

                            <Button>Criar</Button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        classes: state.classesReducer.classes.classes,
        degrees: state.degreesReducer.degrees,
        relations: state.relationsReducer.relationships,
        teachers: state.teacherReducer.teachers,
        matters: state.matterReducer.matters
    }
}

export default connect(mapStateToProps)(StudentsOfClassPopUp);