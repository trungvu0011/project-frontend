import React, { Component } from 'react'
import axios from 'axios';
import BookingModal from './booking_modal';

import FullCalendar from '@fullcalendar/react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '../../../css/doctor-booking.css';
import "react-datepicker/dist/react-datepicker.css";
import vi from 'date-fns/locale/vi';

export default class DoctorBooking extends Component {
    calendarComponentRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            event: [],
            doctorsLst: [],
            selectedDoctor: null,
            miniStartDate: new Date(),
            showModal: false,
            orderObject: null,
        };
    }

    componentDidMount() {
        if(window.sessionStorage.accessToken && window.sessionStorage.getItem('loginType')==='doctors'){
            //disable select doctor and calendar and show all orders of this doctor
            console.log("Login type is doctor and JWT ", window.sessionStorage.accessToken + window.sessionStorage.getItem('loginType'))
        }
        if(window.sessionStorage.accessToken && window.sessionStorage.getItem('loginType')==='users'){
            //normal flow
            console.log("Login type is user and JWT ", window.sessionStorage.accessToken + window.sessionStorage.getItem('loginType'))
        }

        //disable all caledar and others field
        this.getAllDoctors();
    }

    handleChangeDoctor = selectedDoctor => {
        this.setState({ 
            selectedDoctor: selectedDoctor
        });

        this.getOrdersByDoctorID(selectedDoctor.id)
    };

    handleChangeDate = date => {
        this.setState({
            miniStartDate: date
        });

        let calendarApi = this.calendarComponentRef.current.getApi();;
        calendarApi.gotoDate(date); 
    };

    handleDateSelection = (arg) => {
        if(!this.state.selectedDoctor){
            alert('Vui lòng chọn bác sĩ.');
            return;
        }

        let startTime = arg.start;
        let endTime = arg.end;

        endTime.setFullYear(startTime.getFullYear());
        endTime.setMonth(startTime.getMonth());
        endTime.setDate(startTime.getDate());

        let obj = {
            start: startTime,
            end: endTime,
            doctor: this.state.selectedDoctor,
        };

        this.setState({
            orderObject: obj
        });

        this.setModalState(true);
    }

    pushNewOrder = order => {
        this.setModalState(false);

        let obj = {
            start: order.startTime,
            end: order.endTime,
            doctorId: order.doctorId,
            title : order.reason,
        };

        let evt = [...this.state.event];
        evt.push(obj);

        this.setState({
            event: evt
        });
    }

    handleEventClick = (arg) => {
        console.log(arg);
        console.log("Test user ID from doctor-booking")
        console.log(window.sessionStorage.getItem('userId'))
    }

    handleEventRendering = (arg) => {
    }

    getOrdersByDoctorID = (doctor_id) => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/orders?doctorID=' + doctor_id)
            .then(res => {
                if(res.status === 200){
                    let result = [];

                    for(let i=0; i < res.data.data.length ; i++){
                        let element = {
                            id: res.data.data[i].id,
                            start: res.data.data[i].startTime,
                            end: res.data.data[i].endTime,
                            doctorId: res.data.data[i].doctorId,
                            title: res.data.data[i].reason,
                        }

                        if(res.data.data[i].isApproved){
                            element.color = '#607d8b';
                        }else{
                            element.color = '#ff9900';
                        }   
                        
                        result.push(element);
                    }   
                    return result;
                } 
                return [];      
            })
            .then(result => {
                this.setState({
                    event: result
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    getAllDoctors = () => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/doctors')
            .then(res => {
                for(let i = 0; i < res.data.data.length ; i++){
                    res.data.data[i].value = res.data.data[i].name;
                    res.data.data[i].label = res.data.data[i].name;
                }

                return res.data.data;
            })
            .then(result => {
                this.setState({
                    doctorsLst: result
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    setModalState = (state) =>{
        this.setState({
            showModal: state
        })
    }

    render() {
        const { event, selectedDoctor, miniStartDate, showModal, doctorsLst, orderObject } = this.state;

        return (
            <div className='booking-section' >
                <div className='panel'>
                    <div className='panel-header'>

                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-2 col-12' id='viewOption'>
                                <DatePicker
                                    selected={miniStartDate}
                                    onChange={this.handleChangeDate}
                                    inline
                                    locale={vi} 
                                />
                                <Select className='select-doctor'
                                    value={selectedDoctor}
                                    onChange={this.handleChangeDoctor}
                                    options={doctorsLst}
                                    placeholder='Vui lòng chọn bác sĩ'
                                />
                            </div>
                            <div className='col-md-9 col-12 calendar-container'>
                                <FullCalendar ref={this.calendarComponentRef}
                                    defaultView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin]}
                                    locale='vi'
                                    firstDay={1}
                                    header={{
                                        left: 'today prev,next',
                                        center: 'title',
                                        right: 'dayGridMonth,dayGridWeek'
                                    }}
                                    buttonText={{
                                        today: 'Hôm Nay',
                                        month: 'Tháng',
                                        week: 'Tuần',
                                        day: 'Ngày',
                                    }}
                                    eventBackgroundColor="#ff9900"
                                    eventBorderColor="#ff9900"
                                    slotLabelInterval='00:15:00'
                                    //navLinks={true} // can click day/week names to navigate views
                                    editable={true}
                                    eventStartEditable={false} //prevent moving events
                                    selectable={true}
                                    //selectHelper={true}
                                    eventDurationEditable={false}

                                    monthYearFormat='MMMM YYYY'
                                    eventLimit={true} // for all non-TimeGrid views

                                    nextDayThreshold='00:00:00'
                                    scrollTime='06:00:00'
                                    minTime="00:00:00"
                                    maxTime="23:59:59"
                                    select={this.handleDateSelection}
                                    eventClick={this.handleEventClick}
                                    eventRender={this.handleEventRendering}
                                    events={event} />
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <BookingModal 
                        show={showModal}
                        onHide={() => this.setModalState(false)}
                        pushNewOrder={order => this.pushNewOrder(order)}
                        newOrder={orderObject}/>
                </div>
            </div>
        )
    }
}
