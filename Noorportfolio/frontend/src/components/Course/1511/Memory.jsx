import React from "react";
import { useNavigate } from "react-router-dom";

const Memory = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">
        📖 Dynamic Arrays and Memory
      </h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">The Stack</h3>
        <p>
          The stack is where information about your program execution is stored, including:
        </p>
        <ul>
          <li>Which functions are called, and in what order.</li>
          <li>Which variables are created and where.</li>
          <li>Each code block {"{ }"} creates a new stack frame.</li>
          <li>When a function/block ends, its stack frame is removed.</li>
        </ul>
        <pre className="code-snippet">
          <code>
{`int main(void) {
  int user_age = 20;
  int array[5] = {1, 2, 3, 4, 5};
  return 0;
}`}
          </code>
        </pre>

        <h3 className="underline">Function Call Stack Example</h3>
        <pre className="code-snippet">
          <code>
{`int add_two_ints(int a, int b) {
  int sum = a + b;
  return sum;
}
int main(void) {
  int new_int = add_two_ints(1, 4);
  return 0;
}`}
          </code>
        </pre>

        <h3 className="underline">The Heap</h3>
        <p>
          The heap is a large block of memory outside the stack, managed manually by the programmer.
        </p>
        <ul>
          <li>Unlike the stack, memory in the heap must be allocated and freed manually.</li>
          <li>More flexible than stack frames but requires careful memory management.</li>
        </ul>

        <h3 className="underline">Allocating Memory on the Heap</h3>
        <p>
          C provides functions to allocate memory dynamically, like <code>malloc()</code>:
        </p>
        <pre className="code-snippet">
          <code>
{`#include <stdio.h>
#include <stdlib.h>
int main(void) {
  int *ptr = (int *) malloc(sizeof(int));
  char *buffer = (char *) malloc(50 * sizeof(char));
  return 0;
}`}
          </code>
        </pre>

        <h3 className="underline">Dynamic Arrays on the Heap</h3>
        <pre className="code-snippet">
          <code>
{`#include <stdio.h>
#include <stdlib.h>
int main(void) {
  int num_elements;
  scanf("%d", &num_elements);
  int *data = (int *) malloc(num_elements * sizeof(int));
  return 0;
}`}
          </code>
        </pre>

        <h3 className="underline">Freeing Allocated Memory</h3>
        <p>
          Unlike the stack, heap memory isn't automatically freed, so we use <code>free()</code> to prevent memory leaks:
        </p>
        <pre className="code-snippet">
          <code>
{`int *data = (int *) malloc(num_elements * sizeof(int));
...
free(data);`}
          </code>
        </pre>

        <h3 className="underline">Resizing Allocated Memory (realloc)</h3>
        <p>
          <code>realloc()</code> resizes an existing allocation or allocates a new one if needed:
        </p>
        <pre className="code-snippet">
          <code>
{`int *data = (int *) malloc(num_elements * sizeof(int));
num_elements += 40;
data = (int *) realloc(data, num_elements * sizeof(int));
...
free(data);`}
          </code>
        </pre>
      </section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/linked-lists")} className="nav-button">
          Next Topic - Linked Lists
        </button>
      </div>
    </div>
  );
};

export default Memory;