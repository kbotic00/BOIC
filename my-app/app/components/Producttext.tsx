import Add from "./Add"
import CustomizeProduct from "./CustomizeProducts"

const Producttext =()=>{
    return(
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-medium pt-4"> Product Name</h1>
            <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className="h-[2px] bg-gray-100"></div>
            <div className="flex items-center gap-4">
                <h3 className="text-xl text-gray-500 line-through">$199.99</h3>
                <h2 className="font-medium text-xl">$150.00</h2>
            </div>
            <div className="h-[2px] bg-gray-100"></div>
            <CustomizeProduct/>
            <Add/>
            <div className="h-[2px] bg-gray-100"></div>
            <div className="text-sm">
                <h4 className="font-bold mb-4">Opis</h4>
                <p>First introduced in 1979 for elite handball players, these shoes are now beloved for their classic style. This version is built with a suede upper for a supple feel. A soft gum rubber outsole keeps them true to their vintage roots.
                </p>
            </div>
            <div className="text-sm">
                <h4 className="font-medium mb-4  text-gray-500 ">Detalji: </h4>
                <p className="px-3">
                   Regular fit
                 <br></br>   Lace closure
                 <br></br>   Suede upper
                 <br></br>   Gum rubber outsole
                 <br></br>   Enjoy the comfort and performance of OrthoLite®  sockliner
                 <br></br>   Soft feel
                </p>
            </div>
            <div className="text-sm">
                <h4 className="font-bold mb-4 ">Dostava & povrat</h4>
                <p className="">
                BOIC nudi besplatnu dostavu za narudžbe od 60 € i iznad. Također nudimo besplatan povrat i pokrivamo troškove pakiranja robe. Narudžbe s nekoliko proizvoda mogu se slati odvojeno.</p>
                <p><br></br>Odmah raspoloživi artikli bit će dostavljeni putem Hrvatske pošte u roku od 2-4 radna dana.</p>
                <p><br></br>Za ugovaranje povrata proizvoda, koristi funkciju povrata u korisničkom računu. </p>
                <p><br></br>Ukoliko imate još pitanja o dostavi ili povratu, molimo kontaktiraj našu službu za korisnike.</p>
            </div>
        </div>
    )
}

export default Producttext