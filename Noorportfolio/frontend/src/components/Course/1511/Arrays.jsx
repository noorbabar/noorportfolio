import React from "react";
import { useNavigate } from "react-router-dom"; 

const Arrays = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Arrays in C</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">What are Arrays?</h3>
        <p>
          Arrays are a data structure that allow for efficient storage and management of multiple values of the same type. </p>
          <p>By understanding how to declare, initialise, access, and modify arrays, you'll be able to work with data more effectively in your programs.</p>

</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Why Use Arrays?</h3>
        <ul>
          <li>Efficiently store and manage multiple values of the same type.</li>
          <li>Reduces code repetition and improves readability.</li>
          <li>Uses contiguous memory allocation, improving performance.</li>
          <li>Allows for easy access and modification of elements.</li>
        </ul>
</section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Declaring an Array</h3>
        <p>
          In C, arrays are declared with a specific size. The size defines the number of elements the array can store. The array index starts at 0 and goes up to (size - 1).
        </p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int numbers[5]; // Declares an array of 5 integers`}
        </pre>
        <p>
          The array shown above can store 5 integer values, with indices ranging from 0 to 4.
        </p>
</section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Initialising an Array</h3>
        <p>Arrays can be initialised at the time of declaration:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int numbers[5] = {10, 20, 30, 40, 50};`}
        </pre>
        <p>
          Here, the array is initialised with values: 10, 20, 30, 40, and 50. If fewer values are provided, the remaining elements will be initialised to 0.
        </p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int numbers[5] = {10, 20}; // Remaining elements are set to 0`}
        </pre>
</section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Accessing and Modifying Elements</h3>
        <p>To access an element in the array, we use its index:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int first_element = numbers[0]; // Retrieves 10`}
        </pre>
        <p>To modify an element, we can assign a new value to it using its index:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`numbers[0] = 15; // Updates the first element to 15`}
        </pre>
        </section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Using Loops with Arrays</h3>
        <p>Instead of accessing each element manually, loops provide an efficient way to process arrays:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`for (int i = 0; i < 5; i++) {
  printf("Element %d: %d\\n", i, numbers[i]);
}`}
        </pre>
        <p>This loop will iterate through the array and print each element. The variable <code>i</code> is used to access each index of the array.</p>
</section>
<section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
  <h3>Example: Gym Progress Tracker</h3>
  <p>Tracking the number of push-ups done each day for a week:</p>
  <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
    {`int push_ups[7] = {20, 25, 30, 35, 40, 45, 50};`}
  </pre>
  <p>Printing all elements (push-up count for each day):</p>
  <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
    {`for (int i = 0; i < 7; i++) {
  printf("Day %d: %d push-ups\\n", i + 1, push_ups[i]);
}`}
  </pre>
  <p>
    In this example, we declare an array of size 7 to store the push-up counts for each day of the week. The loop then prints each day's push-up count.
  </p>
  <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

  <h3>
    Here's a breakdown of how the loop works:
  </h3>
  <ul>
    <li>
      {"for (int i = 0; i < 7; i++)`:"}This loop runs 7 times, with the loop variable `i` starting from 0 and going up to 6 since the loop condition is {" `i < 7`)."}
    </li>
    <li>
      `printf("Day %d: %d push-ups\\n", i + 1, push_ups[i]);`: The `printf` function is used to print the push-up count for each day. The first `%d` is replaced by `i + 1` to display the day number (starting from 1). The second `%d` is replaced by the value of `push_ups[i]`, which retrieves the push-up count for that particular day.
    </li>
    <li>
      For example, when `i = 0`, it prints `Day 1: 20 push-ups` because `push_ups[0]` is 20. When `i = 1`, it prints `Day 2: 25 push-ups`, and so on.
    </li>
  </ul>
  <p>
    The loop efficiently prints the push-up counts for all 7 days, without the need to manually access each element in the array.
  </p>
  </section>
  </section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3>Example: Baking Tracker</h3>
        <p>Storing the number of cookies baked each day:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int cookies_baked[5] = {12, 15, 18, 20, 25};`}
        </pre>
        <p>Finding the total number of cookies baked in a week:</p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int total_cookies = 0;
for (int i = 0; i < 5; i++) {
  total_cookies += cookies_baked[i];
}
printf("Total cookies baked: %d", total_cookies);`}
        </pre>
        <p>
          In this example, we store the number of cookies baked each day in an array. Then, using a loop, we accumulate the total number of cookies baked over the 5 days.
        </p>
</section>
        <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>

        <h3>Static Arrays</h3>
        <p>
          Static arrays have a fixed size, which is determined at the time of declaration. This means the size of the array cannot change during runtime.
        </p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`int ice_cream_per_day[7] = {3, 2, 1, 2, 1, 3, 5};`}
        </pre>
        <p>Here, we are storing the number of ice creams eaten each day for 7 days. The size of the array is fixed to 7.</p>

        <div className="navigation-buttons">
          <button onClick={() => navigate("/resources")} className="nav-button">
            Back to Resources
          </button>
          <button onClick={() => navigate("/functions")} className="nav-button">
            Next Topic - Functions
          </button>
        </div>
      </section>
    </div>
  );
};

export default Arrays;
