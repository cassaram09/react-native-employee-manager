import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import EmployeeFormReducer from './employeeFormReducer';
import EmployeesReducer from './employeesReducer';


export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeesReducer
});
