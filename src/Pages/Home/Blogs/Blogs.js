import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='q-n-a container mt-4'>
            <h2>Blogs</h2>
            <p className='mt-5'>Question-1: What is the differences between authorization and authentication?</p>
            <p>Answer:</p>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Authorization</th>
                        <th>Authentication</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Authentication verifies who the user is.</td>
                        <td>Authorization determines what resources a user can access.
                        </td>
                    </tr>
                    <tr>
                        <td>Authentication is the first step of a good identity and access management process.</td>
                        <td>Authorization always takes place after authentication.
                        </td>
                    </tr>
                    <tr>
                        <td>While in this process, users or persons are validated.</td>
                        <td>In authentication process, users or persons are verified.</td>
                    </tr>
                    <tr>
                        <td>While it needs user's privilege or security levels.
                        </td>
                        <td>It needs usually user's login details.</td>
                    </tr>
                    <tr>
                        <td>Users can't change it
                        </td>
                        <td>It is Partially changeable by the user</td>
                    </tr>
                </tbody>
            </Table>
            <p className='mt-5'>Question-2: Why are you using firebase? What other options do you have to implement authentication?</p>
            <p>Answer:</p>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />  It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
            <p className='mt-5'>Question-3: What other services does firebase provide other than authentication?</p>
            <p>Answer:</p>
            <p>Tother services does firebase provide other than authentication are: <br />
            <li>Cloud Firestore</li> 
            <li>Cloud Functions</li> 
            <li>Hosting</li> 
            <li>Cloud Storage</li> 
            <li>Cloud Messaging</li> </p>
        </div>
    );
};

export default Blogs;