import PhoneImage from "../assets/landing.png";
import AppDownload from "../assets/appDownload.png";

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-4xl font-bold tracking-tight text-orange-600">
                Eat The Food Today
            </h1>
            <span className="text-xl">Food is just a click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <div>
                <img src={PhoneImage} alt="phoneImage" />
            </div>
            <div className="flex flex-col justify-center items-center gap-5 text-center">
                <span className="font-bold text-2xl tracking-tighter">
                    Order Take-away even faster!
                </span>
                <span className="tracking-tighter">
                    <p>Download the FoodiPie App for faster ordering and personalised recommendatoins</p>
                </span>
                <div>
                    <img src={AppDownload} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default HomePage;