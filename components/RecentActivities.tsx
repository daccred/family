"use client";

import { ArrowUpRight, ArrowDownLeft, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const activities = [
  {
    date: "Sun Nov 03 2024",
    transactions: [
      {
        type: "send",
        amount: "-500 USDT",
        time: "3:12am",
        hash: "0x3e2...a7f5",
      },
      {
        type: "receive",
        amount: "+200 USDT",
        time: "3:12am",
        hash: "0x3e2...a7f5",
      },
    ],
  },
  {
    date: "Sun Nov 03 2024",
    transactions: [
      {
        type: "send",
        amount: "-300 USDT",
        time: "2:45am",
        hash: "0x4f3...b8e6",
      },
    ],
  },
];

const USDTIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5Z" fill="#50AF95"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.4482 16.5975C17.3495 16.6049 16.8398 16.6353 15.7027 16.6353C14.7983 16.6353 14.1562 16.6082 13.9309 16.5975C10.4359 16.4437 7.82711 15.8353 7.82711 15.1069C7.82711 14.3784 10.4359 13.7709 13.9309 13.6146V15.9915C14.1595 16.008 14.814 16.0466 15.7183 16.0466C16.8036 16.0466 17.3471 16.0014 17.4449 15.9924V13.6163C20.9326 13.7717 23.5356 14.3801 23.5356 15.1069C23.5356 15.8337 20.9334 16.4421 17.4449 16.5967L17.4482 16.5975ZM17.4482 13.3705V11.2435H22.3155V8H9.06366V11.2435H13.9301V13.3696C9.97463 13.5513 7 14.3349 7 15.2738C7 16.2127 9.97463 16.9954 13.9301 17.1779V23.9938H17.4474V17.1755C21.3938 16.9938 24.3635 16.2111 24.3635 15.273C24.3635 14.3349 21.3963 13.5522 17.4474 13.3696L17.4482 13.3705Z" fill="white"/>
  </svg>
);

export const RecentActivities = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full max-w-full px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-sf-pro text-[16px] font-medium leading-[19.09px] text-[#C6CCD2]">
          Recent Activities
        </h2>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2"
        >
          <span className="font-sf-pro text-[14px] font-medium leading-[16.71px] text-[#545E69]">
            View All
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-[#545E69]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#545E69]" />
          )}
        </button>
      </div>

      <div className="space-y-6">
        {activities.slice(0, isExpanded ? activities.length : 1).map((day, dayIndex) => (
          <div key={dayIndex}>
            <div className="bg-[#1C1D20] rounded-2xl px-4 py-3 mb-4">
              <p className="font-sf-pro text-[12px] font-medium leading-[14.32px] text-[#545E69]">
                {day.date}
              </p>
            </div>
            <div className="space-y-6">
              {day.transactions.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full ${
                        activity.type === "send" ? "bg-[#4CAF50]/20" : "bg-[#2196F3]/20"
                      } flex items-center justify-center`}>
                        <USDTIcon />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center bg-[#1C1D20]">
                        {activity.type === "send" ? (
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#C6CCD2]" />
                        ) : (
                          <ArrowDownLeft className="w-3.5 h-3.5 text-[#C6CCD2]" />
                        )}
                      </div>
                    </div>
                    <div>
                      <p className={`font-sf-pro text-[16px] font-normal leading-[19.09px] ${
                        activity.type === "send" ? "text-[#FF5252]" : "text-[#4CAF50]"
                      }`}>
                        {activity.amount}
                      </p>
                      <p className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69]">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-sf-pro text-[16px] font-normal leading-[19.09px] text-[#C6CCD2]">
                      {activity.type === "send" ? "Send" : "Received"}
                    </p>
                    <div className="flex items-center space-x-1">
                      <span className="font-sf-pro text-[14px] font-normal leading-[16.71px] text-[#545E69]">
                        {activity.hash}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#545E69]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#545E69]" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}