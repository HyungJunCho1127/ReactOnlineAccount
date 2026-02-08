import type { policy } from "../types/policy";

export default function PolicyWidget({ policy }: { policy: policy }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
      }}
    >
      <h2>Policy Details</h2>
      <p>
        <strong>Policy Number:</strong> {policy.policyNumber}
      </p>
      <p>
        <strong>Type:</strong> {policy.type}
      </p>
      <p>
        <strong>Vehicle:</strong> {policy.vehicle}
      </p>
      <p>
        <strong>Start Date:</strong> {policy.startDate}
      </p>
    </div>
  );
}