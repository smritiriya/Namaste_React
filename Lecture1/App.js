    {/* // JAVASCRIPT----------------------
    // this is how we  create h1 tag in javascript 
//     const heading=document.createElement("h1");
//     // define what to write i.e content
//     heading.innerHTML="Namaste Everyove from js";
//     // to acces the div
//    const root= document.getElementById("root");
//    //to put the content in the div accessed
//    root.appendChild(heading); */}

   /* // REACT----------------------------
   // create element in react */
   const heading1 =React.createElement("h1",
   {
    id:"title",
   },
   "heading 1");

   const heading2 =React.createElement("h2",
   {
    id:"title",
   },
   "heading 2");
 
   const container =React.createElement("div",
   {
    id:"container"
   },[heading1,heading2]);
   // get the div  
    // create root tells whatever we pass in the funtion,becomes the root
   const root=ReactDOM.createRoot(document.getElementById("root"));
//    const root=ReactDOM.createRoot(document.getElementById("root1"));
 // passing react element inside the root 
//  root.render(heading);  
 root.render(container);  
