export class LocalStoragePWA
{
    constructor()
    {
    }
    
    usedLocalStorage()
    {
        const usedStorage = JSON.stringify(localStorage).length;
        const usedMB = usedStorage / (1024 * 1024);
        console.log(`Used storage: ${usedMB.toFixed(2)} MB`);
    }
}