import React from "react";
import implant_dentar from "..//..//images/implantologie/implant_dentar.png";
import aditie_os from "..//..//images/implantologie/aditie_os.png";
import coroane_dentare from "..//..//images/proteze_dentare/coroane_dentare.jpg";
import proteze_dentare_fixe from "..//..//images/proteze_dentare/proteze_dentare_fixe.jpg";
import proteze_dentare_mobile from "..//..//images/proteze_dentare/proteze_dentare_mobile.jpg";
import punti_dentare from "..//..//images/proteze_dentare/punti_dentare.jpg";
import albire_dentara from "..//..//images/estetica_dentara/albire_dentara.jpg";
import fatete_dentare_veneers from "..//..//images/estetica_dentara/fatete_dentare_veneers.jpg";

const galerieData = [
   //implantologie
    {
      category:"implantologie",
      img: implant_dentar,
      title: "Implant dentar",
      description: "Un implant dentar este confectionat din titan de inalta puritate, material biocompatibil, pe care organismul nostru nu doar ca il accepta, ci il si integreaza prin procesul de osteointegrare, proces prin care osul maxilar/mandibular face corp comun cu implantul",
      link:"/implantdentar"
    },
    {
      category:"implantologie",
      img: aditie_os,
      title: "Aditie os",
      description: "Aditia osoasa este procedura chirurgicala menita sa refaca pierderea de masa osoasa cauzata de extractiile dentare, boala parodontala, traumatisme, proteze mobile neadaptate corespunzator.",
      link:"/aditieos"
    },
    //proteze dentare
    {
      category:"proteze dentare",
      img: coroane_dentare,
      title: "Coroane dentare",
      description: "Anatomia unui dinte se compune din radacina si coroana. Radacina dintelui este acoperita de os si gingii. Partea dintelui care este vizibila in gura, deasupra gingiilor, se numeste coroana clinica.",
      link:"/coroanedentare"
    },
    {
      category:"proteze dentare",
      img: proteze_dentare_fixe,
      title: "Proteze dentare fixe",
      description: "Protetica dentara fixa studiaza metodele si tehnicile de protezare cu ajutorul lucrarilor protetice fixe (proteze dentare fixe)",
      link:"/protezedentarefixe"
    },
    {
      category:"proteze dentare",
      img: proteze_dentare_mobile,
      title: "Proteze dentare mobile",
      description: "Protezele Dentare sunt lucrari dentare mobile ce tin locul dintilor si ajuta aparatul dento-maxilar in restabilirea functiilor masticatorii. Proteza dentara are rolul redarii cat mai anatomic si cat mai natural trasaturile, zambetul si aspectul placut.",
      link:"/protezedentaremobile"
    },
    {
      category:"proteze dentare",
      img: punti_dentare,
      title: "Punti dentare",
      description: "Puntea dentara este restaurarea dentara fixa folosita pentru a inlocui un dinte lipsa cu unul fals, ancorat pe dintii vecini cu ajutorul unor coroane dentare",
      link:"/puntidentare"
    },
    //estetica dentara
    {
      category:"estetica dentara",
      img: albire_dentara,
      title: "Albire dentara",
      description: "Albirea dentara este o procedura comuna in stomatologia generala, dar mai ales in estetica dentara, prin faptul ca reda culoarea naturala a dintilor, sau, dupa preferinte, schimba cu pana la 5-7 nuante culoarea dintilor naturali.",
      link:"/albiredentara"
    },
    {
      category:"estetica dentara",
      img: fatete_dentare_veneers,
      title: "Fatete dentare veneers",
      description: "Fatetele dentare sunt lucrari subtiri de portelan, folosite pentru a recrea aspectul natural al dintilor, oferind in acelasi timp puterea si rezistenta smaltului dintilor naturali.",
      link:"/fatetedentareveneers"
    },
  
  ];

  export default galerieData;