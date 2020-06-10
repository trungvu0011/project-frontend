import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';

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

    getAllOrders = () => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/orders')
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    let result = [];

                    for (let i = 0; i < res.data.data.length; i++) {
                        result.push(
                            <tr key={res.data.data[i].id} >
                                <td>{i + 1}</td>
                                <td>{res.data.data[i].reason}</td>
                                <td>{res.data.data[i].doctorId}</td>
                                <td>{res.data.data[i].startTime}</td>
                                <td>
                                    <input type='checkbox'/>
                                </td>
                            </tr>
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
            <div className='container' id='order_approving_page'>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Lý do</th>
                            <th>Bác sĩ</th>
                            <th>Thời gian hẹn</th>
                            <th>Duyệt đơn hẹn</th>
                        </tr>
                    </thead >
                    <tbody>
                        {orderLst}
                    </tbody>
                </Table>
            </div>
        )
    }
}
