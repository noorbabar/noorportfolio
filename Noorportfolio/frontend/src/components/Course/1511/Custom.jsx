import React from "react";
import { useNavigate } from "react-router-dom"; 

const Custom = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Custom Data Types</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Custom Data Types: Structs & Enums</h3>
        <p>Structures (<code>struct</code>) allow you to group multiple variables of different types together.</p>
        <p>Enumerations (<code>enums</code>) help define a set of fixed/named values For example: labeling exercises based on the muscle group they target. {"enum muscle_group { CHEST, BACK, LEGS, ARMS };"}</p>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Example: Tracking Lifting Data</h4>
        <p>A workout plan includes various details like the lifter's name, weight used, sets, reps, rest time, and difficulty level. We can group all of these into a <code>struct</code> and use an <code>enum</code> for difficulty.</p>

        <pre className="code-snippet">
{`#include <stdio.h>

// Define an enum for workout difficulty
enum Difficulty {
    EASY,
    MEDIUM,
    HARD
};

// Define a struct with different data types
struct Workout {
    char lifterName[50]; 
    int weight;          
    int sets;           
    int reps;            
    float restTime;      
    enum Difficulty level; 
};

int main(void) {
    // Creating a workout entry
    struct Workout JakeWorkout = {
        "Jake",  
        100,     
        5,       
        10,      
        1.5,     
        HARD     
    };

    // Printing workout details
    printf("Lifter: %s\\n", JakeWorkout.lifterName);
    printf("Weight: %d kg\\n", JakeWorkout.weight);
    printf("Sets: %d\\n", JakeWorkout.sets);
    printf("Reps per set: %d\\n", JakeWorkout.reps);
    printf("Rest time: %.1f minutes\\n", JakeWorkout.restTime);

    // Printing difficulty level
    printf("Difficulty Level: ");
    if (JakeWorkout.level == EASY) {
        printf("Easy\\n");
    } else if (JakeWorkout.level == MEDIUM) {
        printf("Medium\\n");
    } else if (JakeWorkout.level == HARD) {
        printf("Hard\\n");
    }

    return 0;
}`}
        </pre>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Code Explanation</h4>
<ul>
  <li><strong>Enums (`enum Difficulty`):</strong> An `enum` defines a set of named constants. Here, `EASY`, `MEDIUM`, and `HARD` represent different difficulty levels for a workout.</li>

  <li><strong>Struct (`struct Workout`):</strong> A `struct` is a user-defined data type that groups multiple variables of different types into a single unit. The `Workout` struct holds information about a lifter's workout.</li>

  <li><strong>Data Types Inside the Struct:</strong> 
    <ul>
      <li>`char lifterName[50]` → Stores the lifter’s name as a string (array of characters).</li>
      <li>`int weight` → Stores the weight lifted (e.g., 100 kg).</li>
      <li>`int sets` and `int reps` → Store the number of sets and reps per set.</li>
      <li>`float restTime` → Stores the rest time in minutes (e.g., 1.5 minutes).</li>
      <li>`enum Difficulty level` → Stores the workout difficulty (EASY, MEDIUM, or HARD).</li>
    </ul>
  </li>

  <li><strong>Why Do We Create `JakeWorkout`?</strong>  
    <p>The `struct Workout` is just a blueprint—it doesn’t store actual data. When we write:</p>
    <pre className="code-snippet">
{`struct Workout JakeWorkout = {"Jake", 100, 5, 10, 1.5, HARD};`}
    </pre>
    <p>We create an actual instance (`JakeWorkout`) that holds real workout data.</p>
  </li>

  <li><strong>How the Code Prints Difficulty Level:</strong>  
    <p>Since `enum Difficulty` stores values as integers (0 for EASY, 1 for MEDIUM, 2 for HARD), we use an `if` statement to display the correct text:</p>
    <pre className="code-snippet">
{`if (JakeWorkout.level == EASY) {
    printf("Easy\\n");
} else if (JakeWorkout.level == MEDIUM) {
    printf("Medium\\n");
} else if (JakeWorkout.level == HARD) {
    printf("Hard\\n");
}`}
    </pre>
    <p>This ensures that the user sees a meaningful description instead of just a number.</p>
  </li>
</ul>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Why Use `struct`?</h4>
        <ul>
          <li><strong>Groups related data</strong> (like a structured workout log).</li>
          <li><strong>Supports multiple data types</strong> (e.g., name as string, weight as integer, rest time as float).</li>
          <li><strong>Keeps complex information organised</strong>.</li>
        </ul>

        <h4>Why Use `enum`?</h4>
        <ul>
          <li><strong>Improves readability</strong> (instead of using raw numbers or characters).</li>
          <li><strong>Prevents invalid values</strong> (only predefined values can be used).</li>
          <li><strong>Helps with comparisons</strong> (we can check `if (difficulty == HARD)`, which is clearer than `if (difficulty == 'H')`).</li>
        </ul>
        </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/functions")} className="nav-button">
          Next Topic - Functions
        </button>
      </div>
    </div>
  );
};

export default Custom;
