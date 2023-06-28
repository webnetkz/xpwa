export class RequestPWA
{
    static async request(options = {
        url: './', 
        method: 'GET', 
        headers: { "Access-Control-Allow-Origin": "*", },
        mode: 'cors',
        data: {},
        json: false,
    })
    {
      try {
          const response = await fetch(options.url, {
              method: options.method,
              headers: options.headers,
              mode: options.mode,
        });
    
        if(!response.ok) { throw new Error('Network response was not ok'); }
        
        return response.text();

      } catch (error) {
        throw error;
      }
    }

    static async setLocalStorage(url, table_name='tmp')
    {
        localStorage.setItem(this.request(url), table_name);
    }
}