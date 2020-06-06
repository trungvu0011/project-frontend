import React, { Component } from 'react'
import axios from 'axios';
import { Calendar } from 'fullcalendar';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default class DoctorBooking extends Component {
    componentDidMount(){
        this.initCalendar();
    }

    initCalendar = () => {
        const calendarEl = document.getElementById('calendar');

        const calendar = new Calendar(calendarEl, {
            plugins: [ dayGridPlugin, timeGridPlugin ],
            themeSystem: 'standard',
            //displayEventTime: false,
            locale: 'vi',
            header: {
                left: 'title',
                center: 'agendaWeek, agendaDay, month ',
                right: 'today prev,next'
            },
            views: {
                timeGrid: {
                    eventLimit: 3 // adjust to 6 only for timeGridWeek/timeGridDay
                },
            },	
            //contentHeight: 650,
            buttonText: {
                today: 'Hôm Nay',
                month: 'Tháng',
                week: 'Tuần',
                day: 'Ngày',
            },
            buttonIcons: {
                prev: 'left-single-arrow',
                next: 'right-single-arrow',
            },
            eventBackgroundColor: "#ff9900",
            eventBorderColor: "#ff9900",
            slotDuration: '00:15:00',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventStartEditable: false,  //prevent moving events
            selectable: true,
            //unselectCancel: "#booking_room_modal",
            selectHelper: true,
            eventDurationEditable: false,

            monthYearFormat: 'MMMM YYYY',
            eventLimit: true, // for all non-TimeGrid views

            nextDayThreshold: '00:00:00',
            scrollTime: '06:00:00',
            minTime: '00:00:00',
            maxTime: '23:59:59',            //Random events
            eventClick: function (event, jsEvent, view) {
                // if (this.showEditModal) {
                //     this.selectedEvent = this.findItemById(event.id);
                //     if (this.current_user != null) {
                //         if (this.selectedEvent.Creator == this.current_user.ID) {
                //             this.getParticipatingUsersByBookingID(event.id).then(() => {
                //                 this.selectedEvent.GuestList = this.GuestList;
                //                 this.editSelectEvent(this.selectedEvent);
                //             });
                //         }
                //         else {
                //             callToast("Không thể chỉnh sửa", "Bạn không phải người đặt lịch này", "error");
                //         }
                //     }
                //     else {
                //         document.getElementById('#modal_for_guest').modal('show');
                //     }
                // }
            },

            eventRender: function (event, element) {
             //   if (event != undefined) {
                    // var selectObj = this.findItemById(event.id);
                    // var Username;
                    // for (var i = 0; i < this.list_user.length; i++){
                    //     if (selectObj.Creator == this.list_user[i].ID) {
                    //         Username = this.list_user[i].Name;
                    //         break;
                    //     }                                
                    //     else if (selectObj.Creator == null && selectObj.CreatorEmail != null) {
                    //         Username = selectObj.CreatorEmail;
                    //         break;
                    //     }                 
                    // }

                    // element.find('.fc-content').append('<span class="fc-creator" style="font-size: 12px;">Người tạo: ' + Username + '</span>');
               // }  
            },
            select: function (startDate, endDate) {
                // endDate._d.setFullYear(startDate._d.getFullYear());
                // endDate._d.setMonth(startDate._d.getMonth());
                // endDate._d.setDate(startDate._d.getDate());
                // var obj = {
                //     start: startDate.format('DD/MM/YYYY HH:mm:ss'),
                //     end: endDate.format('DD/MM/YYYY HH:mm:ss'),
                //     RoomID: startDate.ColumnID,
                // };
                // this.addSelectEvent(obj);
                const modal = document.getElementById('booking_room_modal');
                modal.modal('show');
        },
        });

        calendar.render();
    }

    getOrdersByDoctorID = () => {
        axios
        .get('')
        .then(res => {

        })
        .catch(err => {

        });
    }

    render() {
        return (
            <div className='booking-section' style={{marginTop: '7rem'}}>
                <div className='panel'>
                    <div className='panel-header'>

                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-2 col-12' id='viewOption'>

                            </div>
                            <div className='col-md-10 col-12 calendar-container'>
                                <div id='calendar'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="booking_room_modal" aria-hidden="true" aria-labelledby="booking_room_modal"
                    role="dialog">

                </div>
            </div>
        )
    }
}
