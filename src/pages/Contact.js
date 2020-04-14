import React, { Component } from 'react';
import './pages.css';

class Contact extends Component {

    render() {
        return (
            <div class='contact-page'>
                <h3 class='head'>Contact Form</h3>
                <div class='container'>
                    <form action=''>
                        <label for='fname'>First Name</label>
                        <input type='text' id='fname' name='firstname' placeholder='Your name..' />

                        <label for='lname'>Last Name</label>
                        <input type='text' id='lname' name='lastname' placeholder='Your last name..' />

                        <label for='country'>Country</label>
                        <select id='country' name='country'>
                        <option value='turkey'>Turkey</option>
                            <option value='australia'>Australia</option>
                            <option value='canada'>Canada</option>
                            <option value='usa'>USA</option>
                        </select>

                        <label for='subject'>Subject</label>
                        <textarea id='subject' name='subject' placeholder='Write something..'></textarea>

                        <input type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;