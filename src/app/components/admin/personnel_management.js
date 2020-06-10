import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default class PersonnelManagement extends Component {
    constructor() {
        super();

        this.state = {
            doctorLst: []
        }
    }

    componentDidMount() {
        this.getAllDoctors();
    }

    getAllDoctors = () => {
        axios
            .get('https://final-wcy-backend.herokuapp.com/doctors')
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    let result = [];

                    for (let i = 0; i < res.data.data.length; i++) {
                        result.push(
                            <tr key={res.data.data[i].id} >
                                <td>{i + 1}</td>
                                <td>{res.data.data[i].name}</td>
                                <td>{res.data.data[i].department}</td>
                                <td>
                                    <button>Chỉnh sửa</button>
                                    <button>Xoá</button>
                                </td>
                            </tr>
                        );
                    }

                    return result;
                }
            })
            .then(result => {
                this.setState({
                    doctorLst: result
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { doctorLst } = this.state;

        return (
            <div className='container' id='order_approving_page'>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên bác sĩ</th>
                            <th>Chuyên khoa</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorLst}
                    </tbody>
                </Table>
            </div>
        )
    }
}
