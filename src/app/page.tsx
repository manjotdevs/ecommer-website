import Image from "next/image";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <main>
      <div>
        <h1>
          This is main page
        </h1>
        <div className="m-52" >
        <Cards subject="Accounts" teacher="Manjot" class="12" students="31"  />
      </div>
      </div>
    </main>
  );
}
