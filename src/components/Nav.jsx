import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='p-3'>
        <h3><i class="fa-solid fa-bars"></i> Admin</h3>
        <ul className='list-group ms-3 mt-4'>
            <li className='list-group-item bg-secondary text-white text-start border-0'>Student List</li>
            <li className='list-group-item bg-secondary text-white text-start border-0'>Role</li>
            <li className='list-group-item bg-secondary text-white text-start border-0'>Department</li>
            <li className='list-group-item bg-secondary text-white text-start border-0'>Project</li>
        </ul>
      </div>
    )
  }
}
