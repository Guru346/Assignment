function submitForm() {
    const form = document.getElementById('surveyForm');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    if (form.checkValidity()) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const country = document.getElementById('country').value;
        const gender = document.getElementById('country').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const content = `
            <div><b>First Name:</b> ${firstName}</div>
            <div><b>Last Name:</b> ${lastName}</div>
            <div><b>Date of Birth:</b> ${dob}</div>
            <div><b>Country:</b> ${country}</div>
            <div><b>Gender:</b> ${gender}</div>
            <div><b>Profession:</b> ${profession}</div>
            <div><b>Email:</b> ${email}</div>
            <div><b>Mobile Number:</b> ${mobile}</div>
        `;

        popupContent.innerHTML = content;
        popup.style.display = 'block';

    
        form.reset();
    } else {
        alert('Please fill out all required fields.');
    }
}

function resetForm() {
    const form = document.getElementById('surveyForm');
    form.reset();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
