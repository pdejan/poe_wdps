function submit(){
  var inputText = document.querySelector('textarea').value;
  var data = inputText.split('\n');

  var attSpeed
  var phyDamage
  var eleDamage

  var rarityCheck = data[0].toString();
  // Rare + Unique
  if (rarityCheck == "Rarity: Rare" || rarityCheck == "Rarity: Unique"){

      //fuck you GGG
      var qualityCheck = data[5].toString();
      var quality = qualityCheck.charAt(0) == "Q";

      if (quality == true){
      var eleDmgCheck = data[7].toString();
      var isEle = eleDmgCheck.charAt(0) == "E";
      } else {
      var eleDmgCheck = data[6].toString();
      var isEle = eleDmgCheck.charAt(0) == "E";
      }



      // Attack Speed
     if (quality == true && isEle == true) {
        var attSp = data[9].split(':')[1];
        attSpeed = parseFloat(attSp);

     } else if (isEle == true || quality == true){
        var attSp = data[8].split(':')[1];
        attSpeed = parseFloat(attSp);
     } else {
       var attSp = data[7].split(':')[1];
       attSpeed = parseFloat(attSp);
     }

     // Physical Damage
      if (quality == true) {
        var phyDmg = data[6].split(':')[1];
        var phyDmg1 = data[6].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      } else {
        var phyDmg = data[5].split(':')[1];
        var phyDmg1 = data[5].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      }

        // Elemental Damage
     if (quality == true) {
       var eleDmg = data[7].split(':')[1];
       var eleLength = eleDmg.length;

        if (eleLength < 21) {
          var eleDmg1 = data[7].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);
          eleDamage = eleDmgLow + eleDmgHigh;
        } else if (eleLength < 41) {

          var eleDmg1 = data[7].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);

          var eleDmg2 = eleDmg.slice(10,30);
          var eleDmg21 = eleDmg2.split(',')[1];
          var eleDmg22 = eleDmg2.split('-')[1];
          var eleDmgLow1 = parseInt(eleDmg21);
          var eleDmgHigh1 = parseInt(eleDmg22);
          eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1);
        } else {

          var eleDmg1 = data[7].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);

          var eleDmg2 = eleDmg.slice(10,30);
          var eleDmg21 = eleDmg2.split(',')[1];
          var eleDmg22 = eleDmg2.split('-')[1];
          var eleDmgLow1 = parseInt(eleDmg21);
          var eleDmgHigh1 = parseInt(eleDmg22);

          var eleDmg3 = eleDmg.slice(30,60);
          var eleDmg31 = eleDmg3.split(',')[1];
          var eleDmg32 = eleDmg3.split('-')[1];
          var eleDmgLow2 = parseInt(eleDmg31);
          var eleDmgHigh2 = parseInt(eleDmg32);
          eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1) + (eleDmgLow2 + eleDmgHigh2);
        }
      } else {
        var eleDmg = data[6].split(':')[1];
        var eleLength = eleDmg.length;

        if (eleLength < 21) {
          var eleDmg1 = data[6].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);
          eleDamage = eleDmgLow + eleDmgHigh;
        } else if (eleLength < 41) {

          var eleDmg1 = data[6].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);

          var eleDmg2 = eleDmg.slice(10,30);
          var eleDmg21 = eleDmg2.split(',')[1];
          var eleDmg22 = eleDmg2.split('-')[1];
          var eleDmgLow1 = parseInt(eleDmg21);
          var eleDmgHigh1 = parseInt(eleDmg22);
          eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1);
        } else {

          var eleDmg1 = data[6].split('-')[1];
          var eleDmgLow = parseInt(eleDmg);
          var eleDmgHigh = parseInt(eleDmg1);

          var eleDmg2 = eleDmg.slice(10,30);
          var eleDmg21 = eleDmg2.split(',')[1];
          var eleDmg22 = eleDmg2.split('-')[1];
          var eleDmgLow1 = parseInt(eleDmg21);
          var eleDmgHigh1 = parseInt(eleDmg22);

          var eleDmg3 = eleDmg.slice(30,60);
          var eleDmg31 = eleDmg3.split(',')[1];
          var eleDmg32 = eleDmg3.split('-')[1];
          var eleDmgLow2 = parseInt(eleDmg31);
          var eleDmgHigh2 = parseInt(eleDmg32);
          eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1) + (eleDmgLow2 + eleDmgHigh2);
        }
      }
    } else if (rarityCheck == "Rarity: Magic") {    // Magic Items

      var qualityCheck = data[4].toString();
      var quality = qualityCheck.charAt(0) == "Q";

      if (quality == true){
      var eleDmgCheck = data[6].toString();
      var isEle = eleDmgCheck.charAt(0) == "E";
      } else {
      var eleDmgCheck = data[5].toString();
      var isEle = eleDmgCheck.charAt(0) == "E";
      }

      // Attack Speed
     if (quality == true && isEle == true) {
        var attSp = data[8].split(':')[1];
        attSpeed = parseFloat(attSp);

     } else if (isEle == true || quality == true){
        var attSp = data[7].split(':')[1];
        attSpeed = parseFloat(attSp);
     } else {
       var attSp = data[6].split(':')[1];
       attSpeed = parseFloat(attSp);
     }

     // Physical Damage
      if (quality == true) {
        var phyDmg = data[5].split(':')[1];
        var phyDmg1 = data[5].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      } else {
        var phyDmg = data[4].split(':')[1];
        var phyDmg1 = data[4].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      }

      // Elemental Damage
      if (quality == true) {
        var eleDmg = data[6].split(':')[1];
        var eleLength = eleDmg.length;

         if (eleLength < 21) {
           var eleDmg1 = data[6].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);
           eleDamage = eleDmgLow + eleDmgHigh;
         } else if (eleLength < 41) {

           var eleDmg1 = data[6].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);

           var eleDmg2 = eleDmg.slice(10,30);
           var eleDmg21 = eleDmg2.split(',')[1];
           var eleDmg22 = eleDmg2.split('-')[1];
           var eleDmgLow1 = parseInt(eleDmg21);
           var eleDmgHigh1 = parseInt(eleDmg22);
           eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1);
         } else {

           var eleDmg1 = data[6].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);

           var eleDmg2 = eleDmg.slice(10,30);
           var eleDmg21 = eleDmg2.split(',')[1];
           var eleDmg22 = eleDmg2.split('-')[1];
           var eleDmgLow1 = parseInt(eleDmg21);
           var eleDmgHigh1 = parseInt(eleDmg22);

           var eleDmg3 = eleDmg.slice(30,60);
           var eleDmg31 = eleDmg3.split(',')[1];
           var eleDmg32 = eleDmg3.split('-')[1];
           var eleDmgLow2 = parseInt(eleDmg31);
           var eleDmgHigh2 = parseInt(eleDmg32);
           eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1) + (eleDmgLow2 + eleDmgHigh2);
         }
       } else {
         var eleDmg = data[5].split(':')[1];
         var eleLength = eleDmg.length;

         if (eleLength < 21) {
           var eleDmg1 = data[5].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);
           eleDamage = eleDmgLow + eleDmgHigh;
         } else if (eleLength < 41) {

           var eleDmg1 = data[5].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);

           var eleDmg2 = eleDmg.slice(10,30);
           var eleDmg21 = eleDmg2.split(',')[1];
           var eleDmg22 = eleDmg2.split('-')[1];
           var eleDmgLow1 = parseInt(eleDmg21);
           var eleDmgHigh1 = parseInt(eleDmg22);
           eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1);
         } else {

           var eleDmg1 = data[5].split('-')[1];
           var eleDmgLow = parseInt(eleDmg);
           var eleDmgHigh = parseInt(eleDmg1);

           var eleDmg2 = eleDmg.slice(10,30);
           var eleDmg21 = eleDmg2.split(',')[1];
           var eleDmg22 = eleDmg2.split('-')[1];
           var eleDmgLow1 = parseInt(eleDmg21);
           var eleDmgHigh1 = parseInt(eleDmg22);

           var eleDmg3 = eleDmg.slice(30,60);
           var eleDmg31 = eleDmg3.split(',')[1];
           var eleDmg32 = eleDmg3.split('-')[1];
           var eleDmgLow2 = parseInt(eleDmg31);
           var eleDmgHigh2 = parseInt(eleDmg32);
           eleDamage = (eleDmgLow + eleDmgHigh) + (eleDmgLow1 + eleDmgHigh1) + (eleDmgLow2 + eleDmgHigh2);
         }
       }
    } else {  // Normal items

      var qualityCheck = data[4].toString();
      var quality = qualityCheck.charAt(0) == "Q";

      // Attack Speed
     if (quality == true) {
        var attSp = data[7].split(':')[1];
        attSpeed = parseFloat(attSp);
     } else {
       var attSp = data[6].split(':')[1];
       attSpeed = parseFloat(attSp);
     }

     // Physical Damage
      if (quality == true) {
        var phyDmg = data[5].split(':')[1];
        var phyDmg1 = data[5].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      } else {
        var phyDmg = data[4].split(':')[1];
        var phyDmg1 = data[4].split('-')[1];
        var phyDmgLow = parseInt(phyDmg);
        var phyDmgHigh = parseInt(phyDmg1);
        phyDamage = phyDmgLow + phyDmgHigh;
      }

      eleDamage = 0;

    }//end

  //if no elemental dmg
  var noEle = isNaN(eleDamage);
  if (noEle == true) {
    eleDamage = 0;
  }

  var finalPhyDmg = (phyDamage / 2) * attSpeed;
  var finalEleDmg = (eleDamage / 2) * attSpeed;
  var totalDamage = finalPhyDmg + finalEleDmg;

  //console.log(totalDamage);
  //console.log(finalPhyDmg);
  //console.log(finalEleDmg);

  document.getElementById("totaldps").innerHTML = totalDamage.toString();
  document.getElementById("phydps").innerHTML = finalPhyDmg.toString();
  document.getElementById("eledps").innerHTML = finalEleDmg.toString();
}
