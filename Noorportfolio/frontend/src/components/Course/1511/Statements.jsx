import React from "react";
import { useNavigate } from "react-router-dom"; 

const Statements = () => {
  const navigate = useNavigate();

  const has_flour = true;  
  const has_eggs = true;  
  const has_milk = false; 

  // For conditional logic outside JSX
  let cakeMessage;
  if (has_flour && has_eggs && has_milk) {
    cakeMessage = "All ingredients are available! Bake the cake!";
  } else {
    cakeMessage = "You are missing ingredients!";
  }

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Control Flow</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Control Flow in C</h3>
        <p>Control flow allows us to make decisions and branch between different sets of instructions based on conditions. In C, the most common way to do this is through `if` statements.</p>

        <h4><strong>1. The `if` Statement</strong></h4>
        <ul>
          <li>The `if` statement evaluates a boolean expression (true/false) and runs a block of code if the condition is true.</li>
          <li>True = 1, False = 0</li>
          <li>C treats true and false as integers. Later versions of C added `true` and `false` as synonyms (requires <code>#include &lt;stdbool.h&gt;</code>).</li>
        </ul>
        <h5>Example:</h5>
        <pre className="code-snippet">
          {`int x = 5;
if (x > 0) {
  printf("x is positive!\\n");
}`}
        </pre>
        <span className="code-description">If `x` is greater than 0, the condition evaluates to true, and the code inside the curly braces runs.</span>

        <h5>Syntax:</h5>
        <pre className="code-snippet">
          {`if (<condition>) {
  // Code to execute if the condition is true
}`}
        </pre>

        <h5>Examples:</h5>
        <ul>
          <li><strong>Example 1:</strong>
            <pre className="code-snippet">
              {`if (1) {
  printf("The condition was true!\\n");
}`}
            </pre>
            <span className="code-description">Since 1 evaluates to true, it will print: "The condition was true!"</span>
          </li>
          <li><strong>Example 2:</strong>
            <pre className="code-snippet">
              {`if (0) {
  printf("The condition was false!\\n");
}`}
            </pre>
            <span className="code-description">Since 0 evaluates to false, it won't print anything.</span>
          </li>
          <li><strong>Example 3:</strong>
            <pre className="code-snippet">
              {`int x = 5;
if (x >= 0) {
  printf("x is a positive number!\\n");
}`}
            </pre>
            <span className="code-description">The condition checks if `x` is greater than or equal to 0, and it prints: "x is a positive number!"</span>
          </li>
        </ul>

        <h4><strong>2. Boolean Operators</strong></h4>
        <ul>
          <li>Boolean operators allow us to combine or modify conditions:</li>
          <li><code>&lt;</code>: Less than</li>
          <li><code>&gt;</code>: Greater than</li>
          <li><code>&lt;=</code>: Less than or equal to</li>
          <li><code>&gt;=</code>: Greater than or equal to</li>
          <li><code>==</code>: Equal to</li>
          <li><code>!=</code>: Not equal to</li>
        </ul>
        <p><strong>Important:</strong> <code>==</code> is for comparison, while <code>=</code> is for assignment. Don't mix them up!</p>

        <h5>Example:</h5>
        <pre className="code-snippet">
          {`int x = 4;
if (x == 4) {
  printf("x is 4!\\n");
}`}
        </pre>
        <span className="code-description">The condition checks if `x` is equal to 4. Since `x == 4` is true, it prints "x is 4!"</span>

        <h4><strong>3. The `else` Statement</strong></h4>
        <p>Sometimes, we want to do something if the `if` condition is false. The `else` statement helps with this.</p>
        
        <h5>Syntax:</h5>
        <pre className="code-snippet">
          {`if (<condition>) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}`}
        </pre>
        
        <h5>Example:</h5>
        <pre className="code-snippet">
          {`int x = -5;
if (x > 0) {
  printf("x is positive\\n");
} else {
  printf("x is negative\\n");
}`}
        </pre>
        <span className="code-description">Since `x` is negative, the program will print: "x is negative".</span>

        <h4><strong>4. Chaining `if` Statements</strong></h4>
        <p>We can chain multiple `if` statements to check for multiple conditions using `else if`.</p>

        <h5>Syntax:</h5>
        <pre className="code-snippet">
          {`if (<first_condition>) {
  // Code for the first condition
} else if (<second_condition>) {
  // Code for the second condition
} else {
  // Code if none of the conditions are true
}`}
        </pre>

        <h5>Example:</h5>
        <pre className="code-snippet">
          {`int x = 10;
if (x > 0) {
  printf("x is positive\\n");
} else if (x < 0) {
  printf("x is negative\\n");
} else {
  printf("x is zero\\n");
}`}
        </pre>
        <span className="code-description">Since `x` is positive, it will print: "x is positive".</span>

        <h4><strong>5. Combining Conditions with Boolean Operators</strong></h4>
        <p>You can combine multiple conditions using boolean operators:</p>
        <ul>
          <li><code>&&</code> (AND): All conditions must be true</li>
          <li><code>||</code> (OR): At least one condition must be true</li>
          <li><code>!</code> (NOT): Reverses the truth value</li>
        </ul>

        <h5>Examples:</h5>
        <ul>
          <li><strong>Using `&&` (AND):</strong>
            <pre className="code-snippet">
              {`int age = 25;
if (age >= 18 && age <= 30) {
  printf("Age is between 18 and 30\\n");
}`}
            </pre>
          </li>
          <li><strong>Using `||` (OR):</strong>
            <pre className="code-snippet">
              {`int age = 16;
if (age < 18 || age > 65) {
  printf("You are either too young or too old\\n");
}`}
            </pre>
          </li>
          <li><strong>Using `!` (NOT):</strong>
            <pre className="code-snippet">
              {`int is_raining = 0;
if (!is_raining) {
  printf("It is not raining\\n");
}`}
            </pre>
          </li>
        </ul>

        <h4><strong>6. Using Control Flow in Everyday Life (Cake Example)</strong></h4>
        <p>Imagine you're baking a cake. You need to check if you have the ingredients first:</p>
        <ul>
          <li>If you have flour, eggs, and milk, you can proceed with the recipe (True).</li>
          <li>If you're missing one ingredient, you can't bake the cake (False).</li>
        </ul>

        <h5>Code for Baking a Cake:</h5>
        <pre className="code-snippet">
          {`int has_flour = 1;  // 1 means true
int has_eggs = 1;   // 1 means true
int has_milk = 0;   // 0 means false

if (has_flour && has_eggs && has_milk) {
  printf("Bake the cake!\\n");
} else {
  printf("You are missing ingredients!\\n");
}`}
        </pre>
        <span className="code-description">Since `has_milk` is false, it will print: "You are missing ingredients!".</span>

        <h4><strong>Summary:</strong></h4>
        <ul>
          <li><strong>if:</strong> Executes if the condition is true.</li>
          <li><strong>else:</strong> Executes if the `if` condition is false.</li>
          <li>Boolean operators like <code>&&</code>, <code>||</code>, and <code>!</code> help combine conditions.</li>
          <li>Remember: <code>==</code> is for comparison, <code>=</code> is for assignment.</li>
        </ul>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/statements")} className="nav-button">
          Next Topic
        </button>
      </div>
    </div>
  );
};

export default Statements;
