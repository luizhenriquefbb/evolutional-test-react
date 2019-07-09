import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from "jquery";
import { Bar } from "react-chartjs-2";


class StudentChart extends Component {

    constructor(props){
        super(props);

        window.studentChart = this;
    }

    closePopUp() {
        $("#studentChart").hide(500);
    }

    countStudentsInDegree(students) {

 
        // compressed is a object key:value, where key is degreeId and value is the count_of_student
        var compressed = {};

        for (const student of students) {
            if (compressed.hasOwnProperty(student.degreeId )){
                compressed[student.degreeId] = compressed[student.degreeId]+1;
            }
            else{
                compressed[student.degreeId] = 1;
            }
        }
        

        var ret = [];
        // get cont in exact order of degree store
        for (const degreeId of this.props.degrees.map(el => el.id)) {
            ret.push(isNaN(compressed[degreeId]) ? 0 : compressed[degreeId]);
        }

        return ret;
    };

    
    //Function to generate new colors
    getRandomColors(numberOfColors) {
        const colors = [];
        for (let index = 0; index < numberOfColors; index++) {
            // range between 0 e 255
            var r = Math.floor(Math.random() * 255).toString();
            var g = Math.floor(Math.random() * 255).toString();
            var b = Math.floor(Math.random() * 255).toString();
            
            // push in colors array
            colors.push({"background" : 'rgba('+r+', '+g+', '+b+', 0.5)', "border": 'rgba('+r+', '+g+', '+b+', 1)'});
        }

        return colors;
      
    }
    

    buildDataInFormatOfChartJS() {
        const colors = this.getRandomColors(this.props.degrees.length);
        return {
            labels: this.props.degrees.map(el => el.name),
            datasets: [{
                label: 'Estudantes por Classe',
                // data: [12, 19, 3, 5, 2, 3],
                data: this.countStudentsInDegree(this.props.students),
                backgroundColor: colors.map(el=>el.background),
                borderColor: colors.map(el=>el.border),
                borderWidth: 1
            }]
        };
    }


    render() {

        return (
            <div className="">
                <div className="hover_bkgr_fricc" id="studentChart" /* style={{ display: this.props.visible ? 'block' : 'none' }} */ >
                    <span className="helper"></span>
                    <div>
                        <div onClick={() => this.closePopUp()} className="popupCloseButton">X</div>

                        {/* <img src={in_development_image} alt="in development" style={{ width: "186px" }} /> */}
                        <Bar
                            data={this.buildDataInFormatOfChartJS()}
                            // width={100}
                            // height={50}
                            options={{ maintainAspectRatio: true }}
                        />
                    </div>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        students: state.studentReducer.students,
        degrees: state.degreesReducer.degrees,
    }
}

export default connect(mapStateToProps)(StudentChart);