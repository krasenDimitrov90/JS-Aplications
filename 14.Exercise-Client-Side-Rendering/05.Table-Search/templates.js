import { html } from 'https://unpkg.com/lit-html?module';


export const tableTemplate = (studentsData) => html`
    ${studentsData.map(s => html`
            <tr id=${s._id} class=${s.active == true ? "select" : ""}>
                <td>${s.firstName} ${s.lastName}</td>
                <td>j${s.email}</td>
                <td>${s.course}</td>
            </tr>
        `)}
`;