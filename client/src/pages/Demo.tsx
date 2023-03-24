import leorodney from "../assets/leorodney.png";

export default function Demo() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <img src={leorodney} alt="leorodney ai img generator logo" className="h-[220px] w-[220px] animate-spin"/>
      <h1 className="text-4xl font-bold text-white">LEORODNEY</h1>
    </div>
  )
};
