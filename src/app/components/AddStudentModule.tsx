"use client"
import { CircleX } from 'lucide-react';

interface AddStudentModulePrps{
    subject: string;
  }

const AddStudentModule: React.FC<AddStudentModulePrps> = (props,onClick) => {
    return(
        <div>
            <div>
                <p className='text-white' >{props.subject}</p>

            </div>

            <div>
                <button onClick={onClick} ><CircleX className='text-white'/></button>
            </div>

        </div>

    );
}

export default AddStudentModule;