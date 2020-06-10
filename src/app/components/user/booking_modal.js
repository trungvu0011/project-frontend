
import React, { Component } from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

import '../../../css/booking-modal.css';
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';

export default class BookingModal extends Component {
    modal = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            selectedDoctor: {
                label: '',
                value: null,
                id: null,
            },
            showModal: false,
            order_id: null,
            reason: '',
            start: new Date(),
            end: new Date(),
            isApproved: false,
            isRejected: false,
        }
    }

    componentWillUnmount(){
        this.setState({
            selectedDoctor: {
                label: '',
                value: null,
                id: null,
            },
            order_id: null,
            reason: '',
            start: new Date(),
            end: new Date(),
            isApproved: false,
            isRejected: false,
        })
    }
    
    componentWillReceiveProps(){
        if(this.props.newOrder){
            this.setState({
                selectedDoctor: this.props.newOrder.doctor,
                start: this.props.newOrder.start,
                end: this.props.newOrder.end,
            });
        }
    }

    componentDidMount() {
        let end = this.state.end;

        this.setState({
            end: new Date(end.setTime(end.getTime() + (60 * 60 * 1000)))
        })
    }

    onShowModal = () => {
        let datepicker = document.getElementsByClassName('react-datepicker-wrapper');
        for (let i = 0; i < datepicker.length; i++) {
            datepicker[i].className += ' form-control';
        }
    }

    createOrder = (value, actions) => {
        if(value.reason.trim() === ''){
            return;
        }

        let start = this.state.start;
        let end = this.state.end;  
        let now = new Date();
        now = now.setTime(now.getTime() + (7*60 * 60 * 1000));

        const data = {
                reason: value.reason,
                startTime: new Date(start),
                endTime: new Date(end),
                doctorId: this.state.selectedDoctor.id,
                creatorId: 1,
                createdTime: new Date(now) 
        }

        axios
            .post('https://final-wcy-backend.herokuapp.com/orders', data)
            .then(res => {
                if(res.status === 201){
                    this.props.pushNewOrder(res.data);
                }      
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleChangeStartFormik = date => {
        this.setState({
            start: new Date(date),
            end: date.setTime(date.getTime() + (60 * 60 * 1000))
        })
    }

    render() {
        const { start, end, selectedDoctor } = this.state;
        const _this = this;

        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    size="lg"
                    aria-labelledby="order-modal"
                    centered
                    onShow={this.onShowModal}
                    ref={this.modal}>
                    <Modal.Header closeButton>
                        <Modal.Title id="order-modal">
                            Đặt bác sĩ
                    </Modal.Title>
                    </Modal.Header> 
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                doctor: selectedDoctor,
                                reason: null,
                                start: start,
                                end: end
                            }}
                            onSubmit={(values, actions) => {
                                _this.createOrder(values, actions);
                            }}
                            validationSchema={Yup.object({
                                reason: Yup.string()
                                    .required('Không được để trống lý do.'),
                                start: Yup.date()
                                    .required('Không được để trống thời gian khám.'),
                                end: Yup.date()
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
                                        <Form.Group controlId="order_doctor_id">
                                            <Form.Label>Bác sĩ</Form.Label>
                                            <Select className='select-doctor__modal'
                                                defaultValue={selectedDoctor}
                                                onChange={handleChange}
                                                options={selectedDoctor}
                                                isDisabled isSearchable
                                                name='doctor'
                                                placeholder='Chọn bác sĩ'
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="order_reason">
                                            <Form.Label>Lý do khám bệnh*</Form.Label>
                                            <Form.Control as="textarea" rows="3" type='text'
                                                onChange={handleChange}
                                                value={values.reason}
                                                name='reason'
                                                required
                                                placeholder='Vui lòng nhập lý do khám'
                                            />
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Group as={Col} md='6' controlId="order_start">
                                                <Form.Label>Bắt đầu*</Form.Label>
                                                <DatePicker
                                                    className='select-start form-control'
                                                    onChange={_this.handleChangeStartFormik}
                                                    selected={start}
                                                    value={start}
                                                    locale={vi} 
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    timeCaption="Giờ"
                                                    dateFormat="d MMMM, yyyy h:mm aa"
                                                    name='start' required
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} md='6' controlId="order_start">
                                                <Form.Label>Kết thúc</Form.Label>
                                                <DatePicker
                                                    className='select-end form-control'
                                                    onChange={handleChange}
                                                    selected={end}
                                                    value={end}
                                                    locale={vi} 
                                                    showTimeSelect
                                                    timeFormat="HH:mm"
                                                    timeIntervals={15}
                                                    timeCaption="Giờ"
                                                    dateFormat="d MMMM, yyyy h:mm aa"
                                                    disabled
                                                    name='end'
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                            <Modal.Footer>
                                                <input type='submit' className='btn btn-primary' value='Đặt bác sĩ'  />
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
