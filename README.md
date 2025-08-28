1. Difference between methods
   •	getElementById("id") → Get 1 element by id.
   •	getElementsByClassName("class") → Get many elements by class.
   •	querySelector("selector") → Get first match using CSS (#id, .class, tag).
   •	querySelectorAll("selector") → Get all matches using CSS.
ID = one, Class = many, QuerySelector = CSS style

2. How do you create and insert a new element into the DOM?
    Steps:
      1.	Create element → document.createElement("tagName")
      2.	Add text or attributes → element.textContent = "Hello"
      3.	Insert into DOM → use appendChild, append, prepend, or insertBefore.
         Example:
            let newDiv = document.createElement("div");
            newDiv.textContent = "I am new!";
            document.body.appendChild(newDiv);
        	
3. Event Bubbling
    If you click a button inside a div:
    1.	Button click runs
    2.	Then div click runs
    3.	Then body click runs
  Tip: From child → parent (like bubbles going up).

4. Event Delegation
   Instead of putting an event listener on every small element, you put it on their parent. Because of bubbling, the parent can “catch” the event from its children.
   Example: Instead of adding click events to 10 list items, you add one event to the list itself, and the list will know which item was clicked.
   
5. preventDefault() vs stopPropagation()
     •	preventDefault() stops the browser’s default behavior.
        Example: A link normally opens a new page, but with preventDefault() it won’t.
    •	stopPropagation() stops the event from moving upward to parent elements.
        Example: If you click a button inside a box, only the button’s event runs, not the box’s.



