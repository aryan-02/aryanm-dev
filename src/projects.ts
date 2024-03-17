import type{Project} from './types.ts'
import pathPlanner from './assets/pathplanner.gif' 

export const projects : Project[] = [{
    title: "Robot Path Planner",
    status: "Finished",
    image: pathPlanner,
    links: [{url:"https://github.com/aryan-02/robot-path-planner", name:"GitHub"}],
    tags: ["Robotics", "Python"],
    description: `A Potential Field based Path Planner Robot using Micropython on Lego Mindstorms EV3. A project for CSE 4360 (Autonomous Robot Design and Programming). 
    This was a team project I worked on for my Robotics class. Given the coordinates of the start, goal and obstacles, it will compute a path from the start to the goal
    (if one exists) and then execute it.`
},
{
    title: "Line Follower Robot using Computer Vision",
    status: "Finished",
    yt_embed: "3-UEsF-4HYY",
    links: [{url: "https://youtu.be/3-UEsF-4HYY", name: "Demo Video" }],
    tags: ["Robotics", "Python", "OpenCV"],
    description: `In 2020, I decided to try a non-traditional approach to line-follower robots. Instead of using a pair of color sensors to detect the line, I decided to use a camera. This approach makes it roughly equivalent to using more than 2 million color sensors (each pixel being equivalent to a color sensor). Further, using basic calculus, I developed and coded a PID-controller-based line following algorithm, which makes the robot take smooth turns, unlike the abrupt turns a regular line follower robot takes.`
},
{
    title: "Project 3",
    status: "In Progress",
    links: [{url:"https://example.com/project1", name:"Youtube Link"}, {url: "test.com", name:"Second link check"}],
    tags: ["OS", "Shell", "Linux"],
    description: "Description of Project 3..."
}
]