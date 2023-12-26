export class PhoneXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<a href="#">
      <?xml version="1.0" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
      "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
      preserveAspectRatio="xMidYMid meet">
      
      <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
      fill="var(--color-theme)" stroke="none">
      <path d="M245 631 c-92 -24 -173 -90 -215 -176 -33 -69 -34 -199 -2 -265 35
      -71 75 -114 144 -151 58 -31 70 -34 148 -33 72 0 93 4 136 26 75 40 107 70
      145 140 31 58 34 70 34 148 0 78 -3 90 -34 148 -57 104 -144 160 -260 167 -36
      2 -79 1 -96 -4z m-1 -161 l36 -40 -21 -29 c-28 -37 -20 -58 41 -115 55 -52 66
      -55 103 -26 l26 21 41 -37 c46 -41 49 -58 18 -91 -49 -52 -154 -18 -256 83
      -97 97 -130 198 -80 251 30 33 50 29 92 -17z"/>
      </g>
      </svg>    
    </a>`;
  }

  static get observedAttributes()
  {
    return ['phone'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'phone':
          this.querySelector('a').href = 'tel:'+newValue;
        break;
    }
  }
}

customElements.define("phone-x", PhoneXPWA);
