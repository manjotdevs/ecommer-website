"use client";
import React from "react";
import Image from "next/image";
import Users from "../images/user-6380868.svg";
export default function Cards(props) {
  return (
    <div className="bg-gray-900 text-white rounded-2xl w-96 h-60 p-5">
        <div className="flex space-x-7 mb-4">
            <div>
                <Image
                className="rounded-full"
                src={Users}
                alt="Techer Pic"
                width={40}
                />
            </div>

            <div>
                <p className="font-bold text-lg">{props.subject}</p>
                <p className="ml-6">{props.teacher}</p>
            </div>
        
        </div>
        
        <div>
            <div>
                <p>{props.class}</p>
                <p>{props.students}</p>
            </div>
            <div>
            <button>Add Student</button>
            <button>See More</button>
            </div>
        </div>
    </div>
  );
}
