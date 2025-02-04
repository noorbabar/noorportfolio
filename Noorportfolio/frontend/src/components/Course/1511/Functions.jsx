import React from "react";
import { useNavigate } from "react-router-dom"; 

const Functions = () => {
  const navigate = useNavigate();  

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">
        📖 Functions in C
      </h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">What is a Function?</h3>
        <p>
          A function in C is a reusable block of code that performs a specific task. 
          Instead of writing the same logic multiple times, we define a function once and call it whenever needed.
        </p>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Why Use Functions?</h3>
        <ul>
          <li><strong>Code Reusability:</strong> Write once, use multiple times.</li>
          <li><strong>Better Readability:</strong> Makes the code cleaner and easier to understand.</li>
          <li><strong>Modularization:</strong> Breaks the program into smaller parts.</li>
          <li><strong>Easier Debugging:</strong> Fixing a bug in one function fixes it everywhere.</li>
        </ul>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Structure of a Function</h3>
        <p>
          Every function in C consists of:
        </p>
        <ul>
          <li><strong>Return Type:</strong> A function can return a value of a specific data type like int, float, char, etc.</li>
          <li><strong>Function Name:</strong> A meaningful name that describes the function's purpose.</li>
          <li><strong>Parameters (Optional):</strong> allow us to customise the function’s behavior by passing values when calling it.</li>
          <li><strong>Function Body:</strong> The set of instructions inside the function - aka the actual code executed when the function is called.</li>
          <li><strong>Return Statement (Optional):</strong> Sends a value back to the caller.</li>
        </ul>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Example: Calories Burned Function</h3>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`#include <stdio.h>

// Function definition
// (1) Return type: float
float caloriesBurned(float weight, float MET, int time) {  

    // (5) Return statement
    return weight * MET * (time / 60.0); 
}

int main() {
    float weight = 75.0; 
    float MET = 8.0;     
    int time = 30;       

    // (2) Function name: caloriesBurned
    // (3) Parameters: weight, MET, time
    // (4) Function body: Calculates calories burned
    float calories = caloriesBurned(weight, MET, time);
    
    printf("Calories burned: %.2f kcal\n", calories);
    return 0;
}`}
        </pre>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Explanation of the Code</h3>
        <ul>
          <li><code>#include &lt;stdio.h&gt;</code> → Allows us to use <code>printf</code> for output.</li>
          <li><code>float caloriesBurned(float weight, float MET, int time)</code> → Defines the function.</li>
          <li><code>return weight * MET * (time / 60.0);</code> → Calculates and returns the result.</li>
          <li><code>int main()</code> → The main function where execution starts.</li>
          <li><code>float weight = 70.0;</code> → Declares a variable for weight.</li>
          <li><code>float MET = 6.0;</code> → Declares a variable for MET value.</li>
          <li><code>int time = 45;</code> → Declares a variable for workout time.</li>
          <li><code>float calories = caloriesBurned(weight, MET, time);</code> → Calls the function and stores the result.</li>
          <li><code>printf("Calories burned: %.2f kcal\\n", calories);</code> → Displays the result.</li>
        </ul>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Void Functions</h3>
        <p>
          A void function (Procedure) does not return a value. It performs an action but does not provide any output back to the caller.
        </p>

        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`void startWorkout() {
    printf("Workout started! Get ready to lift!\\n");
}

int main() {
    startWorkout();  // Calls the function
    return 0;
}`}
        </pre>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Explanation:</h3>
        <ul>
          <li><code>void startWorkout()</code> → A function that does not return anything.</li>
          <li><code>printf("Workout started! Get ready to lift!\\n");</code> → Prints a message.</li>
          <li><code>startWorkout();</code> → Calls the function.</li>
        </ul>
</section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Function Prototypes</h3>
        <p>
          If we want to use a function before defining it, we must declare it first.
        </p>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`#include <stdio.h>

// Function prototype -> this is where we declare it
float caloriesBurned(float weight, float MET, int time);

int main() {
    float result = caloriesBurned(70, 6.0, 45);
    printf("Calories burned: %.2f kcal\\n", result);
    return 0;
}

// Function definition
float caloriesBurned(float weight, float MET, int time) {
    return weight * MET * (time / 60.0);
}`}
        </pre>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/arrays")} className="nav-button">
          Next Topic: Arrays
        </button>
      </div>
    </div>
  );
};

export default Functions;
