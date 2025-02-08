/*

BUTTONCLICK
--------------------------------------------------------------
function to change what day is loaded on the page.
Brute force javascript because I can't be bothered to 
figure out how to have JQuery downloaded in the PWA.
Not winning any awards with this, it just needs to work...
--------------------------------------------------------------
ins:
    the_id = id of button clicked

outs:
    none

*/

function buttclick(the_id){
    if (the_id == "thurs_2_fri"){
        // Thursday's artists
        document.getElementById("thursday_artists").classList.remove("yes_seen");
        document.getElementById("thursday_artists").classList.add("no_seen");

        // Friday's artists
        document.getElementById("friday_artists").classList.add("yes_seen");
        document.getElementById("friday_artists").classList.remove("no_seen");
        }
    else if (the_id == "fri_2_thurs"){
        // Thursday's artists
        document.getElementById("thursday_artists").classList.add("yes_seen");
        document.getElementById("thursday_artists").classList.remove("no_seen");

        // Friday's artists
        document.getElementById("friday_artists").classList.remove("yes_seen");
        document.getElementById("friday_artists").classList.add("no_seen");
    }
    else if (the_id == "fri_2_sat"){
        // Friday's artists
        document.getElementById("friday_artists").classList.remove("yes_seen");
        document.getElementById("friday_artists").classList.add("no_seen");

        // Saturday's artists
        document.getElementById("saturday_artists").classList.add("yes_seen");
        document.getElementById("saturday_artists").classList.remove("no_seen");
    }
    else if (the_id == "sat_2_fri"){
        // Friday's artists
        document.getElementById("friday_artists").classList.add("yes_seen");
        document.getElementById("friday_artists").classList.remove("no_seen");

        // Saturday's artists
        document.getElementById("saturday_artists").classList.remove("yes_seen");
        document.getElementById("saturday_artists").classList.add("no_seen");
    }
    else if (the_id == "sat_2_sun"){
        // Saturday's artists
        document.getElementById("saturday_artists").classList.remove("yes_seen");
        document.getElementById("saturday_artists").classList.add("no_seen");

        // Sunday's artists
        document.getElementById("sunday_artists").classList.add("yes_seen");
        document.getElementById("sunday_artists").classList.remove("no_seen");
    }
    else if (the_id == "sun_2_sat"){
        // Saturday's artists
        document.getElementById("saturday_artists").classList.add("yes_seen");
        document.getElementById("saturday_artists").classList.remove("no_seen");

        // Sunday's artists
        document.getElementById("sunday_artists").classList.remove("yes_seen");
        document.getElementById("sunday_artists").classList.add("no_seen");
    }
    else {
        // Should never happen, but just incase it does...default to Thursday
        try {
                // Sunday's artists
            document.getElementById("sunday_artists").classList.remove("yes_seen");
            document.getElementById("sunday_artists").classList.add("no_seen");

            // Saturday's artists
            document.getElementById("saturday_artists").classList.remove("yes_seen");
            document.getElementById("saturday_artists").classList.add("no_seen");

            // Friday's artists
            document.getElementById("friday_artists").classList.remove("yes_seen");
            document.getElementById("friday_artists").classList.add("no_seen");

            // Thursday's artists
            document.getElementById("thursday_artists").classList.add("yes_seen");
            document.getElementById("thursday_artists").classList.remove("no_seen");

        } catch (error) {
            console.error(error);
            window.location.reload();
        }
    }
}