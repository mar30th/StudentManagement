import React, { Component } from "react";
import { connect } from "react-redux";
import Student from "./Student";
import { actAddStudent, actSearch } from "./duck/action";
import Search from "./Search";
// import { Search } from "./Search";

class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullname: "",
      phoneNumber: "",
      email: "",
    };

  }
  renderStudentList = () => {
    let { studentList, keyword } = this.props;
    studentList = studentList.filter((student) => {
      return student.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    return studentList.map((student) => {
      return <Student key={student.id} student={student} />;
    });
  };

  handleOnChance = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // handleSearch = (e) => {
  //   this.props.onSearch(e.target.value);
  // }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.onAddStudent(this.state)
    this.setState({
      id: "",
      fullname: "",
      phoneNumber: "",
      email: "",
    })
    console.log(this.props);
  }

  UNSAFE_componentWillReceiveProps(nextProp) {
    if(nextProp !== nextProp.studentEdit){
      this.setState({
        ...nextProp.studentEdit
      });
    } else {
      this.setState({
        id: "",
        fullname: "",
        phoneNumber: "",
        email: "",
      });
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState != this.state){
  //     this.setState({
  //       id: "",
  //       fullname: "",
  //       phoneNumber: "",
  //       email: "",
  //     })
  //   }
  // }

  // static getDerivedStateFromProps(nextProp, prevState){
  //   if(nextProp && nextProp.studentEdit){
  //     return {...nextProp.studentEdit};
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   console.log(prevState);
  //   if (prevProps.studentEdit !== this.props.studentEdit) {
  //     this.setState({
  //       id: "",
  //       fullname: "",
  //       phoneNumber: "",
  //       email: "",
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.studentEdit !== prevState.studentEdit){
  //     this.setState({
  //       ...prevProps.studentEdit
  //     })
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <div className="p-3">
        <div className="mb-3">
          <h3>Student Infomation</h3>
          <form className="row" onSubmit={this.handleOnSubmit}>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-address-card"></i>
                </span>
                <input
                  type="text"
                  name="id"
                  onChange={this.handleOnChance}
                  value={this.state.id}
                  class="form-control"
                  placeholder="Student ID"
                  aria-label="Student ID"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-file-signature"></i>
                </span>
                <input
                  type="text"
                  name="fullname"
                  onChange={this.handleOnChance}
                  value={this.state.fullname}
                  class="form-control"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={this.handleOnChance}
                  value={this.state.phoneNumber}
                  class="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="text"
                  name="email"
                  onChange={this.handleOnChance}
                  value={this.state.email}
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          <button type="submit" className="btn btn-success w-25">Submit</button>
          </form>
          <hr />
        </div>
        <div>
          <div>
            <h3>Student List</h3>
            {/* <Search /> */}
            <Search />
            {/* <div class="input-group w-50">
              <span class="input-group-text" id="basic-addon1">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                class="form-control"
                onChange={this.handleSearch}
                placeholder="Search By Name"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div> */}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{this.renderStudentList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentReducer.studentList,
    studentEdit: state.studentReducer.studentEdit,
    keyword: state.studentReducer.keyword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddStudent: (student) => {
      dispatch(actAddStudent(student));
    },
    onSearch: (keyword) => {
      dispatch(actSearch(keyword))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
