import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import * as common from "../utils/common";
import $ from "jquery";
import StudentsToShowPopup from './StudentsToShowPopup';
import { Button } from 'react-materialize';
import CreateProfessorPopup from './CreateProfessorPopup';

class Teachers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentsToShow: [],
            degreeOrClass: ""
        }

    }

    applyFilter(evt) {
        evt.preventDefault();

        const userName = $("form.filters-wrapper").find("input#teacherNameFilter").val().toLowerCase();
        const userDegree = $("form.filters-wrapper").find("input#teacherDegreeFilter").val().toLowerCase();
        const userClass = $("form.filters-wrapper").find("input#teacherClassFilter").val().toLowerCase();
        const userMatter = $("form.filters-wrapper").find("input#teacherMatterFilter").val().toLowerCase();

        const table_tbody = $("table#teacherTable").find("tbody");

        table_tbody.find("tr").show();

        // filter by user name
        if (userName) {
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.teacherName").text().toLowerCase().includes(userName)) {
                    $(tr).show();
                }
                else {
                    $(tr).hide();
                }
            });
        }

        // filter by degree
        if (userDegree) {
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.teacherDegree").text().toLowerCase().includes(userDegree)) {
                    $(tr).show();
                }
                else {
                    $(tr).hide();
                }
            });
        }

        // filter by class
        if (userClass) {
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.teacherClass").text().toLowerCase().includes(userClass)) {
                    $(tr).show();
                }
                else {
                    $(tr).hide();
                }
            });
        }

        // filter by matter
        if (userMatter) {
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.teacherMatter").text().toLowerCase().includes(userMatter)) {
                    $(tr).show();
                }
                else {
                    $(tr).hide();
                }
            });
        }
    }

    showStudentsOfAClass(degree_id, class_id) {
        const students = this.props.students;

        this.setState({
            studentsToShow: common.getStudentsOfAClass(students, class_id, degree_id),
            degreeOrClass: "Classe"
        });

        $("#showStudentsPopup").show(500);
    }

    showStudentsOfADegree(degree_id) {

        const students = this.props.students;

        this.setState({
            studentsToShow: common.getStudentsOfADegree(students, degree_id),
            degreeOrClass: "Graduação"
        });

        $("#showStudentsPopup").show(500);
    }

    createProfessor(){
        $("#createProfessor").show(500);
    }

    render() {
        const teachers = this.props.teachers;
        const relations = this.props.relations;
        const degrees = this.props.degrees;
        const classes = this.props.classes;
        const matters = this.props.matters;

        return (
            <div className="">
                <Header />
                <div className="body">
                    <h1>Professores</h1>

                    <form className="filters-wrapper" onSubmit={(evt) => { this.applyFilter(evt) }}>
                        <input type="text" placeholder="Nome do Professor" id="teacherNameFilter" onChange={(evt) => this.applyFilter(evt)} />
                        <input type="text" placeholder="Nome da Matéria" id="teacherMatterFilter" onChange={(evt) => this.applyFilter(evt)} />
                        <input type="text" placeholder="Graduação do Professor" id="teacherDegreeFilter" onChange={(evt) => this.applyFilter(evt)} />
                        <input type="text" placeholder="Classe do Professor" id="teacherClassFilter" onChange={(evt) => this.applyFilter(evt)} />
                    </form>

                    <div style={{margin: "19px 0"}} className="spaceElements">
                        <Button onClick={() => this.createProfessor()}> Cadastrar professor </Button>
                    </div>

                    <table className="highlight" id="teacherTable">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Matéria</th>
                                <th>Grau</th>
                                <th>Classe</th>
                            </tr>
                        </thead>

                        <tbody>
                            {teachers.map(teacher => (

                                common.getDegreesOfATeacher(relations, degrees, teacher.id).map(degree =>
                                    common.getMattersByTeacherId(matters, relations, teacher.id).map(matter => (
                                        common.getClassesOfADegree2(classes, relations, degree.id, teacher.id).map(class_ => (
                                            <tr key={teacher.id + "-" + degree.id + "-" + class_.id}>
                                                <td className="teacherName">{teacher.name}</td>
                                                <td className="teacherMatter">{matter.name}</td>
                                                <td className="teacherDegree myLink" onClick={() => this.showStudentsOfADegree(degree.id)}>{degree.name}</td>
                                                <td className="teacherClass myLink" onClick={() => this.showStudentsOfAClass(degree.id, class_.id)}>{class_.name}</td>
                                            </tr>
                                        ))
                                    ))
                                ))
                            )}
                        </tbody>
                    </table>


                </div>

                <StudentsToShowPopup studentsToShow={this.state.studentsToShow} degreeOrClass={this.state.degreeOrClass} />
                <CreateProfessorPopup />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        students: state.studentReducer.students,
        classes: state.classesReducer.classes.classes,
        degrees: state.degreesReducer.degrees,
        relations: state.relationsReducer.relationships,
        teachers: state.teacherReducer.teachers,
        matters: state.matterReducer.matters
    }
}

export default connect(mapStateToProps)(Teachers);