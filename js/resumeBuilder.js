// var email = "ly.julie@hotmail.com";
//
// var newEmail = email.replace("hotmail","udacity");
//
// console.log(email);
// console.log(newEmail);
//
// var awesomeThoughts = "My name is Julie and I am AWESOME!";
//
// var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN!");
//
// $("#main").append(funThoughts);
//
// var skills = ["awesome", "programming", "teaching", "JS"];
// $("#main").append(skills.length);
//
// prompt("how are you?");
// document.write("<h1> I am julie </h1>");
//
// var countries = ["argentina", "china", "ireland"];
// for (country in countries) {
//   alert(countries[country]);
// }
var bio = {
    "name": "Julie LY",
    "role": "FRONT END DEVELOPER",
    "contacts": {
        "mobile": "+855-------",
        "email": "---@hotmail.com",
        "twitter": "Julie_C_Ly",
        "github": "juliely",
        "location": "Singapore"
    },
    "welcomeMessage": '{ BoNJoUR! } </br> I make websi . . .',
    "skills": ["jQuery", "JavaScript", "CSS", "HTML", "R", "Excel"],
    "biopic": "images/coffee148.png"
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#personname").prepend(formattedName);

    // function inName(bio.name) {
    //   bio.name = bio.name.split(" ");
    //   bio.name[1] = bio.name[1].toUpperCase();
    //   bio.name[0] = bio.name[0].slice(0, 1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
    //   console.log(bio.name);
    //   return bio.name[0] + " " + bio.name[1];
    //  }

    //  inName(bio.name);
    //  $("#header").append(internationalizeButton);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#personname").append(formattedRole);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $(function() {
        $(".welcome").typed({
            strings: [formattedWelcomeMessage, formattedBiopic + '{ 您好! }</br> I design and drink cappucino.'],
            typeSpeed: 25
        });
    });

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email).replace("%link%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#", "https://twitter.com/Julie_C_Ly");
    $("#topContacts").prepend(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", "https://github.com/juliely");
    $("#topContacts").prepend(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();

var education = {
    "schools": [{
        "name": "Birmingham Business School",
        "degree": "MSc",
        "majors": ["International Business "],
        "location": "Singapore",
        "dates": "2016 - 2017",
        "url": "http://www.birmingham.ac.uk/postgraduate/courses/taught/business/international-business-singapore.aspx"
    }, {
        "name": "Harvard Business School",
        "degree": "</br> HBX CORe",
        "majors": ["Pre MBA </br> - Business Analytics, Economics for Managers, Finanical Accounting"],
        "location": "Worldwide",
        "dates": "June - August 2016",
        "url": "http://hbx.hbs.edu"
    }, {
        "name": "McGill University",
        "degree": "</br>BA",
        "majors": ["Economics", " Political Science </br> - With a focus on Financial Instruments, Political Economics and Comparative Politics"],
        "location": "Montreal, Canada",
        "dates": "2011-2015",
        "url": "https://www.mcgill.ca"
    }],

    "onlineCourses": [{
        "school": "Microsoft x DataCamp,  edX",
        "title": "Introduction to Python for Data Science </br> - Numpy, Matplotlib, Control flow & Pandas",
        "date": "June - July 2016",
        "url": "https://www.edx.org/course/introduction-python-data-science-microsoft-dat208x-1"
    },{
      "school": "Google x Udacity",
      "title": "Google Maps APIs",
      "date": "June 2016 - Present",
      "url": "https://www.udacity.com/course/google-maps-apis--ud864"
    },{
        "school": "Udacity, </br> co-created by at&t, Google, GitHub, HACK REACTOR",
        "title": "Front-End Web Development Nanodegree",
        "date": "June 2016 - Present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },{
        "school": "Learn // FLATIRON SCHOOL",
        "title": "Web Development Fundamentals </br> - Introduction to Ruby",
        "date": "May 2016 - Present",
        "url": "http://flatironschool.com"
    }]
};

education.display = function() {

    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);

            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

            $(".education-entry:last").append(formattedschoolDegree + formattedschoolMajors);

            var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[school].name).replace('#', education.schools[school].url);
            $(".education-entry:last").append(formattedschoolName);

            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedschoolLocation);

            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedschoolDates);
        }
    }

    $("#education").append(HTMLonlineClasses);

    for (var onlinecourse in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(onlinecourse)) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[onlinecourse].url).replace("%data%", education.onlineCourses[onlinecourse].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school).replace("#", education.onlineCourses[onlinecourse].url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].date);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[onlinecourse].url).replace('%data%', education.onlineCourses[onlinecourse].url);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
}

education.display();

var work = {
    "jobs": [{
        "employer": "</br>Camino Insurance",
        "title": "Actuarial Trainee",
        "location": "Phnom Penh, Cambodia",
        "dates": "Feb - May 2016",
        "description": "<ul><li> - Assit Head of Actuarial and Business Development to research and calculate P&L for new product.</li>" +
            "<li> -	Assist reinsurance team on R/I premium and commission calculation and liase with reinsurer on major issues such as claim, refund and reporting format.</li>" +
            "<li> -	Assist reinsurance team on R/I premium and commission calculation and liase with reinsurer on major issues such as claim, refund and reporting format.</li>" +
            "<li> -	Assist reinsurance team on R/I premium and commission calculation and liase with reinsurer on major issues such as claim, refund and reporting format.</li></ul>",
        "url": "http://www.caminco.com.kh"
    }, {
        "employer": "</br>Bank of China",
        "title": "Credit and Marketing Intern",
        "location": "Phnom Penh, Cambodia",
        "dates": "May - June 2014",
        "description": "<ul><li> </li>" +
            "<li> -	Maintain good relations with potential and exisiting clients </li>" +
            "<li> -	Evaluates loan applications and documentation by confirming credit worthiness</li>" +
            "<li> -	Improves loan applications and documentation by informing applicant of additional requirements</li>" +
            "<li> -	Updates job knowledge by participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations </li><ul>",
        "url": "http://www.boc.cn/en/"
    }]
};

work.display = function() {

    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

work.display();

var projects = {
    "projects": [{
        "title": 'Build a Portfolio Site',
        "dates": "June 2016",
        "url": "portfolio/index.html",
        "description": "I was be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS." +
            " I had to develop a responsive website that will display images, descriptions and links to each of the " +
            "portfolio projects I will complete throughout the course of the Front-End Web Developer Nanodegree. " +
            "I also added javascript to create an overlay lightbox for the project.",

        "images": ['images/portfolio.png']
    }, {
        "title": 'Animal Trading Cards',
        "dates": "June 2016",
        "url": "tradingcards/card.html",
        "description": "Use CSS to convert a design prototype into a functional webpage and I also added javascript to make it " +
            "more interactive.",

        "images": ['images/tradingcards.png']
    }]
};

//displaying projects

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title).replace("#", projects.projects[project].url);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]).replace("#", projects.projects[project].url);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
}

projects.display();

//Collecting Click locations

$("#mapDiv").append(googleMap);
