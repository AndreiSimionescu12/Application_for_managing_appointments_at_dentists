import axios from "axios";

const cardmediciJsonObj = [];
const getDataCardMedici = () => {
  const EchipaData2 = axios
    .get("http://localhost:5000/getmedici")
    .then((response) => {
      let cardmediciData = response.data;

      for (var i = 0; i < cardmediciData.length; i++) {
        cardmediciJsonObj.push(cardmediciData[i]);
        
      }
      console.log(cardmediciJsonObj);
      console.log(CardMedici);
    })
    .catch((thrown) => {
      console.log("Eroare la obtinerea jucatorilor " + thrown.message);
    });
};
getDataCardMedici();
export const CardMedici = cardmediciJsonObj;
