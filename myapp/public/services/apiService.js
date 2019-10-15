//import Api from '@/services/api'
const Api = require('./api');


  function queryallemp() {
    return Api().get('queryallemp')
  }

  function queryemp(empId) {
    return Api().get('queryemp', {
      empId: empId
    })
  }

  function validation(empId, index) {
    return Api().post('validation', {
      empId: empId,
      index: index
    })
  }

  function createemp(empId, name, school, college, usn, company, schoolValidate, usnValidate, collegeValidate, companyValidate) {
    return Api().post('createemp', {
      empId: empId,
      name: name,
      school: school,
      college: college,
      usn: usn,
      company: company,
      schoolValidate: schoolValidate,
      usnValidate: usnValidate,
      collegeValidate: collegeValidate,
      companyValidate: companyValidate
    })
  }
