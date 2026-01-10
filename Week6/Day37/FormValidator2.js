import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function FormValidator2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      console.log("Event Registration Form Submitted:", data);
      // Add API call or further processing here
      setSuccessMessage("Registration successful!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Event Registration</h2>
      {successMessage && <span className="success-message">{successMessage}</span>}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field with Required Validation */}
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            type="text"
            {...register("name", {
              required: "Name is required", 
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters", 
              },
            })}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        {/* Email Field with Required and Email Format Validation */}
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            {...register("email", {
              required: "Email is required", 
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email format is invalid", 
              },
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        {/* Event Date Field with Date Format Validation */}
        <div className="form-group">
          <label className="form-label">Event Date:</label>
          <input
            className="form-input"
            type="date"
            {...register("eventDate", {
              required: "Event date is required", 
              validate: (value) => {
                const today = new Date().toISOString().split("T")[0];
                return value >= today || "Event date cannot be in the past";
              },
            })}
          />
          {errors.eventDate && (
            <span className="error-message">{errors.eventDate.message}</span>
          )}
        </div>

        {/* Age Field with Range Validation */}
        <div className="form-group">
          <label className="form-label">Age:</label>
          <input
            className="form-input"
            type="number"
            {...register("age", {
              required: "Age is required", 
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
              max: {
                value: 100,
                message: "Age must be less than 100",
              },
            })}
          />
          {errors.age && (
            <span className="error-message">{errors.age.message}</span>
          )}
        </div>

        {/* Phone Number Field with Custom Validation */}
        <div className="form-group">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-input"
            type="text"
            {...register("phone", {
              required: "Phone number is required", 
              pattern: {
                value: /^[0-9]{10}$/, 
                message: "Phone number must be 10 digits",
              },
            })}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>

        {/* Number of Tickets Field with Custom Validation */}
        <div className="form-group">
          <label className="form-label">Number of Tickets:</label>
          <input
            className="form-input"
            type="number"
            {...register("tickets", {
              required: "Number of tickets is required", 
              min: {
                value: 1,
                message: "At least 1 ticket should be selected",
              },
              max: {
                value: 10,
                message: "You can purchase up to 10 tickets only",
              },
            })}
          />
          {errors.tickets && (
            <span className="error-message">{errors.tickets.message}</span>
          )}
        </div>

        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default FormValidator2;