


export const createSubmitHandler = (ctx, handler) => {
    return (e) => {
        e.preventDefault();

        const inputElements = e.target.querySelectorAll('input');
        const data = Object.fromEntries(new FormData(e.currentTarget));

        refreshInputFields(inputElements);

        if (Object.values(data).some(x => x === '')) {

            colorTheEmptyFields(inputElements);
            return alert("All fields must be filled");
        }

        handler(ctx, data);
    }
}


const refreshInputFields = (inputs) => {
    inputs.forEach(i => {

        if (i.type !== 'submit') {
            i.style.border = 'none';
        }
    })
}


const colorTheEmptyFields = (inputs) => {
    inputs.forEach(i => {

        if (i.type !== 'submit' && i.value === '') {
            i.setAttribute("style", "border: 4px solid red");
        }
    })
}