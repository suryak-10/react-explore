
async function fetchHTML(url) {
    try {
        const response = await fetch(url); // Make a fetch request to the URL
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-OK responses
        }
        const html = await response.text(); // Parse the response as text (HTML)
        return html; // Return the HTML
    } catch (error) {
        console.error('Error fetching HTML:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}

const getCompanyInfo = (html) => {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    const website = [...dom.querySelectorAll('.m-exhibitor-entry__item__body__contacts a')].find(a => a.textContent.trim() == "Visit website")?.href;
    const name = dom.querySelector('.m-exhibitor-entry__item__header__infos__title')?.textContent.trim();
    const addressEl = dom.querySelector(`.m-exhibitor-entry__item__body__contacts__address`)?.cloneNode(true);
    if (addressEl) {
        addressEl.querySelector('h4')?.remove();
    }
    const address = addressEl?.textContent.trim().replace(/[\t\n]/g, '');
    console.log({ website, name, address });
    return { website, name, address };
}

let home = {};
const getThisPageInfo = () => {
    let data = [];
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page') ?? 1;
    const list = document.querySelector('ul.js-library-list.m-exhibitors-list__items');
    const items = [...list.querySelectorAll(`li`)];

    console.log(`total: ${items.length}`);

    const companies = Promise.all(items.map((item, index) => {
        const company = item.querySelector('h2').textContent.trim();
        const link = item.querySelector('a').href;
        data[index] = false;
        return fetchHTML(link).then(html => {
            console.log(`index: ${index + 1}`);
            const result = { ...getCompanyInfo(html), link };
            data[index] = result;
            return result;
        })
    }))
    console.log(companies);
    home[page] = data;
    return companies;
}


getThisPageInfo();