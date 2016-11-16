// Data
// context – the object where properties you include in curly braces are looked up
let context = { "name" : "Brenda", 
				"occupation" : "software developer",
				"language" : "Handlebars"};

// Step 1
// Retrieve the template data from the HTML.
let template = $('#handlebars-starter').html();

// Step 2
// Compile the template data into a function
let templateScript = Handlebars.compile(template);

// Step 3
//Execute the newly created function passing the data as an argument
let html = templateScript(context);

// Step 4
// Insert the HTML code into the page
$(document.body).append(html);





///////////////// Example 2 ///////////////////////////////////
// let lang_context = {"language" : "handlebars",
// 					"adjective" : "awesome"};

// let tpl_language = $('#hbs-language').html();
// let tpl_language_script = Handlebars.compile(tpl_language);
// let html_language = tpl_language_script(lang_context);
// $(document.body).append(html_language);




//Handlebars can handle some logic
// {{#if boolean}}
// 	some content
// {{/if}}





/////////////// Example 3 /////////////////////////////////
// let dev_context = {
//   "occupation" : "developer",
//   "website" : {
//     "name" : "Nashville Software School"
//   },
//   "names" : [
//     {"firstName" : "Brenda"},
//     {"firstName" : "Joe"},
//     {"firstName" : "Greg"}
//   ],
//   "cities" : ["Nashville, Franklin, Green Hills"]
// };

// let tpl_devs = $('#hbs-devs').html();
// let tpl_devs_script = Handlebars.compile(tpl_devs);
// let html_devs = tpl_devs_script(dev_context);
// $(document.body).append(html_devs);



////////////Example 4 ///////////////////////////////////
// var voter_context = {
//   "person":[
//     {"name" : "John", "year" : 1988},
//     {"name" : "Liz" , "year" : 1972},
//     {"name" : "Mike" , "year" : 2009},
//   ]
// }

// //custom helper function
// Handlebars.registerHelper("voterStatus", function(year) {
//    if(year > 1998) {
//       return "can not vote";
//    } else {
//       return "is a voter";
//    }
// });


// let tpl_voter = $('#hbs-voter').html();
// let tpl_voter_script = Handlebars.compile(tpl_voter);
// let html_voter = tpl_voter_script(voter_context);
// $(document.body).append(html_voter);












