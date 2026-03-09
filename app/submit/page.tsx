"use client";

import { useState } from "react";
import StepOne from "../../components/steps/StepOne";
import StepTwo from "../../components/steps/StepTwo";
import StepThree from "../../components/steps/StepThree";

export default function SubmitPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const submit = () => {
    console.log("Submitted Data:", data);
    alert("Request Submitted Successfully!");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "520px",
          padding: "40px",
          borderRadius: "15px",
          backgroundColor: "white",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Request Form
        </h1>

        {step === 1 && (
          <StepOne data={data} setData={setData} next={next} />
        )}

        {step === 2 && (
          <StepTwo data={data} setData={setData} next={next} back={back} />
        )}

        {step === 3 && (
          <StepThree
            data={data}
            setData={setData}
            back={back}
            submit={submit}
          />
        )}
      </div>
    </div>
  );
}