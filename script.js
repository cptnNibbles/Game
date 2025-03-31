// Initial Story Setup
const storyText = document.getElementById('story');
const choicesDiv = document.getElementById('choices');

// Story state
let currentScene = 0;

const scenes = [
    {
        text: "You wake up in a dark forest. You don't know how you got here. What do you want to do?",
        choices: [
            { text: "Look around", nextScene: 1 },
            { text: "Start walking", nextScene: 2 }
        ]
    },
    {
        text: "You see a shadowy figure in the distance. It's too dark to see clearly.",
        choices: [
            { text: "Approach the figure", nextScene: 3 },
            { text: "Stay where you are", nextScene: 4 }
        ]
    },
    {
        text: "You start walking and find a path. It's quiet but you feel like you're being followed.",
        choices: [
            { text: "Keep walking", nextScene: 5 },
            { text: "Turn back", nextScene: 6 }
        ]
    },
    // Add more scenes as you like...
];

// Function to update the story and choices
function updateScene() {
    const scene = scenes[currentScene];
    storyText.innerText = scene.text;
    choicesDiv.innerHTML = ''; // Clear previous choices

    // Add new choices
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentScene = choice.nextScene; // Update to the next scene
            updateScene(); // Update the story and choices
        };
        choicesDiv.appendChild(button);
    });
}

// Initialize the game
updateScene();
