import React, { Component } from 'react';
import Header from './Header';
import { connect } from "react-redux";
class Students extends Component {

    getClassById(class_id) {
        return this.props.classes.find(_class => _class.id === class_id);
    }

    getDegreeById(degreeId) {
        return this.props.degrees.find(degree => degree.id === degreeId);
    }

    render() {
        const students = this.props.students;
        console.log('this.props', this.props);
        return (
            <div className="">
                <Header />
                <div className="body">
                    <h1>Estudantes</h1>
                    
                    <table className="highlight">
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
                                    <td>{student.name}</td>
                                    <td>{this.getDegreeById(student.degreeId).name}</td>
                                    <td>{this.getClassById(student.classId).name}</td>
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