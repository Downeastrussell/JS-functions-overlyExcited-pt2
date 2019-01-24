let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        
         if(i%3===0 && i!=0){
            buildMeUp = buildMeUp+"!";
        }
        
        buildMeUp = buildMeUp + " " + theWordArray[i];

        if(i+1===theWordArray.length){
            buildMeUp = buildMeUp+"!";
        }

       
        
 
        


        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

addExcitement(sentence)