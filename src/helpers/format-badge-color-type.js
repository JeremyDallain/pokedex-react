const formatBadgeColorType = (type) => {
   let color;
  
   switch (type) {
      case 'Fire': 
         color = 'fire'; 
         break; 
      case 'Water': 
         color = 'water'; 
         break; 
      case 'Grass': 
         color = 'grass'; 
         break; 
      case 'Bug': 
         color = 'bug'; 
         break; 
      case 'Normal': 
         color = 'normal'; 
         break; 
      case 'Flying': 
         color = 'flying'; 
         break; 
      case 'Poison': 
         color = 'poison'; 
         break; 
      case 'Fairy': 
         color = 'fairy'; 
         break; 
      case 'Psychic': 
         color = 'psychic'; 
         break; 
      case 'Electric': 
         color = 'electric'; 
         break; 
      case 'Fighting': 
         color = 'fighting'; 
         break;
      case 'Rock': 
         color = 'rock'; 
         break;
      case 'Steel': 
         color = 'steel'; 
         break;
      case 'Ice': 
         color = 'ice'; 
         break;
      case 'Ghost': 
         color = 'ghost'; 
         break; 
      case 'Ground': 
         color = 'ground'; 
         break;
      case 'Dragon': 
         color = 'dragon'; 
         break;
      default: 
         color = 'default'; 
         break; 
   }
  
   return `m-1 badge type-${color}`;
 }

export default formatBadgeColorType;