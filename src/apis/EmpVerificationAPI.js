import APIService from "./APIService";

const baseUrl = "http://localhost:5148/api/";

const EmpVerificationAPIService = new APIService(baseUrl); 

export async function FindEmp(EmpData) {
  let url = "verify-employment";
  return await EmpVerificationAPIService.postData(url, EmpData);
}

export default EmpVerificationAPIService;