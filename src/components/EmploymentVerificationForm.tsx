import React, { useState } from "react";
import "./EmploymentVerificationForm.css";
import { FindEmp } from "../apis/EmpVerificationAPI";

function EmploymentVerificationForm() {
  const [employeeId, setEmployeeId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      employeeId: parseInt(employeeId),
      companyName,
      verificationCode,
    };

    try {
      const data = await FindEmp(JSON.stringify(payload));
      setVerificationResult(data.verified ? "Verified" : "Not Verified");
    } catch (error) {
      console.error("Error:", error);
      setVerificationResult("Error verifying employment");
    }
  };

  return (
    <div className="employment-verification-form">
      <h1>Employment Verification</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="number"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Verify</button>
      </form>
      {verificationResult && <p>Result: {verificationResult}</p>}
    </div>
  );
}

export default EmploymentVerificationForm;
