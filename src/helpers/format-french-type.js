const formatFrenchType = (type) => {
   if (type === "Fire") {
      return 'Feu';
   } 
   else if (type === "Grass") {
      return 'Plante';
   }	
   else if (type === "Poison") {
      return 'Poison';
   }	
   else if (type === "Flying") {
      return 'Vol';
   }	
   else if (type === "Water") {
      return 'Eau';
   }	
   else if (type === "Bug") {
      return 'Insecte';
   }	
   else if (type === "Normal") {
      return 'Normal';
   }	
   else if (type === "Ground") {
      return 'Sol';
   }	
   else if (type === "Fairy") {
      return 'Fée';
   }
   else if (type === "Electric") {
      return 'Electrik';
   }
   else if (type === "Fighting") {
      return 'Combat';
   }
   else if (type === "Psychic") {
      return 'Psy';
   }
   else if (type === "Rock") {
      return 'Roche';
   }
   else if (type === "Steel") {
      return 'Acier';
   }
   else if (type === "Ice") {
      return 'Glace';
   }
   else if (type === "Ghost") {
      return 'Spectre';
   }
   else if (type === "Dragon") {
      return 'Dragon';
   }      
}

export default formatFrenchType;