
import hero from "../assets/hero.jpg"
function Home(){
    return (
        <div className="absolute w-screen h-screen">
          <img className="w-full h-full object-cover" src={hero} alt="Hero" />
          {/* You can add additional content here */}
        </div>
      );
      
}
export default Home;
