import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminDashboard from './user/AdminDashboard';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import PatientRoute from './auth/PatientRoute';
import DoctorRoute from './auth/DoctorRoute';
import Profile from './user/Profile';
import ListUsers from './admin/ListUsers'
import ListCatTest from './admin/ListCatTest'
import CreateTestCat from './admin/CreateTestCat'
import CatTestUpdate from './admin/CatTestUpdate'
import ListTestResult from './admin/ListTestResult'
import CreateTest from './admin/CreateTest'
import TestUpdate from './admin/TestUpdate'
import ListTreatment from './admin/ListTreatment'
import CreateTreatment from './admin/CreateTreatment'
import TreatmentUpdate from './admin/TreatmentUpdate'
import AddPrescription from './admin/AddPrescription'
import ListPrescriptions from './admin/ListPrescriptions'
import UpdatePrescriptions from './admin/UpdatePrescriptions'
import AddPatientDetails from './admin/AddPatientDetails'
import ListPatients from './admin/ListPatients'
import UpdatePatientProfile from './admin/UpdatePatientProfile'
import ListBuildings from './admin/ListBuildings'
import AddBuilding from './admin/AddBuilding'
import UpdateBuilding from './admin/UpdateBuilding'
import ListFloors from './admin/ListFloors'
import AddFloor from './admin/AddFloor'
import UpdateFloor from './admin/UpdateFloor'
import UpdateUsers from './admin/UpdateUsers'
import AddUsers from './admin/AddUsers'
import ListDeparts from './admin/ListDeparts'
import AddDepartment from './admin/AddDepartment'
import UpdateDepartment from './admin/UpdateDepartment'
import ListDesignate from './admin/ListDesignate'
import AddDesignation from './admin/AddDesignation'
import UpdateDesignation from './admin/UpdateDesignation'
import ListSpecialize from './admin/ListSpecialize'
import AddSpecialization from './admin/AddSpecialization'
import UpdateSpecialize from './admin/UpdateSpecialize'
import FileUpload from './admin/FileUpload'
import ListVendors from './admin/ListVendors'
import ListDoctors from './admin/ListDoctors'
import AddDoctorDetails from './admin/AddDoctorDetails'
import UpdateDoctorProfile from './admin/UpdateDoctorProfile'
import ListExpenses from "./admin/ListExpenses"
import AddExpense from './admin/AddExpense'
import UpdateExpenses from './admin/UpdateExpenses'
import PatDetails from './admin/PatDetails'
import ListMedicine from "./admin/ListMedicine"
import AddMedicine from './admin/AddMedicine'
import UpdateMedicine from './admin/UpdateMedicine'
import ListVaccineCat from "./admin/ListVaccineCat"
import AddVaccineCat from './admin/AddVaccineCat'
import UpdateVaccineCat from './admin/UpdateVaccineCat'
import ListAppVaccine from "./admin/ListAppVaccine"
import AddAppVaccine from './admin/AddAppVaccine'
import UpdateVaccApp from './admin/UpdateVaccApp'



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/" exact component={AdminDashboard} />
                <Route path="/profile/:userId" exact component={Profile} />
                <Route path="/update/users/:id" exact component={UpdateUsers} />
                <Route path="/test-result" exact component={ListTestResult} />
                <Route path="/list-prescriptions" exact component={ListPrescriptions} />
                <Route path="/update-cat-test/:catTestId" exact component={CatTestUpdate} />
                <Route path="/update-test/:testId" exact component={TestUpdate} />
                <Route path="/update-prescription/:id" exact component={UpdatePrescriptions} />
                <Route path="/update-building/:id" exact component={UpdateBuilding} />
                <Route path="/update-designation/:id" exact component={UpdateDesignation} />
                <Route path="/update-floor/:id" exact component={UpdateFloor} />
                <Route path="/update-expenses/:id" exact component={UpdateExpenses} />
                <Route path="/update-doctor/:id" exact component={UpdateDoctorProfile} />
                <Route path="/update-depart/:id" exact component={UpdateDepartment} />
                <Route path="/update-patient/:id" exact component={UpdatePatientProfile} />
                <Route path="/update-specialize/:id" exact component={UpdateSpecialize} />
                <Route path="/update-medicine/:id" exact component={UpdateMedicine} />
                <Route path="/update-vaccine-cat/:id" exact component={UpdateVaccineCat} />
                <Route path="/update-vacc-app/:id" exact component={UpdateVaccApp} />
                <Route path="/update-treatment/:treatmentId" exact component={TreatmentUpdate} />
                <Route path="/list/users" exact component={ListUsers} />
                <Route path="/list/medicine" exact component={ListMedicine} />
                <Route path="/list-cat-test" exact component={ListCatTest} />
                <Route path="/list-patients" exact component={ListPatients} />
                <Route path="/list-treat-cat" exact component={ListTreatment} />
                <Route path="/list-buildings" exact component={ListBuildings} />
                <Route path="/list-floors" exact component={ListFloors} />
                <Route path="/list-departs" exact component={ListDeparts} />
                <Route path="/list-vendors" exact component={ListVendors} />
                <Route path="/list-doctors" exact component={ListDoctors} />
                <Route path="/list-app-vaccine" exact component={ListAppVaccine} />
                <Route path="/list-designate" exact component={ListDesignate} />
                <Route path="/list-expenses" exact component={ListExpenses} />
                <Route path="/list-specialize" exact component={ListSpecialize} />
                <Route path="/list-vaccine-cat" exact component={ListVaccineCat} />
                <Route path="/create/cat-test" exact component={CreateTestCat} />
                <Route path="/add-prescription" exact component={AddPrescription} />
                <Route path="/create/cat-treatment" exact component={CreateTreatment} />
                <Route path="/create-test" exact component={CreateTest} />
                <Route path="/add-patient-details" exact component={AddPatientDetails} />
                <Route path="/pat-details/:id" exact component={PatDetails} />
                <Route path="/add-building" exact component={AddBuilding} />
                <Route path="/add-floor" exact component={AddFloor} />
                <Route path="/add-users" exact component={AddUsers} />
                <Route path="/add-vacc-app" exact component={AddAppVaccine} />
                <Route path="/add-medicine" exact component={AddMedicine} />
                <Route path="/add-expenses" exact component={AddExpense} />
                <Route path="/add-vac-cat" exact component={AddVaccineCat} />
                <Route path="/add-depart" exact component={AddDepartment} />
                <Route path="/add-designate" exact component={AddDesignation} />
                <Route path="/add-doctor" exact component={AddDoctorDetails} />
                <Route path="/add-specialize" exact component={AddSpecialization} />
                <Route path="/file-upload" exact component={FileUpload} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;