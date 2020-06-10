import React, { Component } from 'react'
import logo from '../../../assets/logo/small-logo.png'

import PersonnelManagement from './personnel_management';
import OrderApproving from './order_approving';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class AdminNavbar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <header className="container px-0" style={{ marginBottom: '5rem' }}>
                        <nav className="navbar navbar-expand-lg navbar-light px-0 fixed-top">
                            <a className="navbar-brand" href="#">
                                <img id="logo" src={logo} alt="logo" />
                                <span style={{ fontWeight: '600', color: '#405DF5', }}>Quản Lý Hệ Thống</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item ml-auto">
                                        <Link className="nav-link" to="/admin/order-approving">Quản lý đơn đặt hẹn</Link>
                                    </li>
                                    <li className="nav-item ml-auto">
                                        <Link className="nav-link" to="/admin/personnel-management">Quản lý nhân sự</Link>
                                    </li>
                                    <li className="nav-item ml-auto">
                                        <a className="nav-link" href="#">Đăng xuất</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/admin/order-approving" exact>
                            <OrderApproving />
                        </Route>
                        <Route path="/admin/personnel-management" exact>
                            <PersonnelManagement />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
