import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  return (
    <>
      <div className="bg-gray-950 w-full h-14 px-14  flex text-white rounded-full border-solid ">
        <div className="p-3 w-2/5 font-bold text-lg ">
          <h1 className="">MS Production</h1>
        </div>

        <div className="p-3 w-3/4 space-x-16">
          <Link href="/products" className="py-8">products</Link>
          <Link href="/products" className="py-8">products</Link>
          <Link href="/products" className="py-8">products</Link>
          <Link href="/products" className="py-8">products</Link>
        </div>

        <div className="p-1 w-1/3">
          <input type="text" className=" h-8 w-72 m-2 rounded-lg" />
          <button className="bg-blue-500 flex rounded-lg w-40 h-8 p-1 border-solid border-3 "><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
        </div>
      </div>
    </>
  );
}

