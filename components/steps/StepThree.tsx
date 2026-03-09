"use client";

type Props = {
  data: any;
  setData: (data: any) => void;
  back: () => void;
  submit: () => void;
};

export default function StepThree({ data, setData, back, submit }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
        Step 3: Description
      </h2>

      <textarea
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid gray"
        }}
        placeholder="Enter Description"
        value={data.description || ""}
        onChange={(e) =>
          setData({ ...data, description: e.target.value })
        }
      />

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
          ← Return
        </button>

        <button
          style={{
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
          onClick={submit}
        >
          Submit ✓
        </button>

      </div>

    </div>
  );
}