export async function f(url, type='text', req='', meth='POST') {
    let data;

    let res = await fetch(url, {
        method: meth,
        headers: {
            'Content-Type': 'application/json'
        },
        body: req
    });

    if(res.ok) {
        if(type == 'text') {
            data = await res.text();
        }
        if(type == 'json') {
            data = await res.text();
        }
    }
    return data;
}

export function fG(url, meth='GET') {
    fetch(url, {
        method: meth,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(res => {
        return res;
    })
}