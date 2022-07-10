# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: In React, props is a way of passing state properties down to child components. It is a unilateral way of data flow often used to pass information from component to compenent. 

  Researched answer: Props data is a read-only, which means that data from the parent compenent is not changed by the child component. Props is a global variable object that stands for properties. We can access props by through this.props. Props can be passed to a function based component. We can also pass as many props as we want to a component.



2. What is a DOM event?

  Your answer: DOM stands for Document Object Model. React utilizes something called the virtual DOM, which allows components to be updated and rendered without refreshing the page. It is part of what makes React a dynamic user interface. For example, everthing in instagram is a component that is being rendered, and when somebody comments on a photo, likes a photo, uploads a photo, DOM events are occuring.

  Researched answer: DOM events are signals that something has happened or is happening and can be triggered by user interactions or by the browser. DOM events flow through a document on a lifecycle of their own. This lifecycle makes events very extensible and useful. When an event fires in an app, it starts at the roots target (capture phase), then fires on the event target (target phase), and then flows back to the document's root (bubbling phase). 

  https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object-oriented programming is programming that is centered around objects and data rather than functions and logic like functinoal programming. Eveything in object-oriented programming is put into containers of objects and classes. In functional programming - logic and functions are used as a way to manipulate data. 

  Researched answer: Object oriented programming focuses on the objects developers want to manipulate rather than using logic to manipulate them. Benefits of this approach include: reusability, scalability, and efficiency. Functional programming is using functions to the best effect for creating clean and maintainable software. Functional programming aims to produce pure functions - functions that have no side effects. The goal of functional programming is to create cleaner, more resilient, large-scale system.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: A float is a number with a decimal. A float will return more accurate values. An integer is a whole number and whole numbers will always be returned unless you include floats in mathematical operations.

  Researched answer: Floats are a class in Ruby as are Integers. Integers are whole numbers that can be positive or negative. A float number is a rational or irrational number that contain a fractional part (decimal).



5. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means that the return is implied and will automatically be returned without having a return statement.

  Researched answer: In Ruby, implicit return means that if the last expression to be evaluated is a return statement, there is no need for the keyword return in order to get a return. The default argument for return is nil which is a falsey value.



## Looking Ahead: Terms for Next Week

1. Instance Variable:  An instance variable in ruby has a name starting with @ symbol, and its content is restricted to whatever the object itself refers to. Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.

2. PostgreSQL:  Postgres is an open source object-relational database management system, which means Postgres looks at databases through an object-oriented programming (OOP) lens. PostgreSQL is an advanced, enterprise-class, and open-source relational database system. PostgreSQL supports both SQL (relational) and JSON (non-relational) querying.

3. Ruby on Rails: Ruby on Rails, the framework for writing full-stack web applications in the Ruby programming language. Rails is a full-stack framework. It ships with all the tools needed to build amazing web apps on both the front and back end.
Rendering HTML templates, updating databases, sending and receiving emails, maintaining live pages via WebSockets, enqueuing jobs for asynchronous work, storing uploads in the cloud, providing solid security protections for common attacks. Rails does it all and so much more.

4. ORM: Object-relational mapping (ORM) is a programming technique in which a metadata descriptor is used to connect object code to a relational database. ORM converts data between type systems that are unable to coexist within relational databases and OOP languages.

5. Active Record: Rails Active Records provide an interface and binding between the tables in a relational database and the Ruby program code that manipulates database records. Ruby method names are automatically generated from the field names of database tables. Active Record is a Rails ORM. Active Record takes data which is stored in a database table and lets you interact with the data like a Ruby object.
