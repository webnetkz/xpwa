export class URLXPWA
{
    constructor()
    {
    }

    href(url)
    {
        window.location.href = url;
    }

    getParametr(parameterName='id')
    {
        const url = new URL(window.location.href);
        return url.searchParams.get(parameterName);
    }
}
