function nDialogo(configuracion={}) {
    this.configuracion = configuracion;
    this.e = null;
    this.fg = null;
    
    const creaFondoGris = ()=>{
        const fondoGris = document.createElement('div');
        this.fg = fondoGris;
        fondoGris.style.position = 'fixed';
        fondoGris.style.top = '0px';
        fondoGris.style.left = '0px';
        fondoGris.style.width = '100%';
        fondoGris.style.height = window.innerHeight + 'px';
        fondoGris.style.backgroundColor = 'rgba(0,0,0,0.5)';
        if (this.configuracion.backgroundCloseable) {
            fondoGris.addEventListener('click', () => {
                this.cerrar();
            });
        }
        document.body.appendChild(fondoGris);
    }

    this.open = (body) => {
        if (typeof(body) === 'string') {
            this.configuracion.body = body;
        }
        this.close();
        if (this.e == null) {
            const dialogo = document.createElement('div');
            dialogo.classList.add('nDialogo');
            this.e = dialogo;
            const dialogoBody = document.createElement('div');
            dialogoBody.classList.add('nDialogoBody');
            const dialogoTitle = document.createElement('div');
            dialogoTitle.classList.add('nDialogoTitle');
            if(this.configuracion.title){
                
                dialogoTitle.innerHTML = this.configuracion.title;
                dialogoTitle.addEventListener('mousedown', (e) => {
                    const dialogo = e.target.parentElement;
                    const dialogoBody = dialogo.children[1];
                    const dialogoTitle = dialogo.children[0];
                    const x = e.clientX - dialogo.offsetLeft;
                    const y = e.clientY - dialogo.offsetTop;
                    const move = (e) => {
                        const posx = e.clientX - x;
                        const posy = e.clientY - y;
                        if(posx < 0 + dialogo.offsetWidth /2 ) {
                            dialogo.style.left = dialogo.offsetWidth/2 + 'px';
                        }else{
                            dialogo.style.left = posx + 'px';
                        }
                        if(posy < 0 + dialogo.offsetHeight / 2) {
                            dialogo.style.top = dialogo.offsetHeight/2 + 'px';
                        }else{
                            dialogo.style.top = posy + 'px';
                        }

                        if(posx > window.innerWidth - dialogo.offsetWidth /2 ) {
                            dialogo.style.left = window.innerWidth - dialogo.offsetWidth/2 + 'px';
                        }
                        if(posy > window.innerHeight - dialogo.offsetHeight /2) {
                            dialogo.style.top = window.innerHeight - dialogo.offsetHeight/2 + 'px';
                        }

                    }
                    document.addEventListener('mousemove', move);
                    dialogo.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', move);
                    });
                });
            }
            
            dialogoBody.innerHTML = this.configuracion.body;
            if (this.configuracion.btnClose){
                const cerrarBtn = document.createElement('button');
                cerrarBtn.classList.add('nDialogoBtnClose');
                
                //cerrarBtn.innerHTML = 'x';
                cerrarBtn.addEventListener('click', () => {
                    //dialogo.remove();
                    this.cerrar();
                });
                dialogo.appendChild(cerrarBtn);
            }
           
            if(this.configuracion.title != null){
                dialogo.appendChild(dialogoTitle);
            }
            dialogo.appendChild(dialogoBody);
            
            if(this.configuracion.height) {
                dialogo.style.height = this.configuracion.height;
            }
            if(this.configuracion.width) {
                dialogo.style.width = this.configuracion.width;
            }

            if(this.configuracion.zIndex) {
                dialogo.style.zIndex = this.configuracion.zIndex;
            }

            dialogo.style.top = (window.innerHeight - dialogo.offsetHeight) / 2 + 'px';           
            
            if (this.configuracion.background){
                
                creaFondoGris();
            }


            // escuchar click fuera del dialogo
            document.body.appendChild(dialogo);
            // obtiene el ancho del dialogo
            const ancho = dialogo.offsetWidth;
            dialogo.style.width = ancho + 'px';
        }
    }

    this.cerrar = () => {
        //document.querySelector('.nDialogo').remove();
        this.e.remove();
        this.e = null;
        if (this.fg){
            this.fg.remove();
        }
    }

    this.close = () => {
        //document.querySelector('.nDialogo').remove();
        if(this.e){
            this.e.remove();
            this.e = null;
            if (this.fg){
                this.fg.remove();
            }
        }
        
    }

    this.setConfiguration = (configuracion) => {
        this.configuracion = configuracion;
    }
    
    this.setBody = (body) => {
        this.configuracion.body = body;
    }

    this.setTitle = (title) => {
        this.configuracion.title = title;
    }
}