import Link from "next/link"
export default function Navbar(){
    return(
        <>
            <div className='bg-gray-950  h-14 flex text-white  '>
                <div className="w-1/5">
                    <h1>MS Production</h1>
                </div>

                <div className="w-1/2">
                    <Link href="/products">products</Link>
                    <Link href="/products">products</Link>
                    <Link href="/products">products</Link>
                </div>

                <div className="w-15">
                    <input type="text" className="p-1 w-56 m-2 rounded-lg"/>
                    <button>Search</button>
                </div>
            </div>
            
        </>
    );
}