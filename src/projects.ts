import type{Project} from './types.ts'
import pathPlanner from './assets/pathplanner.gif' 
import hackUTA from './assets/hackuta.png'
import tictactoe from './assets/tictactoe.png'
import healthApp from './assets/healthapp.png'
import byteClub from "./assets/byteclub.jpg"
import lookOut from './assets/lookout.jpg'

export const projects : Project[] = [
{
    title: "Game Playing Agent",
    status: "Ongoing",
    tags: ["AI", "Game Playing", "Deep Learning", "Reinforcement Learning"],
    description: `Working on an AI game-playing engine that works with both Tic-tac-toe and Connect4. Implementing techniques similar
    to the ones used bots for playing the game of Go, including Monte Carlo Tree Search, Deep Learning and Reinforcement Learning.`
},
{
    title: "Minimax GUI Tic-Tac-Toe",
    status: "Finished",
    image: tictactoe,
    links: [{url: "https://github.com/aryan-02/tic-tac-toe-minimax", name: "GitHub"}],
    tags: ["Python", "PyGame", "Artificial Intelligence", "Minimax", "GUI"],
    description: `A game of Tic-tac-toe where the computer is guaranteed to never lose. Uses the Minimax algorithm to decide the best move at each step.`
},
{
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
    title: "MavShell (msh)",
    status: "Finished",
    links: [{url: "https://github.com/aryan-02/MavShell", name:"GitHub"}],
    tags: ["C", "OS", "Shell", "Linux", "UNIX"],
    description: `A Bash-like shell application written in C using Linux system calls fork and exec.`
},
{
    title: "Author Detection Model",
    status: "Finished",
    links: [{url: "https://github.com/aryan-02/text_vectorization_model", name: "GitHub"}],
    tags: ["Neural Network", "Deep Learning", "Machine Learning", "Python", "TensorFlow", "Keras"],
    description: `A Text-Vectorization based Neural Network model that predicts the author of the text provided as input. Written using Keras (TensorFlow) and Numpy. Results in a Test Accuracy of about 64%.`
},
{
    title: "HackUTA 2022 Website",
    status: "Finished",
    image: hackUTA,
    links: [{url: "https://2022.hackuta.org", name:"External Link"}],
    tags: ["Web Development", "HTML/CSS", "JavaScript", "Svelte", "Vite", "SASS"],
    description: `Developed the event website for HackUTA 2022. Made the countdown timer from scratch in SvelteJS, a component-based frontend framework, and designed the overall interface and graphics.`
},
{
    title: "Line Follower Robot using Computer Vision",
    status: "Finished",
    yt_embed: "3-UEsF-4HYY",
    links: [{url: "https://github.com/aryan-02/line_follow", name: "GitHub"}, {url: "https://youtu.be/3-UEsF-4HYY", name: "Demo Video" }],
    tags: ["Robotics", "Python", "OpenCV"],
    description: `In 2020, I decided to try a non-traditional approach to line-follower robots. Instead of using a pair of color sensors to detect the line, I decided to use a camera. This approach makes it roughly equivalent to using more than 2 million color sensors (each pixel being equivalent to a color sensor). Further, using basic calculus, I developed and coded a PID-controller-based line following algorithm, which makes the robot take smooth turns, unlike the abrupt turns a regular line follower robot takes.`
},
{
    title: "HealthApp",
    status: "Partial",
    image: healthApp,
    links: [{url: "https://github.com/aryan-02/HealthApp/", name: "GitHub"}],
    tags: ["Android", "Gradle", "Java"],
    description: `Worked on an Android application to keep track of users' vitals, medication and other health information with
    smart reminders. Designed the UI/UX and implemented some core backend functionalities.`
},
{
    title: "Memory Allocator",
    status: "Finished",
    links: [{url: "https://github.com/aryan-02/ArenaAllocator", name: "GitHub"}],
    tags: ["OS", "C", "Linux", "UNIX", "Memory Allocator"],
    description: `A custom memory allocator with a malloc/free-like interface implemented using a custom data structure
    with an array of linked nodes.`
},
{
    title: "Byte Club Website",
    status: "Finished",
    links: [{url: "https://web.archive.org/web/20210618154628/http://byteclub.in/", name: "Wayback Machine Link"}],
    tags: ["Web Development", "HTML/CSS", "JavaScript", "SASS", "PHP", "CodeIgniter", "XML", "MySQL"],
    image: byteClub,
    description: `A website and event management system I developed for my high school's computing club. Built using CodeIgniter (a Model-View-Controller framework), the system handled invites to schools,
    registration, and attendance, together with an administrator portal with a graphical interface for the event organizers.`
},
{
    title: "Dense Neural Network from Scratch in C++",
    status: "Finished",
    links: [{url:"https://replit.com/@aryan02/perceptron%23main.cpp", name:"ReplIt Link"}, {url: "https://github.com/aryan-02/perceptron-cpp", name: "GitHub"}],
    tags: ["Neural Network", "C++"],
    description: "A Dense Neural Network implemented from scratch with a custom Matrix template library written in C++. Uses stochastic gradient descent to train weights. Trained on the XOR Dataset."
},
{
    title: "LookOut",
    status: "Finished",
    image: lookOut,
    links: [{url: "https://devpost.com/software/lookout-p8nsv3", name: "DevPost Link"}],
    tags: ["Web Development", "NodeJS", "Express", "MongoDB", "HTML/CSS", "JavaScript", "PHP"],
    description: `A crowdsourcing application developed during the COVID-19 lockdown, where users can rate the quality of various
    parameters and standards in their area, providing direct feedback to Governments on how to handle the emergency situation of the pandemic.
    Finished third at The Global Hack`
}
]