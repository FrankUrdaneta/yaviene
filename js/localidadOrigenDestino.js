//traer localidades
fetch("./js/localidades.json")
.then((a) => a.json())
.then((data) => {
  console.log(data.data.localidades);
    let localidades_cordoba=data.data.localidades;
  

  



        function autocomplete(inp, arr) {
          /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
          var currentFocus;
          /*execute a function when someone writes in the text field:*/
          inp.addEventListener("input", function (e) {
            var a,
              b,
              i,
              val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) {
              return false;
            }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (
                arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
              ) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML =
                  "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
                  closeAllLists();
                });
                a.appendChild(b);
              }
            }
          });
          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) {
              //up
              /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
          });
          function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = x.length - 1;
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
          }
          function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
              x[i].classList.remove("autocomplete-active");
            }
          }
          function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
              if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
              }
            }
          }
          /*execute a function when someone clicks in the document:*/
          document.addEventListener("click", function (e) {
            closeAllLists(e.target);
          });
        }

        /*An array containing all the country names in the world:*/
        var countries = [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua & Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia & Herzegovina",
          "Botswana",
          "Brazil",
          "British Virgin Islands",
          "Brunei",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central Arfrican Republic",
          "Chad",
          "Chile",
          "China",
          "Colombia",
          "Congo",
          "Cook Islands",
          "Costa Rica",
          "Cote D Ivoire",
          "Croatia",
          "Cuba",
          "Curacao",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Polynesia",
          "French West Indies",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kiribati",
          "Kosovo",
          "Kuwait",
          "Kyrgyzstan",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macau",
          "Macedonia",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Marshall Islands",
          "Mauritania",
          "Mauritius",
          "Mexico",
          "Micronesia",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar",
          "Namibia",
          "Nauro",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "North Korea",
          "Norway",
          "Oman",
          "Pakistan",
          "Palau",
          "Palestine",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russia",
          "Rwanda",
          "Saint Pierre & Miquelon",
          "Samoa",
          "San Marino",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Korea",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "St Kitts & Nevis",
          "St Lucia",
          "St Vincent",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Timor L'Este",
          "Togo",
          "Tonga",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks & Caicos",
          "Tuvalu",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States of America",
          "Uruguay",
          "Uzbekistan",
          "Vanuatu",
          "Vatican City",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ];

        /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
        autocomplete(document.getElementById("inputOrigen"), localidades_cordoba);
        autocomplete(document.getElementById("inputDestino"), localidades_cordoba);
    });

        // Armar cuerpo de boleto
        fetch("./js/boleto.json")
          .then((a) => a.json())
          .then((data) => {
            let boletos = data.data.boletos;
            function mostrarBoleto() {
              let pruebaBoleto = document.getElementById("cambiarBusqueda");

              pruebaBoleto.addEventListener("click", function () {
                let dibujarBoleto = document.getElementById("pruebaBoleto");

                for (let i of boletos) {
                  console.log(i);
                  dibujarBoleto.innerHTML += `
                <div
        class="card-group col-lg-7 col-xl-7 col-md-12 col-sm-12 p-3 mb-5 bg-body boleto"
      >
        <div class="card">
          <div class="card-body">
            <img
              class="card-img-top logoPasajes"
              src=${i.logo}
              alt="Card image cap"
            />
            <p class="card-text pasaje" style="font-size: small">
              Por Empresa:
              <spam class="font-weight-bold" style="color: #009ee2"
                >${i.empresa}</spam
              >
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h6 class="card-title font-weight-bold">
              <i
                class="icon fa fa-dot-circle-o"
                style="color: black"
                aria-hidden="true"
              ></i>
              Sale
              <spam
                class="card-text pasaje"
                style="color: black; font-size: small"
                >${i.sale} </spam
              ><span
                class="card-text pasaje"
                style="color: rgb(150, 148, 148); font-size: small"
                >aproximado <br /></span
              ><span
                class="card-text pasaje"
                style="color: rgb(8, 8, 8); font-size: small"
                >Se anuncia a: ${i.anuncia}</span
              >
            </h6>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h6 class="card-text font-weight-bold">
              <i
                class="icon fa fa-map-marker"
                style="color: black"
                aria-hidden="true"
              ></i>
              Llega
              <span
                class="card-text pasaje"
                style="color: black; font-size: small"
                >${i.llega} <br />
              </span>
              <span
                class="card-text pasaje"
                style="color: rgb(150, 148, 148); font-size: small"
                >duracion ${i.duracion} </span
              ><span
                class="card-text pasaje"
                style="color: rgb(12, 12, 12); font-size: small"
                >Servicio ${i.servicio} - Coche ${i.coche}</span
              >
            </h6>
          </div>
        </div>

        <div class="card price">
          <!-- <h5 class="card-title text-white font-weight-bold mb-0">$ 11.500,00</h5>
            <i class="icon bi bi-person" style="color: white;"></i><span style="color: white; font-size: medium;">1.Ida</span> -->
          <a id="verRuta" href="#" class="cta">
            <i class="icon bi bi-search" style="color: black"></i>
            <span>ver ruta</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
                `;
                }
              });
            }
            mostrarBoleto();
          });
     