import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actEditStudent, actRemoveStudent } from './duck/action';

class Student extends Component {
  render() {
  const { student } = this.props;
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.fullname}</td>
        <td>{student.phoneNumber}</td>
        <td>{student.email}</td>
        <td className='text-center'>
          <button className='btn btn-primary me-3' onClick={() => {this.props.onEditStudent(student);}}>Edit</button>
          <button className='btn btn-danger' onClick={() => {this.props.onRemoveStudent(student.id);}}>Remove</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    studentEdit: state.studentReducer.studentEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditStudent: (student) => {
      dispatch(actEditStudent(student))
    },
    onRemoveStudent: (id) => {
      dispatch(actRemoveStudent(id))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Student);

// [
//   {
//       "id": 1,
//       "fullname": "Tran Chan Dong",
//       "email": "dongtc97@icloud.com",
//       "phoneNumber": "0902944730"
//   }
// ]