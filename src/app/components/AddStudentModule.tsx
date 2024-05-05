"use client";

interface AddStudentModulePrps {
  subject: string;
  onclose: Function;
}

const AddStudentModule: React.FC<AddStudentModulePrps> = (props) => {
  return (
    <div className="bg-gray-900 fixed inset-0 bg-opacity-30 backdrop-blur-sm ">
      <div className=" justify-center bg-gray-900 space-x-1 text-center m-52 ">
        <div className="">
          <p className="text-white justify-center p-2">{props.subject}</p>
        </div>

        <div className="flex flex-col p-5 space-y-5">
          <input type="text" inputMode="text" className="text-black" placeholder="Student Name" />
          <input type="number" style={{ '-moz-appearance': 'textfield' as any }} pattern="[0-9]*" inputMode="numeric" className="text-black" placeholder="Fee" />
          <input type="date" inputMode="numeric" className="text-black" placeholder="Date" />
        </div>

        <div>
          <button
            className="text-white bg-gray-700 p-2 "
            onClick={(event) => props.onclose(event)}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModule;
