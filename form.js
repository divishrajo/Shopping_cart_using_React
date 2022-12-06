import React from "react";
import { useState ,useRef} from "react";
import "./form.css"
import logo from "./images/cartlogo.jpg";

var form = {
    title: "Shopping Mart",
    subtitle: "Cart",
//     options: []
};

const Form=() => {
//setUpdated
    const [option,updated] = useState([]);
    const formRef = useRef(null);
    const fsubmit =(g) => {
          g.preventDefault();
          const choice = g.target.elements.option.value;
          console.log(choice);
          if(choice){
            //   form.options.push(option);
            //   let currentState = option;
            //   currentState.push(choice);
             updated([...option,choice]);
            //   console.log(formRef.current);
              formRef.current.reset();
            //   g.target.elements.value=" ";
            //   console.log(form.options);
          }
    };
    console.log(option);

    const RemoveItem=(item)=>{
        // The splice method, overwrite the existing array, it does not return a new array, You need to either use filter or slice methods that return a new array.
       updated((option)=> option.slice(0,-1));
    //  updated((prev) => prev.filter(item => item.index(prev)==-1))
    //    var r =updated([...option,choice]);
    //    r.pop();
    // presuming updated is your useState hook
    //   updated( prev => prev.splice(-1))
    }
   
    return(
        
        <div id="forform">
            <h1 className="h11">{form.title}</h1>
            <h2 className="h22"><img src={logo} width="60px; height:80px;"/>{form.subtitle}</h2>
            <b>No of items in the List are : {option.length}</b><br /><br />
            <form ref={formRef} onSubmit={fsubmit}>
            <label for="option">Enter your items here</label><br /><br />
        <input type="text" id="option" name="option"/>
        {/* <input type="submit" value="Add items" /> */}
        <button id="additem" className="button1" type="submit">Add items</button>
       
            <h3>{option.length>0 ? 'Your Added Items Are Here' : 'No Items Added'}</h3>
            { option.map((value,index)=><li key={index.toString()}>{value}</li>)}<br />
       {/* {option.map((value,index)=><li key={index.toString()}>{value}</li>)} */}
       <button id="remove" className="button1" onClick={RemoveItem} type="submit">Remove Item</button>
       </form>
        </div>
    );
}

export default Form;