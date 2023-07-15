export class URLXPWA
{
    static redirect(url)
    {
        window.location.href = url;
    }

    static getParametr(parameterName='id')
    {
        const url = new URL(window.location.href);
        return url.searchParams.get(parameterName);
    }
}
