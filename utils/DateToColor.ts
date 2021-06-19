
function dateToColor (x: Date): String { // a function to decide a color 
    let date: Date = new Date(); 

    var diff = Math.abs(date.getTime() - x.getTime());

    if (diff > 2) 
        return "#cc0000";   // red
    

    else if (diff < 1) 
        return "#4ca64c";   // green
    

    else 
        return "#ffff7f";   // yellow
}
 