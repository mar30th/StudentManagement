import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
        <div class="navbar navbar-light bg-light shadow-lg p-3 bg-body rounded">
          <div class="container-fluid">
            <a class="navbar-brand">
              <h3>Student Management</h3>
            </a>
              <button class="btn btn-outline-success">
                Log Out
              </button>
          </div>
        </div>
    );
  }
}
