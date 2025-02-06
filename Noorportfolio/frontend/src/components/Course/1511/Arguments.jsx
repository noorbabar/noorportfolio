import React from "react";
import { useNavigate } from "react-router-dom"; 

const Arguments = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Command Line Arguments</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">What Are Command Line Arguments?</h3>
        <h3> When we run a program, we may want to provide input in different ways:</h3>
        <ul>
            <li>Hardcoding values – Writing values directly into the program (not flexible). </li>
            <li>User input (scanf) – The program asks for input while running (requires interaction).</li>
            <li>Command Line Arguments – The user provides input when running the program from the terminal.</li>
            <li>Command line arguments allow us to pass information to a program before it even starts executing.</li>
        </ul>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Modifying main() for Command Line Arguments</h3>
        <p>By default, `main()` is written as:</p>
        <pre className="code-snippet">
            int main(void) {
                // Program execution starts here
            }
        </pre>
        <p>This version of main() doesn’t take any input. If we want to pass command-line arguments, we need to modify `main()` like this:</p>
        <pre className="code-snippet">
            int main(int argc, char *argv[]) {
            // argc (Argument Count) 
            // argv (Argument Vector) 
            }
        </pre>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <ul>
            <h3> argc (Argument Count)</h3>
            <li>Stores the number of arguments passed to the program.</li>
            <li>This always includes the program name itself as the first argument.</li>
            <h3> argv (Argument Vector)</h3>
            <p>this is an array of strings (char *argv[]), where:</p>
        <li>argv[0] is always the program's name (e.g., ./workout_logger).</li>
        <li>argv[1], argv[2], etc., store the arguments entered by the user.</li>
        </ul>

</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Example: Gym Workout Logger</h3>
        <p>ILet's say we have a program to log a workout session. Instead of entering exercises one by one, we can pass them as arguments when running the program.</p>
        <p>User runs the program like this:</p>
        <pre className="code-snippet">
            ./workout_logger pushups squats burpees
        </pre>
        <p> What argc and argv store:</p>
        <pre className="code-snippet">
        argc = 4  // 4 arguments (including program name)
        argv[0] = "./workout_logger"
        argv[1] = "pushups"
        argv[2] = "squats"
        argv[3] = "burpees"
        </pre>
        <p>Here's how we process the input in C:</p>
        <pre className="code-snippet">
           {`
           #include <stdio.h>

            int main(int argc, char *argv[]) {
            printf("Workout Log:");

            for (int i = 1; i < argc; i++) {
            printf("Exercise %d: %s", i, argv[i]);
            }

            return 0;
            }
            `}
        </pre>
        <p>Explanation - what this code does:</p>
        <ul>
        <li>Prints "Workout Log:" as the head</li>
        <li>Loops through argv starting from 1 (since argv[0] is the program name).</li>
        <li>Prints each exercise with a number.</li>
          <li>`argc` stores the number of arguments passed.</li>
          <li>`argv` is an array of strings where `argv[0]` is the program name.</li>
          <li>argv[0] is just the program's name ("./workout_logger"). We don’t need to print that.
            We start from argv[1], which holds the first real argument ("pushups").
</li>
        </ul>

<p>Output when run with ./workout_logger pushups squats burpees:</p>
<pre className="code-snippet">
Workout Log:
Exercise 1: pushups
Exercise 2: squats
Exercise 3: burpees
</pre>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Converting String Input to Integers</h3>
        <p><strong>Problem:</strong> All command-line arguments are received as text (strings), even if they are numbers.</p>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Why does this matter?</h3>
        <li>If we pass "180", it is stored as "180", not 180.</li>
        <li>We cannot perform mathematical operations on a string.</li>
        </section>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Solution:</h3>
        <li>We use atoi() (ASCII to Integer) to convert strings to numbers.</li>
        <li>atoi() is from {`<stdlib.h>.`}</li>
        <li>Converts numeric strings (e.g., "25") into actual integers (25).</li>
       
       </section>
       <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

       <h3> Example: Baking Timer</h3>
       <p>Say we have a program to track baking time. We pass the temperature and duration as arguments when running the program.</p>
       <p>Running the program:</p>
       <pre className="code-snippet">
        /baking_time 180 25
        </pre>

        <pre className="code-snippet">
        {`
            
        #include <stdio.h>
        #include <stdlib.h> // Required for atoi

        int main(int argc, char *argv[]) {
        if (argc != 3) {
        printf("Usage: ./baking_time temperature duration");
        return 1;
        }
            int temp = atoi(argv[1]);
            int duration = atoi(argv[2]);
            printf("Bake at %d°C for %d minutes.", temp, duration);
            return 0;
            } 
            `}
        </pre>
       
        <p>Explanation:</p>
        <ul>
        <li>The program expects exactly 2 inputs: temperature and duration so we check bys argc != 3</li>
        <li>argc always includes the program name, so:(program name) + 2 (inputs) = 3 arguments expected.</li>
        <li>If argc is not 3, the user forgot to pass arguments or entered too many.</li>
          <li>`atoi(argv[1])` converts the first argument (temperature) into an integer.</li>
          <li>`atoi(argv[2])` converts the second argument (duration) into an integer.</li>
        </ul>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3 className="underline">Using Loops with Command Line Arguments</h3>
        <p>Example: Counting repetitions in a workout routine.</p>
        <pre className="code-snippet">
        {` #include <stdio.h>
            int main(int argc, char *argv[]) {
               for (int i = 1; i < argc; i++) {
                //We start from 1 because argv[0] is the program name.

                    printf("Perform %s reps", argv[i]);
                    //  argv[i] prints each argument (repetition count) passed by the user.

                }
                return 0;
            } `}
        </pre>
        <p>Running the program:</p>
        <pre className="code-snippet">
            ./reps_counter 10 15 20
        </pre>
        <p>What argc and argv store:</p>
        <pre className="code-snippet">
        argc = 4  // 4 arguments (program name + 3 inputs)
argv[0] = "./reps_counter"
argv[1] = "10"
argv[2] = "15"
argv[3] = "20"
</pre>
        <p>Output - this prints:</p>
        <pre className="code-snippet">
            Perform 10 reps
            Perform 15 reps
            Perform 20 reps
        </pre>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/pointers")} className="nav-button">
          Next Topic - Pointers
        </button>
      </div>
    </div>
  );
};

export default Arguments;
