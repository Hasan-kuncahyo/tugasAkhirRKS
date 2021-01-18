    const slider = document.querySelector('.daftar');
    const form = document.querySelector('form');
    const ctr = document.querySelectorAll('.container'); 
    const alert = document.querySelector('.alert');
    const cta = document.querySelector('#cta');
    const clAlert = document.querySelector('#close-alert');
    const btLanjut = document.querySelector('#btnLanjut');
    const btKembali = document.querySelector('#btKembali');
    const ket = document.querySelectorAll('.keterangan');
    const inputs = document.querySelectorAll('.inputs');
    const foto_penjual = document.querySelector('#foto_penjual');
    const foto_produk = document.querySelector('#foto_produk');
    const regex = {
        nama: /^.{3,30}$/,
        telp:/^[^0]\d{8,11}$/,
        alamat:/(sanggrahan)|(semaki)/i,
        deskripsi: /^.{10,100}$/
    }
    let toogle = true;
    ket[0].textContent = '';
    ctr[1].style.display = 'none';
    function validasi(field, regex){
        if(regex.test(field.value)){
                field.classList.remove('invalid');
                field.classList.add('valid');
                field.style.border = '1px solid #333';
                ket[0].textContent = '';
                ket[1].textContent = '';
                ket[2].textContent = '';
                ket[3].textContent = '';
        }else{
            if(field.name == 'nama'){
                if(field.value.length < 3){
                    ket[0].textContent = 'diisi terlebih dahulu';
                }
            }
            if(field.name == 'telp'){
                
                if(!field.value.match(regex)){
                    ket[1].textContent = 'diisi minimal 9-13 angka';
                }
                if(field.value[0] == 0){
                    ket[1].textContent = 'masukkan nomor anda setelah angka 0';
                }
            }
            if(field.name == 'alamat'){
                if(!field.value.match(regex)){
                    ket[2].textContent = 'alamat penjual harus dari kelurahan semaki';
                }
            }
            if(field.name == 'deskripsi'){
                if(field.value.length < 10){
                    ket[3].textContent = 'deskripsi terlalu singkat';
                }
            }
            field.classList.remove('valid');
            field.classList.add('invalid');
            field.style.border = '1px solid red';
        }
    }

    slider.addEventListener('click',e=>{
        if(toogle == true){
            if(window.innerWidth < 768){
                form.style.animation = "CloseSlide2 .5s ease-in-out 1 forwards";
            }else{
                form.style.animation = "CloseSlide .5s ease-in-out 1 forwards";
            }
        }else{    
            if(window.innerWidth < 768){
                form.style.animation = "OpenSlide2 .5s ease-in-out 1 forwards";
            }else{
                form.style.animation = "OpenSlide .5s ease-in-out 1 forwards";
            }
        }
        toogle = !toogle;
        e.stopPropagation();
    });
    
    // window.addEventListener('resize',e=>{
    //     location.reload();
    // })
    btLanjut.addEventListener('click',e=>{
        inputs.forEach(input=>{
            validasi(input, regex[input.attributes.name.value]);
        }) 
        if(inputs[0].classList.contains('valid') && inputs[1].classList.contains('valid') && inputs[2].classList.contains('valid') && inputs[3].classList.contains('valid')){
            ctr[0].style.display = 'none';
            ctr[1].style.display = 'flex';
        }
        e.preventDefault();
        e.stopPropagation();
        
    })

    btKembali.addEventListener('click',e=>{
        ctr[1].style.display = 'none';
        ctr[0].style.display = 'flex';
        e.preventDefault();
        e.stopPropagation();
    })
    foto_penjual.onchange = ()=>{
        let size = parseFloat(foto_penjual.files[0].size / 1024).toFixed(2);
        let ext = foto_penjual.value.split('.').pop();
        if(size > 2000){
            foto_penjual.value = '';
            ket[4].textContent = 'Ukuran file terlalu besar. max 2MB';
        }
        else if(ext !='png' && ext !='jpeg' && ext !='jpg'){
            ket[4].textContent = 'ekstensi file salah';
            foto_penjual.value = '';
        }
        else if(foto_penjual.files.length > 0  && window.innerWidth < 375){
            ket[4].textContent = foto_penjual.value;
        }
        else{
            ket[4].textContent = '';
        }
    }
let size = [];
let produkExt = [];
    foto_produk.onchange = ()=>{
        let produk = foto_produk.files;
        for(let i = 0; i < produk.length; i++){
            size[i] = parseFloat(foto_produk.files[i].size / 1024).toFixed(2);
            if(size[i] > 2000){
                foto_produk.value = '';
                ket[5].textContent = 'ukuran file terlalu besar';
            }else if(produk[i].name.split('.').pop() != 'png' && produk[i].name.split('.').pop() != 'jpg' && produk[i].name.split('.').pop() != 'jpeg'){
                foto_produk.value = '';
                ket[5].textContent = 'ekstensi file harus (.png / .jpg / .jpeg)';
            }
            else if(produk.length > 3){
                ket[5].textContent = 'Maksimal Upload 3 File';
                foto_produk.value = '';
            }
            else if(foto_produk.files.length > 1 && window.innerWidth < 375){
                ket[5].textContent = `${foto_produk.files.length} Files`;
            }
            else{
                ket[5].textContent = '';
            }
        }
    }

    clAlert.addEventListener('click',()=>{
        alert.style.display = 'none';
        document.location.href = 'index.html';
    });

    cta.addEventListener('click',e=>{
        document.location.href = 'umkm/index.html';
        e.preventDefault();
    })