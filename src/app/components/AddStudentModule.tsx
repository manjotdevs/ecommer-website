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

        <div className="">
          <form className="text-white space-x-3 space-y-12 p-8 flex flex-col " action="">
          <label htmlFor="student">Student Name  
          <input id="student" type="text" inputMode="text" className="text-black" placeholder="Student Name" />
          </label>
          <label htmlFor="">
          <input  type="number" pattern="[0-9]*"  style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }} inputMode="numeric" className="appearance-none text-black" placeholder="Fee" />
          </label>
          <label htmlFor="">
          <input  type="date" inputMode="numeric" className="text-black" placeholder="Date" />
          </label>
 
          </form>
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
