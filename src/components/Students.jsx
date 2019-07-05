import React, { Component } from 'react';
import Header from './Header';
import { connect } from "react-redux";
import $ from "jquery";
window.$ = $;

class Students extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: {
                studentName: ""
            }
        }
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

        const all_table_trs = $("table#studentTable").find("tbody").find("tr");

        // filter by user name
        if(userName){
            all_table_trs.each((_, tr) => {
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
            all_table_trs.each((_, tr) => {
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
            all_table_trs.each((_, tr) => {
                if ($(tr).find("td.studentClass").text().toLowerCase().includes(userClass)){
                    $(tr).show();
                }
                else{
                    $(tr).hide();
                }
            });
        }

        if (!userName && !userDegree && !userClass){
            all_table_trs.show();
        }

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

                    <table className="highlight" id="studentTable">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Grau</th>
                                <th>Classe</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td className="studentName">{student.name}</td>
                                    <td className="studentDegree">{this.getDegreeById(student.degreeId).name}</td>
                                    <td className="studentClass">{this.getClassById(student.classId).name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        students: state.studentReducer.students,
        classes: state.classesReducer.classes.classes,
        degrees: state.degreesReducer.degrees
    }
}

export default connect(mapStateToProps)(Students);