import React from "react";

const Hello =() => {
    return(
        <div 
        class="mahi">
            <form>
        <fieldset>
            <legend>Registration Form</legend>
            <div class="one">
            <label>Firstname : </label>
            <input type="text" id="firstname" placeholder="Firstname" required /><br></br></div>
            <div class="one">
            <label>Lastname : </label>
            <input type="text" id="lastname" placeholder="Lastname" /><br></br></div>
            <div class="one">
            <label>Mothername : </label>
            <input type="text" placeholder="mothername" /><br></br></div>
            <div class="one">
            <label>Fathername : </label>
            <input type="text" placeholder="fathername"/><br></br></div>
            <div class="one">
            <label>Email : </label>
            <input type="email" id="email" placeholder="email" required/><br></br></div>
            <div class="one">
            <label>Password :</label>
            <input type="password" id="password" placeholder="enter password" required/><br></br></div>
            <div class="one">
            <label >Gender : </label><br></br>
            <input type="radio" name="gender" />Male<br></br>
            <input type="radio" name="gender" />Female<br></br></div>
            <div class="one">
            <label>College:</label>
            <select>
                <option>Aits</option>
                <option>Mits</option>
                <option>Svce</option>
            </select><br></br></div>
            <div class="one">
            <label>Branch : </label>
            <select>
                <option>CSE</option>
                <option>ECE</option>
                <option>AIDS</option>
                <option>EEE</option>
                <option>AIML</option>
                <option>ME</option>
                <option>CE</option>
            </select><br></br></div>
            <div class="one">
            <label>Date of Joining : </label>
            <input type="date" /><br></br></div>
            <div class="one">
            <label>Year : </label>
            <input type="year" placeholder="year" /><br></br></div>
            <div class="one">
            <label>End Date : </label>
            <input type="date" /><br></br></div>
            <div class="one">
            <label>Mobile no. : </label>
            <input type="text"/><br></br></div>
            <div class="two">
            <input type="Submit" name="submit" value="submit"></input></div>
            <input type="Reset" name="reset" value="reset"></input>

        </fieldset>
    </form>
            
        </div>
    );
}

export default Hello;
