const nomnieeform = document.getElementById('nomnieeform');

// Input fields
const nomnieename = document.getElementById('nomnieename');
const dob = document.getElementById('dob');
const doc_proof = document.getElementById('documentproof');
const doc_num = document.getElementById('docnum');
const share = document.getElementById('shareper');
const relationship = document.getElementById('relationship');
const add1 = document.getElementById('address1');
const add2 = document.getElementById('address2');
const pincode = document.getElementById('pincode');
const state = document.getElementById('state');
const city = document.getElementById('city');

nomnieeform.addEventListener('submit', (event) => {
    event.preventDefault();

    // Error elements
    const nameerr = document.getElementById('name_error');
    const doberr = document.getElementById('dob_error');
    const docerr = document.getElementById('doc_error');
    const docnumerr = document.getElementById('docnum_error');
    const shareerr = document.getElementById('share_error');
    const relationerr = document.getElementById('relation_error');
    const add1err = document.getElementById('addrress1_error');
    const add2err = document.getElementById('addrress2_error');
    const pincodeerr = document.getElementById('pincode_error');
    const stateerr = document.getElementById('state_error');
    const cityerr = document.getElementById('city_error');

    // Clear previous error messages
    nameerr.textContent = '';
    doberr.textContent = '';
    docerr.textContent = '';
    docnumerr.textContent = '';
    shareerr.textContent = '';
    relationerr.textContent = '';
    add1err.textContent = '';
    add2err.textContent = '';
    pincodeerr.textContent = '';
    stateerr.textContent = '';
    cityerr.textContent = '';

    let isValid = true;

    // Validation
    if (nomnieename.value === '') {
        nameerr.textContent = 'Nominee name is required!';
        isValid = false;
    }

    if (dob.value === '') {
        doberr.textContent = 'Date of Birth is required!';
        isValid = false;
    }

    if (doc_proof.value === 'none') {
        docerr.textContent = 'Please select document proof!';
        isValid = false;
    }

    if (doc_num.value === '') {
        docnumerr.textContent = 'Document number is required!';
        isValid = false;
    }

    if (share.value === '') {
        shareerr.textContent = 'Share is required!';
        isValid = false;
    }

    if (relationship.value === 'none') {
        relationerr.textContent = 'Relationship is required!';
        isValid = false;
    }

    if (add1.value === '') {
        add1err.textContent = 'Address Line 1 is required!';
        isValid = false;
    }

    if (add2.value === '') {
        add2err.textContent = 'Address Line 2 is required!';
        isValid = false;
    }

    if (pincode.value === '') {
        pincodeerr.textContent = 'Pincode is required!';
        isValid = false;
    }

    if (state.value === '') {
        stateerr.textContent = 'State is required!';
        isValid = false;
    }

    if (city.value === '') {
        cityerr.textContent = 'City is required!';
        isValid = false;
    }

    // If all inputs are valid, proceed further (e.g., submit the form data)
    if (isValid) {
        alert('Form submitted successfully!');
        // Add form submission logic here
    }
});
