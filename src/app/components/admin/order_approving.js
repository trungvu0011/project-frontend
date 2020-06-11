import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';

export default class OrderApproving extends Component {
    constructor() {
        super();

        this.state = {
            orderLst: []
        }
    }

    componentDidMount() {
        this.getAllOrders();
    }

    approveOrder = (id, state) =>{
        let data = {};
        if(state){
            data.isApproved = true;
            data.isRejected = false;
        }
        else {
            data.isApproved = false;
            data.isRejected = true;
        }
        axios
        .patch('https://final-wcy-backend.herokuapp.com/orders/' + id, data, { headers: {
            jwt: window.sessionStorage.accessToken
        }})
        .then(res => {
            if (res.status === 200) {
                let index = this.findIndexById(res.data.id);
                res.data.startTime = moment(res.data.startTime).format('DD/MM/YYYY hh:mm A');

                let list = this.state.orderLst;
                list[index] = Object.assign({}, res.data);
                return list;
            }
        })
        .then(list => this.setState({
            orderLst: list
        }))
        .catch(err => console.log(err));
    }

    findIndexById = id => {
        let index;
        for (var i = 0; i < this.state.orderLst.length; i++) {
            if (this.state.orderLst[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    getAllOrders = () => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/orders')
            .then(res => {
                if (res.status === 200) {
                    let result = [];
                    for (let i = 0; i < res.data.data.length; i++) {
                        res.data.data[i].startTime = moment(res.data.data[i].startTime).format('DD/MM/YYYY hh:mm A');
                    
                        result.push(
                            res.data.data[i]
                        );
                    }

                    return result;
                }
            })
            .then(result => {
                this.setState({
                    orderLst: result
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { orderLst } = this.state;

        return (
            <div className='container card' id='order_approving_page'>
                <div className='card-header'>
                    Duyệt đơn hẹn khám
                </div>
                <div className='card-content'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lý do</th>
                            <th>Bác sĩ</th>
                            <th>Chuyên khoa</th>
                            <th style={{width: '12rem'}}>Thời gian hẹn</th>
                            <th style={{width: '9rem'}}>Duyệt đơn hẹn</th>
                            <th style={{width: '6rem'}}>Trạng thái</th>
                        </tr>
                    </thead >
                    <tbody>
                        {orderLst && orderLst.map((order, index) =>  <tr key={order.id} >
                                <td>{index + 1}</td>
                                <td>{order.reason}</td>
                                <td>{order.doctorName}</td>
                                <td>{order.doctorDepartment}</td>
                                <td>{order.startTime}</td>
                                <td >
                                    <a style={{marginRight: '0.5rem', color: '#0000FF'}} onClick={() => this.approveOrder(order.id, true)}>Chấp nhận</a>
                                    <a style={{color: 'red'}} onClick={() => this.approveOrder(order.id, false)}>Từ chối</a>
                                </td>
                                <td>
                                    {(order.isApproved && <div>Đã duyệt</div>)
                                    || (order.isRejected && <div>Đã từ chối</div>)
                                    || (!order.isApproved && !order.isRejected && <div>Chưa duyệt</div>)        
                                    }
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                </div>          
            </div>
        )
    }
}
