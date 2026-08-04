import { redirect } from "next/navigation";
import React from "react";

function UserDashboard() {
  // return <div>UserDashboard</div>;

  return redirect("dashboard/create-blog");
}

export default UserDashboard;
