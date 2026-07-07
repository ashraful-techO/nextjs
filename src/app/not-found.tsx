import React from "react";

export default function notFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold">
     <div className="container flex justify-center items-center text-red-500 border border-red-500 p-50 rounded-lg shadow-lg">
       404 - Page Not Found
     </div>
    </div>
  );
}
