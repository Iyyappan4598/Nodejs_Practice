const userServices = require('../services/userservices')

//Create Doctor Data
const createdoctorData = async (req, res) => {
    const valueData = await userServices.doctorData(req.body);
    res.send(valueData)
}
//Create Nurse Data
const createNurseData = async (req, res) => {
    const valueData = await userServices.NurseData(req.body);
    res.send(valueData)
}
//Create Patient Data
const createPatientData = async (req, res) => {
    const valueData = await userServices.PatientData(req.body);
    res.send(valueData)
}

//Get Doctor Full Details
const getdoctorData = async (req, res) => {
    const UserDetails = await userServices.getDoctorDetails();
    res.send(UserDetails)
}

//Get Doctor Specific Details only
const getSpecificdoctorData = async (req, res) => {
    const getData = await userServices.getdoctorSpecificData(req.params.id);
    res.send(getData)
}

//Get Nurse Full Details
const getNurseData = async (req, res) => {
    const UserDetails = await userServices.getNurseDetails();
    res.send(UserDetails)
}

//Get Nurse Specific Details only
const getSpecificNurseData = async (req, res) => {
    const getData = await userServices.getNurseSpecificData(req.params.id);
    res.send(getData)
}

//Get Patient Full Details
const getPatientData = async (req, res) => {
    const UserDetails = await userServices.getPatientDetails();
    res.send(UserDetails)
}

//Get Patient Specific Details only
const getSpecificPatientData = async (req, res) => {
    const getData = await userServices.getPatientSpecificData(req.params.id);
    res.send(getData)
}

//Modify or Update Data for Doctor
const editDoctordata = async (req,res)=>{
    const edit = await userServices.updateDoctor(req.params.id,req.body);
    res.send(edit)
}

//Modify or Update Data for Nurse
const editNursedata = async (req,res)=>{
    const edit = await userServices.updateDoctor(req.params.id,req.body);
    res.send(edit)
}

//Modify or Update Data for Patient
const editPatientdata = async (req,res)=>{
    const edit = await userServices.updateDoctor(req.params.id,req.body);
    res.send(edit)
}

//delete Doctor data
const deleteDoctordata = async(req,res)=>{
    const delData = userServices.deleteData(req.params.id);
    res.send(delData)
}
//delete Nurse data
const deleteNursedata = async(req,res)=>{
    const delData = userServices.deleteData(req.params.id);
    res.send(delData)
}
//delete Patient data
const deletePatientdata = async(req,res)=>{
    const delData = userServices.deleteData(req.params.id);
    res.send(delData)
}

    module.exports = {
        createdoctorData,
        createNurseData,
        createPatientData,
        getdoctorData,
        getSpecificdoctorData,
        getNurseData,
        getSpecificNurseData,
        getPatientData,
        getSpecificPatientData,
        editDoctordata,
        editNursedata,
        editPatientdata,
        deleteDoctordata,
        deleteNursedata,
        deletePatientdata
    }