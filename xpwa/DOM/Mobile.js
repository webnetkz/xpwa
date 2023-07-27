export class Mobile {
    static isMobile() {
        if(window.innerWidth <= 1200)
        {
            return true;
        }

        return false;
    }
}
