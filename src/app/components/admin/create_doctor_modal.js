
import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';


export default class CreateDoctorModal extends Component {
    modal = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            name: '',
            department: '',
            id: null,
            experienceYears: undefined,
            isEditing: false
        }
    }

    componentWillUnmount() {
        this.setState({
            name: '',
            department: ''
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newDoctor) {
            if (nextProps.newDoctor.id) {
                this.setState({
                    name: nextProps.newDoctor.name,
                    department: nextProps.newDoctor.department,
                    id: nextProps.newDoctor.id,
                    experienceYears: nextProps.newDoctor.experienceYears,
                    isEditing: true
                });
            }          
        }
    }

    componentDidMount() {

    }

    createDoctor = (value, actions) => {
        if (value.name.trim() === '' || value.department.trim() === '') {
            return;
        }

        const data = {
            name: value.name,
            department: value.department,
            experienceYears: value.experienceYears,
        }

        axios
            .post('https://final-wcy-backend.herokuapp.com/doctors', data, { headers: {
                jwt: window.sessionStorage.accessToken
            }})
            .then(res => {
                if (res.status === 201) {
                    this.props.pushNewDoctor(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    deleteDoctor = () => {
        axios
        .delete('https://final-wcy-backend.herokuapp.com/doctors/' + this.state.id, { headers: {
            jwt: window.sessionStorage.accessToken
        }})
        .then(res => {
            if(res.status === 200){  
                this.props.deletedDoctor(res.data.id);
            }
        })
        .catch(err => console.log(err));
    }

    editDoctor = () => {     
        const doctor = {
            name: this.state.name,
            department: this.state.department,
            id: this.state.id,
            experienceYears: this.state.experienceYears
        }

        axios
        .patch('https://final-wcy-backend.herokuapp.com/doctors/' + doctor.id, doctor, { headers: {
            jwt: window.sessionStorage.accessToken
        }})
        .then(res => {
            if (res.status === 200) {
                this.props.pushEditedDoctor(res.data);
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        const { name, department, experienceYears, isEditing } = this.state;
        const _this = this;

        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="doctor-modal"
                    centered
                    ref={this.modal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="docor-modal">
                            Thêm mới bác sĩ
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                name: name,
                                department: department,
                                experienceYears: experienceYears
                            }}
                            onSubmit={(values, actions) => {
                                _this.createDoctor(values, actions);
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string()
                                    .required('Không được để trống lý do.'),
                                department: Yup.string()
                                    .required('Không được để trống thời gian khám.'),
                            })}
                        >
                            {
                                ({
                                    handleSubmit,
                                    handleChange,
                                    handleBlur,
                                    isSubmitting,
                                    values,
                                    touched,
                                    isValid,
                                    errors,
                                }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="doctor_name">
                                                <Form.Label>Tên bác sĩ</Form.Label>
                                                <Form.Control 
                                                    type='text'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    name='name'
                                                    placeholder='Điền tên bác sĩ'
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="doctor_department">
                                                <Form.Label>Chuyên khoa</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    value={values.department}
                                                    onChange={handleChange}
                                                    name='department'
                                                    required
                                                    placeholder='Điền chuyên khoa'
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="doctor_expyears">
                                                <Form.Label>Năm kinh nghiệm</Form.Label>
                                                <Form.Control
                                                    type='number'
                                                    value={values.experienceYears}
                                                    onChange={handleChange}
                                                    name='experienceYears'
                                                    required
                                                    placeholder='Điền số năm kinh nghiệm'
                                                />
                                            </Form.Group>
                                            <Modal.Footer>
                                                <div>
                                                    {(isEditing &&
                                                        <div>
                                                            <button onClick={() => _this.deleteDoctor()} className='btn btn-success'>Chỉnh sửa</button>
                                                            <button onClick={() => _this.editDoctor()} className='btn btn-danger'>Xoá</button>
                                                        </div>)
                                                        ||
                                                        (!isEditing &&
                                                            <div>
                                                                <input type='submit' className='btn btn-primary' value='Thêm mới bác sĩ' />
                                                            </div>)
                                                    }
                                                </div>
                                                <Button variant="dark-outline" onClick={_this.props.onHide} >Đóng</Button>
                                            </Modal.Footer>
                                        </Form>
                                    )
                            }
                        </Formik>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
