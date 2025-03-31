document.addEventListener('DOMContentLoaded', function () {
    // Add course button functionality
    document.getElementById('add-course').addEventListener('click', addCourse);

    // Form submission handler
    document.getElementById('intro-form').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            generateIntroPage();
        }
    });

    // Reset page button
    document.getElementById('reset-page')?.addEventListener('click', function (e) {
        e.preventDefault();
        resetPage();
    });

    // Add initial delete button to the first course
    const initialDeleteBtn = document.querySelector('.delete-course');
    if (document.querySelectorAll('.course-group').length === 1) {
        initialDeleteBtn.style.display = 'none';
    }
});

function addCourse() {
    const coursesContainer = document.getElementById('courses-container');
    const courseGroup = document.createElement('div');
    courseGroup.className = 'course-group';

    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.className = 'course';
    courseInput.name = 'course[]';
    courseInput.required = true;
    courseInput.placeholder = 'e.g., MATH 1241 - Calculus I';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-course';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () { deleteCourse(this); };

    courseGroup.appendChild(courseInput);
    courseGroup.appendChild(deleteBtn);
    coursesContainer.appendChild(courseGroup);

    // Show all delete buttons if there are multiple courses
    if (document.querySelectorAll('.course-group').length > 1) {
        document.querySelectorAll('.delete-course').forEach(btn => {
            btn.style.display = 'inline-block';
        });
    }
}

function deleteCourse(button) {
    const courseGroup = button.parentElement;
    courseGroup.remove();

    // Hide delete button if only one course remains
    if (document.querySelectorAll('.course-group').length === 1) {
        document.querySelector('.delete-course').style.display = 'none';
    }
}

function validateForm() {
    const form = document.getElementById('intro-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    // Check all required fields
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = '';
        }
    });

    // Check file type if image is uploaded
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('Please upload a JPG or PNG image file.');
            isValid = false;
        }
    }

    // Check agreement checkbox
    if (!document.getElementById('agree').checked) {
        alert('You must agree to the terms before submitting.');
        isValid = false;
    }

    return isValid;
}

function generateIntroPage() {
    const form = document.getElementById('intro-form');
    const resultContainer = document.getElementById('result-container');
    const formContainer = document.getElementById('form-container');

    // Hide form, show result
    formContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    // Get all form values
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageCaption = document.getElementById('image-caption').value;
    const personalBg = document.getElementById('personal-bg').value;
    const professionalBg = document.getElementById('professional-bg').value;
    const academicBg = document.getElementById('academic-bg').value;
    const webBg = document.getElementById('web-bg').value;
    const platform = document.getElementById('platform').value;
    const funnyThing = document.getElementById('funny-thing').value;
    const anythingElse = document.getElementById('anything-else').value;

    // Get courses
    const courses = Array.from(document.querySelectorAll('.course')).map(course => course.value);

    // Get image (if uploaded)
    const imageInput = document.getElementById('image');
    let imageHtml = '';
    if (imageInput.files.length > 0) {
        const imageUrl = URL.createObjectURL(imageInput.files[0]);
        imageHtml = `<figure>
            <img src="${imageUrl}" alt="${name}">
            <figcaption>${imageCaption}</figcaption>
        </figure>`;
    }

    // Generate HTML for the intro page
    resultContainer.innerHTML = `
        <h3>${name} ☆ ${mascot}</h3>
        ${imageHtml}
        <ul>
            <li><strong>Personal Background:</strong> ${personalBg}</li>
            <li><strong>Professional Background:</strong> ${professionalBg}</li>
            <li><strong>Academic Background:</strong> ${academicBg}</li>
            <li><strong>Background in Web Development:</strong> ${webBg}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses I'm Taking:</strong>
                <ul>
                    ${courses.map(course => `<li><strong>${course}:</strong> ${course.includes('-') ? course.split('-')[1].trim() : 'No description provided'}</li>`).join('')}
                </ul>
            </li>
            ${funnyThing ? `<li><strong>Funny thing?</strong> ${funnyThing}</li>` : ''}
            ${anythingElse ? `<li><strong>Anything else?</strong> ${anythingElse}</li>` : ''}
        </ul>
        <a href="#" id="reset-page" class="reset-link">Reset and Create Another Intro</a>
    `;

    // Re-attach event listener to reset button
    document.getElementById('reset-page').addEventListener('click', function (e) {
        e.preventDefault();
        resetPage();
    });
}

function resetPage() {
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result-container');

    // Show form, hide result
    formContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    // Reset form
    document.getElementById('intro-form').reset();

    // Reset courses to just one
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = `
        <div class="course-group">
            <input type="text" class="course" name="course[]" required value="ITIS 3135 - Web App Design and Development">
            <button type="button" class="delete-course" onclick="deleteCourse(this)" style="display: none;">Delete</button>
        </div>
    `;
}