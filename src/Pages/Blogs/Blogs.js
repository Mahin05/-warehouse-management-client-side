import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='q-n-a container mt-4'>
            <h2>Blogs</h2>
            <p className='mt-5'>Question-1: What is the Difference between javascript and nodejs?</p>
            <p>Answer:</p>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Javascript</th>
                        <th>NodeJS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                        <td>NodeJS is a Javascript runtime environment.
                        </td>
                    </tr>
                    <tr>
                        <td>Javascript can only be run in the browsers.</td>
                        <td>We can run Javascript outside the browser with the help of NodeJS.
                        </td>
                    </tr>
                    <tr>
                        <td>It is basically used on the client-side.</td>
                        <td>It is mostly used on the server-side.</td>
                    </tr>
                    <tr>
                        <td>Javascript is capable enough to add HTML and play with the DOM.
                        </td>
                        <td>Nodejs does not have capability to add HTML tags.</td>
                    </tr>
                    <tr>
                        <td>Javascript is used in frontend development.
                        </td>
                        <td>Nodejs is used in server-side development.</td>
                    </tr>
                </tbody>
            </Table>
            <p className='mt-5'>Question-2: When should you use nodejs and when should you use mongodb?</p>
            <p>Answer:</p>
            <p>NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development. But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data. The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            <p className='mt-5'>Question-3: What is the Differences between sql and nosql databases?</p>
            <p>Answer:</p>
            <Table bordered>
                <thead>
                    <tr>
                        <th>SQL</th>
                        <th>NoSQL
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                        <td>Non-relational or distributed database system.
                        </td>
                    </tr>
                    <tr>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema
                        </td>
                    </tr>
                    <tr>
                        <td>These databases are not suited for hierarchical data storage.</td>
                        <td>These databases are best suited for hierarchical data storage.</td>
                    </tr>
                    <tr>
                        <td>These databases are best suited for complex queries
                        </td>
                        <td>These databases are not so good for complex queries</td>
                    </tr>
                    <tr>
                        <td>Vertically Scalable
                        </td>
                        <td>Horizontally scalable</td>
                    </tr>
                </tbody>
            </Table>
            <p className='mt-5'>Question-4: What is the purpose of jwt and how does it work?</p>
            <p>Answer:</p>
            <p>JWT are mainly used for authentication. After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access. JWT can be easily used across multiple domains so they are often used for Single Sign On. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
        </div>
    );
};

export default Blogs;