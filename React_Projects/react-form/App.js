// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import "./App.css";
import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] =
        useState("");
    const [about, setAbout] = useState("");

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        resume: "",
        url: "",
        about: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log(
                firstName,
                lastName,
                email,
                contact,
                gender,
                selectedOption,
                subjects,
                resume,
                url,
                about
            );
            // Add your form submission logic here
        }
    };

    const validateForm = () => {
        let isValid = true;
        const errorsCopy = { ...errors };

        if (!firstName.trim()) {
            errorsCopy.firstName = "First name is required";
            isValid = false;
        } else {
            errorsCopy.firstName = "";
        }

        if (!lastName.trim()) {
            errorsCopy.lastName = "Last name is required";
            isValid = false;
        } else {
            errorsCopy.lastName = "";
        }

        if (!email.trim()) {
            errorsCopy.email = "Email is required";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            errorsCopy.email = "Invalid email format";
            isValid = false;
        } else {
            errorsCopy.email = "";
        }

        if (!contact.trim()) {
            errorsCopy.contact = "Contact number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(contact)) {
            errorsCopy.contact = "Invalid contact number";
            isValid = false;
        } else {
            errorsCopy.contact = "";
        }

        if (!resume) {
            errorsCopy.resume = "Resume is required";
            isValid = false;
        } else {
            errorsCopy.resume = "";
        }

        if (!url.trim()) {
            errorsCopy.url = "URL is required";
            isValid = false;
        } else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url)) {
            errorsCopy.url = "Invalid URL format";
            isValid = false;
        } else {
            errorsCopy.url = "";
        }

        if (!about.trim()) {
            errorsCopy.about = "About is required";
            isValid = false;
        } else {
            errorsCopy.about = "";
        }

        setErrors(errorsCopy);
        return isValid;
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };
    const handleReset = () => {
        // Reset all state variables here
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setErrors({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            resume: "",
            url: "",
            about: "",
        });
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstname">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && (
                        <p className="error">{errors.firstName}</p>
                    )}
                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                    />
                    {errors.lastName && (
                        <p className="error">{errors.lastName}</p>
                    )}
                    <label htmlFor="email">Enter Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter email"
                    />
                    {errors.email && (
                        <p className="error">{errors.email}</p>
                    )}
                    <label htmlFor="tel">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) =>
                            setContact(e.target.value)
                        }
                        placeholder="Enter Mobile number"
                    />
                    {errors.contact && (
                        <p className="error">{errors.contact}</p>
                    )}
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Other
                    <label htmlFor="lang">
                        Your best Subject
                    </label>
                    <input
                        type="checkbox"
                        name="lang"
                        id="english"
                        checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
                    />
                    English
                    <input
                        type="checkbox"
                        name="lang"
                        id="maths"
                        checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
                    />
                    Maths
                    <input
                        type="checkbox"
                        name="lang"
                        id="physics"
                        checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
                    />
                    Physics
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder="Enter Upload File"
                    />
                    {errors.resume && (
                        <p className="error">{errors.resume}</p>
                    )}
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        onChange={(e) =>
                            setUrl(e.target.value)
                        }
                        placeholder="Enter url"
                    />
                    {errors.url && (
                        <p className="error">{errors.url}</p>
                    )}
                    <label>Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                    >
                        <option
                            value=""
                            disabled
                            selected={selectedOption === ""}
                        >
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">
                                Express
                            </option>
                            <option value="t">
                                MongoDB
                            </option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"
                    ></textarea>
                    {errors.about && (
                        <p className="error">{errors.about}</p>
                    )}
                    <button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default App;