import React from "react";
import { useNavigate } from "react-router-dom"; 

const Loops = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Loops</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <p><strong>Why do we need to loop?</strong></p>
        <p>Programmers work smarter, not harder. Let the computer do it for you!</p>
        <p>Think about lifting weights—do you want to write the code to lift the dumbbell 12 times manually? No! We use loops to perform repetitive tasks like lifting the same weight multiple times without writing the same code over and over again.</p>
    </section>
    
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <p><strong>What are Loops?</strong></p>
        <p>In C programming, a loop is used to repeat a block of code multiple times as long as a condition is true. Instead of writing the same code repeatedly, you can just write it once and use a loop to execute it multiple times.</p>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <p><strong>Types of Loops:</strong></p>
        <ul>
          <li>Counting loops</li>
          <li>Conditional loops</li>
          <li>Sentinel loops</li>
        </ul>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <p><strong>The General Syntax of a while Loop:</strong></p>
        <pre className="code-snippet">
          {`while (<condition>) {`}
          <br />
          {`   // do something repeatedly`}
          <br />
          {`}`}
        </pre>
        <p>This loop will keep running the code inside the curly braces as long as the condition remains true.</p>
</section>

<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>Counting Loops</h3>
        <p>A counting loop repeats a task a fixed number of times. For example, let’s say you want to stir the cake batter 5 times:</p>
        <pre className="code-snippet">
          {`int times = 5;`}
          <br />
          {`int i = 0;`}
          <br />
          {`while (i < times) {`}
          <br />
          {`    printf("Stir the batter!\\n");`}
          <br />
          {`    i++;`}
          <br />
          {`}`}
        </pre>
        </section>

        <p><strong>Explanation of the Code:</strong></p>
        <ul>
          <li><strong>int times = 5;</strong> - We set a variable to 5, indicating we want to repeat the task 5 times.</li>
          <li><strong>int i = 0;</strong> - We create a counter variable `i` starting at 0 to keep track of the number of times we've stirred the batter.</li>
          <li><strong>while {"(i < times) { ... }"}</strong> - The loop continues to run as long as `i` is less than 5.</li>
          <li><strong>i++;</strong> - After every loop, `i` increases by 1 so we can eventually stop the loop when `i` reaches 5.</li>
        </ul>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>For Loops (i love for loops)</h3>
        <p>A for loop is another type of loop , it's useful when you know the exact number of iterations you need. It combines the initialisation, condition, and increment/decrement into a single line.</p>
        <pre className="code-snippet">
          {`for (int i = 0; i < 5; i++) {`}
          <br />
          {`    printf("Stir the batter!\\n");`}
          <br />
          {`}`}
        </pre>
        </section>
        <p><strong>Explanation of the Code:</strong></p>
        <ul>
          <li><strong>int i = 0;</strong> - Initialises the counter variable `i` to 0.</li>
          <li><strong>{"i < 5;"}</strong> - The condition, the loop runs as long as `i` is less than 5.</li>
          <li><strong>i++;</strong> - Increments `i` by 1 after each loop iteration, so the loop stops when `i` reaches 5.</li>
        </ul>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Conditional Loops</h4>
        <p>A conditional loop runs until a condition is met. For example, let’s say you need to check if you have all the ingredients before you start baking a cake:</p>
        <pre className="code-snippet">
          {`int has_flour = 1;`}
          <br />
          {`int has_eggs = 1;`}
          <br />
          {`int has_milk = 0;`}
          <br />
          {`while (!(has_flour && has_eggs && has_milk)) {`}
          <br />
          {`    printf("You need more ingredients!\\n");`}
          <br />
          {`    has_milk = 1;`} 
          <br />
          {`}`}
        </pre>
        </section>

        <p><strong>Explanation of the Code:</strong></p>
        <ul>
          <li><strong>int has_flour = 1;</strong> - We set `has_flour` to 1 (true) meaning we have flour.</li>
          <li><strong>int has_eggs = 1;</strong> - Similarly, `has_eggs` is set to 1 (true), meaning we have eggs.</li>
          <li><strong>int has_milk = 0;</strong> - We set `has_milk` to 0 (false) meaning we don't have milk yet.</li>
          <li><strong>while {"(!(has_flour && has_eggs && has_milk)) { ... }"}</strong> - The loop continues as long as we don’t have all the ingredients (if any of the variables is 0, it loops).</li>
          <li><strong>has_milk = 1;</strong> - Once we have the missing ingredient, we set `has_milk` to 1, which will stop the loop.</li>
        </ul>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Sentinel Loops</h4>
        <p>A sentinel loop works similarly to a conditional loop, but we manually flag when we want to stop the loop. For example, let's say you're lifting weights and you want to stop after reaching a certain weight:</p>
        <pre className="code-snippet">
          {`int dumbel_kg = 5;`}
          <br />
          {`int max_kg_to_lift = 100;`}
          <br />
          {`int amount_lifted = 0;`}
          <br />
          {`int finished_lifting = 0;`}
          <br />
          {`while (!finished_lifting) {`}
          <br />
          {`    amount_lifted = amount_lifted + dumbel_kg;`}
          <br />
          {`    printf("Keep lifting!\\n");`}
          <br />
          {`    if (amount_lifted >= max_kg_to_lift) {`}
          <br />
          {`        finished_lifting = 1;`} 
          <br />
          {`    }`}
          <br />
          {`}`}
        </pre>
        </section>

        <p><strong>Explanation of the Code:</strong></p>
        <ul>
          <li><strong>int finished_lifting = 0;</strong> - A flag to track whether we’ve finished lifting.</li>
          <li><strong>while {"(!finished_lifting) { ... }"}</strong> - The loop continues running until `finished_lifting` becomes 1 (true).</li>
          <li><strong>if {"(amount_lifted >= max_kg_to_lift) { finished_lifting = 1; }"}</strong> - Once the total weight lifted reaches or exceeds the target weight (`100 kg`), we set the flag to 1, stopping the loop.</li>
        </ul>

        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h4>Nested Loops</h4>
        <p>Sometimes, we need a loop inside another loop. For example, let’s say you want to print a grid:</p>
        <pre className="code-snippet">
          {`int rows = 5;`}
          <br />
          {`int columns = 5;`}
          <br />
          {`int i = 0;`}
          <br />
          {`while (i < rows) {`}
          <br />
          {`    int j = 0;`}
          <br />
          {`    while (j < columns) {`}
          <br />
          {`        printf("%d ", j + 1);`}
          <br />
          {`        j++;`}
          <br />
          {`    }`}
          <br />
          {`    printf("\\n");`}
          <br />
          {`    i++;`}
          <br />
          {`}`}
        </pre>
        </section>

        <p><strong>Explanation of the Code:</strong></p>
        <ul>
          <li><strong>int i = 0;</strong> - The counter for rows.</li>
          <li><strong>while {"(i < rows) { ... }"}</strong> - Outer loop runs for 5 rows.</li>
          <li><strong>int j = 0;</strong> - The counter for columns.</li>
          <li><strong>while {"(j < columns) { ... }"}</strong> - Inner loop runs for 5 columns inside each row.</li>
          <li><strong>printf("%d ", j + 1);</strong> - Prints numbers from 1 to 5 in each row.</li>
          <li><strong>i++;</strong> - Increments the row counter.</li>
        </ul>

        <p><strong>Example Output:</strong></p>
        <pre>
          1 2 3 4 5
          1 2 3 4 5
          1 2 3 4 5
          1 2 3 4 5
          1 2 3 4 5
        </pre>

      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/custom")} className="nav-button">
          Next Topic - Custom Data Types: Structs & Enums
        </button>
      </div>
    </div>
  );
};

export default Loops;
