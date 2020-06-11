import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import CreateDoctorModal from './create_doctor_modal';

export default class PersonnelManagement extends Component {
    constructor() {
        super();

        this.state = {
            doctorLst: [],
            doctorObject: null,
            showModal: false
        }
    }

    componentDidMount() {
        this.getAllDoctors();
    }

    findIndexById = id => {
        let index;
        for (var i = 0; i < this.state.doctorLst.length; i++) {
            if (this.state.doctorLst[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    getAllDoctors = () => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/doctors')
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.setState({
                        doctorLst: res.data.data
                    })
                }
            })
            .catch(err => console.log(err));
    }

    setModalState = (state) =>{
        this.setState({
            showModal: state
        })
    }

    openEditDoctor = doctor => {     
        this.setState({
            doctorObject: doctor
        });
        this.setModalState(true);
    }

    pushNewDoctor = doctor => {
        this.setModalState(false);

        let obj = {
            name: doctor.name,
            depart: doctor.department,
            id: doctor.id,
            experienceYears: doctor.experienceYears
        };

        let doctorList = [...this.state.doctorLst];
        doctorList.push(obj);

        this.setState({
            event: doctorList
        });
    }

    pushEditedDoctor = doctor =>{
        this.setModalState(false);
        let index = this.findIndexById(doctor.id);

        let list = this.state.doctorLst;
        list[index] = doctor;
        
        this.setState({
            doctorLst: list
        });
    }

    removeDoctor = id => {
        let index = this.findIndexById(id);
        let list = this.state.doctorLst.splice(index, 1);

        this.setState({
            doctorLst: list
        });
    }

    render() {
        const { doctorLst, doctorObject, showModal } = this.state;

        return (
            <div className='container card' id='order_approving_page'>
                <div className='card-header row' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>Quản lý bác sĩ</div>
                    <button className='btn btn-primary' onClick={() => this.openEditDoctor("create")}>Tạo mới bác sĩ</button>
                </div>
            
                <div className='card-content'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên bác sĩ</th>
                            <th>Chuyên khoa</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorLst && doctorLst.map((doctor, index) => 
                            <tr key={doctor.id} >
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.department}</td>
                                <td>
                                    <a onClick={() => this.openEditDoctor(doctor)}>Chỉnh sửa</a>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                </div>         
                <div >
                    <CreateDoctorModal 
                        show={showModal}
                        onHide={() => this.setModalState(false)}
                        pushNewDoctor={doctor => this.pushNewDoctor(doctor)}
                        pushEditedDoctor={doctor => this.pushEditedDoctor(doctor)}
                        deletedDoctor={doctor_id => this.removeDoctor(doctor_id)}
                        newDoctor={doctorObject}/>
                </div>
            </div>
        )
    }
}
