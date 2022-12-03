function nDialogo(configuracion={}) {
    this.configuracion = {};
    if (configuracion.title !== null && configuracion.title !== undefined) {
        this.configuracion.title = configuracion.title.toString();
    }

    if (configuracion.body !== null && configuracion.body !== undefined) {
        if ((configuracion.body) instanceof HTMLElement){
            this.configuracion.body = configuracion.body;
        } else {
            this.configuracion.body = configuracion.body.toString();
        }
    }
    if (configuracion.btnClose !== null && configuracion.btnClose !== undefined) {
        this.configuracion.btnClose = configuracion.btnClose;
    }
    if (configuracion.width !== null && configuracion.width !== undefined) {
        this.configuracion.width = configuracion.width.toString();
    }
    if (configuracion.height !== null && configuracion.height !== undefined) {
        this.configuracion.height = configuracion.height.toString();
    }
    if (configuracion.top !== null && configuracion.top !== undefined) {
        this.configuracion.top = configuracion.top.toString();
    }
    if (configuracion.zIndex !== null && configuracion.zIndex !== undefined) {
        this.configuracion.zIndex = configuracion.zIndex;
    }
    if (configuracion.background !== null && configuracion.background !== undefined) {
        this.configuracion.background = configuracion.background;
    }
    if (configuracion.backgroundCloseable !== null && configuracion.backgroundCloseable !== undefined) {
        this.configuracion.backgroundCloseable = configuracion.backgroundCloseable;
    }

    
    this.e = null;
    this.fg = null;
    this.ntop = null;
    this.nleft = null;
    
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
        if(this.configuracion.zIndex) {
            fondoGris.style.zIndex = this.configuracion.zIndex;
        }
        document.body.appendChild(fondoGris);
    }

    this.open = (body) => {
        // console.log(this.configuracion.body);
        // if ((this.configuracion.body) instanceof HTMLElement) {
            
        //     this.configuracion.body.style.display = 'block';
        // } else {
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

                const arrastrar = e=>{
                    const dialogo = e.target.parentElement;
                    const dialogoBody = dialogo.children[1];
                    const dialogoTitle = dialogo.children[0];
                    
                    if (e.touches){
                        x = e.touches[0].clientX - dialogo.offsetLeft;
                        y = e.touches[0].clientY - dialogo.offsetTop;
                    } else {
                        x = e.clientX - dialogo.offsetLeft;
                        y = e.clientY - dialogo.offsetTop;
                    }
                    
                    
                    const move = (e) => {
                        if (e.touches){
                            posx = e.touches[0].clientX - x;
                            posy = e.touches[0].clientY - y;
                        } else {
                            posx = e.clientX - x;
                            posy = e.clientY - y;
                        }
                        
                        if(posx < 0 + dialogo.offsetWidth /2 ) {
                            dialogo.style.left = dialogo.offsetWidth/2 + 'px';
                            //this.nleft = dialogo.offsetWidth/2;
                        }else{
                            dialogo.style.left = posx + 'px';
                            //this.nleft = posx;
                        }
                        if(posy < 0 + dialogo.offsetHeight / 2) {
                            dialogo.style.top = dialogo.offsetHeight/2 + 'px';
                            //this.ntop = dialogo.offsetHeight/2;
                        }else{
                            dialogo.style.top = posy + 'px';
                            //this.ntop = posy;
                        }

                        if(posx > window.innerWidth - dialogo.offsetWidth /2 ) {
                            dialogo.style.left = window.innerWidth - dialogo.offsetWidth/2 + 'px';
                            //this.nleft = window.innerWidth - dialogo.offsetWidth/2;
                        }
                        if(posy > window.innerHeight - dialogo.offsetHeight /2) {
                            dialogo.style.top = window.innerHeight - dialogo.offsetHeight/2 + 'px';
                            //this.ntop = window.innerHeight - dialogo.offsetHeight/2;
                        }

                    }
                    document.addEventListener('mousemove', move);
                    dialogo.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', move);
                        this.ntop = dialogo.offsetTop;
                        this.nleft = dialogo.offsetLeft;
                        //this.open();
    
                    });
                    document.addEventListener('touchmove', move);
                    dialogo.addEventListener('touchend', () => {
                        document.removeEventListener('touchmove', move);
                        this.ntop = dialogo.offsetTop;
                        this.nleft = dialogo.offsetLeft;
                        //this.open();

                    });
                }
                if(this.configuracion.title){
                    
                    dialogoTitle.innerHTML = this.configuracion.title;
                    dialogoTitle.addEventListener('mousedown', arrastrar);
                    dialogoTitle.addEventListener('touchstart', arrastrar);
                }

                if ((this.configuracion.body) instanceof HTMLElement) {
                    this.configuracion.body.style.display = 'block';
                    dialogoBody.appendChild(this.configuracion.body)
                } else {
                    dialogoBody.innerHTML = this.configuracion.body;
                }

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
            
                if(this.configuracion.title){
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

                if (this.configuracion.top != null) {
                    dialogo.style.top = this.configuracion.top;
                } else {
                    dialogo.style.top = (window.innerHeight - dialogo.offsetHeight) / 2 + 'px';
                }

                
                
                if (this.configuracion.background){
                    
                    creaFondoGris();
                }
                
                if (this.ntop){
                    dialogo.style.top = this.ntop + 'px';
                }
                if (this.nleft){
                    dialogo.style.left = this.nleft + 'px';
                }


                // escuchar click fuera del dialogo
                document.body.appendChild(dialogo);
                this.ntop = dialogo.offsetTop;
                this.nleft = dialogo.offsetLeft;
                // obtiene el ancho del dialogo
                const ancho = dialogo.offsetWidth;
                dialogo.style.width = ancho + 'px';
            }
        // }
    }

    this.cerrar = () => {
        //document.querySelector('.nDialogo').remove();
        
        if ((this.configuracion.body) instanceof HTMLElement) {
            this.configuracion.body.style.display = 'none';
            document.body.appendChild(this.configuracion.body);
            this.e.remove();
            this.e = null;
        } else {
            this.e.remove();
            this.e = null;
            if (this.fg){
                this.fg.remove();
            }
        }
    }

    this.close = () => {
        //document.querySelector('.nDialogo').remove();
        // if ((this.configuracion.body) instanceof HTMLElement) {
        //     this.configuracion.body.style.display = 'none';
        // } else {
            if ((this.configuracion.body) instanceof HTMLElement) {
                
                document.body.appendChild(this.configuracion.body);
               
                this.configuracion.body.style.display = 'none';
                
                
            }
            if(this.e){
                this.e.remove();
                this.e = null;
                if (this.fg){
                    this.fg.remove();
                }
            }
        // }
        
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