import React from "react";

const TeamCard = ({ member }) => {
  return (
    <>
      <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105">
        {/* Avatar Circle */}
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-6 ${member.color}`}
        >
          {member.initials}
        </div>

        {/* Text Content */}
        <h3 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-gray-500 text-sm font-medium mb-1">{member.role}</p>
        <p className="text-gray-400 text-xs">{member.stack}</p>
      </div>
    </>
  );
};

export default TeamCard;
