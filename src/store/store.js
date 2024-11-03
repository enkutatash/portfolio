import {writable} from "svelte/store";

const Experiance = writable([
    {
        company:"A2SV",
        title: "Competitive programmer",
        image:"../images/a2sv2.jpg",
        description:"Competitive programmer",
        link:"https://a2sv2.org/"

    },
    {
        company:"Eskalate",
        title: "Mobile App Developer",
        image:"../images/eska.jpg",
        description:"Competitive programmer",
        link:"https://www.eskalate.io/"

    }
]);
const Skills = writable([
    {
        
        title: "c++",
        image:"../images/c.svg",
        link:"https://www.w3schools.com/cpp/",
    },
    {
        title:"dart",
        image:"../images/dart.svg",
        link:"https://dart.dev/",
    },
    {
        title:"django",
        image:"../images/dj.svg",
        link:"https://www.djangoproject.com/",
    },
    {
        
        title:"firebase",
        image:"../images/firebase.svg",
        link:"https://firebase.google.com/",
    },
    {
        title:"flutter",
        image:"../images/flutter.svg",
        link:"https://flutter.dev/",
    },
    {
        title:"go lang",
        image:"../images/go.svg",
        link:"https://go.dev/",
    },
    {
        
        title:"java script",
        image:"../images/js.svg",
        link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        title:"python",
        image:"../images/python.png",
        link:"https://www.python.org/",
    },
    {
        title:"html",
        image:"../images/html.png",
        link:"https://www.w3schools.com/css/",
    }
]);
const Projects = writable([
    {

        task:'Backend and Mobile Developer',
        link:"https://github.com/enkutatash/cinema",
        title:"Cinema Reservation",
        images:["../images/cinema1.jpg","../images/cinema2.jpg"],
        description:"This is a Cinema reservation app developed mainly in Go and Flutter"
    },
    {

        task:'Backend Developer',
        link:"https://github.com/enkutatash/Event_management",
        title:"Event management API",
        images:[],
        description:"Backend system designed to support event management applications, developed using Go "
    },
    {

        task:'Backend and Mobile Developer',
        link:"https://github.com/enkutatash/ProLink",
        title:"ProLink",
        images:["../images/prolink1.jpg","../images/prolink2.jpg"],
        description:"Collaborative skill-based networking App by Flutter and firebase"
    },
   
   
]);

export default{
    Experiance,Skills,Projects
};