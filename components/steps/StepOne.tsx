"use client";

type Props = {
  data: any;
  setData: (data: any) => void;
  next: () => void;
};

export default function StepOne({ data, setData, next }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
        Step 1: Basic Info
      </h2>

      <input
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid gray"
        }}
        placeholder="Enter Name"
        value={data.name || ""}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid gray"
        }}
        placeholder="Enter Email"
        value={data.email || ""}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <button
        style={{
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={next}
      >
        Next →
      </button>

    </div>
  );
}