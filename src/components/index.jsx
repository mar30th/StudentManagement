import React, { Component } from 'react'
import Header from './Header'
import Nav from './Nav'
import StudentsList from './StudentsList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
            <div className='col-3 bg-secondary text-white'>
            <Nav />
            </div>
            <div className='col-9'>
            <StudentsList />
            </div>
        </div>
      </div>
    )
  }
}
