import React, { Component } from 'react';
import Header from './Header';
import { connect } from "react-redux";
import $ from "jquery";
import * as studentActions from "../actions/studentActions";
import EditStudentPopup from './EditStudentPopup';
import { Button } from 'react-materialize';
import StudentChart from "./StudentChart";

window.$ = $; // to use in terminal while developing


class Students extends Component {

    constructor(props){
        super(props);

        this.state = {
            studentToEdit : this.props.students[0]
        }

        window.students = this;
    }

    getClassById(class_id) {
        return this.props.classes.find(_class => _class.id === class_id);
    }

    getDegreeById(degreeId) {
        return this.props.degrees.find(degree => degree.id === degreeId);
    }

    applyFilter(evt) {
        evt.preventDefault();

        const userName = $("form.filters-wrapper").find("input#studentNameFilter").val().toLowerCase();
        const userDegree = $("form.filters-wrapper").find("input#studentDegreeFilter").val().toLowerCase();
        const userClass = $("form.filters-wrapper").find("input#studentClassFilter").val().toLowerCase();

        const table_tbody = $("table#studentTable").find("tbody");

        // filter by user name
        if(userName){
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.studentName").text().toLowerCase().includes(userName)){
                    $(tr).show();
                }
                else{
                    $(tr).hide();
                }
            });
        }

        // filter by degree
        if(userDegree){
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.studentDegree").text().toLowerCase().includes(userDegree)){
                    $(tr).show();
                }
                else{
                    $(tr).hide();
                }
            });
        }

        // filter by class
        if(userClass){
            table_tbody.find("tr:visible").each((_, tr) => {
                if ($(tr).find("td.studentClass").text().toLowerCase().includes(userClass)){
                    $(tr).show();
                }
                else{
                    $(tr).hide();
                }
            });
        }

        if (!userName && !userDegree && !userClass){
            table_tbody.find("tr").show();
        }

    }

    createMoreStudents(){
        this.props.dispatch((studentActions.createMoreStudents(this.props.degrees, this.props.relations, this.props.classes)));
    }

    editOneStudent(studentToEdit){
        console.log("editOneStudent");
        
        $("#editStudent").show(500);

        this.setState({
            studentToEdit
        });

        
    }

    showChart(){
        $("#studentChart").show(500);
    }

    render() {
        const students = this.props.students;
        return (
            <div className="">
                <Header />
                <div className="body">
                    <h1>Estudantes</h1>

                    <form className="filters-wrapper" onSubmit={(evt) => { this.applyFilter(evt) }}>
                        <input type="text" placeholder="Nome do Aluno" id="studentNameFilter" onChange={(evt) => this.applyFilter(evt)} />
                        <input type="text" placeholder="Graduação do Aluno" id="studentDegreeFilter" onChange={(evt) => this.applyFilter(evt)} />
                        <input type="text" placeholder="Classe do Aluno" id="studentClassFilter" onChange={(evt) => this.applyFilter(evt)} />
                    </form>

                    <div style={{margin: "19px 0"}} className="spaceElements">
                        
                        <Button onClick={() => this.createMoreStudents()}> Gerar mais estudantes </Button>
                        <Button onClick={() => this.showChart()}> Mostrar Gráfico </Button>
                    </div>

                    <table className="highlight" id="studentTable">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Grau</th>
                                <th>Classe</th>
                                <th>Editar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td className="studentName">{student.name}</td>
                                    <td className="studentDegree">{this.getDegreeById(student.degreeId).name}</td>
                                    <td className="studentClass">{this.getClassById(student.classId).name}</td>
                                    <td className="StudentEdit" onClick={() => this.editOneStudent(student)}>
                                        <i style={{fontSize:"23px"}} className="fa">&#xf044;</i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                 

                </div>
            
                <EditStudentPopup studentToEdit={this.state.studentToEdit} getClassById={this.getClassById} getDegreeById={this.getDegreeById} />
                
                <StudentChart />
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

    }
}

export default connect(mapStateToProps)(Students);