// Initial Story Setup
const storyText = document.getElementById('story');
const choicesDiv = document.getElementById('choices');
const sceneImage = document.getElementById('scene-image'); // Image container

// Story state
let currentScene = 0;

// Array of scenes with images and choices
const scenes = [
    {
        text: "You wake up in a dark forest. You don't know how you got here. What do you want to do?",
        image: "https://via.placeholder.com/600x300.png?text=Dark+Forest", // Replace with your image link
        choices: [
            { text: "Look around", nextScene: 1 },
            { text: "Start walking", nextScene: 2 }
        ]
    },
    {
        text: "You see a shadowy figure in the distance. It's too dark to see clearly.",
        image: "https://via.placeholder.com/600x300.png?text=Shadowy+Figure", // Replace with your image link
        choices: [
            { text: "Approach the figure", nextScene: 3 },
            { text: "Stay where you are", nextScene: 4 }
        ]
    },
    {
        text: "You start walking and find a path. It's quiet but you feel like you're being followed.",
        image: "https://via.placeholder.com/600x300.png?text=Forest+Path", // Replace with your image link
        choices: [
            { text: "Keep walking", nextScene: 5 },
            { text: "Turn back", nextScene: 6 }
        ]
    },
    {
        text: "You approach the figure and realize it's an old man. He smiles at you, offering you a map.",
        image: "https://via.placeholder.com/600x300.png?text=Old+Man+with+Map", // Replace with your image link
        choices: [
            { text: "Take the map", nextScene: 7 },
            { text: "Refuse and walk away", nextScene: 8 }
        ]
    },
    {
        text: "You decide to stay put and wait. Suddenly, the forest around you grows eerily quiet.",
        image: "https://via.placeholder.com/600x300.png?text=Eerie+Silence", // Replace with your image link
        choices: [
            { text: "Look around nervously", nextScene: 9 },
            { text: "Shout for help", nextScene: 10 }
        ]
    },
    {
        text: "You keep walking, feeling a sense of unease growing. A large wolf steps into your path.",
        image: "https://via.placeholder.com/600x300.png?text=Wolf+in+the+Path", // Replace with your image link
        choices: [
            { text: "Fight the wolf", nextScene: 11 },
            { text: "Run away", nextScene: 12 }
        ]
    },
    // More scenes can be added as needed...
];

// Function to update the story, image, and choices
function updateScene() {
    const scene = scenes[currentScene];
    
    // Update story text
    storyText.innerText = scene.text;
    
    // Update image
    sceneImage.src = scene.image;

    // Clear previous choices
    choicesDiv.innerHTML = '';
    
    // Add new choices
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            currentScene = choice.nextScene; // Update to the next scene
            updateScene(); // Update the story, image, and choices
        };
        choicesDiv.appendChild(button);
    });
}

// Initialize the game
updateScene();
