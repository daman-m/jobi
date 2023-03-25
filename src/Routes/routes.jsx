
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import SingleJob from "./SingleJob";
import JobList from "./JobList";


// EXPORTING ROUTES

export const ROOT = "/";
export const JOBLIST = "/joblist";
export const JOB = "/joblist/job";
export const ERROR ="*";


// CREATING THE BROWSER ROUTER

//These are the actual route elements that the browser router will use, each element consists of a path and element. The path is the string from above, while the element is the appropriate React component.

export const router = createBrowserRouter([
    {path: ROOT, element: <HomePage />},
    {path: JOBLIST, element: <JobList />, children: [
        {path: JOB, element: <SingleJob />}
         ]}

]);
