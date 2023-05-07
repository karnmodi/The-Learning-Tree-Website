const NestedNavigatioContainerTutorials = document.getElementById("Nested_Navigation_Container_Id");

let TutorialEl = document.getElementById("Tutorials_Btn")
const NestedNavigationCloseBtn = document.getElementById("Nested_Navigation_Close_Btn_Id")

TutorialEl.addEventListener("click", ToggleTutorial)
NestedNavigationCloseBtn.addEventListener("click", ToggleTutorial)

function ToggleTutorial(){
    
    TutorialEl.classList.toggle("bg-black")
    TutorialEl.classList.toggle("text-white")
    NestedNavigatioContainerTutorials.classList.toggle("Nested_Navigation_hidden_Tutorials")
    NestedNavigatioContainerReferences.classList.add("Nested_Navigation_hidden_References");
    NestedNavigatioContainerExercises.classList.add("Nested_Navigation_hidden_Exercises");
    ReferencesEl.classList.remove("bg-black")
    ReferencesEl.classList.remove("text-white")
    ExercisesEl.classList.remove("bg-black")
    ExercisesEl.classList.remove("text-white")
}


const NestedNavigatioContainerReferences = document.getElementById("Nested_Navigation_Container_References");

let ReferencesEl = document.getElementById("References_Btn")
const NestedNavigationCloseBtnReferences = document.getElementById("Nested_Navigation_Close_Btn_References")

ReferencesEl.addEventListener("click", ToggleReferences)
NestedNavigationCloseBtnReferences.addEventListener("click", ToggleReferences)

function ToggleReferences(){
    
    ReferencesEl.classList.toggle("bg-black")
    ReferencesEl.classList.toggle("text-white")
    NestedNavigatioContainerReferences.classList.toggle("Nested_Navigation_hidden_References")
    NestedNavigatioContainerTutorials.classList.add("Nested_Navigation_hidden_Tutorials");
    NestedNavigatioContainerExercises.classList.add("Nested_Navigation_hidden_Exercises");
    TutorialEl.classList.remove("bg-black")
    TutorialEl.classList.remove("text-white")
    ExercisesEl.classList.remove("bg-black")
    ExercisesEl.classList.remove("text-white")
}



const NestedNavigatioContainerExercises = document.getElementById("Nested_Navigation_Container_Exercises");

let ExercisesEl = document.getElementById("Exercises_Btn")
const NestedNavigationCloseBtnExercises = document.getElementById("Nested_Navigation_Close_Btn_Exercises")

ExercisesEl.addEventListener("click", ToggleExercises)
NestedNavigationCloseBtnExercises.addEventListener("click", ToggleExercises)

function ToggleExercises(){
    
    ExercisesEl.classList.toggle("bg-black")
    ExercisesEl.classList.toggle("text-white")
    NestedNavigatioContainerExercises.classList.toggle("Nested_Navigation_hidden_Exercises")
    NestedNavigatioContainerTutorials.classList.add("Nested_Navigation_hidden_Tutorials");
    NestedNavigatioContainerReferences.classList.add("Nested_Navigation_hidden_References");
    TutorialEl.classList.remove("bg-black")
    TutorialEl.classList.remove("text-white")
    ReferencesEl.classList.remove("bg-black")
    ReferencesEl.classList.remove("text-white")
    // ReferencesEl.classList.remove("text-white")
}