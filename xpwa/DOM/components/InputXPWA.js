export class InputXPWA extends HTMLElement
{
    constructor()
    {
        super();
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.innerHTML = '<input type="text">';

        this.inp = this.querySelector('input');
        this.inp.addEventListener('input', this.listener(e));
        this.inp.addEventListener('keydown', this.keyDown(e));
        this.currentFocus;
        document.addEventListener("click", function (e) {
            this.closeAllLists(e.target);
        });
    }
    
    static get observedAttributes()
    {
        return [];
    }

    listener(e)
    {
        let a, b, i, val = this.value;

        this.closeAllLists();
        if (!val) { return false;}
        this.currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for(i = 0; i < arr.length; i++)
        {
            if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase())
            {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    this.closeAllLists();
                });
                a.appendChild(b);
            }
        }
    }

    keyDown(e)
    {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40)
        {
          this.currentFocus++;
          this.addActive(x);
        } else if (e.keyCode == 38) { 
          this.currentFocus--;
          this.addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if(this.currentFocus > -1)
          {
            if(x) x[this.currentFocus].click();
          }
        }
    }

    addActive(x)
    {
        if(!x) return false;

        this.removeActive(x);
        if(this.currentFocus >= x.length) this.currentFocus = 0;
        if(this.currentFocus < 0) this.currentFocus = (x.length - 1);
        x[this.currentFocus].classList.add("autocomplete-active");
    }

    removeActive(x)
    {
        for(var i = 0; i < x.length; i++)
        {
        x[i].classList.remove("autocomplete-active");
        }
    }

    closeAllLists(elmnt)
    {
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        }
        }
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch(name)
        {
            case '':
            break;
        }
    }
}

customElements.define("input-xpwa", InputXPWA);