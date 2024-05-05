"use client"
import { CircleX } from 'lucide-react';

interface AddStudentModulePrps{
    subject: string;
    onclose: Function;
  }

const AddStudentModule: React.FC<AddStudentModulePrps> = (props) => {
    return(
        <div>
            <div>
                <p className='text-white' >{props.subject}</p>

            </div>

            <div>
                <button onClick={props.onclose} ><CircleX className='text-white'/></button>
            </div>

        </div>

    );
}

export default AddStudentModule;