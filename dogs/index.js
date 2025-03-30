// CONSTANTS

const map_artists = new Map();
map_artists.set("hank_williams_thurs",  document.getElementById("hank_williams_thurs").className.split(' '));
map_artists.set("jank_williams_thurs",  document.getElementById("jank_williams_thurs").className.split(' '));
map_artists.set("lil_kim_thurs",  document.getElementById("lil_kim_thurs").className.split(' '));
map_artists.set("hank_williams2_thurs",  document.getElementById("hank_williams2_thurs").className.split(' '));
map_artists.set("massive_hog_thurs",  document.getElementById("massive_hog_thurs").className.split(' '));
map_artists.set("big_jim_thurs",  document.getElementById("big_jim_thurs").className.split(' '));

const map_going = new Map();
map_artists.set("hank_williams_thurs_going",  document.getElementById("hank_williams_thurs_going").className.split(' '));
map_artists.set("jank_williams_thurs_going",  document.getElementById("jank_williams_thurs_going").className.split(' '));
map_artists.set("lil_kim_thurs_going",  document.getElementById("lil_kim_thurs_going").className.split(' '));
map_artists.set("hank_williams2_thurs_going",  document.getElementById("hank_williams2_thurs_going").className.split(' '));
map_artists.set("massive_hog_thurs_going",  document.getElementById("massive_hog_thurs_going").className.split(' '));
map_artists.set("big_jim_thurs_going",  document.getElementById("big_jim_thurs_going").className.split(' '));

localStorage.setItem("artists", map_artists);
localStorage.setItem("going", map_going);


// FUNCTIONS

/*

window onload
--------------------------------------------------------------
function to set all values of artist and going to the stored
values when the page is loaded. Also console logs the fact 
that it did this.

needs to check to see if the values of the items have been
set before, or if they have not been set.
--------------------------------------------------------------
ins:
    the_id = id of button clicked

outs:
    console logs

*/
window.onload = (event) => {
    console.log("main page loaded");

}

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


/*

ARTISTDOUBLE
--------------------------------------------------------------
function to help the user identify which artists they want
to see by changing the style of the artist info block on a
double click
--------------------------------------------------------------
ins:
    the_id = id of artist double clicked

outs:
    none

*/
function artistdouble(the_id){
    document.getElementById(the_id).classList.toggle("u_want");
}


/*

MAPMAPMAP
--------------------------------------------------------------
function to manage a map, allowing the user to utilize 
localStorage to store the changes that they make inbetween 
sessions of using the app.
--------------------------------------------------------------
ins:
    the_id = id of element
    map_artists = map values of artists
    map_going = map vales of who else wants to see the artist

outs:
    none

*/

function mapmapmap(){
    artists = localStorage.getItem("artists");
    going = localStorage.getItem("going");
}