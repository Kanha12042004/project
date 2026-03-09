"use server";

export async function submitRequest(data: any) {
  console.log("Submitted Data:", data);

  return {
    success: true,
  };
}