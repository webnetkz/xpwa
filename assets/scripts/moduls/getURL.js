export function getURL(parameterName)
{
    var url = new URL(window.location.href);
    var parameterValue = url.searchParams.get(parameterName);
    return parameterValue;
}
  