import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' initial />
        </Scene>
        <Scene key='main'>
          <Scene 
            initial
            key='employeeList' 
            component={EmployeeList}
            title='Employees'
            rightTitle='Add'
            onRight={() => { Actions.employeeCreate() }}
          />
          <Scene 
            key='employeeCreate' 
            component={EmployeeCreate}
            title='Create Employee'
          />
          <Scene 
            key='employeeEdit' 
            component={EmployeeEdit}
            title='Edit Employee'
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
