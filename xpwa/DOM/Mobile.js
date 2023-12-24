class Mobile {
    isMobile() {
        if(window.innerWidth <= 1200) {
            return true;
        }
        return false;
    }
}

window.MOBILE = new Mobile();

