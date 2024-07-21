import React from "react";
import { getIntials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout, className }) => {
  return (
    userInfo && (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="size-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getIntials(userInfo.fullName)}
        </div>
        <div>
          <p className="text-sm font-medium">{userInfo.fullName}</p>
          <button
            className="text-sm text-slate-700 underline"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfo;
