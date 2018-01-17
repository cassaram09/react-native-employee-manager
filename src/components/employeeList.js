import React, { Component } from 'react';
import { FlatList } from 'react-native'; 
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './listItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();  

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    this.data = employees;
  }

  renderItem({ item }) {
    return <ListItem key={item.key} employee={item} />;
  }

  render() {
    return (
      <FlatList data={this.data} renderItem={this.renderItem.bind(this)} />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid, key: uid };
  })

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
