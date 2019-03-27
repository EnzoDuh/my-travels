import React from "react";
import Travel from "./Travel";
const travels = [
    {
    travel : "London",
    country : "England",
    image : "https://cdn.civitatis.com/reino-unido/londres/guia/distritos.jpg",
    distance : "1200kms"
    },
    {
    travel : "Paris",
    country : "France",
    image : "https://www.railtour.ch/_images/ccd/417878/Lausanne-42666398.jpg",
    distance : "770kms"
    },

    {
    travel : "Madrid",
    country : "Spain",
    image : "https://www.nacel.fr/medias/_cache/produits/293/imagePrincipale/1024_768/espagnol-general-madrid.jpg",
    distance : "500kms"
    },
    {
    travel : "Salou",
    country : "Spain",
    image : "http://cdn77.orangesmile.com/common/img_cities_w680/salou--400284-3.jpg",
    distance : "550kms"
    },
    {
    travel : "Rust",
    country : "Germany",
    image : "https://i.ytimg.com/vi/V9xtEzt3STU/maxresdefault.jpg",
    distance : "1000kms"
    }
    ]
        
    const Travels = () => (
        <div>
          {travels.map(travel => (
            <Travel
              country={travel.country}
              travel={travel.travel}
              image={travel.image}
              distance={travel.distance}
            />
          ))}
        </div>
    );
export default Travels;