import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actSearch } from './duck/action';

class Search extends Component {
    handleSearch = (e) => {
        this.props.onSearch(e.target.value);
      };
  render() {
    return (
        <div>
        <div class="input-group w-50">
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
      studentEdit: state.studentReducer.studentEdit,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onSearch: (keyword) => {
        dispatch(actSearch(keyword))
      }
    }
  }

export default connect (mapStateToProps, mapDispatchToProps) (Search);