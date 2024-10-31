// Get references to the form and display area with null checks and assertions
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // prevent page reload

        // Collect input values with type assertions for HTML elements
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value || "";
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value || "";
        const phone = (document.getElementById('phone') as HTMLInputElement | null)?.value || "";
        const education = (document.getElementById('education') as HTMLTextAreaElement | null)?.value || "";
        const experience = (document.getElementById('experience') as HTMLTextAreaElement | null)?.value || "";
        const skills = (document.getElementById('skills') as HTMLTextAreaElement | null)?.value || "";

        // Debugging logs to check if form values are captured
        console.log("Form Submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Education:", education);
        console.log("Experience:", experience);
        console.log("Skills:", skills);

        // Generate the resume content dynamically
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume and log to check if it's executed
        console.log("Generated Resume HTML:", resumeHTML);
        resumeDisplayElement.innerHTML = resumeHTML;
    });
} else {
    console.error('The form or resume display element is missing.');
}


