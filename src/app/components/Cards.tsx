'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Users from "../images/user-6380868.svg";
import AddStudentModule from "./AddStudentModule";

// Define the type for the props
interface CardsProps {
  subject: string;
  teacher: string;
  class: string;
  students: string;
}

// Define the functional component
const Cards: React.FC<CardsProps> = (props) => {
  const [showModole , setShowModole] = useState(false);
  return (
    <>
    {showModole && <AddStudentModule onclose={() => setShowModole(false)} subject={props.subject} />}
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

      <div className="flex my-5 space-x-12">
        <div>
          <p>{props.class}</p>
          <p>{props.students}</p>
        </div>
        <div className="flex pl-5 pt-24 space-x-2">
          <button className="bg-gray-700 w-32 h-9 p-1 font-semibold rounded-2xl">See More</button>
          <button onClick={()=> setShowModole(true)} className="bg-blue-700 w-32 h-9 p-1 font-semibold rounded-2xl">Add Student</button>

        </div>
      </div>
    </div>
    </>
  );
};

export default Cards;
