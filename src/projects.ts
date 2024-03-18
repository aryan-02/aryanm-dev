import type{Project} from './types.ts'
import pathPlanner from './assets/pathplanner.gif' 
import hackUTA from './assets/hackuta.png'
import tictactoe from './assets/tictactoe.png'

export const projects : Project[] = [{
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
]