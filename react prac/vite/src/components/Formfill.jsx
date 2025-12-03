import { useState } from "react";

function Formfill() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const validate = () => {
        const errs = {};
        if (!formData.firstName.trim()) errs.firstName = "First name is required";
        if (!formData.lastName.trim()) errs.lastName = "Last name is required";
        if (!formData.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email";
        if (formData.age && isNaN(Number(formData.age))) errs.age = "Age must be a number";
        if (!formData.password) errs.password = "Password is required";
        else if (formData.password.length < 6) errs.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) errs.confirmPassword = "Passwords do not match";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const v = validate();
        if (Object.keys(v).length) {
            setErrors(v);
            return;
        }
        setErrors({});
        setSubmitted(formData);
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            gender: "",
            address: "",
            password: "",
            confirmPassword: "",
        });
        setErrors({});
        setSubmitted(null);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} placeholder="First name" />
                    {errors.firstName && <div style={{ color: "red" }}>{errors.firstName}</div>}
                </div>

                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} placeholder="Last name" />
                    {errors.lastName && <div style={{ color: "red" }}>{errors.lastName}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                    {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input id="age" name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" min="0"
                    />
                    {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
                </div>

                <div>
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <textarea id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Street, City, Country" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}placeholder="Confirm password"/>
                    {errors.confirmPassword && <div style={{ color: "red" }}>{errors.confirmPassword}</div>}
                </div>

                <div style={{ marginTop: 10 }}>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
                        Reset
                    </button>
                </div>
            </form>

            {submitted && (
                <div style={{ marginTop: 16 }}>
                    <h3>Submitted data</h3>
                    <pre>{JSON.stringify(submitted, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Formfill;