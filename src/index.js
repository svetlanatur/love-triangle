/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var calc=0;
  for (var i=0; i<preferences.length; i++){
   var b=preferences[i];
   var c=preferences[b-1];
   var d=preferences[c-1];
   if ((d-1)==i && b!=c && c!=d)  {
     calc=calc+1;
     preferences[i]=0;
     preferences[b-1]=0;
     preferences[c-1]=0;
    
   }
  }
  return calc;
};
