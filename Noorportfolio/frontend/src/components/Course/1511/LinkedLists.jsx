import React from "react";
import { useNavigate } from "react-router-dom";

const LinkedLists = () => {
  const navigate = useNavigate();

  return (
    <div className="notes-container" style={{ padding: "20px" }}>
      <h1 style={{ textDecoration: "underline", textAlign: "center" }}>
        📖 Linked Lists
      </h1>

      {/* INTRODUCTION */}
      <section
        className="note-section"
        style={{
          color: "black",
          fontFamily: "'Trebuchet MS', sans-serif",
          marginBottom: "40px",
        }}
      >
        <h3 className="underline">Introduction</h3>
        <p>
          A <strong>linked list</strong> is a dynamic data structure composed of nodes.
          Each node contains data and a pointer to the next node in the sequence.
          Unlike arrays, linked lists are not stored contiguously in memory. They
          allow for efficient insertions and deletions without the need to shift elements.
        </p>

        {/* OVERALL LINKED LIST DIAGRAM */}
        <h4 className="underline">Visual Diagram of a Singly Linked List</h4>
        <p>
        Below is a diagram of a singly linked list where each node is broken into
          two sections: the <strong>Data</strong> portion (left) and the <strong>Pointer</strong> portion (right).
          Each node also has an address label shown above it.
        </p>
        <svg width="800" height="200">
          {/* Define arrow marker for pointer lines */}
          <defs>
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="10"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#000" />
            </marker>
          </defs>

          {/* HEAD pointer box */}
          <rect x="20" y="80" width="60" height="40" fill="#f0e68c" stroke="black" />
          <text x="35" y="105" fontSize="12">HEAD</text>
          <line
            x1="80"
            y1="100"
            x2="140"
            y2="100"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Node 1 */}
          <g>
            {/* Address label */}
            <text x="140" y="70" fontSize="12" fill="gray">
              Addr: 0x001
            </text>
            {/* Data section */}
            <rect x="140" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
            <text x="142" y="105" fontSize="12">
              Data: 10
            </text>
            {/* Pointer section */}
            <rect x="190" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
            <text x="198" y="105" fontSize="13">
               0x002
            </text>
          </g>
          <line
            x1="240"
            y1="100"
            x2="290"
            y2="100"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Node 2 */}
          <g>
            {/* Address label */}
            <text x="290" y="70" fontSize="12" fill="gray">
              Addr: 0x002
            </text>
            {/* Data section */}
            <rect x="290" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
            <text x="292" y="105" fontSize="12">
              Data: 20
            </text>
            {/* Pointer section */}
            <rect x="340" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
            <text x="348" y="105" fontSize="13">
              0x003
            </text>
          </g>
          <line
            x1="390"
            y1="100"
            x2="440"
            y2="100"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />

          {/* Node 3 */}
          <g>
            {/* Address label */}
            <text x="440" y="70" fontSize="12" fill="gray">
              Addr: 0x003
            </text>
            {/* Data section */}
            <rect x="440" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
            <text x="442" y="105" fontSize="12">
              Data: 30
            </text>
            {/* Pointer section */}
            <rect x="490" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
            <text x="498" y="105" fontSize="13">
               NULL
            </text>
          </g>
          <line
            x1="540"
            y1="100"
            x2="590"
            y2="100"
            stroke="black"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          {/* End marker for clarity */}
          <text x="595" y="105" fontSize="14" fill="red">
            End
          </text>
        </svg>
        <p>
          In this diagram, each node is represented by two adjacent rectangles:
          <br />
          - <strong>Left Rectangle:</strong> Stores the <em>data</em> (e.g., 10, 20, 30).
          <br />
          - <strong>Right Rectangle:</strong> Stores the <em>pointer</em> (the address of the next node, e.g., 0x002, 0x003 or NULL).
          <br />
          The <strong>address</strong> of each node is shown above the node.
        </p>  

      <h4 className="underline">Linked List Structure</h4>
        <p>A node in a linked list is typically a struct with two fields: a piece of data (payload) and a pointer to the next node.</p>
        <pre>
         {` {struct node {
  int data;
  struct node *next;
};}`}
        </pre>

        <p>This structure allows you to dynamically create and link nodes together. For example, when adding a new element to the linked list, you create a new node and link it to the previous node.</p>
        </section>

      <section
        className="note-section"
        style={{
          color: "black",
          fontFamily: "'Trebuchet MS', sans-serif",
          marginBottom: "40px",
        }}
      >
      <h4 className="underline">Example: Linked List in Baking</h4>
        <p>Consider tracking ingredients for a baking recipe. You could have a linked list where each node represents one ingredient with its quantity.</p>
        <ul>
          <li>First node: {"{ ingredient: 'flour', quantity: '500g' }"}</li>
          <li>Second node: {"{ ingredient: 'sugar', quantity: '200g' }"}</li>
          <li>Third node: {"{ ingredient: 'butter', quantity: '100g' }"}</li>
        </ul>
        <p>If you need to remove or update an ingredient, you can easily do so without shifting elements like in an array.</p>
        </section>

      {/* OPERATION: INSERT AT INDEX */}
      <section
        className="note-section"
        style={{
          color: "black",
          fontFamily: "'Trebuchet MS', sans-serif",
          marginBottom: "40px",
        }}
      >
        <h3 className="underline">Operation: Insert at Index</h3>

        {/* 1. Planning */}
        <h4>Step 1: Planning</h4>
        <p>
          <strong>Goal:</strong> Insert a new node at a specific index in the linked list.
        </p>
        <ul>
          <li>
            <strong>Plan:</strong> Traverse the list to find the node just before the desired insertion index.
          </li>
          <li>Create a new node.</li>
          <li>
            Adjust pointers so that the new node points to the node previously at that index, and the previous node points to the new node.
          </li>
        </ul>

        {/* 2. Diagram */}
        <h4>Step 2: Diagram</h4>
        <p>
          The diagrams below show the linked list <em>before</em> and <em>after</em> inserting a new node (labeled <strong>New Node</strong>) at index 2.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {/* Before Insertion Diagram */}
          <div>
            <h5 style={{ textAlign: "center" }}>Before Insertion</h5>
            <svg width="600" height="180">
              <defs>
                <marker
                  id="arrowBefore"
                  markerWidth="10"
                  markerHeight="10"
                  refX="10"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#000" />
                </marker>
              </defs>

              {/* HEAD pointer box */}
              <rect x="20" y="80" width="50" height="40" fill="#f0e68c" stroke="black" />
              <text x="25" y="105" fontSize="14">HEAD</text>
              <line
                x1="80"
                y1="100"
                x2="140"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowBefore)"
              />

              {/* Node 1 */}
              <g>
                {/* Adjusted Address label: Center of box (x=140+25=165, so text starting a bit left, e.g., 155) */}
                <text x="142" y="70" fontSize="12" fill="gray">
                  Addr: 0x001
                </text>
                {/* Data section */}
                <rect x="140" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="145" y="105" fontSize="12">
                  Data:10
                </text>
                {/* Pointer section */}
                <rect x="190" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="198" y="105" fontSize="13">
                  0x002
                </text>
              </g>
              <line
                x1="240"
                y1="100"
                x2="290"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowBefore)"
              />

              {/* Node 2 */}
              <g>
                <text x="294" y="70" fontSize="12" fill="gray">
                  Addr: 0x002
                </text>
                <rect x="290" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="295" y="105" fontSize="12">
                  Data:20
                </text>
                <rect x="340" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="345" y="105" fontSize="13">
                   0x003
                </text>
              </g>
              <line
                x1="390"
                y1="100"
                x2="440"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowBefore)"
              />

              {/* Node 3 */}
              <g>
                <text x="438" y="70" fontSize="12" fill="gray">
                  Addr: 0x003
                </text>
                <rect x="440" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="445" y="105" fontSize="12">
                  Data:30
                </text>
                <rect x="490" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="498" y="105" fontSize="12">
                   NULL
                </text>
              </g>
              {/* End marker */}
              <line
                x1="540"
                y1="100"
                x2="590"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowBefore)"
              />
              <text x="595" y="105" fontSize="14" fill="red">
                End
              </text>
            </svg>
          </div>

          {/* After Insertion Diagram */}
          <div>
            <h5 style={{ textAlign: "center" }}>After Insertion</h5>
            <svg width="800" height="180">
              <defs>
                <marker
                  id="arrowAfter"
                  markerWidth="10"
                  markerHeight="10"
                  refX="10"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" fill="#000" />
                </marker>
              </defs>

              {/* HEAD pointer box */}
              <rect x="20" y="80" width="60" height="40" fill="#f0e68c" stroke="black" />
              <text x="25" y="105" fontSize="14">HEAD</text>
              <line
                x1="80"
                y1="100"
                x2="140"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowAfter)"
              />

              {/* Node 1 */}
              <g>
                <text x="145" y="70" fontSize="12" fill="gray">
                  Addr: 0x001
                </text>
                <rect x="140" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="145" y="105" fontSize="12">
                  Data:10
                </text>
                <rect x="190" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                {/* Pointer updated to new node's address */}
                <text x="198" y="105" fontSize="13">
                   0x004
                </text>
              </g>
              <line
                x1="240"
                y1="100"
                x2="290"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowAfter)"
              />

              {/* New Node */}
              <g>
                <text x="295" y="70" fontSize="12" fill="gray">
                  Addr: 0x004
                </text>
                <rect x="290" y="80" width="50" height="40" fill="#90EE90" stroke="black" />
                <text x="295" y="105" fontSize="12">
                  Data:15
                </text>
                <rect x="340" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="348" y="105" fontSize="13">
                 0x002
                </text>
              </g>
              <line
                x1="390"
                y1="100"
                x2="440"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowAfter)"
              />

              {/* Node 2 */}
              <g>
                <text x="444" y="70" fontSize="12" fill="gray">
                  Addr: 0x002
                </text>
                <rect x="440" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="445" y="105" fontSize="12">
                  Data:20
                </text>
                <rect x="490" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="495" y="105" fontSize="14">
                   0x003
                </text>
              </g>
              <line
                x1="540"
                y1="100"
                x2="590"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowAfter)"
              />

              {/* Node 3 */}
              <g>
                <text x="595" y="70" fontSize="12" fill="gray">
                  Addr: 0x003
                </text>
                <rect x="590" y="80" width="50" height="40" fill="#ADD8E6" stroke="black" />
                <text x="595" y="105" fontSize="12">
                  Data:30
                </text>
                <rect x="640" y="80" width="50" height="40" fill="#E6E6FA" stroke="black" />
                <text x="648" y="105" fontSize="13">
                  NULL
                </text>
              </g>
              <line
                x1="690"
                y1="100"
                x2="740"
                y2="100"
                stroke="black"
                strokeWidth="2"
                markerEnd="url(#arrowAfter)"
              />
              <text x="745" y="105" fontSize="14" fill="red">
                End
              </text>
            </svg>
          </div>
        </div>

        {/* 3. Implementation */}
        <h4>Step 3: Implementation (Pseudocode)</h4>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px" }}>
{`// Pseudocode for inserting a node at a given index
function insertAtIndex(head, data, index) {
  // Create the new node with its data
  let newNode = { data: data, next: null };

  // If inserting at the beginning, update head pointer
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  // Traverse to the node immediately before the target index
  let current = head;
  let currentIndex = 0;
  while (current !== null && currentIndex < index - 1) {
    current = current.next;
    currentIndex++;
  }
  
  if (current === null) {
    throw new Error("Index out of bounds");
  }
  
  // Insert new node by adjusting pointers
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}`}
        </pre>

        {/* 4. Explanation */}
        <h4>Step 4: Explanation</h4>
        <p>
          In the pseudocode above, we:
        </p>
        <ul>
          <li>
            Check if the new node should be inserted at the head (index 0). If so, we update the head pointer.
          </li>
          <li>
            Otherwise, traverse the list to find the node immediately before the desired insertion index.
          </li>
          <li>
            Adjust the pointers: The new node's pointer is set to point to the current node's next node,
            and then the current node’s pointer is updated to point to the new node.
          </li>
        </ul>
        <p>
          The diagrams above illustrate how the pointer relationships are modified during insertion.
          In the "After Insertion" diagram, notice how <strong>Node 1's pointer</strong> changes from pointing to <strong>Node 2</strong>
          to pointing to the <strong>New Node</strong>, and the <strong>New Node's pointer</strong> is set to <strong>Node 2's address</strong>.
        </p>
</section>
        
      <section
        className="note-section"
        style={{
          color: "black",
          fontFamily: "'Trebuchet MS', sans-serif",
          marginBottom: "40px",
        }}
      >
        <h3 className="underline">Other Operations on Linked Lists</h3>
        <ul>
          <li>
            <strong>Delete Node at Index:</strong> Plan by finding the node before the one to be deleted, then adjust pointers to skip the target node.
          </li>
          <li>
            <strong>Remove Tail:</strong> Traverse to the second-to-last node and set its <code>next</code> pointer to <code>null</code>.
          </li>
          <li>
            <strong>Size of Linked List:</strong> Traverse the list while counting nodes.
          </li>
        </ul>
        <p>
          For each operation, first plan the steps, draw a diagram if needed, write the code (or pseudocode), and then walk through each line to ensure the logic is clear.
        </p>
        <p>The next topic goes through a range of questions, with step by step solutions available.</p>
      </section>

      {/* NAVIGATION BUTTONS */}
      <div className="navigation-buttons" style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => navigate("/resources")} className="nav-button" style={{ marginRight: "10px" }}>
          Back to Resources
        </button>
        <button onClick={() => navigate("/code")} className="nav-button">
          Next Topic - C Programming Questions & Solutions
        </button>
      </div>
    </div>
  );
};

export default LinkedLists;
