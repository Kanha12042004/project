"use client";

type Props = {
  data: any;
  setData: (data: any) => void;
  next: () => void;
  back: () => void;
};

export default function StepTwo({ data, setData, next, back }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
        Step 2: Request Type
      </h2>

      <select
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid gray"
        }}
        value={data.requestType || ""}
        onChange={(e) =>
          setData({ ...data, requestType: e.target.value })
        }
      >
        <option value="">Select Request</option>
        <option value="Leave">Leave</option>
        <option value="Complaint">Complaint</option>
        <option value="Other">Other</option>
      </select>

      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <button
          style={{
            padding: "10px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={back}
        >
          ← Back
        </button>

        <button
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={next}
        >
          Next →
        </button>

      </div>
    </div>
  );
}