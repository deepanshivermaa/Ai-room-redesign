import * as React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-xl shadow-lg bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
